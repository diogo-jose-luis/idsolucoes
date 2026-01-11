// src/app/candidaturas/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import CandidateWizardForm from "@/components/CandidateWizardForm";

export const metadata = {
  title: "Candidaturas — IDS",
  description: "Ficha de candidatura online para oportunidades na IDS.",
};

export default function CandidaturasPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Candidatura"
          subtitle="Formulário oficial de candidatura — preencha os dados para integrar a nossa base de recrutamento."
          image="/hero/slide10.png"
        />

        <CandidateWizardForm />
      </main>
      <Footer />
    </>
  );
}
