export default function Services() {
  const services = [
    {
      title: "Desenvolvimento de Software",
      desc: "Criamos sistemas à medida para empresas, focados em eficiência e escalabilidade.",
    },
    {
      title: "Consultoria Tecnológica",
      desc: "Ajudamos empresas a modernizar processos e implementar soluções digitais eficazes.",
    },
    {
      title: "Formação Profissional",
      desc: "Capacitação de equipas em áreas técnicas e operacionais com foco prático.",
    },
    {
      title: "Segurança Electrónica",
      desc: "Soluções de segurança e controlo para empresas e instituições.",
    },
    {
      title: "Recrutamento & Manpower",
      desc: "Fornecimento de profissionais qualificados para diferentes sectores.",
    },
    {
      title: "Gestão de Projetos",
      desc: "Planeamento e execução de projetos empresariais com acompanhamento estratégico.",
    },
  ];

  return (
    <section className="relative bg-black py-24 md:py-28 text-white overflow-hidden">

      {/* brilho dourado subtil (igual ao Hero) */}
      <div className="pointer-events-none absolute -right-56 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-8">

        {/* título da secção */}
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

          <p className="mt-5 max-w-[520px] text-muted text-[16px]">
            Trabalhamos com soluções tecnológicas e empresariais que ajudam organizações a crescer de forma estruturada.
          </p>
        </div>

        {/* grid de serviços */}
        <div className="grid gap-6 md:grid-cols-3">

          {services.map((item, i) => (
            <div
              key={i}
              className="group border border-linedark bg-nearblack p-6 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1"
            >

              {/* linha dourada no hover */}
              <div className="mb-4 h-[2px] w-10 bg-gold transition-all duration-300 group-hover:w-20" />

              <h3 className="mb-3 font-display text-[18px] font-medium text-white group-hover:text-gold transition-colors">
                {item.title}
              </h3>

              <p className="text-muted text-[15px] leading-relaxed group-hover:text-white transition-colors">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}