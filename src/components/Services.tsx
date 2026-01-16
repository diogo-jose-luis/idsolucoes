"use client";

import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    title: "Formação & Capital Humano",
    desc: "Planos de formação técnica e comportamental, upskilling e certificações para equipas de alta performance.",
    href: "/formacoes",
    img: "/hero/slide4.png",
  },
  {
    title: "Serviços Técnicos & Industriais",
    desc: "Manutenção, inspeção, automação e suporte operacional com foco em qualidade, segurança e resultados.",
    href: "/servicos",
    img: "/hero/slide2.png",
  },
  {
    title: "Man Power",
    desc: "Disponibilização de profissionais qualificados para operações e projetos, com rapidez, conformidade e foco em resultados.",
    href: "/man-power",
    img: "/hero/slide1.png",
  },
];

export default function Services() {
  return (
    <section className="relative">
      {/* fundo claro premium */}
      <div className="py-16 md:py-24 bg-brand-surface2/60 border-t border-black/10">
        <Container>
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-ink/70 tracking-wide">
                Nossos serviços
              </div>

              <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-brand-ink">
                O que fazemos para{" "}
                <span className="gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
                  o seu negócio
                </span>
              </h2>
            </div>

            <Link
              href="/servicos"
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-black/10 hover:border-black/20 bg-white/60 hover:bg-white/85 px-4 py-2 text-sm font-semibold text-brand-ink/80 hover:text-brand-ink transition-colors"
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
                className="group rounded-3xl overflow-hidden border border-black/10 bg-white/80 backdrop-blur shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-shadow"
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

                  {/* véu sutil no fundo da imagem para “luxo” */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent opacity-70" />
                </div>

                <div className="p-6">
                  <h3 className="text-brand-ink text-xl font-semibold">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-brand-ink/70 text-sm leading-relaxed">
                    {s.desc}
                  </p>

                  <Link
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold gold-text"
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
              className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/60 px-4 py-2 text-sm font-semibold text-brand-ink/80"
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
