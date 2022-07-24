import {
  angryCrowd1Png,
  bgBusStop4Jpg,
  bgCityHallMayorOfficeJpg,
  chatterMp3,
  mayor2Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'

export function BranchCityHall_GovPrograms_Continue() {
  return (
    <Branch>
      <Scene src={bgBusStop4Jpg.src} />

      <Say>
        Демонтаж продолжается, но идет медленно и проблемно из-за крепких
        конструкций
      </Say>

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={{whileVisible: {uri: chatterMp3, loop: true}}}>
        За день общественность успевает распространить информацию о демонтаже. В
        акимат пришло несколько писем от активистов с просьбой остановить
        демонтаж остановки
      </Say>

      <Scene src={bgCityHallMayorOfficeJpg.src} />

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Продолжить демонтаж',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_GovPrograms_Continue_Continue'),
          },
          {
            label: 'Остановить демонтаж',
            onClick: (ctx) => ctx.goToBranch('CityHall_GovPrograms_Stop'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
