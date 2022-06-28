import {
  adyaPchelkinaPng,
  angryCrowd1Png,
  archkot4Png,
  bgAskBeforeJpg,
  bgCityHallConferenceRoomJpg,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  developerRepB1Png,
  developerRepB2Png,
  developerRepB3Png,
  developerRepB4Png,
  developerRepB7Png,
  gorzhempoPng,
  letterPng,
  mayor7Png,
  stampApprovedPng,
  tinaShtunerPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchDeveloper_ProjAsk_Demolish_IgnoreRisks_Approved() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

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
        hide={1}
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

      <Say
        tag={{text: 'Аким:', color: '#687065'}}
        image={{uri: mayor7Png, align: 'bottom', style: {bottom: '-12%'}}}>
        —Я согласен с вашими решениями. Можете начинать стройку
      </Say>

      <Scene src={bgAskBeforeJpg} />

      <Say image={{uri: angryCrowd1Png, align: 'bottom'}}>
        Общественность возмущена
      </Say>

      <Scene src={bgDeveloperHqInsideJpg} />

      <Say
        image={{uri: developerRepB7Png, align: 'bottom'}}
        menu={[
          {
            label: 'Игнорировать',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Провести общественные слушаниям',
            onClick: (ctx) => ctx.skip(1),
          },
        ]}>
        Вечно всем надо совать свой нос в чужое дело… Что с этим делать?
      </Say>

      <Say>
        Можно игнорировать запросы, но общественные слушания придётся проводить
        в любом случае
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>Общественные слушания</Say>

      <Scene src={bgDeveloperHqInsideJpg} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png, align: 'bottom'}}>
        —Это сейчас практически единственное здание, которое не было изменено
      </Say>

      <Say image={{uri: developerRepB1Png, align: 'bottom'}}>
        —Внутри мы хотим создать современные, удобные помещения, увеличить
        свободную площадь
      </Say>

      <Say image={{uri: developerRepB2Png, align: 'bottom'}}>
        —А ещё сделать open space — с учетом прозрачного фасада, будет больше
        света!
      </Say>

      <Say image={{uri: developerRepB3Png, align: 'bottom'}}>
        —Стёкла на фасаде сделаем зеркальными!
      </Say>

      <Say
        tag={{text: 'Горжемпо:', color: '#687065'}}
        image={{uri: gorzhempoPng, align: 'bottom'}}>
        —В начале 80-х годов прошлого века я мечтал о зеркальном стекле,
        которого в СССР не было
      </Say>

      <Say
        tag={{text: 'Горжемпо:', color: '#687065'}}
        image={{uri: gorzhempoPng, align: 'bottom'}}>
        —Из-за дефицита материала в итоге при строительстве было использовано
        дымчатое стекло,
      </Say>

      <Say
        tag={{text: 'Горжемпо:', color: '#687065'}}
        image={{uri: gorzhempoPng, align: 'bottom'}}>
        —и в проекте, судя по рендерам, оно заменяется на зеркальное
      </Say>

      <Say
        tag={{text: 'Тина Штунер:', color: '#687065'}}
        image={{uri: tinaShtunerPng, align: 'bottom'}}>
        —Это уже исторический памятник, и сделать зеркальные окна — нарушение
        облика, к которому мы привыкли
      </Say>

      <Say
        tag={{text: 'Адя Пчелкина:', color: '#687065'}}
        image={{uri: adyaPchelkinaPng, align: 'bottom'}}>
        —Есть ли у Bay Shatyr Group лицензия на работу с памятниками?
      </Say>

      <Say image={{uri: developerRepB4Png, align: 'bottom'}}>…</Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png, align: 'bottom'}}>
        —Нужен кто-то, кто будет контролировать правильность процесса!
      </Say>

      <Say
        image={{uri: developerRepB4Png, align: 'bottom'}}
        menu={[
          {
            label: 'Конечно, отлично!',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Developer_ProjAsk_Demolish_IgnoreRisks_Approved_Listen',
              ),
          },
          {
            label: 'Мониторинговая группа уже представлена от Акимата',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Developer_ProjAsk_Demolish_IgnoreRisks_Approved_Ignore',
              ),
          },
        ]}>
        Что ответить?
      </Say>
    </Branch>
  )
}