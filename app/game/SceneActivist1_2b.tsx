import {AnimatePresence, motion} from 'framer-motion'
import {
  bgBldg1FenceGif,
  bgBldg1Jpg,
  fencePng,
  redhead2Png,
  redhead4Png,
} from '~/assets/game'
import {Blank, Say} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer, useSceneContext} from './components'

export function SceneActivist1_2b() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        size="lg"
        foregroundSrc={redhead4Png}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Мутят что-то без доклада народу. Надо разобраться!
      </Say>

      <Blank durationMs={10000} transitory />

      <Say
        size="lg"
        optionsDark
        options={[
          {
            label: 'Как-то печально всё это',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3a'),
          },
          {
            label: 'Что я могу сделать?',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3b'),
          },
        ]}
        foregroundSrc={redhead2Png}
        foregroundStyle={{width: '90%', bottom: 0}}>
        Это что за новости?!?! Уничтожают историю, значит?
      </Say>
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  const {focusedFrameIndex} = useSceneContext()
  return (
    <>
      <img
        src={focusedFrameIndex < 1 ? bgBldg1Jpg : bgBldg1FenceGif}
        className="min-h-full flex-1 object-cover"
      />

      <AnimatePresence>
        {focusedFrameIndex < 1 && (
          <motion.div
            className="absolute inset-0"
            exit={{
              x: '-400%',
              transition: {delay: 0.5, duration: 2},
            }}>
            <img
              src={fencePng}
              className="absolute h-full max-w-none"
              style={{transform: 'translate(-50%) scale(1.15)'}}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
