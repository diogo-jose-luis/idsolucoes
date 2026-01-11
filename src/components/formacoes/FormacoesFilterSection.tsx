// src/components/formacoes/FormacoesFilterSection.tsx
"use client";

import { useState } from "react";
import Container from "../Container";
import {
  BriefcaseBusiness,
  Users,
  Megaphone,
  MonitorSmartphone,
  CheckCircle2,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  cursos: string[];
};

const CATEGORIES: Category[] = [
  {
    id: "gestao",
    label: "Gestão & Liderança",
    description:
      "Programas para desenvolvimento de competências de liderança, estratégia e gestão de equipas.",
    icon: BriefcaseBusiness,
    cursos: [
      "Controlo de Gestão",
      "Estratégia Empresarial",
      "Gestão da Formação",
      "Gestão de Pessoas e Equipas",
      "Gestão de Projetos",
      "Gestão Financeira",
      "Gestão de Tempo",
      "Gestão Estratégica de RH",
      "Liderança e Gestão de Equipas",
    ],
  },
  {
    id: "administracao",
    label: "Administração & Secretariado",
    description:
      "Formações para profissionais de secretariado, apoio administrativo e atendimento.",
    icon: Users,
    cursos: [
      "Secretariado Executivo",
      "Legislação Laboral Angolana",
      "Atendimento ao Cliente",
      "Inteligência Emocional",
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Comunicação",
    description: "Capacitação em marketing digital, vendas e comunicação comercial.",
    icon: Megaphone,
    cursos: ["Marketing Digital", "Vendas e Marketing", "Inglês Comercial"],
  },
  {
    id: "tecnologia",
    label: "Tecnologia & Informática",
    description:
      "Cursos práticos em ferramentas de produtividade, BI e sistemas de gestão.",
    icon: MonitorSmartphone,
    cursos: [
      "Excel (Básico a Avançado)",
      "Microsoft Office",
      "Microsoft Power BI",
      "ERP Primavera",
      "Excel – Macros e VBA",
      "Informática na óptica do utilizador",
      "Hardware e redes",
    ],
  },
  {
    id: "qualidade",
    label: "Qualidade, Ambiente & Segurança",
    description: "Formações focadas em segurança operacional, ambiente e qualidade.",
    icon: CheckCircle2,
    cursos: [
      "Detecção de Gás",
      "Espaços Confinados",
      "Higiene e Segurança no Trabalho",
      "Qualidade e Ambiente",
      "Pintura Industrial",
      "Rigging",
      "Logística",
    ],
  },
  {
    id: "programacao",
    label: "Programação",
    description:
      "Fundamentos de programação para diferentes linguagens e perfis técnicos.",
    icon: Code2,
    cursos: [
      "Fundamentos de Programação em Java",
      "Fundamentos de Programação em PHP + MySQL",
      "Fundamentos de Programação em Python",
    ],
  },
];

export default function FormacoesFilterSection() {
  const [activeId, setActiveId] = useState<string>("gestao");
  const activeCategory =
    CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  return (
    <section className="relative py-16 md:py-24 bg-brand-surface2/60">
      <Container>
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-goldDark">
            Formações IDS
          </span>

          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-brand-ink leading-tight">
            Forma-te com excelência,{" "}
            <span className="gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
              desenvolve a tua carreira
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm md:text-base text-brand-ink/75 leading-relaxed">
            Cursos estruturados por áreas de competência para empresas e
            profissionais que pretendem atualizar conhecimento e obter
            certificação reconhecida.
          </p>
        </div>

        {/* Tabs/pills de categoria (tema claro premium) */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeId;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveId(cat.id)}
                className={[
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all border",
                  isActive
                    ? "bg-white border-brand-gold/40 text-brand-ink shadow-lg ring-1 ring-black/5"
                    : "bg-white/60 border-black/10 text-brand-ink/75 hover:bg-white hover:text-brand-ink",
                ].join(" ")}
                aria-pressed={isActive}
              >
                <Icon
                  className={[
                    "h-4 w-4",
                    isActive ? "text-brand-gold" : "text-brand-ink/60",
                  ].join(" ")}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categoria ativa */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Lista de cursos */}
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
              {activeCategory.cursos.map((curso) => (
                <div
                  key={curso}
                  className="flex items-start gap-3 text-sm text-brand-ink/80"
                >
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold/15 ring-1 ring-black/5">
                    <span className="h-2 w-2 rounded-full bg-brand-gold" />
                  </span>
                  <span>{curso}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="/contactos"
                className="inline-flex items-center gap-2 text-sm font-semibold gold-text"
              >
                Pedir informações <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Destaque lateral */}
          <div className="rounded-2xl bg-gold-premium text-black p-6 md:p-8 shadow-xl shadow-brand-gold/20 gold-ring">
            <h4 className="font-heading text-xl font-bold mb-3">
              Certificação & impacto real
            </h4>
            <p className="text-sm mb-4">
              Muitas das nossas formações são alinhadas a referenciais reconhecidos e
              orientadas para aplicação prática no dia-a-dia profissional.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Turmas presenciais e in-company</li>
              <li>• Conteúdos adaptados ao contexto angolano</li>
              <li>• Instrutores com experiência em terreno</li>
              <li>• Possibilidade de planos à medida para empresas</li>
            </ul>

            <div className="mt-5">
              <a
                href="/contactos"
                className="inline-flex items-center gap-2 rounded-xl bg-black/10 hover:bg-black/15 px-4 py-2 text-sm font-semibold transition-colors"
              >
                Falar com a IDS <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
