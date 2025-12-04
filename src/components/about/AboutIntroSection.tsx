// src/components/about/AboutIntroSection.tsx
import Container from "../Container";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutIntroSection() {
  return (
    <section className="bg-brand-coal py-16 md:py-20">
      <Container className="grid gap-12 md:grid-cols-[1.1fr_1fr] items-center">
        
        {/* LADO ESQUERDO – IMAGEM EM BOLHAS */}
        <div className="relative w-full max-w-xl mx-auto">
          {/* círculo principal */}
          <div className="relative w-full aspect-square rounded-[48%] overflow-hidden bg-black/30">
            <Image
              src="/hero/slide4.png"
              alt="Equipa IDS em operação"
              fill
              sizes="(min-width: 1024px) 480px, 100vw" // opcional, mas recomendado
              className="object-cover"
            />
          </div>

          {/* círculo topo-direita */}
          <div className="absolute -right-6 md:-right-10 top-6 md:-top-6 w-32 md:w-40 aspect-square rounded-full overflow-hidden border border-white/10 bg-black/60">
            <Image
              src="/hero/bg-dourado-lg.png"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>

          {/* círculo baixo-esquerda */}
          <div className="absolute -left-6 md:-left-10 bottom-0 md:-bottom-8 w-32 md:w-40 aspect-square rounded-full overflow-hidden border border-white/10 bg-black/60">
            <Image
              src="/hero/bg-dourado-lg.png"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* LADO DIREITO – TEXTO */}
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-gold">
            Confie na IDS
          </span>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Centro de Soluções para o seu{" "}
              <span className="gold-text">Negócio 24/7</span>
            </h2>
            <p className="text-sm md:text-base text-white/70 max-w-xl">
              A IDS combina formação especializada, serviços técnicos e soluções
              de abastecimento para apoiar empresas em todo o ciclo operacional
              — da capacitação da equipa à execução em campo.
            </p>
          </div>

          <div className="space-y-4">
            {/* card 1 */}
            <div className="flex gap-4 rounded-2xl bg-white/5 border border-white/10 px-4 py-4">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Equipa Especializada
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  Profissionais com experiência em formação, operações
                  industriais e gestão de projetos, preparados para desenhar
                  soluções à medida.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex gap-4 rounded-2xl bg-white/5 border border-white/10 px-4 py-4">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Foco em Resultados
                </h3>
                <p className="mt-1 text-sm text-white/70">
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
