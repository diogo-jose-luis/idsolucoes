import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export default function FormacaoProfissionalPage() {
  const types = [
    "Formação técnica — desenvolvimento de competências práticas associadas a funções e operações específicas.",
    "Formação comportamental — reforço de competências transversais como comunicação, liderança, trabalho em equipa e atendimento.",
    "Formação corporativa personalizada (in-company) — programas desenhados à medida e realizados nas instalações do cliente ou em local a combinar.",
    "Upskilling e certificações — actualização de competências e preparação para certificações reconhecidas.",
  ];

  const objectives = [
    "Aumentar a produtividade e o desempenho das equipas.",
    "Preparar os colaboradores para desafios específicos da função.",
    "Reforçar competências essenciais à competitividade da organização.",
    "Promover a valorização e a motivação do capital humano.",
  ];

  return (
    <main>

      {/* HERO */}
      <section className="is-dark relative overflow-hidden bg-black py-24 text-white md:py-28">
        <div className="pointer-events-none absolute -right-56 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-8">
          <span className="eyebrow mb-6">Serviços IDS</span>

          <h1 className="font-display text-[clamp(42px,5vw,72px)] font-medium leading-[1.05]">
            Formação
            <span className="gold-text block">
              Profissional
            </span>
          </h1>

          <p className="mt-8 max-w-[750px] text-[18px] text-muteddark">
            Desenvolvemos programas de formação técnica e comportamental,
            adaptados às necessidades específicas de cada cliente, com foco
            em produtividade, competências e crescimento sustentável.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">O Serviço</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.1]">
            Capacitação estruturada
            <span className="gold-text block">
              para equipas de alto desempenho
            </span>
          </h2>

          <p className="mt-8 max-w-[900px] text-[17px] leading-relaxed text-muted">
            Desenvolvemos programas de formação técnica e comportamental, adaptados às necessidades
            específicas de cada cliente. As acções de formação são concebidas para aumentar a
            produtividade, preparar equipas para desafios concretos e reforçar as competências-chave
            que sustentam a competitividade das organizações.
          </p>

          {/* TIPOS */}
          <h5 className="mt-10 text-[17px] font-bold leading-relaxed text-muted">
            Tipos de formação
          </h5>

          <ul className="mt-3 list-inside list-disc text-[17px] leading-relaxed text-muted">
            {types.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* OBJECTIVOS */}
          <h5 className="mt-10 text-[17px] font-bold leading-relaxed text-muted">
            Objectivos das nossas formações
          </h5>

          <ul className="mt-3 list-inside list-disc text-[17px] leading-relaxed text-muted">
            {objectives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* PROCESSO */}
          <h5 className="mt-10 text-[17px] font-bold leading-relaxed text-muted">
            Como trabalhamos
          </h5>

          <p className="mt-4 text-[17px] leading-relaxed text-muted max-w-[900px]">
            As formações são realizadas em parceria com instituições de ensino de referência e
            ministradas por formadores experientes. O processo inclui o diagnóstico de necessidades,
            a concepção do programa, a execução das sessões e a avaliação dos resultados, assegurando
            que o investimento em formação se traduz em ganhos concretos.
          </p>

          {/* FORTIS / ISO */}
          <div className="mt-14 border-l-4 border-gold pl-8 max-w-[950px]">
            <h3 className="font-display text-[22px] font-medium text-ink">
              Sistema de Gestão de Formação FORTIS
            </h3>

            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              A IDS dispõe de um sistema de gestão profissional de formação denominado
              <span className="font-semibold text-ink"> FORTIS</span>, baseado em princípios de qualidade
              e alinhado com a norma <span className="font-semibold text-ink">ISO9001</span>,
              garantindo organização, controlo e melhoria contínua dos processos formativos.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[900px] px-8 text-center">

          <h2 className="font-display text-[clamp(34px,4vw,54px)] font-medium">
            Quer elevar as competências da sua<span className="gold-text block"> equipa? </span>
          </h2>

          <p className="mt-6 text-muted">
            Fale connosco e desenvolva um programa de formação adaptado à sua organização.
          </p>

          <div className="mt-10">
            <Link href="/#contactos" className="btn btn-fill">
              Solicitar Proposta
            </Link>
          </div>

        </div>
      </section>
      <RelatedServices
        links={[
            { title: "Suporte Técnico Especializado", href: "/servicos/suporte-tecnico" },
            { title: "Manpower", href: "/servicos/manpower" },
            { title: "Segurança Electrónica", href: "/servicos/seguranca-electronica" },
            { title: "AVAC - Manutenção em Sistemas de Frio", href: "/servicos/avac" },
            { title: "Manutenção de Interiores - Estofos", href: "/servicos/estofos" },
            { title: "Recrutamento e Selecção", href: "/servicos/recrutamento-seleccao" },
        ]}
        />
    </main>
  );
}