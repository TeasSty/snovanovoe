import { asset } from '../lib/asset'
import './Massif.css'

export function Massif() {
  return (
    <section className="massif" id="massif" aria-labelledby="massif-title">
      <div className="massif__media" aria-hidden="true">
        <img src={asset('images/massif.jpg')} alt="" width={1400} height={900} loading="lazy" />
        <div className="massif__shade" />
      </div>
      <div className="massif__content">
        <p className="eyebrow">Массив и свои изделия</p>
        <h2 id="massif-title">Новое из дерева — с той же рукой</h2>
        <p>
          Та же мастерская, тот же ритм — путь от эскиза и массива, а не только от «как было».
          Пуфики и готовые позиции — в каталоге.
        </p>
        <a className="btn btn--brand" href="#catalog">
          Смотреть каталог
        </a>
      </div>
    </section>
  )
}
