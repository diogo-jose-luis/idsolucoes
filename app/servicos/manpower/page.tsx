import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export default function ManpowerPage() {
  const scope = [
    "Profissionais para funções operacionais, técnicas e administrativas",
    "Reforço de equipas em picos de trabalho ou projectos temporários",
    "Equipas fixas ou rotativas conforme necessidade do cliente",
    "Substituição rápida em caso de ausência",
  ];

  const process = [
    "Recrutamento e selecção rigorosa de candidatos",
    "Avaliação técnica e comportamental",
    "Formação inicial e contínua dos colaboradores",
    "Gestão administrativa completa (contratos, salários, assiduidade)",
    "Supervisão e acompanhamento no terreno",
    "Relatórios periódicos ao cliente",
  ];

  const benefits = [
    "Redução de custos fixos com pessoal",
    "Eliminação de encargos administrativos e legais",
    "Flexibilidade total na gestão de equipas",
    "Substituição rápida de colaboradores",
    "Maior foco no core business da empresa",
    "Gestão profissional de recursos humanos",
  ];

  return (
    <main>

      {/* HERO */}
      <section className="is-dark relative overflow-hidden bg-black py-24 text-white md:py-28">
        <div className="pointer-events-none absolute -right-56 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-8">
          <span className="eyebrow mb-6">Serviços IDS</span>

          <h1 className="font-display text-[clamp(42px,5vw,72px)] font-medium leading-[1.05]">
            Manpower
            <span className="gold-text block">
              Cedência de Mão de Obra
            </span>
          </h1>

          <p className="mt-8 max-w-[750px] text-[18px] text-muteddark">
            Soluções completas de outsourcing de recursos humanos, garantindo
            profissionais qualificados, gestão operacional e redução de custos
            para empresas que precisam de flexibilidade e eficiência.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">O Serviço</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.1]">
            Gestão de pessoas
            <span className="gold-text block">
              com eficiência e rigor
            </span>
          </h2>

          <p className="mt-8 max-w-[850px] text-[17px] leading-relaxed text-muted">
            O serviço de Manpower da IDS consiste na disponibilização de profissionais qualificados, em
            regime de outsourcing, para apoiar operações, projectos e picos de actividade dos nossos
            clientes. Assumimos integralmente a selecção, a formação, a supervisão e a gestão
            administrativa dos colaboradores alocados, libertando a empresa cliente dos encargos e riscos
            associados à gestão directa de pessoal.
          </p>

          <h5 className="mt-5 text-[17px] font-bold leading-relaxed text-muted">
            Âmbito do Servico:
          </h5>
          <ul className="mt-3 list-inside list-disc text-[17px] leading-relaxed text-muted">
            <li>Cedência de profissionais para funções operacionais, técnicas e de apoio.</li>
            <li>Reforço de equipas em períodos de maior procura ou em projectos pontuais.</li>
            <li>Equipas fixas, para criar rotinas consolidadas, ou rotativas, para maior flexibilidade.</li>
            <li>Substituição imediata em caso de ausência do colaborador alocado.</li>          
          </ul>

          <h5 className="mt-5 text-[17px] font-bold leading-relaxed text-muted">
            O Nosso Modelo Operacional:
          </h5>
          <ul className="mt-3 list-inside list-disc text-[17px] leading-relaxed text-muted">
            <li><span className="font-bold">Recrutamento e selecção:</span> avaliação técnica e comportamental dos perfis e verificação
                documental rigorosa antes de qualquer alocação</li>
            <li><span className="font-bold">Formação:</span> capacitação inicial e contínua dos colaboradores ao longo do contrato.</li>
            <li><span className="font-bold">Supervisão operacional:</span> acompanhamento no terreno, controlo de qualidade e reporte periódico ao cliente.</li>
            <li><span className="font-bold">Gestão administrativa:</span> processamento salarial, gestão de assiduidade e cumprimento integral das obrigações laborais vigentes em Angola.</li>
          </ul>

          <h5 className="mt-5 text-[17px] font-bold leading-relaxed text-muted">
            Benefícios para o Cliente:
          </h5>
          <ul className="mt-3 list-inside list-disc text-[17px] leading-relaxed text-muted">
            <li>Conversão de custos variáveis de pessoal em custos previsíveis e controlados.</li>
            <li>Mitigação de riscos laborais e de exposição jurídica e administrativa.</li>
            <li>Flexibilidade para aumentar ou reduzir equipas sem peso burocrático.</li>
            <li>Maior foco da empresa cliente no seu negócio principal.</li>          
          </ul>

          {/* Bloco de destaque */}
          <div className="mt-14 border-l-4 border-gold pl-8 max-w-[950px]">

          <h3 className="font-display text-[24px] font-medium text-ink">
            Aplicação Prática
          </h3>

          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            O modelo de Manpower é particularmente vantajoso para funções de apoio recorrente — como limpeza, serviços gerais ou operações
            <span className="font-semibold text-ink">
              {" "}em que a IDS assume toda a gestão da equipa e garante continuidade e conformidade do serviço.
            </span>
          </p>
          </div>      
        </div>
      </section>

      {/* ÂMBITO */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">Âmbito do Serviço</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Soluções flexíveis para
            <span className="gold-text block">
              diferentes necessidades
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {scope.map((item) => (
              <div
                key={item}
                className="group border border-linedark bg-nearblack p-6"
              >
                <div className="mb-4 h-[2px] w-10 bg-gold transition-all duration-300 group-hover:w-20" />

                <p className="text-[15px] text-white group-hover:text-gold transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESSO */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">O nosso modelo</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Processo estruturado
            <span className="gold-text block">
              e profissional
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {process.map((item) => (
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

      {/* BENEFÍCIOS */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">Vantagens</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Porque escolher
            <span className="gold-text block">
              a IDS
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {benefits.map((item) => (
              <div className="border border-linedark bg-nearblack p-6">
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[900px] px-8 text-center">

          <h2 className="font-display text-[clamp(34px,4vw,54px)] font-medium">
            Precisa de reforço na sua
            <span className="gold-text block">
              equipa?
            </span>
          </h2>

          <p className="mt-6 text-muted">
            Fale connosco e receba uma solução de manpower adaptada à sua empresa.
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