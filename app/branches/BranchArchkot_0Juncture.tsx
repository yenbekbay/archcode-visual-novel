import {archkot5Png, bgMapGif, fencePng} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchArchkot_0Juncture() {
  return (
    <Branch>
      <Scene src={bgMapGif} />

      <Say>Забор в этом городе появился новый</Say>

      <Show
        src={{
          uri: fencePng,
          style: {height: '100%', transform: 'translate(-50%) scale(1.15)'},
          animation: {
            initial: {x: '250%', scale: 0.5, originY: 1},
            entrance: {
              x: 0,
              scale: 1,
              transition: {delay: 0.5, duration: 2},
            },
            exit: {
              opacity: 0,
              transition: {duration: 0.5, ease: 'easeOut'},
            },
          },
        }}
        visibility="indefinite"
      />

      <Say
        image={{
          uri: archkot5Png,
          style: {
            width: '100%',
            bottom: 0,
            filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
          },
        }}
        menu={[
          {
            label: 'Пройти мимо',
            // FIXME: Add other cases
            onClick: (ctx) => ctx.goToBranch('Archkot_ProjAsk_WalkPast'),
          },
          {
            label: 'Посмотреть',
            // FIXME: Add other cases
            onClick: (ctx) => ctx.goToBranch('Archkot_ProjAsk_CheckOut'),
          },
        ]}>
        Возмутительно это конечно, никакого паспорта объекта!
      </Say>
    </Branch>
  )
}
