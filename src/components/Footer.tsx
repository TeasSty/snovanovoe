import { Logo } from './Logo'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Logo />
          <div>
            <p className="site-footer__name">СНОВА НОВОЕ</p>
            <p>Реставрация и изготовление мебели · Пермь</p>
          </div>
        </div>
        <p className="site-footer__note">
          Сохраняем историю и создаём красоту — винтаж, массив, странные предметы.
        </p>
      </div>
    </footer>
  )
}
