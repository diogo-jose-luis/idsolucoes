// src/components/HeroStats.tsx
"use client";
import Container from "./Container";

const STATS = [
  { value: "34",  label: "Years Experience" },
  { value: "99",  label: "Customer Satisfaction" },
  { value: "184", label: "Team Members" },
  { value: "541", label: "Project Complete" },
];

export default function HeroStats() {
  return (
    <div className="-mt-16 md:-mt-24 relative">
      <Container>
        <div className="rounded-md bg-[#0E0F12]/95 border border-white/10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 py-8 text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl tracking-tight">
                  <span className="gold-text">{s.value}</span>
                </div>
                <div className="mt-2 text-[13px] md:text-sm text-white/70 uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
