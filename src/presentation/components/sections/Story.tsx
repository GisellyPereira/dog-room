import { bookHref } from '@/core/config/site'

export default function Story() {
  return (
    <section className="pet-personality" id="sobre" aria-labelledby="about-title">
      <div className="wrap personality-stage">
        <div className="personality-copy">
          <p className="personality-intro">Aqui, o cuidado começa por conhecer seu cão.</p>
          <h2 id="about-title">Cada cão<br />tem seu <em>jeito.</em></h2>
          <p>O pelo, o temperamento, o corte que você gosta. Tudo isso faz parte de um banho e tosa pensado para ele.</p>
          <p>Conte suas preferências e os cuidados que ele precisa. Antes de começar, combinamos serviço, orçamento e previsão de retirada.</p>
          <a className="shop-button" href={bookHref} target="_blank" rel="noopener noreferrer">Conversar sobre meu pet</a>
        </div>
        <figure className="personality-pet">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gallery/branco.jpg" alt="Cão branco deitado, olhando atentamente para a câmera" loading="lazy" />
          <figcaption>O cuidado respeita a individualidade de cada cão.</figcaption>
        </figure>
      </div>
    </section>
  )
}
