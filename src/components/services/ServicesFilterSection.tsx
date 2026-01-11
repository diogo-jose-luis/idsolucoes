// src/components/services/ServicesFilterSection.tsx
"use client";

import { useState } from "react";
import Container from "../Container";
import {
  ShieldCheck,
  GraduationCap,
  Wrench,
  Users,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  services: string[];
  highlightTitle: string;
  highlightText: string;
  highlights: string[];
};

const CATEGORIES: Category[] = [
  {
    id: "formacao",
    label: "Formação & Capital Humano",
    description:
      "Capacitação técnica e comportamental para elevar desempenho e certificações.",
    icon: GraduationCap,
    services: [
      "Formação in-company e aberta ao público",
      "Planos de upskilling e reskilling",
      "Workshops práticos e bootcamps",
      "Certificações e preparação para exames",
      "Formação em SST, Qualidade e Compliance",
      "Avaliação de competências e trilhas de aprendizagem",
    ],
    highlightTitle: "Formação com impacto",
    highlightText:
      "Programas orientados a resultados, com conteúdo prático e acompanhamento para aplicação imediata.",
    highlights: [
      "Diagnóstico e plano de formação",
      "Instrutores com experiência real",
      "Conteúdos ajustados ao teu setor",
      "Relatórios e avaliação pós-formação",
    ],
  },
  {
    id: "industriais",
    label: "Serviços Técnicos & Industriais",
    description:
      "Manutenção, inspeção e suporte técnico com foco em segurança e disponibilidade operacional.",
    icon: Wrench,
    services: [
      "Manutenção preventiva e corretiva",
      "Inspeção técnica e planos de integridade",
      "Comissionamento e apoio operacional",
      "Montagem e suporte em campo",
      "Automação e instrumentação (sob escopo)",
      "Acompanhamento e reporting técnico",
    ],
    highlightTitle: "Operação sempre ativa",
    highlightText:
      "Equipas preparadas para reduzir paragens, melhorar confiabilidade e garantir conformidade de segurança.",
    highlights: [
      "Planeamento e execução em campo",
      "Procedimentos e padrões de segurança",
      "Equipa qualificada e certificada",
      "Registos e evidências de intervenção",
    ],
  },
  {
    id: "manpower",
    label: "Man Power",
    description:
      "Recrutamento, alocação e gestão de equipas para projetos e operações.",
    icon: Users,
    services: [
      "Outsourcing de profissionais por projeto",
      "Mobilização e desmobilização",
      "Gestão documental e conformidade",
      "Controlo de assiduidade e escalas",
      "Gestão de desempenho e supervisão",
      "Substituições e back-to-back (quando aplicável)",
    ],
    highlightTitle: "Pessoas certas, no tempo certo",
    highlightText:
      "Disponibilizamos recursos alinhados ao teu contexto, com processos claros de seleção e gestão.",
    highlights: [
      "Triagem e validação de perfis",
      "Rapidez na mobilização",
      "Conformidade documental",
      "Acompanhamento contínuo",
    ],
  },
  {
    id: "seguranca",
    label: "Segurança Electrónica",
    description:
      "Soluções completas de proteção eletrónica para empresas, condomínios e residências.",
    icon: ShieldCheck,
    services: [
      "CFTV – câmaras de vídeo vigilância",
      "Sistemas de intrusão",
      "Sistemas de incêndio e detecção",
      "Biometria",
      "Controlo de acesso e assiduidade",
      "Cerca eléctrica",
      "Cancelas e barreiras",
      "Catracas e portões automáticos",
    ],
    highlightTitle: "Parceiro em Segurança",
    highlightText:
      "Projetos robustos e escaláveis com equipamentos certificados e integração completa entre sistemas.",
    highlights: [
      "Estudo e dimensionamento da solução",
      "Fornecimento, instalação e configuração",
      "Integração com sistemas existentes",
      "Manutenção e suporte contínuo",
    ],
  },
];

export default function ServicesFilterSection() {
  const [activeId, setActiveId] = useState<string>("seguranca");
  const activeCategory =
    CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  return (
    <section className="relative py-16 md:py-24 bg-brand-surface2/60">
      <Container>
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-goldDark">
            Serviços IDS
          </span>

          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-brand-ink leading-tight">
            Soluções completas para{" "}
            <span className="gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
              pessoas e operações
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm md:text-base text-brand-ink/75 leading-relaxed">
            Explore as nossas áreas de atuação e descubra como a IDS combina
            tecnologia, equipa e execução para entregar resultados reais.
          </p>
        </div>

        {/* Filtros + Conteúdo */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Coluna esquerda: filtros + lista */}
          <div className="space-y-6">
            {/* filtros */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CATEGORIES.map((c) => {
                const active = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveId(c.id)}
                    className={[
                      "group flex items-center justify-center gap-2 rounded-2xl px-3 py-3 text-sm font-semibold border transition-colors",
                      active
                        ? "bg-white border-brand-gold/40 text-brand-ink shadow-lg ring-1 ring-black/5"
                        : "bg-white/60 border-black/10 text-brand-ink/75 hover:bg-white hover:text-brand-ink",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    <c.icon
                      className={[
                        "h-4 w-4",
                        active ? "text-brand-gold" : "text-brand-ink/60",
                      ].join(" ")}
                    />
                    <span className="hidden sm:inline">{c.label}</span>
                    <span className="sm:hidden">
                      {c.label.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Lista de serviços (card claro premium) */}
            <div className="rounded-2xl bg-white/85 backdrop-blur border border-black/10 p-6 md:p-8 shadow-xl ring-1 ring-black/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-black/10 shadow-sm">
                  <activeCategory.icon className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-brand-ink">
                    {activeCategory.label}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-ink/60">
                    {activeCategory.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mt-4">
                {activeCategory.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 text-sm text-brand-ink/80"
                  >
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold/15 ring-1 ring-black/5">
                      <span className="h-2 w-2 rounded-full bg-brand-gold" />
                    </span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="/contactos"
                  className="inline-flex items-center gap-2 text-sm font-semibold gold-text"
                >
                  Pedir proposta <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna direita: destaque (gold premium) */}
          <div className="rounded-2xl bg-gold-premium text-black p-6 md:p-8 shadow-xl shadow-brand-gold/20 gold-ring">
            <h4 className="font-heading text-xl font-bold mb-3">
              {activeCategory.highlightTitle}
            </h4>
            <p className="text-sm mb-4">{activeCategory.highlightText}</p>

            <ul className="space-y-2 text-sm">
              {activeCategory.highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
