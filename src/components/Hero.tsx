import { asset } from '../lib/asset'
import { Logo } from './Logo'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__image"
          src={asset('images/hero-bench.jpg')}
          alt=""
          width={1800}
          height={1200}
          fetchPriority="high"
        />
        <div className="hero__shade" />
      </div>

      <div className="hero__content">
        <Logo className="hero__mark" />
        <h1 id="hero-brand" className="hero__brand">
          <span>Снова</span>
          <span>Новое</span>
        </h1>
        <p className="hero__line">Вторая жизнь предмета</p>
        <p className="hero__support">
          Реставрация винтажа и изготовление из массива в Перми
        </p>
        <div className="hero__actions">
          <a className="btn btn--brand" href="#contact">
            Прислать фото
          </a>
          <a className="btn btn--ghost" href="#filmstrip">
            Смотреть преображение
          </a>
        </div>
      </div>
    </section>
  )
}
