import type {CommandProps, CommandViewVariants} from '../components'
import {Command} from '../components'
import type {Choice, ChoicesPlacement} from './internal'
import {ChoicesView, ForegroundView} from './internal'

export interface ChoicesProps<TStatementLabel extends string = string>
  extends Partial<Omit<CommandProps, 'children'>> {
  choices: Choice<TStatementLabel>[]
  label?: string
  size?: 'md' | 'lg'
  placement?: ChoicesPlacement
  variant?: 'default' | 'dark'
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  variants?: CommandViewVariants
}

export function Choices({
  choices,
  label,
  size,
  placement,
  variant,
  foregroundSrc,
  foregroundStyle,
  variants = {
    initial: {opacity: 0},
    entrance: (idx) => ({
      opacity: 1,
      transition: {delay: 0.5 + 0.02 * idx},
    }),
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  ...restProps
}: ChoicesProps) {
  return (
    <Command {...restProps}>
      {(controls) => (
        <>
          {foregroundSrc && (
            <ForegroundView
              src={foregroundSrc}
              style={foregroundStyle}
              variants={variants}
              controls={controls}
            />
          )}

          <ChoicesView
            size={size}
            placement={placement}
            variant={variant}
            choices={choices}
            label={label}
            variants={variants}
            controls={controls}
          />
        </>
      )}
    </Command>
  )
}
