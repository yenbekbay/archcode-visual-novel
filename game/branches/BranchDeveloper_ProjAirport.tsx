import {
  angryCrowd1Png,
  architectPng,
  bgAirportJpg,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgPhoneHandJpg,
  botBuilderPng,
  developerRepAPng,
  developerRepB9Png,
  hologramMp3,
  transition1Mp3,
  transition2ShortMp3,
} from 'assets/game'
import {Branch, Say, Scene} from 'lib/game-engine'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_ProjAirport() {
  return (
    <Branch>
      <Scene src={bgAirportJpg.src} audio={SCENE_AUDIO.city} />

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        style={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        {`
          Новости:

          Проект VIP терминала в разработке компании  Bay Shatyr Group
        `}
      </Say>

      <Scene src={bgAirportJpg.src} audio={SCENE_AUDIO.city} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={SCENE_AUDIO.chatter}>
        Общественность возмущена
      </Say>

      <Scene
        src={bgDeveloperHqOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />
      <Scene
        src={bgDeveloperHqInsideJpg.src}
        audio={{...SCENE_AUDIO.indoor, onEntrance: transition2ShortMp3}}
      />

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng.src, align: 'bottom'}}>
        —Нам необходимо взвесить все “за” и “против”
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        —Первое, что нам надо выяснить - это является ли VIP терминал памятником
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={{onEntrance: hologramMp3}}>
        {`
          Ознакомьтесь со списком

          [Памятники Республиканского значения РК](${LINKS.monument_list_republican})

          [Памятники Местного значения (г. Алматы)](${LINKS.monument_list_local})
        `}
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={{onEntrance: hologramMp3}}
        menu={[
          {
            label: 'Да',
            onClick: (ctx) => ctx.goToNextStatement(),
          },
          {
            label: 'Нет',
            onClick: (ctx) => ctx.goToNextStatement(),
          },
        ]}>
        Является ли VIP терминал памятником историко-культурного наследия?
      </Say>

      <Scene src={bgAirportJpg.src} audio={SCENE_AUDIO.city} />

      <Say>Здание VIP терминала является памятником</Say>

      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        {`
          —У нас есть два варианта:

          №1: Можем расположить здание нового терминала, обойдя памятник

          №2: А можем всё снести, и возвести терминал ещё большей площади
        `}
      </Say>

      <Say
        image={{uri: developerRepB9Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Построить новое',
            onClick: (ctx) => ctx.goToBranch('Developer_ProjAirport_Demolish'),
          },
          {
            label: 'Сохранить старое здание',
            onClick: (ctx) => ctx.goToBranch('Developer_ProjAirport_Preserve'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
