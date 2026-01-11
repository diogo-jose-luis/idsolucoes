// src/app/servicos/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ServicesFilterSection from "@/components/services/ServicesFilterSection";

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Serviços IDS"
          subtitle="Formação certificada, segurança eletrónica e soluções técnicas para potenciar pessoas, empresas e operações."
          image="/hero/slide6.png"
          imagePosition="10% 10%"
        />

          {/* Section com filtros por categoria */}
        <ServicesFilterSection />
      </main>
      <Footer />
    </>
  );
}
