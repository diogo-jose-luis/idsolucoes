// src/components/services/ServicesFilterSection.tsx
"use client";

import { useState } from "react";
import Container from "../Container";
import { ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  services: string[];
};

const CATEGORIES: Category[] = [
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
  },
  // quando tiveres outros serviços (consultoria, outsourcing, etc.) é só adicionar aqui.
];

export default function ServicesFilterSection() {
  const [activeId, setActiveId] = useState<string>("seguranca");
  const activeCategory =
    CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  return (
    <section className="relative bg-brand-coal py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />

      <Container>
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-gold">
            Serviços IDS
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
            Soluções de segurança<br className="hidden md:block" /> para o seu
            património
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-white/70">
            Proteja o que é seu com tecnologia de ponta e integração completa
            entre sistemas de vigilância, controlo de acesso e automação.
          </p>
        </div>

        {/* (se, no futuro, houver mais categorias de serviço, os filtros voltam a aparecer) */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Lista de serviços */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 shadow-lg shadow-black/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/60 border border-white/10">
                <activeCategory.icon className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {activeCategory.label}
                </h3>
                <p className="text-xs md:text-sm text-white/60">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mt-4">
              {activeCategory.services.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold/10">
                    <span className="h-2 w-2 rounded-full bg-brand-gold" />
                  </span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Destaque lateral */}
          <div className="rounded-2xl bg-gradient-to-br from-brand-gold/90 to-amber-500 text-black p-6 md:p-8 shadow-xl shadow-brand-gold/30">
            <h4 className="font-heading text-xl font-bold mb-3">
              Parceiro em Segurança
            </h4>
            <p className="text-sm mb-4">
              Trabalhamos com equipamentos certificados e parceiros
              internacionais, garantindo projetos de segurança eletrónica
              robustos e escaláveis.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Estudo e dimensionamento de solução</li>
              <li>• Fornecimento, instalação e configuração</li>
              <li>• Integração com sistemas existentes</li>
              <li>• Manutenção e suporte contínuo</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
