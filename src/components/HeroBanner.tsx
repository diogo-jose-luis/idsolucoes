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
          src="/hero/slide4.png"
          alt=""
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "80% center" }}
        />
        {/* camada escura sobre a imagem */}
        <div className="absolute inset-0 bg-black/30" />{" "}
        {/* ← opacidade ajustável */}
        {/* véu dourado opcional (mantém teu degradê existente) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />
      </div>

      {/* Altura quase cheia */}
      <div className="min-h-[92vh] md:min-h-[95vh] flex items-center">
        <Container>
          <div className="max-w-3xl">
            <p className="font-sans font-semibold text-brand-gold/90 tracking-wide">
              IDS — Excelência & Confiabilidade
            </p>

            <h1
              className="mt-2 font-heading font-bold uppercase
                           text-4xl sm:text-5xl md:text-6xl leading-[1.05]"
            >
              A Melhor Equipa de
              <span className="block gold-text">
                Soluções para o seu Negócio
              </span>
            </h1>

            <p className="mt-4 text-white/80 max-w-[60ch]">
              Formação & Capital Humano, Serviços Técnicos & Industriais e
              Comércio de Combustíveis.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Link href="/contactos" className="btn-gold">
                Fale com a IDS
              </Link>
              <Link href="/sobre#video" className="btn-gold-outline">
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
