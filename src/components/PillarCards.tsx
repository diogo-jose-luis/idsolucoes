"use client";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Pillar = {
  title: string;
  desc: string;
  href: string;
  image: string; // caminho público, ex: /pillars/formacao.jpg
};

const PILLARS: Pillar[] = [
  {
    title: "Formação & Capital Humano",
    desc: "Upskilling, reskilling e programas sob medida para equipas.",
    href: "/servicos#formacao",
    image: "/pillars/formacao.png",
  },
  {
    title: "Serviços Técnicos & Industriais",
    desc: "Execução com qualidade, segurança e prazos.",
    href: "/servicos#industriais",
    image: "/pillars/industriais.png",
  },
  {
    title: "Comércio de Combustíveis",
    desc: "Fornecimento confiável para operações de todos os portes.",
    href: "/servicos#combustiveis",
    image: "/pillars/combustiveis.png",
  },
];

export default function PillarCards() {
  return (
    <section className="py-16 bg-brand-coal border-t border-white/10">
      <Container className="grid gap-6 md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <Link
            key={i}
            href={p.href}
            className="group relative overflow-hidden rounded-2xl gold-ring focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            {/* BG image com efeito hover */}
            <div className="absolute inset-0">
              <Image
                src={p.image}
                alt=""
                fill
                className="object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
                priority={i === 0}
              />
              {/* camada para controlar visibilidade da imagem */}
              <div className="absolute inset-0 bg-black/70 transition-colors duration-300 group-hover:bg-black/45" />
              {/* gradiente sutil para leitura */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
            </div>

            {/* Conteúdo */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10 p-6 md:p-8 h-64 md:h-80 flex flex-col justify-end"
            >
              <h3 className="font-heading text-2xl md:text-3xl gold-text">
                {p.title}
              </h3>
              <p className="mt-2 text-white/85 max-w-[46ch]">{p.desc}</p>

              {/* mini-cta sutil que aparece mais no hover */}
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-gold/90 group-hover:text-brand-gold transition-colors">
                Saber mais
                <svg
                  className="ml-2 h-4 w-4 translate-x-0 opacity-60 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </span>
            </motion.div>
          </Link>
        ))}
      </Container>
    </section>
  );
}
