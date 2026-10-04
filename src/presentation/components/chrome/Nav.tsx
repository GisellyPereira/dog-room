'use client'

import { useRef, type MouseEvent } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/presentation/lib/gsap'
import { shouldSkipMotion } from '@/presentation/lib/env'
import { NAV_LINKS } from '@/core/content/navigation'
import { bookHref, phoneHref } from '@/core/config/site'
import { PhoneIcon } from '@/presentation/components/ui/icons'

export default function Nav() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (shouldSkipMotion()) return
      gsap.from(ref.current, { y: -80, opacity: 0, duration: 0.8, ease: 'power3.out' })
    },
    { scope: ref },
  )

  const go = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (!el) return
    if (window.__lenis) window.__lenis.scrollTo(el as HTMLElement, { offset: -80 })
    else el.scrollIntoView({ behavior: shouldSkipMotion() ? 'auto' : 'smooth' })
  }

  return (
    <nav className="nav" ref={ref}>
      <div className="wrap nav__inner">
        <div className="nav__pill glassy">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => go(e, link.href)}
              {...(i === 0 ? { 'data-active': '' } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__right">
          <a className="nav__book glassy" href={bookHref} target="_blank" rel="noopener noreferrer">
            Agendar
          </a>
          <a className="nav__phone glassy" href={phoneHref} aria-label="Ligar">
            <PhoneIcon />
          </a>
        </div>
      </div>
    </nav>
  )
}
