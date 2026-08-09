import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Catalogo() {
  return (
    <section id="catalogo" className="section-pad container-max py-20 sm:py-28">
      <SectionHeading
        eyebrow="Cardápio"
        title="Nossas delícias 🍓"
        subtitle="Escolha seus favoritos e faça seu pedido de um jeito fácil e rápido."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((produto, i) => (
          <Reveal key={produto.id} delay={Math.min(i * 0.05, 0.3)}>
            <ProductCard product={produto} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
