"use client";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ShoppingCart, FileUser, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "INÍCIO" },
  { href: "/sobre", label: "SOBRE" },
  { href: "/servicos", label: "SERVIÇOS" },
  { href: "/projectos", label: "FORMAÇÕES" },
  { href: "/projectos", label: "COMBUSTIVEIS" },
  { href: "/projectos", label: "PROJECTOS" },
  { href: "/contactos", label: "CONTACTOS" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // trava o scroll quando o menu está aberto
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // já fechas onClick nos links; se quiseres 100%, podes observar pathname:
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[60] backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <Container className="flex h-20 items-center justify-between">
        {/* ESQUERDA */}
        <Logo />

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={clsx(
                "text-sm font-medium text-white/80 hover:text-white transition-colors",
                pathname === item.href && "gold-text"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* AÇÕES DIREITA */}
        <div className="flex items-center gap-2">
          {/* Candidatura (desktop) */}
          <Link
            href="/candidaturas"
            className="hidden md:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
            aria-label="Candidatura Espontânea"
            title="Candidatura Espontânea"
          >
            <FileUser className="h-5 w-5" />
            <span className="hidden lg:inline">Candidatura</span>
          </Link>

          {/* Carrinho (sempre visível) */}
          <Link
            href="/carrinho"
            className="inline-flex items-center justify-center rounded-2xl h-10 w-10 border border-white/10 hover:border-white/20 transition-colors relative"
            aria-label="Carrinho"
            title="Carrinho"
          >
            <ShoppingCart className="h-5 w-5 text-white/90" />
          </Link>

          {/* CTA (desktop) */}
          <Link
            href="/contactos"
            className="hidden md:inline-flex rounded-md bg-brand-gold text-black px-4 py-2 text-sm font-semibold gold-ring"
          >
            Fale Conosco
          </Link>

          {/* HAMBURGUER (mobile) */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 hover:border-white/20"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5 text-white/90" />
          </button>
        </div>
      </Container>

      {/* OVERLAY + PAINEL MOBILE */}
      {/* overlay */}
      <div
        className={clsx(
          "fixed top-0 right-0 z-[60] h-full w-[84%] max-w-xs bg-brand-coal border-l border-white/10 shadow-2xl ring-1 ring-white/10 md:hidden",
          "transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
        onClick={() => setOpen(false)}
      />

      {/* painel */}
      <div
        id="mobile-nav"
        className={clsx(
          "fixed top-0 right-0 z-[60] h-full w-[84%] max-w-xs bg-brand-coal border-l border-white/10 shadow-2xl ring-1 ring-white/10 md:hidden",
          "transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div
          className="flex items-center justify-between px-4 h-16 border-b border-white/10 bg-brand-coal"
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
          <Logo size={28} />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 hover:border-white/20"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5 text-white/90" />
          </button>
        </div>

        <nav className="px-4 py-4 flex flex-col gap-1 bg-brand-coal">
          {NAV.map((item) => (
            <Link
              key={`m-${item.href}-${item.label}`}
              href={item.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "rounded-xl px-3 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/5",
                pathname === item.href && "gold-text"
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link
              href="/candidaturas"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-3 text-sm font-medium border border-white/10 hover:border-white/20"
            >
              <FileUser className="h-5 w-5" />
              CANDIDATURA
            </Link>
            <Link
              href="/contactos"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-brand-gold text-black px-3 py-3 text-sm font-semibold gold-ring text-center"
            >
             FALE CONOSCO
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
