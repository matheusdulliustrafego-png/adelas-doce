import { buildWhatsAppLink } from "@/lib/whatsapp";
import FloatingStrawberries from "@/components/decor/FloatingStrawberries";
import Reveal from "@/components/Reveal";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-berry py-20 sm:py-28">
      <FloatingStrawberries className="opacity-60" />
      <div className="container-max section-pad relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-medium leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Bateu aquela vontade de um docinho? 🍓💕
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-md text-lg text-cream/90">
            Escolha seu favorito e chama a Delas no WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-9">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-9 py-4 text-lg font-semibold text-berry-dark shadow-[0_12px_28px_-8px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Fazer meu pedido agora
          </a>
        </Reveal>
      </div>
    </section>
  );
}
