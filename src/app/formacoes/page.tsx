// src/app/formacoes/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import FormacoesFilterSection from "@/components/formacoes/FormacoesFilterSection";

export default function FormacoesPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Formações IDS"
          subtitle="Cursos e programas de capacitação para impulsionar a tua carreira e fortalecer as equipas da tua empresa."
          image="/hero/slide8.png"
          imagePosition="10% 40%"
        />

        <FormacoesFilterSection />
      </main>
      <Footer />
    </>
  );
}
