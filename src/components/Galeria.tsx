import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const FOTOS = [
  { src: "/images/bombom-morango.jpeg", alt: "Bombom de morango cortado ao meio", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/fondue-copo.jpeg", alt: "Fondue no copo com morango e uva verde", span: "" },
  { src: "/images/bombom-no-palito.jpeg", alt: "Bombons no palito de morango e uva verde", span: "" },
  { src: "/images/bombom-uva.jpeg", alt: "Bombom de uva verde cortado ao meio", span: "sm:col-span-2" },
];

export default function Galeria() {
  return (
    <section className="section-pad container-max py-20 sm:py-28">
      <SectionHeading eyebrow="Galeria" title="Feitos para dar água na boca 🍓" />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {FOTOS.map((foto, i) => (
          <Reveal key={foto.src + i} delay={i * 0.06} className={foto.span}>
            <div className="group relative aspect-square w-full overflow-hidden rounded-3xl card-shadow sm:h-full">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 640px) 45vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
