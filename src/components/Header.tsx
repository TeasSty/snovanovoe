import { Logo } from './Logo'
import './Header.css'

const links = [
  { href: '#filmstrip', label: 'Преображение' },
  { href: '#stories', label: 'Истории' },
  { href: '#catalog', label: 'Каталог' },
  { href: '#contact', label: 'Контакт' },
]

export function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top" aria-label="СНОВА НОВОЕ — наверх">
        <Logo className="site-header__logo" />
        <span className="site-header__name">СНОВА НОВОЕ</span>
      </a>
      <nav className="site-header__nav" aria-label="Разделы">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="site-header__cta" href="#contact">
        Прислать фото
      </a>
    </header>
  )
}
