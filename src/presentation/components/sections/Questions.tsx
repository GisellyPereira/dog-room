import { QUESTIONS } from '@/core/config/petshop'
import { whatsappHref } from '@/core/config/site'

export default function Questions() {
  return (
    <section className="pet-information" id="duvidas" aria-labelledby="information-title">
      <div className="wrap editorial-wrap">
        <div className="editorial-heading"><div><p className="editorial-label">Informações para o tutor</p><h2 id="information-title">Antes do próximo banho.</h2></div><a className="shop-text-link" href={whatsappHref('Olá! Tenho uma dúvida antes de agendar.')} target="_blank" rel="noopener noreferrer">Conversar com a equipe</a></div>
        <div className="information-grid">{QUESTIONS.map(item => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>
      </div>
    </section>
  )
}
