import { Star } from "lucide-react";
import { depoimentos } from "@/data/depoimentos";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Depoimentos() {
  return (
    <section className="bg-pink-softer py-20 sm:py-28">
      <div className="container-max section-pad">
        <SectionHeading eyebrow="Depoimentos" title="Quem prova, se apaixona 💕" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.nome + i} delay={i * 0.08} className="flex flex-col rounded-3xl bg-white p-7 card-shadow">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: d.estrelas }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-cocoa-soft">&ldquo;{d.texto}&rdquo;</p>
              <span className="mt-5 text-sm font-semibold text-cocoa">— {d.nome}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
