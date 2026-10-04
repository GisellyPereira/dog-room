import { SERVICES } from '@/core/config/petshop'
import { whatsappHref } from '@/core/config/site'

export default function Services() {
  return (
    <section className="care-menu" id="servicos" aria-labelledby="services-title">
      <div className="wrap">
        <header className="care-menu-heading"><h2 id="services-title">Um banho renovado.<br />Um corte <em>do seu jeito.</em></h2><p>Escolha o cuidado e consulte o orçamento.<br />O valor considera o porte e a condição do pelo.</p></header>
        <div className="care-menu-cards">
          {SERVICES.map(service => <article className={`care-item care-item--${service.id}`} key={service.id}>
            <div className="care-item-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.image} alt={service.imageAlt} loading="lazy" />
            </div>
            <div className="care-item-body"><h3>{service.name}</h3><p>{service.description}</p><a className="shop-button" href={whatsappHref(`Olá! Quero consultar o valor e os horários para ${service.name.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">Consultar {service.shortName.toLowerCase()}</a></div>
          </article>)}
        </div>
        <p className="care-menu-help">Não sabe qual escolher? <a href={whatsappHref('Olá! Quero ajuda para escolher o cuidado para meu cão. Posso enviar uma foto da pelagem?')} target="_blank" rel="noopener noreferrer">Envie uma foto da pelagem e converse com a equipe.</a></p>
      </div>
    </section>
  )
}
