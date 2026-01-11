"use client";

import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowDownToLine,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "Sobre a IDS", href: "/sobre" },
    { label: "Blog & Notícias", href: "/blog" },
    { label: "Projetos", href: "/projectos" },
    { label: "Planos & Propostas", href: "/planos" },
    { label: "Perguntas Frequentes", href: "/faq" },
    { label: "Contactos", href: "/contactos" },
  ],
  services: [
    { label: "Formação & Capital Humano", href: "/servicos/formacao" },
    { label: "Serviços Técnicos & Industriais", href: "/servicos/industriais" },
    { label: "Man Power", href: "/servicos/manpower" },
    { label: "Automação de Processos", href: "/servicos/automacao" },
    { label: "Consultoria & Projetos", href: "/servicos/consultoria" },
    { label: "Qualidade & Segurança", href: "/servicos/qualidade-seguranca" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative">
      {/* linha dourada BEM destacada */}
      <div className="h-[3px] w-full bg-gold-premium" />

      {/* Escuro elegante + “ouro reluzente” suave por trás */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1A1B20] via-[#121318] to-[#0E0F12]">
        {/* brilho dourado animado (bem sutil) */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          {/* glow base */}
          <div className="absolute -top-24 left-1/2 h-80 w-[900px] -translate-x-1/2 rounded-full bg-brand-gold/12 blur-3xl" />

          {/* faixas “sheen” que passam lentamente */}
          <div className="ids-gold-shimmer absolute inset-0" />
        </div>

        {/* borda superior dourada adicional (opcional, reforça) */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-brand-gold/50" />

        <Container>
          <div className="grid gap-10 md:grid-cols-4 py-14">
            {/* Coluna 1 - Logo + texto + sociais */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <Image
                  src="/logoIDStowerAndText.png"
                  alt="IDS — Império Dourado Soluções"
                  width={128}
                  height={64}
                  className="rounded"
                />
              </Link>

              <p className="mt-4 text-sm text-white/70 max-w-xs leading-relaxed">
                Soluções completas para o seu negócio: formação, serviços
                técnicos e{" "}
                <span className="text-white/80 font-semibold">man power</span> —
                com foco em qualidade, segurança e resultados.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <Social href="https://facebook.com">
                  <Facebook className="h-4 w-4" />
                </Social>
                <Social href="https://instagram.com">
                  <Instagram className="h-4 w-4" />
                </Social>
                <Social href="https://www.linkedin.com">
                  <Linkedin className="h-4 w-4" />
                </Social>
                <Social href="https://youtube.com">
                  <Youtube className="h-4 w-4" />
                </Social>
              </div>
            </div>

            {/* Coluna 2 - Sobre */}
            <div>
              <h4 className="text-white font-semibold">Sobre a Empresa</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((l) => (
                  <li key={l.href}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 - Serviços */}
            <div>
              <h4 className="text-white font-semibold">Nossos Serviços</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.services.map((l) => (
                  <li key={l.href}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4 - Materiais / Download */}
            <div>
              <h4 className="text-white font-semibold">Materiais IDS</h4>
              <p className="mt-4 text-sm text-white/70">
                Apresentações, portfólio e brochuras com informações detalhadas
                sobre os nossos serviços.
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="/downloads/IDS-portfolio.pdf"
                  className="inline-flex w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  Portfólio IDS (PDF)
                  <ArrowDownToLine className="h-4 w-4" />
                </a>

                <a
                  href="/downloads/IDS-company-profile.pdf"
                  className="inline-flex w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  Company Profile
                  <ArrowDownToLine className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="border-t border-white/10" />

          {/* Barra inferior */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} IDS — Império Dourado Soluções. Todos
              os direitos reservados.
            </p>
            <nav className="flex items-center gap-5 text-xs">
              <FooterLink href="/termos">Termos de Uso</FooterLink>
              <FooterLink href="/privacidade">Política de Privacidade</FooterLink>
              <FooterLink href="/cookies">Política de Cookies</FooterLink>
            </nav>
          </div>
        </Container>

        {/* CSS da animação (local ao componente) */}
        <style jsx>{`
          .ids-gold-shimmer {
            background-image:
              radial-gradient(
                900px 260px at 18% 45%,
                rgba(212, 175, 55, 0.18),
                transparent 60%
              ),
              radial-gradient(
                700px 240px at 78% 60%,
                rgba(241, 210, 122, 0.14),
                transparent 62%
              ),
              linear-gradient(
                120deg,
                transparent 0%,
                rgba(212, 175, 55, 0.12) 40%,
                transparent 70%
              );
            filter: blur(0px);
            transform: translateX(-20%);
            animation: idsShimmer 6.5s ease-in-out infinite;
            opacity: 0.55;
          }

          @keyframes idsShimmer {
            0% {
              transform: translateX(-22%) translateY(0);
              opacity: 0.35;
            }
            50% {
              transform: translateX(10%) translateY(-6px);
              opacity: 0.55;
            }
            100% {
              transform: translateX(-22%) translateY(0);
              opacity: 0.35;
            }
          }

          /* respeita usuários com reduce motion */
          @media (prefers-reduced-motion: reduce) {
            .ids-gold-shimmer {
              animation: none;
              opacity: 0.25;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-white/75 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

function Social({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 hover:border-white/20 transition-colors"
      aria-label="Rede social"
    >
      {children}
    </Link>
  );
}
