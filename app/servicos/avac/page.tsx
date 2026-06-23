import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export default function AvacPage() {
  const services = [
    "Instalação — montagem e configuração de sistemas de ar condicionado domésticos e industriais.",
    "Manutenção preventiva — limpeza, verificação e afinação periódica para evitar avarias e prolongar a vida útil dos equipamentos.",
    "Manutenção correctiva — diagnóstico e reparação de avarias, com substituição de componentes quando necessário.",
    "Recarga e tratamento de gás — verificação de circuitos e reposição de fluido refrigerante.",
    "Apoio a sistemas de refrigeração — suporte a equipamentos de frio em ambientes comerciais e industriais.",
  ];

  const benefits = [
    "Garante o conforto térmico de colaboradores e visitantes.",
    "Reduz o consumo energético e os custos de operação.",
    "Previne avarias dispendiosas e interrupções de actividade.",
    "Prolonga a vida útil dos equipamentos instalados.",
  ];

  return (
    <main>

      {/* HERO */}
      <section className="is-dark relative overflow-hidden bg-black py-24 text-white md:py-28">
        <div className="pointer-events-none absolute -right-56 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-8">
          <span className="eyebrow mb-6">Serviços IDS</span>

          <h1 className="font-display text-[clamp(42px,5vw,72px)] font-medium leading-[1.05]">
            Manutenção em Sistemas de
            <span className="gold-text block">
              Frio (AVAC)
            </span>
          </h1>

          <p className="mt-8 max-w-[750px] text-[18px] text-muteddark">
            Prestamos serviços de instalação e manutenção de sistemas de ar condicionado e refrigeração,
            com foco em eficiência energética, conforto e longevidade dos equipamentos.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">O Serviço</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.1]">
            Climatização eficiente
            <span className="gold-text block">
              para ambientes modernos
            </span>
          </h2>

          <p className="mt-8 max-w-[900px] text-[17px] leading-relaxed text-muted">
            A IDS presta serviços de instalação e manutenção de sistemas de ar condicionado e
            refrigeração, abrangendo soluções domésticas e industriais. Contamos com pessoal
            especializado que assegura o bom funcionamento, a eficiência energética e a longevidade
            dos equipamentos de climatização das instalações dos nossos clientes.
          </p>

        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">Serviços Disponíveis</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Soluções completas de
            <span className="gold-text block">
              AVAC
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {services.map((item) => (
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

      {/* BENEFÍCIOS */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">Porquê manter os sistemas de frio</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Vantagens da manutenção
            <span className="gold-text block">
              regular
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {benefits.map((item) => (
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

      {/* CONTRATOS */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[900px] px-8 text-center">

          <h2 className="font-display text-[clamp(34px,4vw,54px)] font-medium">
            Contratos de
            <span className="gold-text block">
              manutenção
            </span>
          </h2>

          <p className="mt-6 text-muted">
            A IDS disponibiliza contratos de manutenção periódica que asseguram intervenções programadas,
            resposta prioritária a avarias e previsibilidade de custos ao longo do ano.
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
                  { title: "Formação Profissional", href: "/servicos/formacao-profissional" },
                  { title: "Manutenção de Interiores - Estofos", href: "/servicos/estofos" },
                  { title: "Recrutamento e Selecção", href: "/servicos/recrutamento-seleccao" },
              ]}
              />

    </main>
  );
}