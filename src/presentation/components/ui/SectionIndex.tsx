import type { CSSProperties } from 'react'

interface SectionIndexProps {
  current: number
  total: number
  className?: string
  style?: CSSProperties
}

const pad = (n: number) => String(n).padStart(2, '0')

/** Indicador de seção "01 / 04". */
export default function SectionIndex({ current, total, className = '', style }: SectionIndexProps) {
  return (
    <span className={`idx ${className}`.trim()} style={style}>
      {pad(current)} / {pad(total)}
    </span>
  )
}
