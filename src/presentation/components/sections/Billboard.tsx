'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/presentation/lib/gsap'
import { shouldSkipMotion } from '@/presentation/lib/env'
import PawField from '@/presentation/components/ui/PawField'

export default function Billboard() {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (shouldSkipMotion()) return
    const media = gsap.matchMedia()
    media.add('(min-width: 901px)', () => {
      gsap.fromTo('.bill__media img', { yPercent: -6, scale: 1.16 }, {
        yPercent: 6, scale: 1.16, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    })
    return () => media.revert()
  }, { scope: root })

  return (
    <section className="bill" id="contato" ref={root} aria-labelledby="bill-title">
      <div className="bill__media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/billboard.png" alt="" loading="lazy" width="1756" height="892" />
      </div>
      <div className="bill__poster">
        <PawField color="#e5e1d5" opacity={0.6} scale={2.2} />
        <div className="bill__message">
          <h2 id="bill-title">Mais que um estúdio — <em>um espaço de cuidado e calma</em></h2>
          <p>Este é meu lugar de poder, onde crio não apenas beleza, mas também um vínculo profundo de confiança entre mim e seu amigo peludo.</p>
          <span className="bill__signature">Dog Room</span>
        </div>
      </div>
    </section>
  )
}
