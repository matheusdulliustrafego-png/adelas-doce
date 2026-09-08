import { productWhatsAppMessage } from "@/lib/whatsapp";

export const CATEGORIES = [
  "Todos",
  "Brigadeiros",
  "Morangos",
  "Brownies",
  "Bolos",
  "Copos da Felicidade",
  "Tortas",
  "Especiais",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Selo = "mais-pedido" | "favorito" | "especial" | "novidade" | null;

export interface Product {
  id: string;
  nome: string;
  categoria: Exclude<Category, "Todos">;
  descricao: string;
  foto: string;
  preco: number;
  produtoEmDestaque: boolean;
  maisVendido: boolean;
  novidade: boolean;
  favorito: boolean;
  disponivel: boolean;
  mensagemWhatsApp: string;
}

function produto(p: Omit<Product, "mensagemWhatsApp">): Product {
  return { ...p, mensagemWhatsApp: productWhatsAppMessage(p.nome) };
}

export const products: Product[] = [
  produto({
    id: "bombom-morango",
    nome: "Bombom de Morango",
    categoria: "Morangos",
    descricao:
      "Morango fresco envolvido em brigadeiro branco cremoso e banhado em uma fina camada de chocolate ao leite ou branco.",
    foto: "/images/bombom-morango.jpeg",
    preco: 9,
    produtoEmDestaque: true,
    maisVendido: false,
    novidade: false,
    favorito: true,
    disponivel: true,
  }),
  produto({
    id: "bombom-uva-verde",
    nome: "Bombom de Uva Verde",
    categoria: "Morangos",
    descricao:
      "Uvas verdes geladinhas envolvidas em brigadeiro branco cremoso e finalizadas com chocolate ao leite ou branco.",
    foto: "/images/bombom-uva.jpeg",
    preco: 8,
    produtoEmDestaque: false,
    maisVendido: false,
    novidade: false,
    favorito: false,
    disponivel: true,
  }),
  produto({
    id: "bombom-palito-morango",
    nome: "Bombom no Palito de Morango",
    categoria: "Especiais",
    descricao:
      "Morangos selecionados no palito, envolvidos em brigadeiro cremoso e finalizados com uma deliciosa camada de chocolate.",
    foto: "/images/bombom-no-palito.jpeg",
    preco: 20,
    produtoEmDestaque: true,
    maisVendido: true,
    novidade: false,
    favorito: false,
    disponivel: true,
  }),
  produto({
    id: "bombom-palito-uva",
    nome: "Bombom no Palito de Uva Verde",
    categoria: "Especiais",
    descricao:
      "Uvas verdes no palito, envolvidas em brigadeiro cremoso e cobertas com chocolate ao leite ou branco.",
    foto: "/images/bombom-no-palito.jpeg",
    preco: 18,
    produtoEmDestaque: false,
    maisVendido: false,
    novidade: false,
    favorito: false,
    disponivel: true,
  }),
  produto({
    id: "fondue-copo-morango",
    nome: "Fondue no Copo de Morango",
    categoria: "Copos da Felicidade",
    descricao:
      "Camadas de morango fresco com uma generosa cobertura de fondue de chocolate, servido em copo individual.",
    foto: "/images/fondue-copo.jpeg",
    preco: 12,
    produtoEmDestaque: false,
    maisVendido: false,
    novidade: false,
    favorito: false,
    disponivel: true,
  }),
  produto({
    id: "fondue-copo-uva",
    nome: "Fondue no Copo de Uva Verde",
    categoria: "Copos da Felicidade",
    descricao:
      "Uvas verdes fresquinhas com uma generosa cobertura de fondue de chocolate, servido em copo individual.",
    foto: "/images/fondue-copo.jpeg",
    preco: 12,
    produtoEmDestaque: false,
    maisVendido: false,
    novidade: false,
    favorito: false,
    disponivel: true,
  }),
  produto({
    id: "fondue-copo-misto",
    nome: "Fondue no Copo Misto",
    categoria: "Copos da Felicidade",
    descricao:
      "Morango e uva verde juntos em camadas com fondue de chocolate cremoso. O queridinho para dividir (ou não).",
    foto: "/images/fondue-copo.jpeg",
    preco: 12,
    produtoEmDestaque: true,
    maisVendido: false,
    novidade: true,
    favorito: false,
    disponivel: true,
  }),
  produto({
    id: "caixa-degustacao",
    nome: "Caixa de Degustação",
    categoria: "Brigadeiros",
    descricao:
      "Brigadeiros de 18g para experimentar sabores diferentes na mesma caixa: escolha 2 sabores tradicionais (Brigadeiro preto, Brigadeiro branco, Beijinho ou Paçoca) e 2 sabores gourmet (Ninho com Nutella, Maracujá, Churros, Prestígio ou Uva verde com ninho).",
    foto: "/images/caixa-degustacao.jpeg",
    preco: 35,
    produtoEmDestaque: true,
    maisVendido: false,
    novidade: true,
    favorito: false,
    disponivel: true,
  }),
  produto({
    id: "cento-brigadeiros-tradicional",
    nome: "Cento de Brigadeiros Tradicionais",
    categoria: "Brigadeiros",
    descricao:
      "Brigadeiros de festa, 13g cada, nos sabores tradicionais: Brigadeiro preto, Brigadeiro branco, Beijinho ou Paçoca. O clássico que não pode faltar na sua comemoração.",
    foto: "/images/cento-brigadeiros.jpeg",
    preco: 140,
    produtoEmDestaque: true,
    maisVendido: false,
    novidade: true,
    favorito: false,
    disponivel: true,
  }),
  produto({
    id: "cento-brigadeiros-gourmet",
    nome: "Cento de Brigadeiros Gourmet",
    categoria: "Brigadeiros",
    descricao:
      "Brigadeiros de festa, 13g cada, em sabores gourmet: Ninho com Nutella, Maracujá, Churros, Prestígio ou Uva verde com ninho. Pra impressionar os convidados na sua festa.",
    foto: "/images/cento-brigadeiros.jpeg",
    preco: 160,
    produtoEmDestaque: true,
    maisVendido: false,
    novidade: true,
    favorito: false,
    disponivel: true,
  }),
];

export function getProductsByCategory(categoria: Category): Product[] {
  if (categoria === "Todos") return products;
  return products.filter((p) => p.categoria === categoria);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.produtoEmDestaque);
}

export const SELO_LABEL: Record<Exclude<Selo, null>, string> = {
  "mais-pedido": "🔥 Mais pedido",
  favorito: "💕 Favorito",
  especial: "🍓 Especial da Delas",
  novidade: "✨ Novidade",
};

export function getSelo(p: Product): Selo {
  if (p.maisVendido) return "mais-pedido";
  if (p.favorito) return "favorito";
  if (p.novidade) return "novidade";
  if (p.produtoEmDestaque) return "especial";
  return null;
}
