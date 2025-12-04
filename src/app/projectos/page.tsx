// src/app/projectos/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ComingSoonSection from "@/components/ComingSoonSection";
import { FolderKanban } from "lucide-react";

export default function ProjectosPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Projetos IDS"
          subtitle="Portfólio de projetos, estudos de caso e resultados alcançados junto aos nossos clientes."
          image="/hero/slide4.png"
        />

        <ComingSoonSection
          title="Portfólio de Projetos em Preparação"
          description="Estamos a organizar os principais projetos realizados pela IDS nas áreas de formação, segurança eletrónica, consultoria e soluções técnicas, para que possas visualizar melhor o nosso impacto no terreno."
          icon={FolderKanban}
          bullets={[
            "Estudos de caso por setor de atividade",
            "Principais desafios, soluções implementadas e resultados",
            "Depoimentos de clientes e indicadores de impacto",
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
