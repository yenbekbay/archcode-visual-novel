import {Howl, HowlOptions} from 'howler'
import React from 'react'

export interface AudioSource {
  uri: string
  loop?: boolean
  onStop?: ['fadeOut', number] | ['play', string]
}

export function useAudio(_src: string | AudioSource | null) {
  const src = React.useMemo((): AudioSource | null => {
    if (!_src) {
      return null
    }
    return typeof _src === 'object' ? _src : {uri: _src}
  }, [_src])
  const playingRef = React.useRef(false)
  const [audio] = React.useState(() => {
    if (!src) {
      return null
    }
    const ret = getAudio({
      src: src.uri,
      loop: src.loop,
      onplayerror: () => {
        ret.once('unlock', () => {
          if (playingRef.current && !ret.playing()) {
            ret.seek(0)
            ret.play()
          }
        })
      },
    })
    return ret
  })
  const play = React.useCallback(() => {
    if (!audio || playingRef.current) {
      return
    }
    console.debug('[useAudio] play', src?.uri)
    playingRef.current = true
    audio.volume(1)
    audio.play()
  }, [audio, src?.uri])
  const stop = React.useCallback(() => {
    if (!audio || !playingRef.current) {
      return
    }
    playingRef.current = false
    console.debug('[useAudio] stop', src?.uri)
    if (src?.onStop) {
      switch (src.onStop[0]) {
        case 'fadeOut':
          audio.once('fade', () => {
            if (audio.volume() === 0) {
              audio.stop()
            }
          })
          audio.fade(1, 0, 4000)
          break
        case 'play':
          audio.stop()
          getAudio({src: src.onStop[1]}).play()
          break
      }
    } else {
      audio.stop()
    }
  }, [audio, src?.onStop, src?.uri])
  return {play, stop}
}

export function getAudio(options: HowlOptions) {
  return new Howl(options)
}