import {Howl} from 'howler'
import moize from 'moize'
import React from 'react'
import {delay} from '../../utils'

export function useAudio(src: AudioSource | null) {
  const [audio] = React.useState(() => (src ? getAudio(src) : null))
  return audio
}

export interface AudioSource {
  uri: string
  channel?: string
  loop?: boolean
  overlap?: boolean
  onStop?: ['fadeOut', number] | ['play', string]
}

export interface AudioPlayer {
  src: AudioSource
  play: () => void
  stop: () => Promise<void>
}

export const getAudio = moize(_getAudio, {isDeepEqual: true, maxSize: Infinity})

function _getAudio(_src: AudioSource): AudioPlayer {
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
      console.debug('[useAudio] play', src)
      playing = true
      howl.volume(1)
      howl.play()
    },
    stop: async () => {
      if (!playing) {
        return stopP
      }
      playing = false
      console.debug('[useAudio] stop', src)
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

interface AudioPlayerMetadata {
  playedAt: number
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
  const playlist = new Map<AudioPlayer, AudioPlayerMetadata>()
  return {
    play: async (audio: AudioPlayer) => {
      if (playlist.has(audio)) {
        playlist.set(audio, {playedAt: Date.now()})
        return
      }
      const prevAudios = [...playlist.keys()]
      playlist.set(audio, {playedAt: Date.now()})
      for (const a of prevAudios) {
        if (a.src.overlap) {
          ;(async () => {
            await a.stop()
            playlist.delete(a)
          })()
        } else {
          await a.stop()
          playlist.delete(a)
        }
      }
      if (playlist.has(audio)) {
        audio.play()
      }
    },
    stop: async (audio: AudioPlayer) => {
      if (!playlist.has(audio)) {
        return
      }

      // Prevent audio from stopping if it was played recently
      const stoppedAt = Date.now()
      await delay(CHANNEL_DEBOUNCE_INTERVAL_MS)
      const meta = playlist.get(audio)!
      if (meta.playedAt > stoppedAt) {
        return
      }

      await audio.stop()
      playlist.delete(audio)
    },
  }
}

const CHANNEL_DEBOUNCE_INTERVAL_MS = 100
