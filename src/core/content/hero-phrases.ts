import type { HeroPhrase } from '@/core/types'

/**
 * Frases do herói (até 4). O número do "#" e do "01 / 04" acompanha
 * automaticamente a posição da frase nesta lista.
 * A última linha de cada frase recebe o acento "#N".
 */
export const HERO_PHRASES: HeroPhrase[] = [
  { lines: ['Um lugar onde', 'todo cão é', 'cliente'] },
  { lines: ['Banho e tosa', 'com o carinho', 'de casa'] },
  { lines: ['Do filhote ao', 'idoso — cuidado', 'sob medida'] },
  { lines: ['Beleza e saúde', 'pro seu pet', 'num lugar só'] },
]
