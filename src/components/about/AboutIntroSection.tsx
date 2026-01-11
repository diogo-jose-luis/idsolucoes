// src/components/about/AboutIntroSection.tsx
import Container from "../Container";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutIntroSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-surface2/60">
      <Container className="grid gap-12 md:grid-cols-[1.1fr_1fr] items-center">
        {/* LADO ESQUERDO – IMAGEM EM BOLHAS */}
        <div className="relative w-full max-w-xl mx-auto">
          {/* “blob” principal */}
          <div className="relative w-full aspect-square rounded-[48%] overflow-hidden bg-white/70 border border-black/10 shadow-xl ring-1 ring-black/5">
            <Image
              src="/hero/slide4.png"
              alt="Equipa IDS em operação"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />

            {/* véu sutil para premium/legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />
          </div>

          {/* círculo topo-direita */}
          <div className="absolute -right-6 md:-right-10 top-6 md:-top-6 w-32 md:w-40 aspect-square rounded-full overflow-hidden border border-black/10 bg-white/70 shadow-lg ring-1 ring-black/5">
            <Image
              src="/hero/bg-dourado-lg.png"
              alt=""
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white/15" />
          </div>

          {/* círculo baixo-esquerda */}
          <div className="absolute -left-6 md:-left-10 bottom-0 md:-bottom-8 w-32 md:w-40 aspect-square rounded-full overflow-hidden border border-black/10 bg-white/70 shadow-lg ring-1 ring-black/5">
            <Image
              src="/hero/bg-dourado-lg.png"
              alt=""
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white/15" />
          </div>
        </div>

        {/* LADO DIREITO – TEXTO */}
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-goldDark">
            Confie na IDS
          </span>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-ink">
              Centro de Soluções para o seu{" "}
              <span className="gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
                Negócio 24/7
              </span>
            </h2>

            <p className="text-sm md:text-base text-brand-ink/75 max-w-xl leading-relaxed">
              A IDS combina formação especializada, serviços técnicos e{" "}
              <span className="font-semibold text-brand-ink/85">man power</span>{" "}
              para apoiar empresas em todo o ciclo operacional — da capacitação
              da equipa à execução em campo.
            </p>
          </div>

          <div className="space-y-4">
            {/* card 1 */}
            <div className="flex gap-4 rounded-2xl bg-white/85 backdrop-blur border border-black/10 px-4 py-4 shadow-lg ring-1 ring-black/5">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-ink">
                  Equipa Especializada
                </h3>
                <p className="mt-1 text-sm text-brand-ink/70 leading-relaxed">
                  Profissionais com experiência em formação, operações
                  industriais e gestão de projetos, preparados para desenhar
                  soluções à medida.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex gap-4 rounded-2xl bg-white/85 backdrop-blur border border-black/10 px-4 py-4 shadow-lg ring-1 ring-black/5">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-ink">
                  Foco em Resultados
                </h3>
                <p className="mt-1 text-sm text-brand-ink/70 leading-relaxed">
                  Trabalhamos lado a lado com os clientes para garantir impacto
                  real: processos mais eficientes, equipas mais preparadas e
                  operações mais seguras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
