import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export default function SegurancaElectronicaPage() {
  const solutions = [
  {
    title: "CFTV — Videovigilância",
    desc: "Câmaras de vigilância e sistemas de gravação para monitorização permanente de espaços interiores e exteriores.",
  },
  {
    title: "Sistemas de Intrusão",
    desc: "Detecção de acessos não autorizados através de sensores e centrais de alarme.",
  },
  {
    title: "Sistemas de Detecção de Incêndio",
    desc: "Detectores, centrais e sinalização para alerta precoce e protecção de vidas e património.",
  },
  {
    title: "Biometria",
    desc: "Identificação por impressão digital ou reconhecimento facial para controlo rigoroso de acessos.",
  },
  {
    title: "Controlo de Acessos e Assiduidade",
    desc: "Gestão de entradas e saídas e registo automático de presenças de colaboradores.",
  },
  {
    title: "Cerca Eléctrica",
    desc: "Protecção perimetral dissuasora para reforço da segurança das instalações.",
  },
  {
    title: "Cancelas e Barreiras",
    desc: "Controlo automatizado da circulação de viaturas em parques e acessos.",
  },
  {
    title: "Catracas e Portões Automáticos",
    desc: "Gestão ordenada do fluxo de pessoas e veículos.",
  },
];

  return (
    <main>

      {/* HERO */}
      <section className="is-dark relative overflow-hidden bg-black py-24 text-white md:py-28">

        <div className="pointer-events-none absolute -right-56 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">
            Serviços IDS
          </span>

          <h1 className="font-display text-[clamp(42px,5vw,72px)] font-medium leading-[1.05]">
            Segurança
            <span className="gold-text block">
              Electrónica
            </span>
          </h1>

          <p className="mt-8 max-w-[700px] text-[18px] text-muteddark">
            Soluções completas de protecção para empresas, condomínios,
            instituições e residências, utilizando tecnologia moderna,
            equipamentos certificados e projectos adaptados à realidade
            de cada cliente.
          </p>
        </div>

      </section>

      {/* INTRODUÇÃO */}
      <section className="bg-paper py-24">

        <div className="mx-auto max-w-[1240px] px-8">

          <div className="max-w-[850px]">

            <span className="eyebrow mb-6">
              O Serviço
            </span>

            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.1]">
              Protecção inteligente
              <span className="gold-text block">
                para pessoas e património
              </span>
            </h2>

            <p className="mt-8 text-[17px] leading-relaxed text-muted">
              Disponibilizamos soluções completas de segurança electrónica para
              empresas, condomínios, instituições e residências, com o objectivo
              de proteger pessoas, bens e instalações através de tecnologia
              fiável e devidamente integrada.
            </p>
            <h5 className="mt-5 text-[17px] font-bold leading-relaxed text-muted">
            Como Trabalhamos:
            </h5>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Trabalhamos com equipamentos certificados e com fabricantes de
              referência, assegurando projectos robustos, escaláveis e adequados
              a cada realidade, e fazemos: 
              <ul className="mt-3 list-inside list-disc text-[17px] leading-relaxed text-muted">
                <li>Estudo e dimensionamento da solução adequada a cada espaço.</li>
                <li>Fornecimento, instalação e configuração dos equipamentos.</li>
                <li>Integração com sistemas já existentes nas instalações.</li>
                <li>Manutenção preventiva e correctiva e suporte técnico contínuo.</li>
              </ul>
            </p>

          </div>

        </div>

      </section>

      {/* SOLUÇÕES */}
      <section className="bg-black py-24 text-white">

        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">
            Soluções Disponíveis
          </span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Tecnologias que reforçam
            <span className="gold-text block">
              a segurança do seu negócio
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {solutions.map((item) => (
            <div
          key={item.title}
          className="group border border-linedark bg-nearblack p-6 transition-all duration-300 hover:border-gold/40"
        >
          <div className="mb-4 h-[2px] w-10 bg-gold transition-all duration-300 group-hover:w-20" />

          <h3 className="mb-4 font-display text-[20px] text-white transition-colors group-hover:text-gold">
            {item.title}
          </h3>

          <p className="text-[15px] leading-relaxed text-muteddark transition-colors group-hover:text-white">
            {item.desc}
          </p>
        </div>
      ))}
          </div>

        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-paper py-24">

        <div className="mx-auto max-w-[1240px] px-8">

          <span className="eyebrow mb-6">
            Vantagens
          </span>

          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium">
            Porque escolher
            <span className="gold-text block">
              a IDS
            </span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {[
              "Equipamentos certificados e fabricantes de referência",
              "Projectos adaptados à realidade de cada cliente",
              "Equipa técnica especializada",
              "Instalação, configuração e suporte contínuo",
              "Soluções escaláveis para empresas e residências",
              "Maior protecção de pessoas, património e operações",
            ].map((item) => (
              <div
                key={item}
                className="border border-line bg-white p-6"
              >
                {item}
              </div>
            ))}

          </div>

        {/* Bloco de destaque */}
        <div className="mt-14 border-l-4 border-gold pl-8 max-w-[950px]">

        <h3 className="font-display text-[24px] font-medium text-ink">
          Vantagem para o cliente
        </h3>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Uma única empresa responsável por todo o ciclo do projecto —
          desde o estudo inicial até à manutenção — garantindo
          <span className="font-semibold text-ink">
            {" "}coerência técnica, rapidez de resposta e um único ponto de contacto.
          </span>
        </p>
        </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-black py-24 text-white">

        <div className="mx-auto max-w-[900px] px-8 text-center">

          <h2 className="font-display text-[clamp(34px,4vw,54px)] font-medium">
            Precisa de uma solução de
            <span className="gold-text block">
              Segurança Electrónica?
            </span>
          </h2>

          <p className="mt-6 text-muted">
            Solicite um levantamento técnico e receba uma proposta adaptada
            às necessidades da sua organização.
          </p>

          <div className="mt-10">
            <Link
              href="/#contactos"
              className="btn btn-fill"
            >
              Pedir Levantamento Técnico
            </Link>
          </div>

        </div>

      </section>
      <RelatedServices
  links={[
    { title: "Manpower", href: "/servicos/manpower" },
    { title: "Formação Profissional", href: "/servicos/formacao-profissional" },
    { title: "Suporte Técnico Especializado", href: "/servicos/suporte-tecnico" },
    { title: "AVAC - Manutenção em Sistemas de Frio", href: "/servicos/avac" },
    { title: "Manutenção de Interiores - Estofos", href: "/servicos/estofos" },
    { title: "Recrutamento e Selecção", href: "/servicos/recrutamento-seleccao" },
  ]}
/>

    </main>
  );
}