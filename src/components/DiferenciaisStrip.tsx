const ITEMS = [
  { emoji: "🍓", label: "Feitos artesanalmente" },
  { emoji: "✨", label: "Ingredientes selecionados" },
  { emoji: "💕", label: "Preparados com carinho" },
  { emoji: "🎂", label: "Encomendas especiais" },
  { emoji: "💬", label: "Pedido rápido pelo WhatsApp" },
];

export default function DiferenciaisStrip() {
  return (
    <section aria-label="Diferenciais da Delas Doce" className="border-y border-berry/10 bg-white py-6">
      <div className="no-scrollbar flex gap-x-10 gap-y-3 overflow-x-auto px-5 sm:container-max sm:section-pad sm:flex-wrap sm:justify-center sm:overflow-visible">
        {ITEMS.map((item) => (
          <span
            key={item.label}
            className="flex shrink-0 items-center gap-2 text-sm font-semibold text-cocoa-soft sm:text-base"
          >
            <span aria-hidden="true" className="text-lg">
              {item.emoji}
            </span>
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
