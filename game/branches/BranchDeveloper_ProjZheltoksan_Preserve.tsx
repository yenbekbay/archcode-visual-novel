import {
  architectPng,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgZheltoksanBeforeJpg,
  botBuilderPng,
  developerRepAPng,
  developerRepB10Png,
  developerRepB6Png,
  developerRepB9Png,
  hologramOgg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchDeveloper_ProjZheltoksan_Preserve() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Say image={{uri: developerRepB9Png.src, align: 'bottom'}}>
        —Хоть оно и не является памятником историко-культурного наследия, но
        представляет большую ценность для города и его жителей
      </Say>

      <Say image={{uri: developerRepB10Png.src, align: 'bottom'}}>
        —Ну и вообще, красивое же. Обновим, и будет конфетка
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        Проект РЕСТАВРАЦИЯ!
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={hologramOgg}>
        {
          'Нужно подходить к вопросу грамотно. Что такое реставрация?\n\n[Ссылка*15](#)'
        }
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg.src} />

      <Say>Идёт разработка проекта</Say>

      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Say image={{uri: developerRepB10Png.src, align: 'bottom'}}>
        —Как ведется реставрация?
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        —Для начала получить бы паспорт объекта в отделе памятников, а после
        провести экспертизу состояния здания
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        —И в нашу рабочую группу проекта надо найти специалиста по реставрации
      </Say>

      <Say image={{uri: developerRepB6Png.src, align: 'bottom'}}>
        —Сделаем всё необходимое
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg.src} />

      <Say>Проект над реставрацией здания завершен…</Say>

      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        —Проект готов
      </Say>

      <Say image={{uri: developerRepB6Png.src, align: 'bottom'}}>
        —Необходимо провести слушания
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg.src} />

      <Say>Общественные слушания</Say>

      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng.src, align: 'bottom'}}>
        —Всем добрый день. Мы представляем наш проект по реставрации здания
        Желтоксан 115
      </Say>

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng.src, align: 'bottom'}}>
        —Планируется деликатная реставрация с обновлением материалов максимально
        приближёнными к оригинальным
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg.src} />

      <Say>
        На общественных слушаниях не было выявлено нарушений законов о работе с
        памятниками, ваш проект одобрен!
      </Say>

      <Scene src={bgZheltoksanBeforeJpg.src} />

      <Say>
        Поздравляем! Облик здания сохранен! Не даром прошли все ваши и вот
        результат — деликатная реставрация объекта
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}