import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import PillarCards from "@/components/PillarCards";
import TopHeader from "@/components/TopHeader";



const SLIDES = [
  {
    id: "1",
    image: "/hero/slide1.png",
    title: "Excelência em Soluções Douradas",
    description:
      "Formação & Capital Humano, Serviços Técnicos & Industriais, e Comércio de Combustíveis com padrão IDS.",
    cta: { label: "Fale com a IDS", href: "/contactos" },
    align: "left" as const,
  },
  {
    id: "2",
    image: "/hero/slide2.png",
    title: "Serviços Técnicos & Industriais",
    description:
      "Projetos robustos, segurança e performance para a sua operação.",
    cta: { label: "Conheça nossos serviços", href: "/servicos" },
    align: "center" as const,
  },
  {
    id: "3",
    image: "/hero/slide3.png",
    title: "Comércio de Combustíveis",
    description:
      "Abastecimento confiável e gestão eficiente para empresas em Angola.",
    cta: { label: "Solicitar proposta", href: "/contactos" },
    align: "right" as const,
  },
];

export default function HomePage() {
  return (
    <>
      <TopHeader />
      <Header />
      <main>
        <HeroSlider slides={SLIDES} />

        <PillarCards />
      </main>
    </>
  );
}
