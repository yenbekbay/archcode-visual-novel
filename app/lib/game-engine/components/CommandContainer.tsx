import {AnimatePresence} from 'framer-motion'
import type {AnimationControls} from 'framer-motion/types/animation/types'
import React from 'react'
import {useCommandContext, useRegisterCommand} from './CommandContext'
import type {CommandViewInstance} from './CommandView'
import {CommandView} from './CommandView'
import type {CommandT} from './SceneContext'

export interface CommandContainerProps {
  children: (controls: AnimationControls) => React.ReactNode
  durationMs?: number
  skippable?: boolean
  /** Should scene automatically skip to next frameIndex after duration? */
  transitory?: boolean
  /** Should content still be shown after skipping to next frameIndex? */
  lingers?: boolean | number
}

export function CommandContainer({
  children,
  durationMs = 0,
  skippable = false,
  transitory = false,
  lingers = false,
}: CommandContainerProps) {
  const {visible} = useCommandContext()

  const viewRef = React.useRef<CommandViewInstance>(null)
  useRegisterCommand(
    React.useMemo(
      (): CommandT => ({
        skippable,
        visibleExtra: (() => {
          if (typeof lingers === 'number') {
            return Math.max(0, lingers)
          }
          if (lingers === true) {
            return Number.MAX_SAFE_INTEGER
          }
          return 0
        })(),
        enter: () => viewRef.current?.enter() ?? false,
        pause: () => viewRef.current?.pause(),
        resume: () => viewRef.current?.resume(),
      }),
      [skippable, lingers],
    ),
  )

  return (
    <AnimatePresence>
      {visible && (
        <CommandView
          ref={viewRef}
          durationMs={durationMs}
          skippable={skippable}
          transitory={transitory}>
          {children}
        </CommandView>
      )}
    </AnimatePresence>
  )
}