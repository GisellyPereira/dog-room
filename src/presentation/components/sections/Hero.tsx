'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/presentation/lib/gsap'
import { shouldSkipMotion } from '@/presentation/lib/env'
import { CONTACT, bookHref } from '@/core/config/site'
import { SOCIALS } from '@/core/content/socials'
import Placeholder from '@/presentation/components/ui/Placeholder'
import PawField from '@/presentation/components/ui/PawField'
import Button from '@/presentation/components/ui/Button'
import Handwritten from '@/presentation/components/ui/Handwritten'
import { SOCIAL_ICONS } from '@/presentation/components/ui/icons'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (shouldSkipMotion()) return

      const tl = gsap.timeline()
      tl.from('.hero__head .line > span', { yPercent: 115, duration: 0.9, stagger: 0.1, ease: 'power4.out' })
        .from('.hero__dog', { y: 60, opacity: 0, scale: 0.96, duration: 1, ease: 'power3.out' }, '-=0.6')
        .from('.hero__wordmark', { opacity: 0, scale: 1.08, duration: 1, ease: 'power3.out' }, '<')
        .from('.hero__lead > *', { y: 24, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' }, '-=0.5')
        .from('.hero__cards > *, .hero__social', { y: 26, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, '-=0.5')

      gsap.to('.hero__wordmark', {
        yPercent: -14,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.hero__dog', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    },
    { scope: root },
  )

  return (
    <header className="hero" id="top" ref={root}>
      {/* fundo de patas (SVG) — cinza bem claro e bem maiores */}
      <PawField color="#e8e8e8" opacity={1} scale={3.2} />

      {/* cão recortado — ancorado no rodapé da seção */}
      <Placeholder className="hero__dog" variant="cut" src="/images/dog-hero.png" label="labrador preto recortado (herói)" alt="Cachorro" />

      <div className="wrap hero__inner">
        <div className="hero__stage">
          <div className="hero__wordmark" aria-hidden="true">
            DogRoom
          </div>

          <div className="hero__head">
            <h1>
              <span className="line">
                <span>Um lugar onde</span>
              </span>
              <span className="line">
                <span>todo cão é</span>
              </span>
              <span className="line">
                <span>
                  cliente <Handwritten tone="p">#1</Handwritten>
                </span>
              </span>
            </h1>
          </div>

          <div className="hero__mobile-scene" aria-hidden="true">
            <span>DogRoom</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/dog-hero.png" alt="" width="925" height="1479" fetchPriority="high" />
          </div>

          <div className="hero__lead">
            <h2>Há mais de {CONTACT.years} anos</h2>
            <p>
              deixando cães lindos e seus donos felizes. Ofereço banho e tosa personalizado, sem
              estresse, feito com carinho pro seu pet.
            </p>
            <div className="hero__cta">
              <Button href={bookHref} target="_blank" rel="noopener noreferrer">
                Agendar
              </Button>
              <Button href="#sobre" variant="outline">
                Saiba mais
              </Button>
            </div>
          </div>

          <div className="hero__cards">
            <div className="card card--dark">
              <div className="big">{CONTACT.reviews}</div>
              <div className="sm">avaliações de clientes satisfeitos</div>
              <div className="stars">★★★★★</div>
            </div>
            <div className="card card--purple">
              <div className="t">Agende online &amp; ganhe 10% off</div>
              <a
                className="btn btn--outline"
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '.55em 1.1em', fontSize: '.82rem', alignSelf: 'flex-start' }}
              >
                <span>Aproveitar</span>
              </a>
              <Placeholder className="carddog" variant="cut" src="/images/card-dog.png" label="" alt="Cachorro preto e branco" />
            </div>
          </div>

          <div className="hero__social">
            <div className="social glassy">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.kind]
                const external = social.href.startsWith('http')
                return (
                  <a
                    key={social.kind}
                    href={social.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
