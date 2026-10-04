import type { SiteContact } from '@/core/types'

// ============================================================
//  EDITE AQUI — marca e contatos do petshop
// ============================================================
export const BRAND = 'Dog Room'

export const CONTACT: SiteContact = {
  whatsapp: '5599999999999',
  whatsappMessage: 'Oi! Quero agendar um banho/tosa pro meu pet 🐾',
  instagram: 'dogroom',
  phone: '(99) 99999-9999',
  city: 'Sua cidade',
  years: '5',
  reviews: '700+',
}

/** Links derivados dos contatos (evita repetição pelos componentes). */
export const bookHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`
export const instagramHref = `https://instagram.com/${CONTACT.instagram}`
export const phoneHref = `tel:${CONTACT.phone.replace(/\D/g, '')}`

export function whatsappHref(message: string) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
}
