export default function About() {
  return (
    <section className="bg-paper py-24 md:py-28">
      <div className="mx-auto grid max-w-[1240px] items-start gap-16 px-8 md:grid-cols-2">

        {/* Lado esquerdo */}
        <div>
          <span className="eyebrow mb-6 text-ink">
            Quem Somos
          </span>

          <h2 className="mb-6 font-display text-[clamp(34px,4vw,54px)] font-medium leading-[1.1] text-ink">
            Uma empresa focada em
            <span className="gold-text block">
              soluções inteligentes
            </span>
            para negócios modernos.
          </h2>

          <p className="text-[16.5px] leading-relaxed text-muted max-w-[520px]">
            A IDS — Império Dourado Soluções é uma empresa angolana especializada em
            serviços tecnológicos e empresariais. Atuamos com foco em eficiência,
            inovação e resultados práticos, ajudando organizações a crescer com estrutura.
          </p>
        </div>

        {/* Lado direito - cards */}
        <div className="space-y-6">

          {/* Missão */}
          <div className="group relative border border-line bg-white p-6 overflow-hidden">
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(100deg,#9e6e1f,#c99a3a,#f2dd9a,#c99a3a,#9e6e1f)] transition-all duration-500 group-hover:w-full" />

            <h3 className="mb-2 font-display text-[18px] font-medium text-ink">
              Missão
            </h3>

            <p className="text-[15px] text-muted leading-relaxed">
              Fornecer soluções tecnológicas e empresariais que aumentem a eficiência
              e o crescimento sustentável das organizações.
            </p>
          </div>

          {/* Visão */}
          <div className="group relative border border-line bg-white p-6 overflow-hidden">
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(100deg,#9e6e1f,#c99a3a,#f2dd9a,#c99a3a,#9e6e1f)] transition-all duration-500 group-hover:w-full" />

            <h3 className="mb-2 font-display text-[18px] font-medium text-ink">
              Visão
            </h3>

            <p className="text-[15px] text-muted leading-relaxed">
              Ser referência em Angola na transformação digital e consultoria empresarial.
            </p>
          </div>

          {/* Valores */}
          <div className="group relative border border-line bg-white p-6 overflow-hidden">
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(100deg,#9e6e1f,#c99a3a,#f2dd9a,#c99a3a,#9e6e1f)] transition-all duration-500 group-hover:w-full" />

            <h3 className="mb-2 font-display text-[18px] font-medium text-ink">
              Valores
            </h3>

            <p className="text-[15px] text-muted leading-relaxed">
              Excelência, inovação, ética profissional e compromisso com resultados.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}