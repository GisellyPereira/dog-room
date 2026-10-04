import type { Metadata } from 'next'
import { Poppins, Caveat } from 'next/font/google'
import '@/styles/globals.css'

// Tipografia principal do mockup: Poppins (headline + corpo)
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

// Acento manuscrito — substituta grátis da "Segoe Print"
const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dog Room — banho, tosa & carinho',
  description:
    'Studio de banho e tosa onde todo cão é cliente #1. Cuidado personalizado, sem estresse, feito com amor há mais de 5 anos.',
  openGraph: {
    title: 'Dog Room — banho, tosa & carinho',
    description: 'Cuidado personalizado e sem estresse para o seu pet.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
