'use client'

import { PawPrint } from './icons'

interface PawSpec {
  top: string
  left: string
  size: number
  rot: number
}

const DEFAULT: PawSpec[] = [
  { top: '6%', left: '4%', size: 130, rot: -18 },
  { top: '58%', left: '1%', size: 96, rot: 12 },
  { top: '16%', left: '84%', size: 150, rot: 20 },
  { top: '70%', left: '80%', size: 110, rot: -10 },
  { top: '40%', left: '46%', size: 170, rot: 8 },
  { top: '84%', left: '34%', size: 88, rot: 24 },
  { top: '30%', left: '22%', size: 78, rot: -26 },
]

interface PawFieldProps {
  color?: string
  opacity?: number
  scale?: number
  paws?: PawSpec[]
}

/** Watermark decorativo de patas espalhadas. */
export default function PawField({
  color = 'var(--purple)',
  opacity = 0.06,
  scale = 1,
  paws = DEFAULT,
}: PawFieldProps) {
  return (
    <div className="pawfield" aria-hidden="true" style={{ color }}>
      {paws.map((s, i) => (
        <PawPrint
          key={i}
          width={s.size * scale}
          height={s.size * scale}
          style={{ top: s.top, left: s.left, transform: `rotate(${s.rot}deg)`, opacity }}
        />
      ))}
    </div>
  )
}
