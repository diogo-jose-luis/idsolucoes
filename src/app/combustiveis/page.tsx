// src/app/combustiveis/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ComingSoonSection from "@/components/ComingSoonSection";
import { Fuel } from "lucide-react";

export default function CombustiveisPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Combustíveis & Abastecimento"
          subtitle="Estamos a estruturar a área dedicada às soluções de fornecimento e gestão de combustíveis da IDS."
          image="/hero/slide4.png"
        />

        <ComingSoonSection
          title="Área de Combustíveis IDS"
          description="Em breve vais encontrar aqui detalhes sobre fornecimento de combustíveis, soluções de abastecimento para frotas e projetos, bem como serviços associados de controlo e gestão de consumo."
          icon={Fuel}
          bullets={[
            "Descrição dos serviços de fornecimento de combustíveis",
            "Modelos de parceria para empresas e projetos industriais",
            "Informação sobre logística, segurança e compliance",
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
