'use client'

import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/presentation/lib/gsap'
import { shouldSkipMotion } from '@/presentation/lib/env'

interface Props {
  children: ReactNode
  className: string
  id?: string
}

export default function SectionReveal({ children, className, id }: Props) {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (shouldSkipMotion()) return
    root.current?.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      gsap.from(element, {
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 94%', once: true },
      })
    })
  }, { scope: root })

  return <section className={className} id={id} ref={root}>{children}</section>
}
