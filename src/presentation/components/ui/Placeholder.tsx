'use client'

import { useState, type CSSProperties } from 'react'
import { Paw } from './icons'

export interface PlaceholderProps {
  /** caminho em /public (ex.: /images/dog-hero.png) */
  src?: string
  /** texto mostrado enquanto a foto não existe */
  label?: string
  alt?: string
  /** '' (card) | 'cut' (recorte transparente) */
  variant?: '' | 'cut'
  /** fundo escuro (para seções escuras) */
  dark?: boolean
  className?: string
  style?: CSSProperties
}

/**
 * Vira <img> automaticamente quando o arquivo existir; enquanto não,
 * mostra um bloco marcado com silhueta de pata + label.
 */
export default function Placeholder({
  src,
  label,
  alt,
  variant = '',
  dark = false,
  className = '',
  style,
}: PlaceholderProps) {
  const [failed, setFailed] = useState(false)
  const classes = ['ph', variant === 'cut' && 'ph--cut', dark && 'ph--dark', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} style={style}>
      {src && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt || label || ''} onError={() => setFailed(true)} loading="lazy" />
      )}
      {(!src || failed) && (
        <div className="ph__fallback">
          <Paw />
          <span>
            <b>foto aqui</b>
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
