import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Queridinhos() {
  const produtos = getFeaturedProducts();

  return (
    <section className="bg-pink-softer py-20 sm:py-28">
      <div className="container-max section-pad">
        <SectionHeading
          eyebrow="Favoritos"
          title="Os queridinhos da Delas 💕"
          subtitle="Aquelas delícias que conquistam todo mundo."
        />

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto, i) => (
            <Reveal key={produto.id} delay={i * 0.08}>
              <ProductCard product={produto} large />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
