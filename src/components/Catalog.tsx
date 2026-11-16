import { asset } from '../lib/asset'
import './Catalog.css'

const items = [
  {
    id: 'pouf-geo',
    title: 'Пуфик собственного производства',
    kind: 'Новое изделие',
    price: '8 900 ₽',
    note: 'Мех / кожа / шеннил · каркас дерево+фанера',
    src: 'images/catalog-pouf-geo.jpg',
  },
  {
    id: 'pouf-green',
    title: 'Пуфик · шеннил',
    kind: 'Новое изделие',
    price: '8 900 ₽',
    note: '43×43×45 см · наполнитель поролон',
    src: 'images/catalog-pouf-green.jpg',
  },
  {
    id: 'chair-full',
    title: 'Стул с полной реставрацией',
    kind: 'Реставрация под ключ',
    price: 'от 8 500 ₽',
    note: 'Циклёвка, покрытие, перетяжка — по состоянию',
    src: 'images/catalog-chair-1.jpg',
  },
  {
    id: 'chair-restore',
    title: 'Стул после реставрации',
    kind: 'Готов к заказу / пример',
    price: 'от 10 200 ₽',
    note: 'Цена зависит от каркаса и ткани',
    src: 'images/catalog-chair-2.jpg',
  },
]

const VK_SHOP = 'https://vk.ru/snovanovoe'

export function Catalog() {
  return (
    <section className="catalog" id="catalog" aria-labelledby="catalog-title">
      <div className="catalog__head">
        <div>
          <p className="eyebrow">Каталог</p>
          <h2 id="catalog-title">Из мастерской — в дом</h2>
        </div>
        <p className="catalog__lead">
          Свои пуфики и стулья с полной реставрацией. Актуальные позиции и фото — во ВКонтакте;
          здесь — срез ассортимента.
        </p>
      </div>

      <ul className="catalog__list">
        {items.map((item) => (
          <li key={item.id}>
            <a className="catalog__item" href={VK_SHOP} target="_blank" rel="noreferrer">
              <div className="catalog__shot">
                <img src={asset(item.src)} alt="" width={900} height={675} loading="lazy" />
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

      <a className="btn btn--ghost catalog__all" href={VK_SHOP} target="_blank" rel="noreferrer">
        Весь каталог во ВКонтакте
      </a>
    </section>
  )
}
