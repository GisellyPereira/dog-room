/**
 * Camada de domínio — contratos de dados usados por toda a aplicação.
 * Não depende de React nem de nada de framework.
 */

export interface NavLink {
  label: string
  href: string
}

/** Frase do carrossel do herói. A última linha recebe o acento "#N". */
export interface HeroPhrase {
  lines: string[]
}

export type SocialKind = 'instagram' | 'tiktok'

export interface SocialLink {
  kind: SocialKind
  label: string
  href: string
}

export interface StoryPhoto {
  src: string
  alt: string
}

export interface PhilosophyItem {
  title: string
  description: string
  /** caminho da imagem em /public */
  image: string
}

export interface PainPoint {
  text: string
  /** card escuro girado (destaque) */
  dark?: boolean
}

export interface SiteContact {
  /** DDI + DDD + número, só dígitos */
  whatsapp: string
  whatsappMessage: string
  instagram: string
  phone: string
  city: string
  years: string
  reviews: string
}
