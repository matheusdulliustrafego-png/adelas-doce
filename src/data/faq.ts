export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export const faqItems: FaqItem[] = [
  {
    pergunta: "Vocês fazem encomendas?",
    resposta: "Sim! Trabalhamos com encomendas para festas, aniversários e ocasiões especiais.",
  },
  {
    pergunta: "Como faço meu pedido?",
    resposta: "Você pode escolher seu doce pelo nosso catálogo e clicar no botão do WhatsApp.",
  },
  {
    pergunta: "Vocês fazem entrega?",
    resposta: "Entre em contato pelo WhatsApp para consultar disponibilidade, taxa e região de entrega.",
  },
  {
    pergunta: "Posso personalizar meu pedido?",
    resposta: "Dependendo do produto, podemos adaptar sabores, quantidades e detalhes. Consulte pelo WhatsApp.",
  },
  {
    pergunta: "Com quanto tempo de antecedência preciso encomendar?",
    resposta: "O prazo pode variar conforme o tipo e a quantidade do pedido. Consulte nossa disponibilidade pelo WhatsApp.",
  },
];
