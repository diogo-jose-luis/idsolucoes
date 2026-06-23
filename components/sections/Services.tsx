import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Segurança Electrónica",
      desc: "Protecção integrada de instalações com tecnologia de ponta.",
      href: "/servicos/seguranca-electronica",
    },
    {
      title: "Manpower (Cedência de Mão de Obra)",
      desc: "Profissionais qualificados em regime de outsourcing.",
      href: "/servicos/manpower",
    },
    {
      title: "Formação Profissional",
      desc: "Capacitação técnica e comportamental de equipas para diversos sectores.",
      href: "/servicos/formacao-profissional",
    },
    {
      title: "Manutenção em Sistemas de Frio (AVAC)",
      desc: "Climatização e refrigeração doméstica e industrial.",
      href: "/servicos/avac",
    },
    {
      title: "Suporte Técnico Especializado",
      desc: "Assistência a equipamentos e sistemas.",
      href: "/servicos/suporte-tecnico",
    },
    {
      title: "Manutenção de Interiores de Viaturas — Estofos",
      desc: "Recuperação e tratamento de estofos automóveis.",
      href: "/servicos/estofos",
    },
    {
      title: "Recrutamento & Selecção",
      desc: "Identificação e contratação dos perfis certos.",
      href: "/servicos/recrutamento-seleccao",
    },
  ];

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-black py-24 text-white md:py-28"
    >
      {/* brilho dourado subtil */}
      <div className="pointer-events-none absolute -right-56 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-8">
        
        {/* Cabeçalho */}
        <div className="mb-14">
          <span className="eyebrow fade-up mb-6">
            O que fazemos
          </span>

          <h2 className="font-display text-[clamp(34px,4vw,54px)] font-medium leading-[1.1]">
            Soluções pensadas para
            <span className="gold-text block">
              resultados reais
            </span>
          </h2>

          <p className="mt-5 max-w-[520px] text-[16px] text-muted">
            Trabalhamos com soluções tecnológicas e empresariais que ajudam
            organizações a crescer de forma estruturada.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-linedark bg-nearblack p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              {/* Linha dourada */}
              <div className="mb-4 h-[2px] w-10 bg-gold transition-all duration-300 group-hover:w-20" />

              <h3 className="mb-3 font-display text-[18px] font-medium text-white transition-colors group-hover:text-gold">
                {item.title}
              </h3>

              <p className="text-[15px] leading-relaxed text-muted transition-colors group-hover:text-white">
                {item.desc}
              </p>

              <div className="mt-6 text-[13px] font-medium uppercase tracking-[0.15em] text-gold">
                Saber mais →
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}