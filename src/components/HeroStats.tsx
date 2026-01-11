// src/components/HeroStats.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Container from "./Container";

type Stat = {
  value: number;
  label: string;
};

const STATS: Stat[] = [
  { value: 4, label: "Anos De Experiência" },
  { value: 20, label: "Satisfação Do Cliente" },
  { value: 20, label: "Colaboradores" },
  { value: 50, label: "Projetos Concluídos" },
];

type HeroStatsProps = {
  /** se true, usa margin negativa para “grudar” no Hero (home) */
  overlap?: boolean;
  className?: string;
};

export default function HeroStats({ overlap = true, className }: HeroStatsProps) {
  const [progress, setProgress] = useState(0); // 0 → 1
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frameId: number;
    const duration = 1300; // ms

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect(); // anima só uma vez

        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          setProgress(p);
          if (p < 1) frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={clsx("relative", overlap ? "-mt-16 md:-mt-24" : "mt-0", className)}
    >
      <Container>
        {/* Card claro premium */}
        <div className="rounded-md bg-white/85 backdrop-blur border border-black/10 shadow-xl ring-1 ring-black/5">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {STATS.map((s) => {
              const current = Math.round(s.value * progress);
              return (
                <div key={s.label} className="px-6 py-8 text-center">
                  <div className="font-heading font-bold text-4xl md:text-5xl tracking-tight">
                    <span className="gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                      {current.toLocaleString("en-US")}
                    </span>
                  </div>

                  <div className="mt-2 text-[13px] md:text-sm text-brand-ink/65 uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
