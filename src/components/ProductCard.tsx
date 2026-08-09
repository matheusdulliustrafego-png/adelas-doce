import Image from "next/image";
import { type Product, SELO_LABEL, getSelo } from "@/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { formatPrice, cn } from "@/lib/utils";

export default function ProductCard({ product, large = false }: { product: Product; large?: boolean }) {
  const selo = getSelo(product);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:card-shadow-lg">

      <div className={cn("relative w-full overflow-hidden", large ? "aspect-[4/3]" : "aspect-square")}>
        <Image
          src={product.foto}
          alt={product.nome}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {selo && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-berry-dark shadow-sm">
            {SELO_LABEL[selo]}
          </span>
        )}
        {!product.disponivel && (
          <div className="absolute inset-0 flex items-center justify-center bg-cocoa/50 backdrop-blur-[1px]">
            <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-cocoa">Indisponível</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-berry/70">{product.categoria}</span>
        <h3 className="mt-1 text-lg font-medium text-cocoa sm:text-xl">{product.nome}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa-soft">{product.descricao}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-berry-dark">{formatPrice(product.preco)}</span>

          {product.disponivel ? (
            <a
              href={buildWhatsAppLink(product.mensagemWhatsApp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-berry px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_6px_16px_-4px_rgba(230,57,90,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-berry-dark"
            >
              Eu quero 💕
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full bg-cocoa/10 px-5 py-2.5 text-sm font-semibold text-cocoa-soft"
            >
              Indisponível no momento
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
