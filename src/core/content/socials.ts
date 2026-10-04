import type { SocialLink } from '@/core/types'
import { instagramHref } from '@/core/config/site'

export const SOCIALS: SocialLink[] = [
  { kind: 'instagram', label: 'Instagram', href: instagramHref },
  { kind: 'tiktok', label: 'TikTok', href: '#contato' },
]
