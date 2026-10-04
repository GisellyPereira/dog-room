/** Utilitários de ambiente do navegador (seguros para SSR). */

/** Usuário pediu menos movimento? */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** Modo "still" (?still=1): pula animações — usado para prints e a11y. */
export function isStillMode(): boolean {
  return (
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).has('still')
  )
}

/** Verdadeiro quando não devemos animar (reduced-motion OU modo still). */
export function shouldSkipMotion(): boolean {
  return prefersReducedMotion() || isStillMode()
}
