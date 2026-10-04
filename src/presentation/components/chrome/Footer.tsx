'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/presentation/lib/gsap'
import { BRAND, CONTACT, instagramHref } from '@/core/config/site'
import { Paw } from '@/presentation/components/ui/icons'

export default function Footer() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.footer__big', {
        yPercent: 24,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 92%' },
      })
    },
    { scope: root },
  )

  return (
    <footer className="footer" ref={root}>
      <div className="wrap">
        <div className="footer__big">
          {BRAND}
          <Paw />
        </div>
        <div className="footer__row">
          <span>
            © {new Date().getFullYear()} {BRAND} — banho, tosa &amp; carinho · {CONTACT.city}
          </span>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">
            WhatsApp {CONTACT.phone}
          </a>
          <a href={instagramHref} target="_blank" rel="noopener noreferrer">
            @{CONTACT.instagram}
          </a>
        </div>
      </div>
    </footer>
  )
}
