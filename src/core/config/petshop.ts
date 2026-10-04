/** Conteúdo comercial do modelo. Confirme o que a loja oferece antes de publicar. */
export const SERVICES = [
  {
    id: 'banho', name: 'Banho & finalização', shortName: 'Banho',
    description: 'Para manter a higiene em dia, tirar a sujeira dos passeios e cuidar da pelagem entre uma tosa e outra.',
    includes: ['Banho adequado ao tipo de pelagem', 'Secagem e escovação', 'Finalização do pelo'],
    note: 'Tem sensibilidade na pele ou usa um produto específico? Avise ao solicitar o atendimento.',
    image: '/images/editorial/banho.jpg', imageAlt: 'Yorkshire recebendo banho com ducha e cuidado manual',
  },
  {
    id: 'tosa', name: 'Tosa personalizada', shortName: 'Tosa',
    description: 'Para ajustar o comprimento, facilitar a manutenção e encontrar um corte que combine com a pelagem do seu cão.',
    includes: ['Conversa sobre o corte desejado', 'Avaliação da condição do pelo', 'Acabamento conforme o corte escolhido'],
    note: 'Você pode enviar uma referência. A viabilidade do corte depende da pelagem e da presença de nós.',
    image: '/images/editorial/pelagem.jpg', imageAlt: 'Profissional penteando a pelagem de um Yorkshire',
  },
  {
    id: 'higienica', name: 'Tosa higiênica', shortName: 'Tosa higiênica',
    description: 'Para facilitar a limpeza nas áreas que acumulam sujeira, preservando o restante do visual do seu cão.',
    includes: ['Avaliação das áreas que precisam de cuidado', 'Aparo nas regiões de higiene', 'Orientação sobre a manutenção'],
    note: 'Consulte quais regiões serão aparadas e se o serviço será combinado com o banho.',
    image: '/images/editorial/detalhes.jpg', imageAlt: 'Detalhe de uma sessão de cuidado com a pelagem de um cão',
  },
] as const

/** Deixe vazio até receber os dados reais. O site oferece uma consulta pelo WhatsApp. */
export const BUSINESS = {
  address: '',
  mapsUrl: '',
  openingHours: '',
}

export const QUESTIONS = [
  { question: 'Quanto custa o atendimento?', answer: 'O valor depende do serviço, do porte e da condição da pelagem. Conte essas informações no pedido de orçamento. Você consulta o valor antes de confirmar o agendamento.' },
  { question: 'Quanto tempo meu cão fica no pet shop?', answer: 'O tempo varia conforme o serviço, a pelagem e a adaptação do cão. Consulte a previsão ao agendar e combine como será o aviso para a retirada.' },
  { question: 'Posso mandar uma foto do corte que quero?', answer: 'Sim. Envie a referência pelo WhatsApp. O corte é alinhado considerando o tipo de pelo, a presença de nós e o conforto do cão.' },
  { question: 'Meu cão é ansioso ou tem alguma restrição.', answer: 'Avise antes de marcar. Informe sensibilidades, necessidades de saúde e como ele reage ao banho ou ao secador para avaliar o atendimento adequado.' },
  { question: 'E se a pelagem estiver com muitos nós?', answer: 'Informe isso no pedido e, se possível, envie uma foto. O estado da pelagem pode alterar o serviço indicado, o tempo e o orçamento. Essas condições precisam ser conversadas antes do atendimento.' },
  { question: 'Como confirmo ou remarco meu horário?', answer: 'A solicitação pelo site abre uma conversa no WhatsApp. O horário é confirmado por lá. Se precisar remarcar, entre em contato para consultar uma nova disponibilidade.' },
]
