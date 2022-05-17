import {
  angryCrowd1Png,
  bgCityHallOfficeJpg,
  bgZheltoksanBeforeJpg,
  mayor4Png,
} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall1_2a_3a_4b() {
  return (
    <Scene.Container background={bgZheltoksanBeforeJpg}>
      <Scene.Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Общественность возмущена
      </Scene.Say>

      <Scene.Foreground
        src={bgCityHallOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={2}
      />

      <Scene.Say
        size="xl"
        foregroundSrc={mayor4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать?
      </Scene.Say>

      <Scene.Choices
        choices={[
          {
            label: 'Попросить помощи у блоггеров',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4b_5a'),
          },
          {
            label: 'Вступить в диалог',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4b_5b'),
          },
        ]}
      />
    </Scene.Container>
  )
}
