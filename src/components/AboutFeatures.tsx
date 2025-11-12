"use client";

import Container from "./Container";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutFeatures() {
  return (
    <section className="relative z-10">
      {/* mesmo fundo do HeroStats */}
      <div className="py-16 md:py-24 border-white/10">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Lado esquerdo: imagem decorativa */}
            <div className="relative">
              <div className="relative aspect-square max-w-[520px] mx-auto">
                <Image
                  src="/hero/slide3.png"
                  alt="Equipe IDS em ação"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
                <span className="absolute -left-6 -top-4 h-24 w-24 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm" />
                <span className="absolute -right-10 top-10 h-36 w-36 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm" />
                <span className="absolute -bottom-6 left-6 h-28 w-28 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm" />
              </div>
            </div>

            {/* Lado direito: conteúdo */}
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 tracking-wide">
                Sobre a nossa empresa
              </div>

              <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
                Parceiro de confiança em{" "}
                <span className="gold-text">soluções empresariais</span> e
                operacionais.
              </h2>

              <p className="mt-4 text-white/70 text-sm md:text-base leading-relaxed max-w-[55ch]">
                Combinamos tecnologia, formação e experiência prática para
                impulsionar negócios em Angola e além. Atuamos com excelência em
                formação profissional, serviços técnicos e gestão de
                combustíveis, ajudando empresas a crescer com segurança e
                eficiência.
              </p>

              <div className="mt-8 space-y-5">
                {/* card 1 */}
                <div className="rounded-xl border border-white/10 bg-[#0C0D10]/90 p-5 shadow-lg">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20">
                      <Check className="h-4 w-4 text-brand-gold" />
                    </span>
                    <div>
                      <h3 className="text-white font-semibold">
                        Formação & Capital Humano
                      </h3>
                      <p className="mt-1 text-sm text-white/70">
                        Desenvolvemos competências técnicas e comportamentais
                        que fortalecem equipas e elevam o desempenho das
                        organizações.
                      </p>
                    </div>
                  </div>
                </div>

                {/* card 2 */}
                <div className="rounded-xl border border-white/10 bg-[#0C0D10]/90 p-5 shadow-lg">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20">
                      <Check className="h-4 w-4 text-brand-gold" />
                    </span>
                    <div>
                      <h3 className="text-white font-semibold">
                        Serviços Técnicos & Industriais
                      </h3>
                      <p className="mt-1 text-sm text-white/70">
                        Oferecemos soluções personalizadas em manutenção,
                        inspeção, automação e suporte técnico com foco em
                        qualidade e segurança.
                      </p>
                    </div>
                  </div>
                </div>

                {/* card 3 */}
                <div className="rounded-xl border border-white/10 bg-[#0C0D10]/90 p-5 shadow-lg">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20">
                      <Check className="h-4 w-4 text-brand-gold" />
                    </span>
                    <div>
                      <h3 className="text-white font-semibold">
                        Comércio de Combustíveis
                      </h3>
                      <p className="mt-1 text-sm text-white/70">
                        Garantimos fornecimento confiável e gestão eficiente de
                        combustíveis para operações industriais e corporativas.
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
