import {
  assistant1Png,
  assistant2Png,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  expert1Png,
  expert2Png,
  expert3Png,
  mayor2Png,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchCityHall_ProjAirport_Examine() {
  return (
    <Branch>
      <Scene src={bgCityHallOutsideJpg} />

      <Say placement="middle" scheme="dark">
        Экспертиза
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say
        tag={{text: 'Эксперт:', color: '#687065'}}
        image={{uri: expert1Png, align: 'bottom'}}>
        —Вижу нарушения…
      </Say>

      <Say
        tag={{text: 'Эксперт:', color: '#687065'}}
        image={{uri: expert2Png, align: 'bottom'}}>
        —Ещё одно! Ещё нарушение!!!
      </Say>

      <Show src={{uri: expert3Png, align: 'bottom'}} />

      <Scene src={bgMayorDoorJpg} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg} />

      <Say
        scheme="dark"
        tag={{text: 'Помощник:', color: '#687065'}}
        image={{
          uri: assistant1Png,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —В проекте нового терминала Аэропорта выявлены нарушения! Нельзя просто
        взять и перенести памятник! Только если он разрушен на 70%…
      </Say>

      <Show
        src={{
          uri: assistant2Png,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}
      />

      <Scene src={bgMayorDoorJpg} />

      <Say scheme="dark">*хдыщ</Say>

      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say
        image={{uri: mayor2Png, align: 'bottom'}}
        menu={[
          {
            label: 'Не одобрять',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjAirport_Examine_Reject'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAirport_Approve'),
          },
        ]}>
        Что делать с проектом?
      </Say>
    </Branch>
  )
}