// src/components/AboutFeatures.tsx
"use client";

import Container from "./Container";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutFeatures() {
  return (
    <section className="relative z-10">
      <div className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Lado esquerdo: imagem decorativa */}
            <div className="relative">
              <div className="relative aspect-square max-w-[520px] mx-auto">
                <Image
                  src="/hero/slide4.png"
                  alt="Equipe IDS em ação"
                  fill
                  className="object-cover rounded-full"
                  priority
                />

                {/* bolhas decorativas (tema claro) */}
                <span className="absolute -left-6 -top-4 h-24 w-24 rounded-full border border-black/10 bg-white/55 backdrop-blur-sm shadow-sm" />
                <span className="absolute -right-10 top-10 h-36 w-36 rounded-full border border-black/10 bg-white/55 backdrop-blur-sm shadow-sm" />
                <span className="absolute -bottom-6 left-6 h-28 w-28 rounded-full border border-black/10 bg-white/55 backdrop-blur-sm shadow-sm" />
              </div>
            </div>

            {/* Lado direito: conteúdo */}
            <div>
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-ink/70 tracking-wide">
                Sobre a nossa empresa
              </div>

              <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-brand-ink">
                Parceiro de confiança em{" "}
                <span className="gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
                  soluções empresariais
                </span>{" "}
                e operacionais.
              </h2>

              <p className="mt-4 text-brand-ink/75 text-sm md:text-base leading-relaxed max-w-[55ch]">
                Combinamos tecnologia, formação e experiência prática para
                impulsionar negócios em Angola e além. Atuamos com excelência em
                formação profissional, serviços técnicos e{" "}
                <span className="font-semibold text-brand-ink/85">
                  man power
                </span>
                , ajudando empresas a crescer com segurança e eficiência.
              </p>

              <div className="mt-8 space-y-5">
                {/* card 1 */}
                <div className="rounded-xl border border-black/10 bg-white/85 backdrop-blur p-5 shadow-lg ring-1 ring-black/5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20">
                      <Check className="h-4 w-4 text-brand-gold" />
                    </span>
                    <div>
                      <h3 className="text-brand-ink font-semibold">
                        Formação & Capital Humano
                      </h3>
                      <p className="mt-1 text-sm text-brand-ink/70">
                        Desenvolvemos competências técnicas e comportamentais
                        que fortalecem equipas e elevam o desempenho das
                        organizações.
                      </p>
                    </div>
                  </div>
                </div>

                {/* card 2 */}
                <div className="rounded-xl border border-black/10 bg-white/85 backdrop-blur p-5 shadow-lg ring-1 ring-black/5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20">
                      <Check className="h-4 w-4 text-brand-gold" />
                    </span>
                    <div>
                      <h3 className="text-brand-ink font-semibold">
                        Serviços Técnicos & Industriais
                      </h3>
                      <p className="mt-1 text-sm text-brand-ink/70">
                        Oferecemos soluções personalizadas em manutenção,
                        inspeção, automação e suporte técnico com foco em
                        qualidade e segurança.
                      </p>
                    </div>
                  </div>
                </div>

                {/* card 3 (substitui combustíveis por Man Power) */}
                <div className="rounded-xl border border-black/10 bg-white/85 backdrop-blur p-5 shadow-lg ring-1 ring-black/5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20">
                      <Check className="h-4 w-4 text-brand-gold" />
                    </span>
                    <div>
                      <h3 className="text-brand-ink font-semibold">
                        Man Power
                      </h3>
                      <p className="mt-1 text-sm text-brand-ink/70">
                        Disponibilizamos profissionais qualificados para apoiar
                        operações, projetos e picos de demanda, com rapidez,
                        conformidade e foco em resultados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a href="/servicos" className="btn-gold">
                  Conhecer serviços
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
