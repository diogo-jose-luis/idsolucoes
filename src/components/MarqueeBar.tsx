"use client";

import { Fragment } from "react";
import clsx from "clsx";

const ITEMS = [
  "Formação & Capital Humano",
  "Serviços Técnicos & Industriais",
  "Combustíveis & Logística",
  "Automação de Processos",
  "Consultoria & Projetos",
  "Qualidade & Segurança",
];

export default function MarqueeBar({
  className,
  speed = 28, // segundos por ciclo
}: {
  className?: string;
  speed?: number;
}) {
  // duplicamos o conteúdo para loop contínuo
  const track = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-label="Capacidades IDS"
      className={clsx(
        "relative w-full select-none",
        "bg-brand-gold text-black", // barra dourada + texto preto
        "border-y border-black/10 shadow-[inset_0_1px_0_rgba(0,0,0,.08)]",
        className
      )}
    >
      {/* máscara nas bordas para um fade suave */}
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
          style={{ maskImage: "linear-gradient(to right, black, transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
          style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
        />

        {/* faixa (2 tracks iguais para o loop) */}
        <div className="relative flex">
          <ul
            className="marquee-track whitespace-nowrap flex items-center gap-10 py-10 font-semibold tracking-wide"
            style={
              {
                // velocidade controlada por CSS variable
                ["--speed" as any]: `${speed}s`,
              } as React.CSSProperties
            }
          >
            {track.map((item, i) => (
              <Fragment key={i}>
                <li className="inline-flex items-center gap-3">
                  <span className="italic">*{item}*</span>
                </li>
              </Fragment>
            ))}
          </ul>

          {/* segunda faixa para preencher o espaço e evitar “salto” */}
          <ul
            aria-hidden="true"
            className="marquee-track whitespace-nowrap flex items-center gap-10 py-3 font-semibold tracking-wide"
            style={
              {
                ["--speed" as any]: `${speed}s`,
              } as React.CSSProperties
            }
          >
            {track.map((item, i) => (
              <Fragment key={`ghost-${i}`}>
                <li className="inline-flex items-center gap-3">
                  <span className="italic">*{item}*</span>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      </div>

      {/* estilos da animação */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marquee var(--speed) linear infinite;
          will-change: transform;
        }
        /* respeita prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
