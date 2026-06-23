import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export default function SuporteTecnicoPage() {
  const scope = [
    "Assistência a equipamentos e sistemas — apoio técnico a sistemas de segurança electrónica, climatização e demais equipamentos instalados.",
    "Manutenção preventiva — verificações periódicas para antecipar e evitar falhas.",
    "Manutenção correctiva — diagnóstico e resolução de avarias com rapidez de resposta.",
    "Apoio em tecnologias de informação — suporte ao funcionamento de equipamentos informáticos e sistemas associados.",
    "Aconselhamento técnico — recomendações para optimização, actualização e bom uso dos equipamentos.",
  ];

  const model = [
    "Intervenções pontuais, mediante solicitação do cliente.",
    "Contratos de assistência com intervenções programadas e resposta prioritária.",
    "Acompanhamento e reporte das intervenções realizadas.",
  ];

  return (
    <main>

      {/* HERO */}
      <section className="is-dark relative overflow-hidden bg-black py-24 text-white md:py-28">
        <div className="pointer-events-none absolute -right-56 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-8">
          <span className="eyebrow mb-6">Serviços IDS</span>

          <h1 className="font-display text-[clamp(42px,5vw,72px)] font-medium leading-[1.05]">
            Suporte Técnico
            <span className="gold-text block">
              Especializado
            </span>
          </h1>

          <p className="mt-8 max-w-[750px] text-[18px] text-muteddark">
            Garantimos o bom funcionamento dos sistemas e equipamentos dos nossos clientes,
            com actuação preventiva e correctiva para assegurar continuidade operacional.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">O Serviço</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.1]">
            Suporte integrado
            <span className="gold-text block">
              e contínuo
            </span>
          </h2>

          <p className="mt-8 max-w-[900px] text-[17px] leading-relaxed text-muted">
            Disponibilizamos serviços de suporte técnico especializado, destinados a garantir o bom
            funcionamento dos equipamentos e sistemas dos nossos clientes. A nossa equipa actua de forma
            preventiva e correctiva, minimizando interrupções de actividade e assegurando a continuidade
            das operações.
          </p>

        </div>
      </section>

      {/* ÂMBITO */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">Âmbito do Suporte</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Apoio técnico
            <span className="gold-text block">
              completo
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {scope.map((item) => (
              <div
                key={item}
                className="group border border-linedark bg-nearblack p-6 transition-all duration-300 hover:border-gold/40"
              >
                <div className="mb-4 h-[2px] w-10 bg-gold transition-all duration-300 group-hover:w-20" />

                <p className="text-[15px] leading-relaxed text-muteddark group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* MODELO */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">Modelo de Prestação</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Serviço flexível
            <span className="gold-text block">
              e adaptado
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {model.map((item) => (
              <div
                key={item}
                className="border border-line bg-white p-6"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* VANTAGEM */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[900px] px-8 text-center">

          <h2 className="font-display text-[clamp(34px,4vw,54px)] font-medium">
            Vantagem para o
            <span className="gold-text block">
              cliente
            </span>
          </h2>

          <p className="mt-6 text-muted">
            Ao centralizar o suporte técnico na IDS, a empresa cliente passa a dispor de um parceiro único,
            com conhecimento das suas instalações e capacidade de resposta integrada a vários tipos de equipamento.
          </p>

          <div className="mt-10">
            <Link href="/#contactos" className="btn btn-fill">
              Solicitar Suporte
            </Link>
          </div>

        </div>
      </section>
      <RelatedServices
        links={[
          { title: "Manpower", href: "/servicos/manpower" },
          { title: "Formação Profissional", href: "/servicos/formacao-profissional" },
          { title: "Segurança Electrónica", href: "/servicos/seguranca-electronica" },
          { title: "AVAC - Manutenção em Sistemas de Frio", href: "/servicos/avac" },
          { title: "Manutenção de Interiores - Estofos", href: "/servicos/estofos" },
          { title: "Recrutamento e Selecção", href: "/servicos/recrutamento-seleccao" },
        ]}
      />

    </main>
  );
}