export const WHATSAPP_NUMBER = "5551982475282";
export const WHATSAPP_DISPLAY = "(51) 98247-5282";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Delas Doce 🍓💕 Vi as delícias e gostaria de fazer um pedido.";

export const ENCOMENDA_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Delas Doce 🍓💕 Gostaria de fazer uma encomenda especial.";

export function buildWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function productWhatsAppMessage(nome: string): string {
  return `Olá! Vim pelo site da Delas Doce 🍓💕 Vi o ${nome} no catálogo e gostaria de fazer um pedido.`;
}

export function pedidoWhatsAppMessage(input: {
  produto: string;
  quantidade: string;
  observacoes: string;
}): string {
  const { produto, quantidade, observacoes } = input;
  return [
    "Olá! Vim pelo site da Delas Doce 🍓💕",
    "",
    "Gostaria de fazer o seguinte pedido:",
    "",
    `🍰 Produto: ${produto}`,
    `📦 Quantidade: ${quantidade}`,
    `📝 Observações: ${observacoes || "Nenhuma"}`,
    "",
    "Poderia me passar mais informações?",
  ].join("\n");
}
