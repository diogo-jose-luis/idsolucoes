// src/app/sobre/page.tsx  (como usar)
import AboutIntroSection from "@/components/about/AboutIntroSection";
import MissionVisionValuesSection from "@/components/about/MissionVisionValuesSection";
import TeamSection from "@/components/about/TeamSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroStats from "@/components/HeroStats";
import PageBanner from "@/components/PageBanner";
import TestimonialsSection from "@/components/about/TestimonialsSection";

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Sobre Nós"
          subtitle="Conheça a IDS — uma equipa focada em formação, serviços técnicos e soluções de abastecimento para suportar o crescimento do seu negócio."
          image="/hero/slide4.png"
        />

        <AboutIntroSection />
        <MissionVisionValuesSection /> {/* ← nova section */}
        <TeamSection />
        <HeroStats overlap={false} className="mt-5 mb-5" />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
