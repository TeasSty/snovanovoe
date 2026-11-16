import { asset } from '../lib/asset'
import './Catalog.css'

const items = [
  {
    id: 'pouf-geo',
    title: 'Пуфик собственного производства',
    kind: 'Новое изделие',
    price: '8 900 ₽',
    note: 'Собственное производство · материалы на выбор',
    src: 'images/catalog-pouf-geo.jpg',
    href: 'https://vk.ru/market/product/pufik-sobstvennoe-proizvodstvo-novy-56056334-13394269',
  },
  {
    id: 'pouf-green',
    title: 'Пуфик собственного производства',
    kind: 'Новое изделие',
    price: '8 900 ₽',
    note: 'Другая обивка · тот же каркас',
    src: 'images/catalog-pouf-green.jpg',
    href: 'https://vk.ru/market/product/pufik-sobstvennoe-proizvodstvo-novy-56056334-13394261',
  },
  {
    id: 'chair-1',
    title: 'Стул с полной реставрацией',
    kind: 'Реставрация под ключ',
    price: '11 000 ₽',
    note: 'Циклёвка, покрытие, перетяжка',
    src: 'images/catalog-chair-1.jpg',
    href: 'https://vk.ru/market/product/stul-s-uslugoy-polnoy-restavratsii-56056334-12838752',
  },
  {
    id: 'chair-2',
    title: 'Стул с полной реставрацией',
    kind: 'Реставрация под ключ',
    price: '11 000 ₽',
    note: 'Другая модель из мастерской',
    src: 'images/catalog-chair-2.jpg',
    href: 'https://vk.ru/market/product/stul-s-uslugoy-polnoy-restavratsii-56056334-12838740',
  },
]

export function Catalog() {
  return (
    <section className="catalog" id="catalog" aria-labelledby="catalog-title">
      <div className="catalog__head">
        <div>
          <p className="eyebrow">Каталог</p>
          <h2 id="catalog-title">Из мастерской — в дом</h2>
        </div>
        <p className="catalog__lead">
          Фото и цены с витрины ВКонтакте. Полный ассортимент — в магазине сообщества.
        </p>
      </div>

      <ul className="catalog__list">
        {items.map((item) => (
          <li key={item.id}>
            <a className="catalog__item" href={item.href} target="_blank" rel="noreferrer">
              <div className="catalog__shot">
                <img src={asset(item.src)} alt={item.title} width={900} height={1080} loading="lazy" />
              </div>
              <div className="catalog__meta">
                <span className="catalog__kind">{item.kind}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <span className="catalog__price">{item.price}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <a
        className="btn btn--ghost catalog__all"
        href="https://vk.ru/market-56056334"
        target="_blank"
        rel="noreferrer"
      >
        Весь каталог во ВКонтакте
      </a>
    </section>
  )
}
