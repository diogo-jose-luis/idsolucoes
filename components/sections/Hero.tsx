import Link from "next/link";

export default function Hero() {
  return (
    <section className="is-dark relative overflow-hidden bg-black py-24 text-white md:py-28">
      
      {/* brilho dourado subtil no canto */}
      <div className="pointer-events-none absolute -right-56 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1240px] items-center gap-16 px-8 md:grid-cols-[1.2fr_0.8fr]">
        
        {/* coluna de texto */}
        <div>
          <span className="eyebrow fade-up mb-6">
            Império Dourado Soluções
          </span>

          <h1 className="mb-6 font-display text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.05] tracking-[-0.015em]">
            <span className="fade-up block" style={{ animationDelay: "0.18s" }}>
              Serviços que capacitam,
            </span>

            <span className="fade-up block" style={{ animationDelay: "0.3s" }}>
              conectam e
            </span>

            <span
              className="fade-up gold-text block"
              style={{ animationDelay: "0.42s" }}
            >
              desenvolvem.
            </span>
          </h1>

          <p
            className="fade-up mb-9 max-w-[520px] text-[18px] text-muteddark"
            style={{ animationDelay: "0.56s" }}
          >
            Empresa angolana de serviços estratégicos. Combinamos tecnologia,
            equipas qualificadas e uma abordagem centrada nas pessoas para
            entregar soluções práticas a cada cliente.
          </p>

          <div
            className="fade-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.7s" }}
          >
            <Link href="/contactos" className="btn btn-fill">
              Pedir levantamento técnico
            </Link>

            <Link href="/servicos" className="btn btn-ghost">
              Ver serviços
            </Link>
          </div>
        </div>

        {/* cartão lateral */}
        <div
          className="fade-in hidden md:block"
          style={{ animationDelay: "0.55s" }}
        >
          <div className="border border-linedark px-8 pb-3 pt-2">
            
            <div className="py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
              Áreas principais
            </div>

            {[
              ["01", "Formação Profissional"],
              ["02", "Segurança Electrónica"],
              ["03", "Manpower & Recrutamento"],
            ].map(([n, t]) => (
              <div
                key={n}
                className="flex items-center gap-4 border-t border-linedark py-[18px] transition-all hover:pl-[7px] hover:text-goldsoft"
              >
                <span className="w-6 font-display text-[14px] text-gold">
                  {n}
                </span>

                <span className="text-[15.5px] font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}