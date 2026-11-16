import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { asset } from '../lib/asset'
import './Filmstrip.css'

const frames = [
  {
    id: 'before',
    label: 'ДО',
    caption: 'Следы времени, потёртый лак, мягкое «устало»',
    src: asset('images/strip-before.jpg'),
  },
  {
    id: 'process',
    label: 'ПРОЦЕСС',
    caption: 'Циклёвка, укрепление, перетяжка — руками',
    src: asset('images/strip-process.jpg'),
  },
  {
    id: 'after',
    label: 'ПОСЛЕ',
    caption: 'Тот же предмет — снова в жизни дома',
    src: asset('images/strip-after.jpg'),
  },
]

gsap.registerPlugin(ScrollTrigger)

export function Filmstrip() {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      const framesEl = track.querySelectorAll('.filmstrip__frame')
      gsap.from(framesEl, {
        opacity: 0.35,
        y: 28,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
        },
      })

      gsap.to(track, {
        x: () => Math.min(0, section.clientWidth - track.scrollWidth - 32),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top+=64',
          end: '+=70%',
          scrub: 0.6,
          pin: false,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section className="filmstrip" id="filmstrip" ref={sectionRef} aria-labelledby="filmstrip-title">
      <div className="filmstrip__intro">
        <p className="eyebrow">Лента преображения</p>
        <h2 id="filmstrip-title">До · процесс · после</h2>
        <p className="filmstrip__lead">
          Каждая вещь проходит через мастерскую кадр за кадром — без декоративного «до/после» ради галочки.
        </p>
      </div>

      <div className="filmstrip__viewport">
        <div className="filmstrip__sprocket" aria-hidden="true" />
        <div className="filmstrip__track" ref={trackRef}>
          {frames.map((frame) => (
            <figure className="filmstrip__frame" key={frame.id}>
              <div className="filmstrip__shot">
                <img src={frame.src} alt="" width={900} height={700} loading="lazy" />
              </div>
              <figcaption>
                <span className="filmstrip__dot" aria-hidden="true" />
                <span className="filmstrip__label">{frame.label}</span>
                <span className="filmstrip__caption">{frame.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="filmstrip__sprocket filmstrip__sprocket--end" aria-hidden="true" />
      </div>
    </section>
  )
}
