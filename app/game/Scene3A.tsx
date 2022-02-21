import {AnimatePresence, motion} from 'framer-motion'
import bgBldg1GifSrc from '~/assets/game/bg-bldg-1.gif'
import bgBldg1StaticSrc from '~/assets/game/bg-bldg-1.png'
import fenceSrc from '~/assets/game/fence.png'
import redhead2Src from '~/assets/game/redhead-2.png'
import redhead3Src from '~/assets/game/redhead-3.png'
import {Box, Image} from '~/lib'
import {Blank, Options, Say, Title} from './commands'
import {
  SceneBackgroundComponentProps,
  SceneContainer,
  useSceneContext,
} from './components'

export const assets = [
  bgBldg1GifSrc,
  bgBldg1StaticSrc,
  fenceSrc,
  redhead2Src,
  redhead3Src,
]

export function Scene3A() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        foregroundSrc={redhead2Src}
        foregroundCss={{
          width: '90%',
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Скорее всего, ничего особенного. Очередное...да не важно
      </Say>

      <Say
        large
        foregroundSrc={redhead3Src}
        foregroundCss={{
          width: '90%',
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Поберегу нервы, семья ждет, пойду дома чай попью
      </Say>

      <Blank duration={10000} />

      <Title transitory retained>
        Конец игры
      </Title>

      <Options
        dark
        optionsBottom={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('1'),
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  const {activeFrame} = useSceneContext()
  return (
    <>
      <Image
        src={activeFrame < 2 ? bgBldg1StaticSrc : bgBldg1GifSrc}
        css={{flex: 1, minHeight: '100%', objectFit: 'cover'}}
      />

      <AnimatePresence>
        {activeFrame < 2 && (
          <Box
            as={motion.div}
            css={{position: 'absolute', inset: 0}}
            exit={{
              x: '-400%',
              transition: {delay: 0.5, duration: 2},
            }}>
            <Image
              src={fenceSrc}
              css={{
                position: 'absolute',
                height: '100%',
                transform: 'translate(-50%) scale(1.15)',
              }}
            />
          </Box>
        )}
      </AnimatePresence>
    </>
  )
}
