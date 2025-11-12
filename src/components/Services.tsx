"use client";

import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    title: "Formação & Capital Humano",
    desc:
      "Planos de formação técnica e comportamental, upskilling e certificações para equipas de alta performance.",
    href: "/servicos/formacao",
    img: "/hero/slide4.png", // troque pelo teu asset
  },
  {
    title: "Serviços Técnicos & Industriais",
    desc:
      "Manutenção, inspeção, automação e suporte operacional com foco em qualidade, segurança e resultados.",
    href: "/servicos/industriais",
    img: "/hero/slide2.png",
  },
  {
    title: "Combustíveis & Logística",
    desc:
      "Abastecimento confiável, gestão de consumo e soluções logísticas que mantêm operações sempre ativas.",
    href: "/servicos/combustiveis",
    img: "/hero/slide1.png",
  },
];

export default function Services() {
  return (
    <section className="relative">
      {/* mesmo fundo do bloco anterior */}
      <div className="py-16 md:py-24 bg-[#0E0F12]/95 border-t border-white/10">
        <Container>
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 tracking-wide">
                Nossos serviços
              </div>
              <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
                O que fazemos para{" "}
                <span className="gold-text">o seu negócio</span>
              </h2>
            </div>

            <Link
              href="/servicos"
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/10 hover:border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              Ver todos os serviços
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-[#0C0D10]/90"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority={false}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    {s.desc}
                  </p>

                  <Link
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold gold-text hover:gold-text-200"
                  >
                    Saber mais
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA mobile */}
          <div className="mt-8 sm:hidden">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm font-semibold text-white/90"
            >
              Ver todos os serviços
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
