"use client";

import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { ORDER_PRODUCTS } from "@/data/pedido-options";
import { buildWhatsAppLink, pedidoWhatsAppMessage } from "@/lib/whatsapp";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const MIN_QUANTIDADE = 1;

function ProdutoPicker({ selected, onSelect }: { selected: string; onSelect: (value: string) => void }) {
  return (
    <div>
      <span className="mb-3 block text-sm font-semibold text-cocoa">Produto</span>
      <div className="flex flex-wrap gap-2.5">
        {ORDER_PRODUCTS.map((opt) => {
          const isSelected = selected === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onSelect(opt)}
              aria-pressed={isSelected}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-150",
                isSelected
                  ? "border-berry bg-berry text-cream shadow-[0_4px_12px_-3px_rgba(230,57,90,0.5)]"
                  : "border-berry/15 bg-pink-softer text-cocoa-soft hover:border-berry/40 hover:text-berry-dark"
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function QuantidadeStepper({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div>
      <span className="mb-3 block text-sm font-semibold text-cocoa">Quantidade</span>
      <div className="inline-flex items-center gap-4">
        <button
          type="button"
          onClick={() => onChange(Math.max(MIN_QUANTIDADE, value - 1))}
          aria-label="Diminuir quantidade"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-berry/20 bg-pink-softer text-berry-dark transition-colors hover:border-berry/40 hover:bg-pink-soft"
        >
          <Minus className="h-4 w-4" />
        </button>
        <input
          type="number"
          inputMode="numeric"
          min={MIN_QUANTIDADE}
          value={value}
          onChange={(e) => {
            const parsed = parseInt(e.target.value, 10);
            onChange(Number.isNaN(parsed) ? MIN_QUANTIDADE : Math.max(MIN_QUANTIDADE, parsed));
          }}
          className="w-20 rounded-2xl border border-berry/15 bg-white px-3 py-2.5 text-center text-lg font-semibold text-cocoa focus:border-berry focus:outline-none focus:ring-2 focus:ring-berry/20"
        />
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          aria-label="Aumentar quantidade"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-berry/20 bg-pink-softer text-berry-dark transition-colors hover:border-berry/40 hover:bg-pink-soft"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function MonteSeuPedido() {
  const [produtoNome, setProdutoNome] = useState(ORDER_PRODUCTS[0]);
  const [quantidade, setQuantidade] = useState(6);
  const [observacoes, setObservacoes] = useState("");

  const unidade = useMemo(() => (produtoNome.toLowerCase().includes("fondue") ? "copo" : "unidade"), [produtoNome]);
  const quantidadeLabel = `${quantidade} ${unidade}${quantidade === 1 ? "" : "s"}`;

  const mensagem = pedidoWhatsAppMessage({
    produto: produtoNome,
    quantidade: quantidadeLabel,
    observacoes,
  });

  return (
    <section className="section-pad container-max py-20 sm:py-28">
      <SectionHeading
        eyebrow="Personalize"
        title="Monte seu pedido 🍓"
        subtitle="Escolha o produto e a quantidade — a gente cuida do resto pelo WhatsApp."
      />

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl rounded-[2rem] bg-white p-6 card-shadow-lg sm:p-10">
        <div className="space-y-8">
          <ProdutoPicker selected={produtoNome} onSelect={setProdutoNome} />

          <QuantidadeStepper value={quantidade} onChange={setQuantidade} />

          <div>
            <label htmlFor="observacoes" className="mb-3 block text-sm font-semibold text-cocoa">
              Observações (opcional)
            </label>
            <textarea
              id="observacoes"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Ex: sem coco, para retirada sexta-feira, cartão de aniversário..."
              rows={3}
              className="w-full resize-none rounded-2xl border border-berry/15 bg-pink-softer px-4 py-3 text-sm text-cocoa placeholder:text-cocoa-soft/60 focus:border-berry focus:outline-none focus:ring-2 focus:ring-berry/20"
            />
          </div>
        </div>

        <a
          href={buildWhatsAppLink(mensagem)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 flex w-full items-center justify-center gap-2 rounded-full bg-berry px-6 py-4 text-base font-semibold text-cream shadow-[0_10px_24px_-6px_rgba(230,57,90,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-berry-dark"
        >
          Enviar pedido pelo WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
