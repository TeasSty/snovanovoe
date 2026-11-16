import { asset } from '../lib/asset'
import './Stories.css'

const stories = [
  {
    id: 'bishop',
    title: 'Архиерейское кресло',
    place: 'Петропавловский собор',
    text: 'Буковый трон с акриловым лаком: две недели циклёвки, новый оттенок дерева и перетяжка мягких частей. Кресло вернулось на своё место.',
    src: asset('images/story-chair.jpg'),
  },
  {
    id: 'clock',
    title: 'Семейные настенные часы',
    place: 'Российская империя · реликвия',
    text: 'Корпус из сосны и ореха, резьба и инкрустация латунью. Восстановили шпон, собрали утраченные фрагменты — ювелирная точность мастера.',
    src: asset('images/story-clock.jpg'),
  },
]

export function Stories() {
  return (
    <section className="stories" id="stories" aria-labelledby="stories-title">
      <div className="stories__head">
        <p className="eyebrow">Истории предметов</p>
        <h2 id="stories-title">Не витрина — судьбы вещей</h2>
      </div>

      <div className="stories__list">
        {stories.map((story, index) => (
          <article
            className={`story ${index % 2 === 1 ? 'story--flip' : ''}`}
            key={story.id}
          >
            <div className="story__media">
              <img src={story.src} alt="" width={1200} height={900} loading="lazy" />
            </div>
            <div className="story__body">
              <p className="story__place">{story.place}</p>
              <h3>{story.title}</h3>
              <p>{story.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
