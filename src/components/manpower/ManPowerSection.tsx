// src/components/manpower/ManPowerSection.tsx
"use client";

import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  UserCheck,
  ClipboardList,
  BadgeCheck,
  HardHat,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    title: "Recrutamento & Seleção",
    desc: "Triagem, entrevistas e shortlist de candidatos alinhados ao perfil, cultura e urgência da sua operação.",
    icon: UserCheck,
  },
  {
    title: "Gestão de Efetivos",
    desc: "Acompanhamento de colaboradores, turnos, substituições e reporting operacional com consistência.",
    icon: ClipboardList,
  },
  {
    title: "Terceirização / Outsourcing",
    desc: "Disponibilização de recursos para projetos e operações (curto, médio e longo prazo) com controlo e rigor.",
    icon: Users,
  },
  {
    title: "Conformidade & Documentação",
    desc: "Checklist documental, validação de requisitos, arquivos e rastreabilidade para auditorias e clientes.",
    icon: BadgeCheck,
  },
  {
    title: "HSE & Requisitos de Segurança",
    desc: "Apoio no alinhamento a normas de segurança e requisitos mínimos para entrada em site / operação.",
    icon: ShieldCheck,
  },
  {
    title: "Mão de Obra para Operações",
    desc: "Perfis operacionais para terreno e indústria, com foco em disponibilidade, disciplina e performance.",
    icon: HardHat,
  },
];

const HIGHLIGHTS = [
  "Processo rápido com critérios objetivos",
  "Perfis operacionais e técnicos (conforme necessidade)",
  "Relatórios e visibilidade do pipeline",
  "Apoio documental e conformidade",
];

export default function ManPowerSection() {
  return (
    <section className="relative py-16 md:py-20 bg-brand-surface2/60">
      {/* profundidade sutil */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/35 via-transparent to-transparent" />

      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-goldDark">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            Man Power IDS
          </span>

          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-brand-ink leading-tight">
            Pessoas certas, no tempo certo,
            <br className="hidden sm:block" /> com rigor e{" "}
            <span className="gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.14)]">
              eficiência
            </span>
          </h2>

          <p className="mt-3 max-w-3xl text-sm md:text-base text-brand-ink/75 leading-relaxed">
            Apoiamos empresas com recrutamento, alocação e gestão de recursos
            humanos para operações e projetos, garantindo controlo, compliance e
            qualidade em cada etapa.
          </p>

          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark shadow-[0_10px_24px_rgba(212,175,55,0.16)]" />
        </div>

        {/* Body */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          {/* LEFT: cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl bg-white/85 backdrop-blur border border-black/10 shadow-lg ring-1 ring-black/5 p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-black/5">
                      <Icon className="h-5 w-5 text-brand-gold" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold text-brand-ink text-base md:text-lg">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-brand-ink/70 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 h-px bg-black/10" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-brand-ink/55 uppercase tracking-[0.16em]">
                      IDS • Man Power
                    </span>
                    <span className="text-xs font-semibold text-brand-goldDark">
                      Serviço premium
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: side panel */}
          <aside className="rounded-2xl overflow-hidden bg-white/85 backdrop-blur border border-black/10 shadow-xl ring-1 ring-black/5">
            {/* top accent */}
            <div className="h-[3px] bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark" />

            {/* image header */}
            <div className="relative aspect-[16/10]">
              <Image
                src="/hero/slide6.png"
                alt="Man Power IDS"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/30" />
            </div>

            <div className="p-6 md:p-7">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-ink">
                Como trabalhamos
              </h3>
              <p className="mt-2 text-sm text-brand-ink/75 leading-relaxed">
                Um fluxo simples e controlado para garantir velocidade sem perder
                qualidade: alinhamento do perfil, seleção, validação documental e
                alocação acompanhada.
              </p>

              <div className="mt-5 grid gap-3">
                {HIGHLIGHTS.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold/10">
                      <span className="h-2 w-2 rounded-full bg-brand-gold" />
                    </span>
                    <span className="text-sm text-brand-ink/75">{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-black/10 bg-white/70 p-4">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-black/10 shadow-sm ring-1 ring-black/5">
                    <ShieldCheck className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">
                      Compliance e rastreabilidade
                    </p>
                    <p className="mt-1 text-sm text-brand-ink/70 leading-relaxed">
                      Mantemos controlo de documentos e status do processo para
                      facilitar auditorias e requisitos do cliente.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/contactos" className="btn-gold px-6 py-3 text-sm font-semibold gold-ring text-center">
                  Solicitar proposta
                </Link>
                <Link
                  href="/candidaturas"
                  className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold border border-black/10 bg-white/70 text-brand-ink/85 hover:bg-white transition-colors"
                  style={{ boxShadow: "0 0 0 1px rgba(17,24,39,0.06)" }}
                >
                  Candidatar-se <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-3 text-xs text-brand-ink/55">
                * Podemos adaptar o modelo conforme o setor, localização e SLA.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
