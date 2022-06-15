import {
  activistAPng,
  activistBPng,
  bgAptEntranceJpg,
  bgAptKitchenJpg,
  bgAptOutsideWindowJpg,
  bgCourtyardJpg,
  bgLaptopStandaloneJpg,
  bgPhoneFingerJpg,
  bgPhoneHandJpg,
  redhead14Png,
  redhead15Png,
  redhead16Png,
  redhead17Png,
  redhead18Png,
  redhead1Png,
  redhead5Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Show} from '~/lib'

export function BranchActivist_CheckOut_Act_Group() {
  return (
    <Branch>
      <Scene src={bgCourtyardJpg} />
      <Scene src={bgAptOutsideWindowJpg} />
      <Scene src={bgAptEntranceJpg} />
      <Scene src={bgAptKitchenJpg} />

      <Say image={{uri: redhead14Png, style: {width: '100%', bottom: 0}}}>
        —БЕСПРЕДЕЛ!
      </Say>

      <Say
        scheme="dark"
        style_={{fontSize: 20, marginTop: -24}}
        image={{
          uri: bgPhoneHandJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translate(-12px, 20px)',
          },
        }}
        durationMs={0}
        visibility={1}>
        *рассылка в whatsapp
      </Say>

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
        style_={{fontSize: 20, textAlign: 'right'}}>
        {
          'Беспредел!\n\nСносят Фурманова, 00. Присоединяйтесь, чтобы вместе действовать в защиту истории!'
        }
      </Say>

      <Say image={{uri: redhead15Png, style: {width: '100%', bottom: 0}}}>
        —Ты представляешь, что происходит ??
      </Say>

      <Say image={{uri: redhead16Png, style: {width: '100%', bottom: 0}}}>
        {'*pop up\n\nзвуки уведомлений'}
      </Say>

      <Say
        style_={{fontSize: 20, marginTop: -24}}
        image={{
          uri: bgLaptopStandaloneJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(75px)',
          },
        }}
        durationMs={0}
        visibility={1}>
        *whatsapp web
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            y: 420,
            x: 140,
            width: 800,
          },
        }}
        style_={{fontSize: 16, textAlign: 'left'}}>
        {[
          '—Здравствуйте! Меня тоже все это возмущает! Мы должны действовать сообща!',
          '                            —Здравое дело! Я с вами!',
          '—Готовы встретиться, назначайте время и место',
        ].join('\n\n')}
      </Say>

      <Scene src={bgCourtyardJpg} />

      <Say
        image={{uri: activistBPng, style: {width: '100%', bottom: 0}}}
        visibility={2}>
        *встреча активистов
      </Say>

      <Show
        src={{
          uri: activistAPng,
          style: {width: '100%', bottom: 0, transform: 'translateX(-25%)'},
        }}
        visibility={1}
      />

      <Show
        src={{
          uri: redhead17Png,
          style: {
            width: '100%',
            bottom: 0,
            transform: 'translateX(25%) scaleX(-1)',
          },
        }}
      />

      <Say image={{uri: activistAPng, style: {width: '100%', bottom: 0}}}>
        {
          '—Действовать надо последовательно…\n\nДля начала давайте узнаем, кто здесь - заинтересованные стороны'
        }
      </Say>

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
        style_={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        [*Ссылка 24 "кто такие
        стейкхолдеры"](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
      </Say>

      <Say image={{uri: redhead5Png, style: {width: '100%', bottom: 0}}}>
        {
          '—И узнать надо побольше.\n\nИ не только почитать новости, а проверить, правду ли говорят'
        }
      </Say>

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
        style_={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        [*Ссылка фактчек](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
      </Say>

      <Say image={{uri: activistBPng, style: {width: '100%', bottom: 0}}}>
        {
          '—Нужно как можно больше писать в соц.сети. \n\nЧем больше людей знают, тем сложнее что-то скрыть!'
        }
      </Say>

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
        style_={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        [*Ссылка 22 "как написать пост в соц.сети и быть
        услышанным"](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
      </Say>

      <Say image={{uri: activistAPng, style: {width: '100%', bottom: 0}}}>
        —Еще мы должны участвовать в общественных слушаниях…
      </Say>

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
        style_={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        [*Ссылка 6 "как участвовать в общественных
        слушаниях"](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
      </Say>

      <Say image={{uri: redhead1Png, style: {width: '100%', bottom: 0}}}>
        —Будем писать во все инстанции!!!
      </Say>

      <Say
        image={{
          uri: activistAPng,
          style: {width: '100%', bottom: 0, transform: 'scaleX(-1)'},
        }}>
        —А куда можно написать?
      </Say>

      <Say
        scheme="dark"
        image={{
          uri: bgPhoneFingerJpg,
          style: {
            width: '100%',
            top: 120,
            transform: 'scale(2.5) translateX(-7%)',
          },
        }}
        durationMs={0}
        visibility={1}>
        —Вот!
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 280,
            width: 520,
            transform: 'rotate(9deg) translateX(16px)',
          },
        }}
        style_={{fontSize: 20}}>
        [*ссылка на примеры писем по разным
        ситуациям](https://www.youtube.com/watch?v=dQw4w9WgXcQ). Проверить
        информацию из СМИ [*Ссылка *23 на инструкцию по факт
        чеку](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
      </Say>

      <Say
        image={{
          uri: redhead18Png,
          style: {width: '100%', bottom: 0, transform: 'scaleX(-1)'},
        }}>
        —А если не будет дельных ответов, просто устроим протестную акцию!
      </Say>

      <Say image={{uri: activistBPng, style: {width: '100%', bottom: 0}}}>
        —А я тут новости читал. Есть группа Архкод, вроде как наследием
        занимается
      </Say>

      <Say
        scheme="dark"
        image={{
          uri: bgPhoneFingerJpg,
          style: {
            width: '100%',
            top: 120,
            transform: 'scale(2.5) translateX(-7%)',
          },
        }}
        durationMs={0}
        visibility={1}>
        —Вот!
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 280,
            width: 520,
            transform: 'rotate(9deg) translateX(16px)',
          },
        }}
        style_={{fontSize: 24}}>
        [сайт Архкода](https://archcode.kz)
      </Say>

      <Say image={{uri: activistAPng, style: {width: '100%', bottom: 0}}}>
        —Да, давайте позвоним им
      </Say>

      <Menu
        choices={[
          {
            label: 'Позвонить в Архкод',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Act_Org'),
          },
        ]}
      />
    </Branch>
  )
}
