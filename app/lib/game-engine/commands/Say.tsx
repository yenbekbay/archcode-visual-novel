import clsx from 'clsx'
import {motion} from 'framer-motion'
import type {
  CommandContainerProps,
  CommandViewVariants,
  Option,
} from '../components'
import {CommandContainer, ForegroundView, OptionsView} from '../components'

export interface SayProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  children: string
  href?: string
  tag?: string
  size?: 'md' | 'lg' | 'xl'
  placement?: 'top' | 'middle' | 'bottom'
  dark?: boolean
  style?: React.CSSProperties
  textStyle?: React.CSSProperties
  options?: Option[]
  optionsDark?: boolean
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  variants?: CommandViewVariants
}

export function Say({
  children,
  href,
  tag,
  size = 'md',
  placement = 'top',
  dark,
  style,
  textStyle,
  options,
  optionsDark,
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
}: SayProps) {
  const chars = children.split('')
  const TextComp = href ? motion.a : motion.span
  return (
    <CommandContainer
      durationMs={3000 + chars.length * 20}
      skippable
      {...restProps}>
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

          <div
            className={clsx(
              'absolute inset-0 flex flex-col items-center p-8 pt-20',
              {
                top: 'justify-start',
                middle: 'justify-center',
                bottom: 'justify-end',
              }[placement],
            )}
            style={style}>
            {tag && (
              <motion.span
                className="text-md mb-1 whitespace-pre-wrap rounded-md px-1 text-center font-calligraph"
                style={{
                  color: '#fBf9e0',
                  background: 'rgba(165, 123, 85, .75)',
                }}
                variants={variants}
                initial="initial"
                animate={controls}>
                {tag}
              </motion.span>
            )}

            <TextComp
              className={clsx(
                'whitespace-pre-wrap text-center font-calligraph',
                {
                  md: 'text-md',
                  lg: 'text-xl',
                  xl: 'text-3xl',
                }[size],
              )}
              style={{
                color: dark ? '#fBf9e0' : 'hsl(206, 24.0%, 9.0%)',
                textShadow: dark
                  ? '0 -1px rgba(0, 0, 0, .35), 0 2px hsl(206, 24.0%, 9.0%), 0 0 4px rgba(0, 0, 0), 0 0 4px rgba(0, 0, 0), 0 0 4px rgba(0, 0, 0)'
                  : '0 1px hsl(209, 12.2%, 93.2%), 0 0 4px rgba(255, 255, 255), 0 0 4px rgba(255, 255, 255), 0 0 4px rgba(255, 255, 255)',
                ...(href && {
                  textDecoration: 'underline',
                  textUnderlineOffset: size ? '6px' : '4px',
                }),
                ...textStyle,
              }}
              {...(href && {
                href,
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              variants={variants}
              initial="initial"
              animate={controls}>
              {chars.map((char, idx) => (
                <motion.span
                  key={`${char}_${idx}`}
                  variants={variants}
                  initial="initial"
                  animate={controls}
                  custom={idx}>
                  {char}
                </motion.span>
              ))}
            </TextComp>
          </div>

          {options && (
            <OptionsView
              dark={optionsDark}
              options={options}
              variants={variants}
              controls={controls}
            />
          )}
        </>
      )}
    </CommandContainer>
  )
}