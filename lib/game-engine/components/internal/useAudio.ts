import {Howl} from 'howler'
import React from 'react'

export function useAudio(src: AudioSource | null) {
  const [audio] = React.useState(() => (src ? getAudio(src) : null))
  return audio
}

export interface AudioSource {
  uri: string
  channel?: string
  loop?: boolean
  onStop?: ['fadeOut', number] | ['play', string]
}

export interface AudioPlayer {
  src: AudioSource
  play: () => void
  stop: () => Promise<void>
}

export function getAudio(_src: AudioSource): AudioPlayer {
  let playing = false
  let stopP = Promise.resolve()
  const src = typeof _src === 'object' ? _src : {uri: _src}
  const howl = new Howl({
    src: src.uri,
    loop: src.loop,
    onplayerror: () => {
      howl.once('unlock', () => {
        if (playing && !howl.playing()) {
          howl.seek(0)
          howl.play()
        }
      })
    },
  })
  const audio = {
    src,
    play: () => {
      if (playing) {
        return
      }
      console.debug('[useAudio] play', src.uri)
      playing = true
      howl.volume(1)
      howl.play()
    },
    stop: async () => {
      if (!playing) {
        return stopP
      }
      playing = false
      console.debug('[useAudio] stop', src.uri)
      stopP = new Promise<void>((resolve) => {
        const onStop = src.onStop ?? ['fadeOut', 2000]
        switch (onStop[0]) {
          case 'fadeOut':
            howl.once('fade', () => {
              if (howl.volume() === 0) {
                howl.stop()
                resolve()
              }
            })
            howl.fade(1, 0, onStop[1])
            break
          case 'play':
            howl.stop()
            const tail = new Howl({src: onStop[1]})
            tail.once('end', () => resolve())
            tail.play()
            break
        }
      })
      return stopP
    },
  }
  if (src.channel) {
    const channel = getChannel(src.channel)
    return {
      src,
      play: () => channel.play(audio),
      stop: () => channel.stop(audio),
    }
  }
  return audio
}

interface AudioChannel {
  play: (audio: AudioPlayer) => Promise<void>
  stop: (audio: AudioPlayer) => Promise<void>
}

const channels = new Map<string, AudioChannel>()

function getChannel(key: string) {
  if (!channels.has(key)) {
    channels.set(key, makeChannel())
  }
  return channels.get(key)!
}

function makeChannel(): AudioChannel {
  const queue = new Set<AudioPlayer>()
  return {
    play: async (audio: AudioPlayer) => {
      if (queue.has(audio)) {
        return
      }
      const prevAudios = [...queue.values()]
      queue.add(audio)
      // Stop previous audios before playing new one
      for (const a of prevAudios) {
        await a.stop()
        queue.delete(a)
      }
      if (queue.has(audio)) {
        audio.play()
      }
    },
    stop: async (audio: AudioPlayer) => {
      if (!queue.has(audio)) {
        return
      }
      await audio.stop()
      queue.delete(audio)
    },
  }
}
