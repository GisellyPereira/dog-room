'use client'

import { useEffect, useRef, useState } from 'react'
import { instagramHref } from '@/core/config/site'

const pets = [
  { photo: 'cocker', alt: 'Cocker spaniel dourado apoiado nas patinhas', coat: 'Pelos longos' },
  { photo: 'spitz', alt: 'Spitz branco olhando para cima', coat: 'Muito volume' },
  { photo: 'poodle', alt: 'Poodle marrom de pelo encaracolado', coat: 'Cachos e mais cachos' },
  { photo: 'branco', alt: 'Cão branco deitado olhando para a câmera', coat: 'Pelagem curtinha' },
  { photo: 'collie', alt: 'Retrato de um border collie preto, branco e marrom', coat: 'Um olhar atento' },
  { photo: 'beagle', alt: 'Beagle sentado durante um passeio', coat: 'Pronto para passear' },
  { photo: 'puggle', alt: 'Cão de pelo curto e coleira vermelha visto de perfil', coat: 'Charme de sobra' },
  { photo: 'amigos', alt: 'Dois cães juntos sobre uma pedra à beira da água', coat: 'Boa companhia' },
]

function Chevron({ previous = false }: { previous?: boolean }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={previous ? 'M15 5 8 12l7 7' : 'm9 5 7 7-7 7'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const isOpen = active !== null
  const change = (direction: number) => setActive(index => index === null ? null : (index + direction + pets.length) % pets.length)

  useEffect(() => {
    if (!isOpen || !dialog.current) return
    const modal = dialog.current
    const trigger = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    const lenis = window.__lenis
    const wasStopped = lenis?.isStopped
    lenis?.stop()
    document.body.style.overflow = 'hidden'
    modal.showModal()
    return () => {
      modal.close()
      document.body.style.overflow = overflow
      if (!wasStopped) lenis?.start()
      trigger?.focus({ preventScroll: true })
    }
  }, [isOpen])

  const pet = active === null ? null : pets[active]
  return (
    <section className="pet-album" id="galeria" aria-labelledby="gallery-title">
      <div className="wrap album-wrap">
        <header className="album-heading"><span>Galeria de pets</span><h2 id="gallery-title">Uma coleção de<br /><em>bons encontros.</em></h2><p>Longos, curtinhos, cheios de cachos.<br />Toque em uma foto para ver de pertinho.</p></header>
        <div className="pet-mosaic">{pets.map((pet, index) => <button className={`pet-tile pet-tile--${pet.photo}`} type="button" key={pet.photo} onClick={() => setActive(index)} aria-label={`Ampliar fotografia: ${pet.coat}`} aria-haspopup="dialog">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/images/gallery/${pet.photo}.jpg`} alt={pet.alt} loading="lazy" width="900" height="1200" />
          <span>{pet.coat}</span>
        </button>)}</div>
        <div className="album-footer"><p>Fotografias ilustrativas de diferentes pelagens.</p><a className="shop-button" href={instagramHref} target="_blank" rel="noopener noreferrer">Acompanhar no Instagram</a></div>
      </div>
      <dialog className="pet-viewer" ref={dialog} aria-label="Galeria ampliada de pets" data-lenis-prevent onCancel={() => setActive(null)} onClose={() => setActive(null)} onClick={event => { if (event.target === event.currentTarget) setActive(null) }} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); change(event.key === 'ArrowRight' ? 1 : -1) } }}>
        {pet && <div className="pet-viewer-content">
          <button type="button" className="viewer-close" onClick={() => setActive(null)} aria-label="Fechar galeria">Fechar <span aria-hidden="true">×</span></button>
          <figure onTouchStart={event => { touch.current = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY } }} onTouchEnd={event => { if (!touch.current) return; const dx = event.changedTouches[0].clientX - touch.current.x; const dy = event.changedTouches[0].clientY - touch.current.y; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) change(dx < 0 ? 1 : -1); touch.current = null }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/gallery/${pet.photo}.jpg`} alt={pet.alt} width="1200" height="1600" />
            <figcaption aria-live="polite">{pet.coat}<small>{(active ?? 0) + 1} de {pets.length}</small></figcaption>
          </figure>
          <button type="button" className="viewer-prev" onClick={() => change(-1)} aria-label="Foto anterior"><Chevron previous /></button>
          <button type="button" className="viewer-next" onClick={() => change(1)} aria-label="Próxima foto"><Chevron /></button>
        </div>}
      </dialog>
    </section>
  )
}
