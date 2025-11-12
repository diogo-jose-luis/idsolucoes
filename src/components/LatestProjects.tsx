"use client";

import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  cat: string;
  title: string;
  href: string;
  img: string;
};

const PROJECTS: Project[] = [
  {
    cat: "Formação",
    title: "Capacitação em Segurança no Trabalho",
    href: "/projectos/formacao-seguranca",
    img: "/hero/slide1.png",
  },
  {
    cat: "Soluções Digitais",
    title: "Portal Corporativo & Automação de Processos",
    href: "/projectos/portal-corporativo",
    img: "/hero/slide2.png",
  },
  {
    cat: "Operações",
    title: "Centro de Monitorização Operacional",
    href: "/projectos/monitorizacao",
    img: "/hero/slide3.png",
  },
  {
    cat: "Indústria",
    title: "Manutenção & Inspeção em Data Center",
    href: "/projectos/inspecao-dc",
    img: "/hero/slide4.png",
  },
  {
    cat: "Combustíveis",
    title: "Gestão de Consumo & Abastecimento",
    href: "/projectos/combustiveis-gestao",
    img: "/hero/bg-dourado-lg.png",
  },
];

export default function LatestProjects() {
  // queremos o cartão central (index 1) um pouco mais alto para lembrar o layout
  return (
    <section className="relative">
      <div className="py-16 md:py-24 bg-[#0E0F12]/95 border-t border-white/10">
        <Container>
          {/* header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 tracking-wide">
              Últimos projetos
            </div>
            <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
              Entregamos resultados reais para{" "}
              <span className="gold-text">os nossos clientes</span>
            </h2>
          </div>

          {/* grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <article
                key={p.title}
                className={[
                  "group rounded-3xl overflow-hidden border border-white/10 bg-[#0C0D10]/90",
                  i === 1 ? "md:row-span-2" : "", // destaca o cartão do meio
                ].join(" ")}
              >
                <div
                  className={[
                    "relative",
                    i === 1 ? "aspect-[16/11] md:aspect-[3/4]" : "aspect-[16/11]",
                  ].join(" ")}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={i < 3}
                  />
                </div>

                <div className="px-5 pb-5 pt-4">
                  <div className="text-xs uppercase tracking-wide gold-text">
                    {p.cat}
                  </div>
                  <h3 className="mt-1 text-white font-semibold">
                    {p.title}
                  </h3>

                  <Link
                    href={p.href}
                    className="mt-2 inline-flex items-center gap-2 text-[13px] font-semibold gold-text hover:text-teal-200"
                  >
                    Read more <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/projectos"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 hover:border-white/20 px-5 py-2.5 text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              Ver todos os projetos <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
