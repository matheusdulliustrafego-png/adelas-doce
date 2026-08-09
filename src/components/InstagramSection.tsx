import Image from "next/image";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const FOTOS = [
  "/images/bombom-morango.jpeg",
  "/images/bombom-uva.jpeg",
  "/images/bombom-no-palito.jpeg",
  "/images/fondue-copo.jpeg",
  "/images/bombom-morango.jpeg",
  "/images/bombom-uva.jpeg",
];

export default function InstagramSection() {
  return (
    <section className="bg-pink-softer py-20 sm:py-28">
      <div className="container-max section-pad text-center">
        <SectionHeading
          eyebrow="Redes sociais"
          title="Tem mais delícias no nosso Instagram 🍓"
          subtitle={`Segue a Delas para acompanhar novidades, lançamentos e muitas tentações doces 💕 — ${INSTAGRAM_HANDLE}`}
        />

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 sm:gap-4">
          {FOTOS.map((src, i) => (
            <Reveal key={i} delay={i * 0.05} className="relative aspect-square overflow-hidden rounded-2xl card-shadow">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="group block h-full w-full">
                <Image
                  src={src}
                  alt={`Foto ${i + 1} do Instagram da Delas Doce`}
                  fill
                  sizes="(max-width: 640px) 30vw, 180px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-berry px-7 py-4 text-base font-semibold text-cream shadow-[0_10px_24px_-6px_rgba(230,57,90,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-berry-dark"
          >
            <InstagramIcon className="h-5 w-5" />
            Seguir {INSTAGRAM_HANDLE}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
