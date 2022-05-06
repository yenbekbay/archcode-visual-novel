import {
  angryCrowd1Png,
  angryCrowd2Png,
  bgCityHallOfficeJpg,
  bgPhoneFingerJpg,
  bgZheltoksanAfterJpg,
  bgZheltoksanBeforeFenceGif,
  bgZheltoksanBeforeJpg,
} from '~/assets/game'
import {Foreground, Options, Say, Title} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export function SceneCityHall1_2a_3a_4b_5a() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        size="lg"
        optionsDark
        foregroundSrc={bgPhoneFingerJpg}
        foregroundStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.25)',
        }}
        lingers={1}>
        “Ребята, напишите, что реконструкция крутая”
      </Say>

      <Foreground
        src={bgZheltoksanBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers
      />

      <Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {`-Надувательство\n\n-Бред собачий`}
      </Say>

      <Say
        size="lg"
        foregroundSrc={angryCrowd2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        -Продажные чуваки
      </Say>

      <Foreground
        src={bgZheltoksanBeforeFenceGif}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={6000}
        lingers={1}
        transitory
      />

      <Foreground
        src={bgZheltoksanAfterJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        lingers
        transitory
      />

      <Say size="lg" transitory>
        Вы успешно реконструировали Желтоксан 115
      </Say>

      <Say transitory>
        Здание утратило первоначальный облик и больше не представляет
        исторической ценности. Теперь Вам будет сложнее работать с
        общественностью.
      </Say>

      <Title transitory lingers>
        Конец игры
      </Title>

      <Options
        dark
        options={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('Intro'),
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <img
      src={bgCityHallOfficeJpg}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}