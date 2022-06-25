import {
  angryCrowd1Png,
  bgAskBeforeJpg,
  bgCityHallMayorOfficeJpg,
  letterPng,
  mayor4Png,
  stampApprovedPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchCityHall_ProjAsk_Approve() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Show
        src={{
          uri: letterPng,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            backgroundColor: '#e7dbab',
            transform: 'scale(2.5)',
            transformOrigin: '50% 35%',
          },
        }}
        hide={2}
      />

      <Show
        src={{
          uri: stampApprovedPng,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'translateY(-15%)',
          },
        }}
      />

      <Scene src={{uri: bgAskBeforeJpg}} />

      <Say image={{uri: angryCrowd1Png, align: 'bottom'}}>
        Общественность возмущена
      </Say>

      <Say
        image={{uri: mayor4Png, align: 'bottom'}}
        menu={[
          {
            label: 'Попросить помощи у блоггеров',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjAsk_Approve_AskHelp'),
          },
          {
            label: 'Вступить в диалог',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAsk_Examine_Reject'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
