import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

/** Pata do Dog Room — usada na marca, loader, footer, watermark e placeholder. */
export function Paw(props: IconProps) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <path d="M226 268c-38 0-70 42-86 74-11 22 4 46 28 46 20 0 34-12 58-12s38 12 58 12c24 0 39-24 28-46-16-32-48-74-86-74z" />
      <ellipse cx="140" cy="180" rx="42" ry="54" />
      <ellipse cx="372" cy="180" rx="42" ry="54" />
      <ellipse cx="212" cy="118" rx="36" ry="48" />
      <ellipse cx="300" cy="118" rx="36" ry="48" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.3A6.5 6.5 0 1 0 18.5 12 6.5 6.5 0 0 0 12 5.5Zm0 10.7A4.2 4.2 0 1 1 16.2 12 4.2 4.2 0 0 1 12 16.2Zm6.8-11a1.5 1.5 0 1 0-1.5 1.5 1.5 1.5 0 0 0 1.5-1.5Z" />
    </svg>
  )
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M16.5 3c.3 2 1.6 3.6 3.5 3.9v2.5c-1.3 0-2.6-.4-3.7-1.1v5.9a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.6a3 3 0 1 0 2.1 2.9V3h2.8Z" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" />
    </svg>
  )
}

/** Pata realista (watermark dos cards) — do SVG enviado pela cliente. */
export function PawPrint(props: IconProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <ellipse cx="18" cy="44" rx="8.5" ry="12.5" transform="rotate(-28 18 44)" />
      <ellipse cx="38" cy="29" rx="9" ry="13.5" transform="rotate(-9 38 29)" />
      <ellipse cx="61" cy="29" rx="9" ry="13.5" transform="rotate(9 61 29)" />
      <ellipse cx="81" cy="44" rx="8.5" ry="12.5" transform="rotate(28 81 44)" />
      <path d="M50 50 C67 50 79 61 79 73 C79 83 71 89 62 87 C58 86 54 90 50 90 C46 90 42 86 38 87 C29 89 21 83 21 73 C21 61 33 50 50 50 Z" />
    </svg>
  )
}

/** Ossinho (watermark do card "Conquistas") — do SVG enviado pela cliente. */
export function Bone(props: IconProps) {
  return (
    <svg viewBox="16 29 68 42" aria-hidden="true" {...props}>
      <circle cx="28" cy="42" r="11" />
      <circle cx="28" cy="58" r="11" />
      <circle cx="72" cy="42" r="11" />
      <circle cx="72" cy="58" r="11" />
      <rect x="28" y="39" width="44" height="22" rx="11" />
    </svg>
  )
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  )
}

/** Mapa auxiliar para renderizar ícone social a partir do domínio. */
export const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
} as const
