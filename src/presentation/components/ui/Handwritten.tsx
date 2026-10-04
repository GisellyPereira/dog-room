import type { ReactNode } from 'react'

type HandTone = 'p' | 'y'

interface HandwrittenProps {
  children: ReactNode
  /** 'p' = roxo · 'y' = amarelo */
  tone?: HandTone
  className?: string
}

/** Palavra/acento manuscrito (fonte Caveat). */
export default function Handwritten({ children, tone = 'p', className = '' }: HandwrittenProps) {
  return <span className={`hand hand--${tone} ${className}`.trim()}>{children}</span>
}
