import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import FloatingStrawberries from "@/components/decor/FloatingStrawberries";
import Reveal from "@/components/Reveal";

const HIGHLIGHTS = [
  { emoji: "🍓", label: "Produção artesanal" },
  { emoji: "💕", label: "Feitos com carinho" },
  { emoji: "✨", label: "Ingredientes selecionados" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-pink-softer to-cream pt-32 pb-20 sm:pt-40 sm:pb-28">
      <FloatingStrawberries />
      <div className="container-max section-pad relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-berry-dark shadow-sm">
              🍓 Doces artesanais feitos à mão
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-xl text-4xl font-medium leading-[1.1] text-cocoa sm:text-5xl lg:text-[3.4rem]">
              Um pedacinho de <span className="text-gradient-berry italic">felicidade</span> em cada doce 🍓
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cocoa-soft">
              Na Delas Doce, cada detalhe é preparado com carinho para deixar seus momentos ainda mais especiais.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center rounded-full bg-berry px-7 py-4 text-base font-semibold text-cream shadow-[0_10px_24px_-6px_rgba(230,57,90,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-berry-dark"
            >
              Ver nossos doces
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-berry/25 bg-white px-7 py-4 text-base font-semibold text-berry-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-berry/50"
            >
              Pedir pelo WhatsApp
            </a>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {HIGHLIGHTS.map((h) => (
              <span key={h.label} className="inline-flex items-center gap-2 text-sm font-medium text-cocoa-soft">
                <span aria-hidden="true">{h.emoji}</span>
                {h.label}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} y={40} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] card-shadow-lg">
            <Image
              src="/images/bombom-morango.jpeg"
              alt="Bombom de morango Delas Doce, cortado ao meio mostrando o morango fresco por dentro"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rotate-[-6deg] rounded-3xl bg-white p-3 shadow-xl sm:block">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
              <Image
                src="/images/fondue-copo.jpeg"
                alt="Fondue no copo com morango e uva verde"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -right-4 -top-4 flex h-20 w-20 rotate-6 items-center justify-center rounded-full bg-berry text-center text-xs font-bold leading-tight text-cream shadow-xl sm:h-24 sm:w-24 sm:text-sm">
            100% artesanal
          </div>
        </Reveal>
      </div>
    </section>
  );
}
