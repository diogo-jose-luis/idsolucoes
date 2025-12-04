// src/components/ComingSoonSection.tsx


import Container from "./Container";
import { LucideIcon, Fuel, FolderKanban } from "lucide-react";

type ComingSoonSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  icon?: LucideIcon;
};

export default function ComingSoonSection({
  eyebrow = "Em desenvolvimento",
  title,
  description,
  bullets = [],
  icon: Icon,
}: ComingSoonSectionProps) {
  // fallback de ícone se não passar nada
  const FallbackIcon = Icon ?? FolderKanban;

  return (
    <section className="relative bg-brand-coal py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />

      <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
        {/* Texto principal */}
        <div className="space-y-6 max-w-xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-gold">
            {eyebrow}
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
            {title}
          </h2>

          <p className="text-sm md:text-base text-white/70">
            {description}
          </p>

          {bullets.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold/10">
                    <span className="h-2 w-2 rounded-full bg-brand-gold" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-6 text-xs md:text-sm text-white/50">
            * Esta área está em fase de compilação de conteúdo e será
            atualizada em breve. Obrigado pela compreensão.
          </p>
        </div>

        {/* Bloco visual */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 shadow-xl shadow-black/40 flex flex-col items-center justify-center text-center gap-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-black/70 border border-white/10">
            <FallbackIcon className="h-8 w-8 text-brand-gold" />
          </div>
          <p className="text-sm md:text-base text-white/70">
            Estamos a organizar informação, portfólios e detalhes técnicos para
            apresentar esta área de forma completa e clara.
          </p>
          <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          <p className="text-xs text-white/40">
            Mantém-te atento às atualizações da IDS.
          </p>
        </div>
      </Container>
    </section>
  );
}
