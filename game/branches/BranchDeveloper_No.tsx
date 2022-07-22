import {bgDeveloperHqInsideJpg, developerRepB9Png} from '~/assets/game'
import {Branch, Menu, Scene, Show} from '~/lib/game-engine'

export function BranchDeveloper_No() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Show src={{uri: developerRepB9Png.src, align: 'bottom'}} hide={1} />

      <Menu
        choices={[
          {
            label: 'Вернуться к выбору',
            onClick: (ctx) =>
              // HACK
              ctx.goToLocation('Intro', 7),
          },
        ]}
      />
    </Branch>
  )
}