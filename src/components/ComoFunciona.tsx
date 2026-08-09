import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const PASSOS = [
  { emoji: "🍰", titulo: "Escolha sua delícia", texto: "Navegue pelo nosso catálogo e escolha seus favoritos." },
  { emoji: "💕", titulo: 'Clique em "Eu quero"', texto: "Cada produto possui um botão que leva direto para o WhatsApp." },
  { emoji: "💬", titulo: "Fale com a Delas", texto: "Confirme seu pedido e tire suas dúvidas pelo WhatsApp." },
  { emoji: "🍓", titulo: "Receba ou retire", texto: "Combine conosco a melhor forma de receber seu pedido." },
];

export default function ComoFunciona() {
  return (
    <section className="section-pad container-max py-20 sm:py-28">
      <SectionHeading eyebrow="Simples assim" title="Pedir na Delas é fácil 🍓" />

      <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-berry/15 lg:block" aria-hidden="true" />
        {PASSOS.map((passo, i) => (
          <Reveal key={passo.titulo} delay={i * 0.1} className="relative flex flex-col items-center text-center">
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl card-shadow">
              {passo.emoji}
            </span>
            <span className="mt-2 text-xs font-bold uppercase tracking-wide text-berry/70">Passo {i + 1}</span>
            <h3 className="mt-2 text-lg font-medium text-cocoa">{passo.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cocoa-soft">{passo.texto}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
