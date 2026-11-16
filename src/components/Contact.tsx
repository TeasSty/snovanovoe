import type { FormEvent } from 'react'
import './Contact.css'

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const contact = String(data.get('contact') ?? '').trim()
    const body = String(data.get('body') ?? '').trim()
    const subject = encodeURIComponent(`Заявка на реставрацию — ${name || 'без имени'}`)
    const text = encodeURIComponent(
      `Имя: ${name}\nКонтакт: ${contact}\n\nО предмете:\n${body}`,
    )
    window.location.href = `mailto:snova.novoe@gmail.com?subject=${subject}&body=${text}`
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__grid">
        <div className="contact__copy">
          <p className="eyebrow">Контакт</p>
          <h2 id="contact-title">Пришлите фото предмета</h2>
          <p>
            Оценим состояние, расскажем, что реально сделать, и сколько займёт работа.
            Мастерская в Перми — Никита и Ольга Гилевы.
          </p>
          <ul className="contact__meta">
            <li>
              <span>Адрес</span>
              <strong>Пермь, ул. Дружбы, 34К</strong>
            </li>
            <li>
              <span>Телефон</span>
              <a href="tel:+79638797224">+7 (963) 879-72-24</a>
            </li>
            <li>
              <span>Почта</span>
              <a href="mailto:snova.novoe@gmail.com">snova.novoe@gmail.com</a>
            </li>
          </ul>
          <div className="contact__social">
            <a href="https://vk.ru/snovanovoe" target="_blank" rel="noreferrer">
              ВКонтакте
            </a>
            <a href="https://t.me/snovanovoerest" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href="https://www.instagram.com/snovanovoe/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Имя
            <input name="name" type="text" autoComplete="name" required placeholder="Как к вам обращаться" />
          </label>
          <label>
            Телефон или Telegram
            <input name="contact" type="text" required placeholder="+7… или @username" />
          </label>
          <label>
            О предмете
            <textarea
              name="body"
              rows={5}
              required
              placeholder="Что за вещь, что беспокоит, можно приложить ссылку на фото"
            />
          </label>
          <p className="contact__hint">
            Удобнее с фото — в{' '}
            <a href="https://vk.ru/snovanovoe" target="_blank" rel="noreferrer">
              сообщения сообщества
            </a>
            . Форма откроет почту с черновиком заявки.
          </p>
          <button className="btn btn--brand" type="submit">
            Отправить заявку
          </button>
        </form>
      </div>

      <div className="contact__sidebands">
        <div>
          <h3>Мастер-классы</h3>
          <p>Приходите со своим небольшим предметом — или возьмём из запасов мастерской.</p>
        </div>
        <div>
          <h3>Аренда</h3>
          <p>Мебель и предметы для съёмок, фестивалей и городских событий.</p>
        </div>
      </div>
    </section>
  )
}
