// src/app/man-power/page.tsx  (ou idealmente: src/app/servicos/manpower/page.tsx)
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ManPowerSection from "@/components/manpower/ManPowerSection";

export default function ManPowerPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Man Power IDS"
          subtitle="Soluções de recrutamento, seleção e gestão de recursos humanos para empresas de diversos setores."
          image="/hero/slide7.png"
        />

        <ManPowerSection />
        
      </main>
      <Footer />
    </>
  );
}
