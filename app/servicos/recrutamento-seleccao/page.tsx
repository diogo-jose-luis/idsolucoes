import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export default function RecrutamentoSelecaoPage() {
  const process = [
    "Levantamento do perfil — definição, em conjunto com o cliente, dos requisitos técnicos e comportamentais da função.",
    "Divulgação e atracção de candidatos — pesquisa activa e divulgação das oportunidades junto dos canais adequados.",
    "Triagem e avaliação — análise curricular, entrevistas e avaliação técnica e comportamental dos candidatos.",
    "Verificação documental — confirmação de dados e conformidade legal dos perfis seleccionados.",
    "Apresentação de finalistas — entrega ao cliente de uma lista curta de candidatos com parecer fundamentado.",
  ];

  const benefits = [
    "Redução do tempo e do esforço associados ao processo de contratação.",
    "Maior assertividade na escolha, diminuindo o risco de contratações inadequadas.",
    "Acesso a uma base alargada de candidatos e ao conhecimento do mercado local.",
    "Processo estruturado, transparente e documentado.",
  ];

  return (
    <main>

      {/* HERO */}
      <section className="is-dark relative overflow-hidden bg-black py-24 text-white md:py-28">
        <div className="pointer-events-none absolute -right-56 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-8">
          <span className="eyebrow mb-6">Serviços IDS</span>

          <h1 className="font-display text-[clamp(42px,5vw,72px)] font-medium leading-[1.05]">
            Recrutamento &
            <span className="gold-text block">
              Selecção
            </span>
          </h1>

          <p className="mt-8 max-w-[750px] text-[18px] text-muteddark">
            A IDS apoia as empresas na identificação, avaliação e contratação dos profissionais certos,
            combinando conhecimento do mercado angolano com processos rigorosos de avaliação.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">O Serviço</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.1]">
            Contratação eficiente
            <span className="gold-text block">
              e alinhada à cultura da empresa
            </span>
          </h2>

          <p className="mt-8 max-w-[900px] text-[17px] leading-relaxed text-muted">
            O nosso serviço de Recrutamento & Selecção combina o conhecimento do mercado de trabalho
            angolano com processos rigorosos de avaliação, garantindo candidatos alinhados com os
            requisitos técnicos e com a cultura da organização.
          </p>

        </div>
      </section>

      {/* PROCESSO */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">O que fazemos</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Processo de
            <span className="gold-text block">
              recrutamento
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {process.map((item) => (
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

          <span className="eyebrow mb-6">Vantagens do serviço</span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Porque escolher
            <span className="gold-text block">
              a IDS
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {benefits.map((item) => (
              <div className="border border-line bg-white p-6">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* COMPLEMENTARIDADE */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[900px] px-8 text-center">

          <h2 className="font-display text-[clamp(34px,4vw,54px)] font-medium">
            Complementaridade com o
            <span className="gold-text block">
              Manpower
            </span>
          </h2>

          <p className="mt-6 text-muted">
            O serviço de Recrutamento & Selecção pode ser contratado de forma isolada,
            para integração directa de colaboradores nos quadros do cliente, ou em articulação
            com o serviço de Manpower, quando a IDS assume também a gestão dos profissionais.
          </p>

          <div className="mt-10">
            <Link href="/#contactos" className="btn btn-fill">
              Falar com a IDS
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
                { title: "Suporte Técnico Especializado", href: "/servicos/suporte-tecnico" },
              ]}
            />

    </main>
  );
}