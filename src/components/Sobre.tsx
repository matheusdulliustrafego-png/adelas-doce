import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-pink-softer py-20 sm:py-28">
      <div className="container-max section-pad grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Nossa história"
            title="Feito com carinho, do nosso coração para o seu 💕"
          />
          <Reveal delay={0.08} className="mt-6 space-y-4 text-base leading-relaxed text-cocoa-soft sm:text-lg">
            <p>
              A Delas Doce nasceu do amor pela confeitaria e da vontade de transformar pequenos momentos em memórias
              especiais.
            </p>
            <p>
              Cada doce é preparado com muito carinho, atenção aos detalhes e ingredientes selecionados para entregar
              uma experiência deliciosa em cada mordida.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl card-shadow">
              <Image
                src="/images/bombom-uva.jpeg"
                alt="Produção artesanal de bombons de uva verde da Delas Doce"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl card-shadow">
              <Image
                src="/images/bombom-no-palito.jpeg"
                alt="Bombons no palito recém-preparados pela Delas Doce"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
