import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export default function EstofosPage() {
  const services = [
    "Limpeza profunda de estofos — higienização de bancos e revestimentos em tecido, pele ou material sintético.",
    "Recuperação de estofos — reparação de desgaste, rasgões e danos nos revestimentos.",
    "Tratamento de superfícies interiores — limpeza e conservação de painéis, tablier e demais componentes.",
    "Renovação do interior — intervenção integral para devolver ao habitáculo um aspecto cuidado.",
  ];

  const audience = [
    "Empresas com frotas de viaturas que pretendam preservar o valor e a imagem dos veículos.",
    "Empresas de transporte e de aluguer de viaturas.",
    "Clientes particulares que valorizem o conforto e a apresentação do automóvel.",
  ];

  const benefits = [
    "Preservação do valor patrimonial das viaturas.",
    "Maior conforto e higiene para condutores e passageiros.",
    "Imagem cuidada da frota, com impacto na percepção da empresa.",
  ];

  return (
    <main>

      {/* HERO */}
      <section className="is-dark relative overflow-hidden bg-black py-24 text-white md:py-28">
        <div className="pointer-events-none absolute -right-56 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-8">
          <span className="eyebrow mb-6">Serviços IDS</span>

          <h1 className="font-display text-[clamp(42px,5vw,72px)] font-medium leading-[1.05]">
            Interiores de Viaturas
            <span className="gold-text block">
              Estofos
            </span>
          </h1>

          <p className="mt-8 max-w-[750px] text-[18px] text-muteddark">
            Recuperação e manutenção de interiores automóveis com foco em conforto,
            higiene e preservação do valor das viaturas.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">O Serviço</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.1]">
            Interior automóvel
            <span className="gold-text block">
              renovado e cuidado
            </span>
          </h2>

          <p className="mt-8 max-w-[900px] text-[17px] leading-relaxed text-muted">
            A IDS presta serviços de manutenção e recuperação de interiores de viaturas,
            com especial incidência no tratamento de estofos. Este serviço destina-se a
            empresas com frotas automóveis, bem como a clientes particulares, e tem como
            objectivo recuperar o aspecto, o conforto e a higiene do interior dos veículos.
          </p>

        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">Serviços Disponíveis</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Soluções completas para
            <span className="gold-text block">
              interiores automóveis
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-2">

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

      {/* DESTINATÁRIOS */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">A quem se destina</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Para empresas e
            <span className="gold-text block">
              particulares
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {audience.map((item) => (
              <div className="border border-line bg-white p-6">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">Benefícios</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Vantagens do
            <span className="gold-text block">
              serviço
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
            Quer renovar o interior da sua
            <span className="gold-text block">
              viatura?
            </span>
          </h2>

          <p className="mt-6 text-muted">
            Fale connosco e receba uma proposta adaptada às suas necessidades.
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
                  { title: "Formação Profissional", href: "/servicos/formacao-profissional" },
                  { title: "Recrutamento e Selecção", href: "/servicos/recrutamento-seleccao" },
              ]}
              />
    </main>
  );
}