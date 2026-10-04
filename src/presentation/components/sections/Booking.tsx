'use client'

import { useState } from 'react'
import { BUSINESS, SERVICES } from '@/core/config/petshop'
import { BRAND, instagramHref, whatsappHref } from '@/core/config/site'


export default function Booking() {
  const [service, setService] = useState('Banho & finalização')
  const [size, setSize] = useState('')
  const [notes, setNotes] = useState('')
  const message = `Olá! Gostaria de consultar valor e disponibilidade.\nServiço: ${service}\nPorte: ${size || 'Quero ajuda para identificar'}${notes.trim() ? `\nSobre meu cão: ${notes.trim()}` : ''}`

  return (
    <section className="booking booking-request" aria-labelledby="request-title" id="agendar">
      <div className="wrap editorial-wrap booking-request-layout">
        <div className="request-copy">
          <span className="little-label">Seu próximo banho e tosa</span>
          <h2 id="request-title">Um horário<br />para <em>o seu pet.</em></h2>
          <p>Conte o que seu cão precisa e leve o pedido pronto para a conversa. Você consulta o valor e escolhe um horário disponível.</p>
          <dl className="booking-tips"><div><dt>O orçamento vem antes.</dt><dd>Informe o porte e como está a pelagem para consultar o valor.</dd></div><div><dt>Tem algum cuidado especial?</dt><dd>Conte sobre sensibilidades, restrições ou o corte desejado.</dd></div></dl>
          <div className="visit-info">
            <strong>Planeje sua visita</strong>
            {BUSINESS.address ? <p>{BUSINESS.address}</p> : <p>Consulte o endereço e como chegar antes da primeira visita.</p>}
            {BUSINESS.openingHours && <p>{BUSINESS.openingHours}</p>}
            <a href={BUSINESS.mapsUrl || whatsappHref(`Olá! Qual é o endereço e o horário de funcionamento do ${BRAND}?`)} target="_blank" rel="noopener noreferrer">{BUSINESS.mapsUrl ? 'Ver como chegar' : 'Consultar endereço e funcionamento'}</a>
            <a href={instagramHref} target="_blank" rel="noopener noreferrer">Conhecer pelo Instagram</a>
          </div>
        </div>
        <div className="request-form" aria-label="Prepare seu pedido de orçamento">

          <h3>Vamos combinar?</h3>
          <p>Alguns detalhes ajudam a orientar o atendimento.</p>
          <label htmlFor="booking-service">Qual cuidado você procura?</label>
          <select id="booking-service" value={service} onChange={(event) => setService(event.target.value)}>{SERVICES.map((item) => <option key={item.id}>{item.name}</option>)}<option>Preciso de orientação</option></select>
          <label htmlFor="booking-size">Qual é o porte do seu cão?</label>
          <select id="booking-size" value={size} onChange={(event) => setSize(event.target.value)}><option value="">Selecione ou peça orientação</option><option>Pequeno</option><option>Médio</option><option>Grande</option><option>Gigante</option></select>
          <label htmlFor="booking-notes">O que precisamos saber? <span>(opcional)</span></label>
          <textarea id="booking-notes" value={notes} maxLength={700} onChange={(event) => setNotes(event.target.value)} placeholder="Raça, tipo de pelo, dia preferido ou algum cuidado especial…" rows={3} />
          <a className="shop-button" href={whatsappHref(message)} target="_blank" rel="noopener noreferrer">Continuar no WhatsApp</a>
          <small>Você revisa e envia a mensagem no WhatsApp. O horário será confirmado na conversa.</small>
        </div>
      </div>
    </section>
  )
}
