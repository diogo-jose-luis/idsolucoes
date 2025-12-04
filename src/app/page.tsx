// src/app/page.tsx
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import HeroStats from "@/components/HeroStats";
import AboutFeatures from "@/components/AboutFeatures";
import Services from "@/components/Services";
import MarqueeBar from "@/components/MarqueeBar";
import LatestProjects from "@/components/LatestProjects";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <HeroStats overlap={true} />
        <AboutFeatures />
        <MarqueeBar /> {/* fica lindo entre Services e o próximo bloco */}
        <Services /> {/* ← novo bloco */}
        <LatestProjects /> {/* ← novo bloco */}
        <Footer /> {/* ← novo bloco */}
      </main>
    </>
  );
}
