// src/app/contactos/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ContactInfoStrip from "@/components/contact/ContactInfoStrip";
import ContactFormSection from "@/components/contact/ContactFormSection";

export default function ContactosPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Contactos"
          subtitle="Fale connosco para formações, serviços técnicos ou soluções à medida para o seu negócio."
          image="/hero/slide9.png"
        />

        <ContactInfoStrip />

        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
