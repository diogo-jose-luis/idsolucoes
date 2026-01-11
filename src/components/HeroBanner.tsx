// src/components/HeroBanner.tsx
"use client";

import Container from "./Container";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative isolate">
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/slide5.png"
          alt=""
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "80% center" }}
        />

        {/* Clarear o hero (tema claro): véu suave + gradiente elegante */}
        <div className="absolute inset-0 bg-white/0" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/100 via-white/50 to-transparent" />

        {/* toque dourado MUITO leve (opcional, mas ajuda a “amarrar” com o brand) */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent" />
      </div>

      {/* Altura quase cheia */}
      <div className="min-h-[92vh] md:min-h-[95vh] flex items-center">
        <Container>
          <div className="max-w-3xl">
            <p className="font-sans font-semibold text-brand-goldDark tracking-wide">
              IDS — Excelência & Confiabilidade
            </p>

            <h1 className="mt-2 font-heading font-bold uppercase text-brand-ink text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              A Melhor Equipa de
              <span className="block gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.70)]">
                Soluções para o seu Negócio
              </span>
            </h1>

            <p className="mt-4 text-brand-ink/95 max-w-[60ch] leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]">
              Formação & Capital Humano, Serviços Técnicos & Industriais e Man Power.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Link href="/contactos" className="btn-gold">
                Fale com a IDS
              </Link>

              {/* outline claro premium (sem “sumir” no fundo) */}
              <Link
                href="/sobre#video"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors border border-black/15 bg-white/100 text-brand-ink/85 hover:bg-black/100 hover:text-brand-goldDark"
                style={{ boxShadow: "0 0 0 1px rgba(17,24,39,0.06)" }}
              >
                <Play className="h-5 w-5" />
                Ver vídeo
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
