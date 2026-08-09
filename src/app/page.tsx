import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DiferenciaisStrip from "@/components/DiferenciaisStrip";
import Catalogo from "@/components/Catalogo";
import Queridinhos from "@/components/Queridinhos";
import MonteSeuPedido from "@/components/MonteSeuPedido";
import Encomendas from "@/components/Encomendas";
import Sobre from "@/components/Sobre";
import ComoFunciona from "@/components/ComoFunciona";
import Depoimentos from "@/components/Depoimentos";
import Galeria from "@/components/Galeria";
import InstagramSection from "@/components/InstagramSection";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DiferenciaisStrip />
        <Catalogo />
        <Queridinhos />
        <MonteSeuPedido />
        <Encomendas />
        <Sobre />
        <ComoFunciona />
        <Depoimentos />
        <Galeria />
        <InstagramSection />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
