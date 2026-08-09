import Image from "next/image";
import { buildWhatsAppLink, ENCOMENDA_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const OCASIOES = [
  { emoji: "🎂", label: "Aniversários" },
  { emoji: "🥳", label: "Festas" },
  { emoji: "💕", label: "Datas especiais" },
  { emoji: "💍", label: "Eventos" },
  { emoji: "👶", label: "Chá de bebê" },
  { emoji: "🎓", label: "Formaturas" },
];

export default function Encomendas() {
  return (
    <section id="encomendas" className="section-pad container-max py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] card-shadow-lg">
            <Image
              src="/images/bombom-no-palito.jpeg"
              alt="Bombons no palito da Delas Doce prontos para uma encomenda especial"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Encomendas"
            title="Seu momento merece um toque mais doce 💕"
            subtitle="A Delas Doce também prepara encomendas especiais para transformar seus momentos em lembranças ainda mais gostosas."
          />

          <Reveal delay={0.1} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {OCASIOES.map((o) => (
              <span
                key={o.label}
                className="flex items-center gap-2 rounded-2xl bg-pink-soft px-4 py-3 text-sm font-semibold text-cocoa"
              >
                <span aria-hidden="true">{o.emoji}</span>
                {o.label}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <a
              href={buildWhatsAppLink(ENCOMENDA_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-berry px-7 py-4 text-base font-semibold text-cream shadow-[0_10px_24px_-6px_rgba(230,57,90,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-berry-dark"
            >
              Quero fazer uma encomenda
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
