"use client";

import { Fragment } from "react";
import clsx from "clsx";
import type { CSSProperties } from "react";

// agora focado em Segurança de Património / Segurança Electrónica
const ITEMS = [
  "CFTV — câmaras de vídeo vigilância",
  "Sistemas de intrusão",
  "Sistemas de incêndio e detecção",
  "Biometria",
  "Controlo de acesso e assiduidade",
  "Cerca eléctrica",
  "Cancelas e barreiras",
  "Catracas e portões automáticos",
];

// tipo para permitir a CSS var --speed
type MarqueeStyle = CSSProperties & { ["--speed"]?: string };

export default function MarqueeBar({
  className,
  speed = 28, // segundos por ciclo
}: {
  className?: string;
  speed?: number;
}) {
  const track = [...ITEMS, ...ITEMS];

  // estilo compartilhado, sem any
  const trackStyle: MarqueeStyle = { ["--speed"]: `${speed}s` };

  return (
    <section
      className={clsx(
        "relative w-full select-none",
        "bg-gold text-black",
        "border-y border-black/10 shadow-[inset_0_1px_0_rgba(0,0,0,.08)]",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
          style={{ maskImage: "linear-gradient(to right, black, transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
          style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
        />

        <div className="relative flex">
          <ul
            className="marquee-track whitespace-nowrap flex items-center gap-10 py-3 md:py-4 font-semibold tracking-wide"
            style={trackStyle}
          >
            {track.map((item, i) => (
              <Fragment key={i}>
                <li className="inline-flex items-center gap-3">
                  <span className="italic">*{item}*</span>
                </li>
              </Fragment>
            ))}
          </ul>

          {/* segunda faixa para o loop contínuo */}
          <ul
            aria-hidden="true"
            className="marquee-track whitespace-nowrap flex items-center gap-10 py-3 md:py-4 font-semibold tracking-wide"
            style={trackStyle}
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
