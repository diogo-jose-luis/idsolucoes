// src/components/about/MissionVisionValuesSection.tsx
"use client";

import Container from "../Container";
import {
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  BadgeCheck,
  Lightbulb,
  Users,
  Leaf,
  Handshake,
  Shuffle,
} from "lucide-react";

const VALUES = [
  { label: "Confiança", icon: ShieldCheck },
  { label: "Excelência", icon: BadgeCheck },
  { label: "Inovação", icon: Lightbulb },
  { label: "Desenvolvimento Humano", icon: Users },
  { label: "Sustentabilidade", icon: Leaf },
  { label: "Parceria", icon: Handshake },
  { label: "Adaptabilidade", icon: Shuffle },
];

export default function MissionVisionValuesSection() {
  return (
    <section className="relative py-16 md:py-20 bg-brand-surface2/60">
      {/* profundidade suave (igual vibe do AboutIntro) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/35 via-transparent to-transparent" />

      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-goldDark">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            Quem somos
          </span>

          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-brand-ink leading-tight">
            Estratégia, pessoas e execução
            <br className="hidden sm:block" /> com{" "}
            <span className="gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.14)]">
              impacto real
            </span>
          </h2>

          <p className="mt-3 max-w-3xl text-sm md:text-base text-brand-ink/75 leading-relaxed">
            A IDS é uma empresa angolana de prestação de serviços estratégicos,
            com actuação nas áreas de <strong>formação</strong>,{" "}
            <strong>serviços técnicos</strong> e <strong>man power</strong>.
            Trabalhamos para capacitar pessoas e fortalecer operações com
            soluções práticas, humanas e sustentáveis.
          </p>

          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark shadow-[0_10px_24px_rgba(212,175,55,0.16)]" />
        </div>

        {/* Cards: Missão & Visão */}
        <div className="grid gap-6 lg:grid-cols-2 items-stretch">
          {/* Missão */}
          <div className="rounded-2xl bg-white/85 backdrop-blur border border-black/10 shadow-lg ring-1 ring-black/5 p-7">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-black/5">
                <Target className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-ink">
                  Missão
                </h3>
                <p className="mt-2 text-sm md:text-base text-brand-ink/75 leading-relaxed">
                  Capacitar talentos locais e transformar o mercado angolano com
                  soluções inovadoras, humanas e sustentáveis.
                </p>
              </div>
            </div>

            <div className="mt-6 h-px bg-black/10" />

            <p className="mt-4 text-xs text-brand-ink/55 uppercase tracking-[0.16em]">
              IDS • compromisso com pessoas
            </p>
          </div>

          {/* Visão */}
          <div className="rounded-2xl bg-white/85 backdrop-blur border border-black/10 shadow-lg ring-1 ring-black/5 p-7">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-black/5">
                <Eye className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-ink">
                  Visão
                </h3>
                <p className="mt-2 text-sm md:text-base text-brand-ink/75 leading-relaxed">
                  Ser uma referência nacional em serviços estratégicos,
                  contribuindo activamente para o desenvolvimento de Angola.
                </p>
              </div>
            </div>

            <div className="mt-6 h-px bg-black/10" />

            <p className="mt-4 text-xs text-brand-ink/55 uppercase tracking-[0.16em]">
              IDS • crescimento sustentável
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-8 rounded-2xl bg-white/85 backdrop-blur border border-black/10 shadow-xl ring-1 ring-black/5 p-7">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-ink">
              Valores
            </h3>
            <span className="text-xs text-brand-ink/55 uppercase tracking-[0.16em]">
              o que guia a nossa cultura
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-4 py-3"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-black/10 shadow-sm ring-1 ring-black/5">
                    <Icon className="h-5 w-5 text-brand-gold" />
                  </span>
                  <span className="text-sm font-semibold text-brand-ink">
                    {v.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
