import type { MouseEventHandler, ReactNode } from 'react'

export type ButtonVariant = '' | 'outline' | 'ghost-light'

interface ButtonProps {
  href: string
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  target?: string
  rel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

/** Botão-link pill (sem efeito magnético). */
export default function Button({
  href,
  children,
  className = '',
  variant = '',
  target,
  rel,
  onClick,
}: ButtonProps) {
  const cls = ['btn', variant && `btn--${variant}`, className].filter(Boolean).join(' ')

  return (
    <a href={href} target={target} rel={rel} onClick={onClick} className={cls}>
      <span>{children}</span>
    </a>
  )
}
