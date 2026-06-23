export default function About() {
  return (
    <section 
      id="sobre"
      className="bg-paper py-24 md:py-15"
    >
      <div className="mx-auto grid max-w-[1240px] items-start gap-16 px-8 md:grid-cols-2">

        {/* Lado esquerdo */}
        <div>
          <span className="eyebrow mb-6 text-ink">
            Sobre nós
          </span>
         
          <p className="text-[16.5px] leading-relaxed text-muted max-w-[520px] mb-6">
            A IDS — Império Dourado Soluções é uma empresa angolana de prestação de serviços estratégicos,
            com actuação nas áreas de segurança electrónica, cedência de mão de obra (manpower),
            formação profissional, manutenção técnica e suporte especializado.
          </p>

          <p className="text-[16.5px] leading-relaxed text-muted max-w-[520px] mb-6">
            A nossa missão é capacitar pessoas e transformar o mercado angolano através de soluções práticas,
            humanas e sustentáveis.
          </p>
          
          {/* PORQUÊ A IDS */}
<div className="mt-8">
  <h3 className="font-display text-[18px] font-medium text-ink mb-4">
    Porquê a IDS
  </h3>

  <ul className="space-y-3 text-[15px] text-muted leading-relaxed">
    <li>
      • Equipa jovem e altamente qualificada — profissionais especializados e em formação contínua.
    </li>
    <li>
      • Parcerias sólidas — colaboração com instituições nacionais e internacionais e com fabricantes de referência.
    </li>
    <li>
      • Conhecimento do contexto local — domínio profundo do talento e da realidade do mercado angolano.
    </li>
    <li>
      • Flexibilidade — capacidade de actuar em diversos sectores e de adaptar a solução a cada cliente.
    </li>
    <li>
      • Visão de longo prazo — foco em sustentabilidade e em relações de parceria duradouras.
    </li>
  </ul>
</div>
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
              Capacitar talentos locais e transformar o mercado angolano com soluções inovadoras, humanas e sustentáveis.
            </p>
          </div>

          {/* Visão */}
          <div className="group relative border border-line bg-white p-6 overflow-hidden">
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(100deg,#9e6e1f,#c99a3a,#f2dd9a,#c99a3a,#9e6e1f)] transition-all duration-500 group-hover:w-full" />

            <h3 className="mb-2 font-display text-[18px] font-medium text-ink">
              Visão
            </h3>

            <p className="text-[15px] text-muted leading-relaxed">
              Ser uma referência nacional em serviços estratégicos, contribuindo activamente para o desenvolvimento de Angola.
            </p>
          </div>

          {/* Valores */}
          <div className="group relative border border-line bg-white p-6 overflow-hidden">
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(100deg,#9e6e1f,#c99a3a,#f2dd9a,#c99a3a,#9e6e1f)] transition-all duration-500 group-hover:w-full" />

            <h3 className="mb-2 font-display text-[18px] font-medium text-ink">
              Valores
            </h3>

            <div className="flex flex-wrap gap-2 text-muted text-[14px]">
              {[
                "Confiança",
                "Excelência",
                "Inovação",
                "Desenvolvimento humano",
                "Sustentabilidade",
                "Parceria",
                "Adaptabilidade",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    border border-line
                    px-3 py-1 text-[13px]
                    transition-all duration-300
                    hover:border-gold hover:text-gold
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}