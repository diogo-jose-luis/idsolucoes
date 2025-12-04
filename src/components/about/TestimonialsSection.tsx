// src/components/about/TestimonialsSection.tsx
import Container from "../Container";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "James Clayton",
    role: "Diretor de Operações",
    text: "A IDS ajudou-nos a estruturar as formações e a operação em campo com muito mais clareza. Sentimos melhorias reais na performance da equipa.",
  },
  {
    name: "James Simmons",
    role: "Gestor de Projetos",
    text: "Processos mais organizados, reporting mais claro e uma equipa sempre disponível para apoiar. Tornou-se um parceiro estratégico para o nosso negócio.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-brand-coal py-16 md:py-24">
      {/* véu leve para profundidade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />

      <Container>
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-gold">
            Top reviews
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
            Veja o feedback dos<br className="hidden sm:block" /> nossos clientes
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 relative">
          {/* linha vertical central no desktop, só estética */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-white/10 -translate-x-1/2 pointer-events-none" />

          {TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="relative pl-6 md:pl-0 md:pr-6"
            >
              {/* barra lateral esquerda, estilo do print */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-0" />

              <div className="md:ml-6 space-y-4">
                {/* aspas + estrelas */}
                <div className="space-y-2">
                  <Quote className="h-8 w-8 text-brand-gold" />
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-brand-gold text-brand-gold"
                      />
                    ))}
                  </div>
                </div>

                {/* texto */}
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {item.text}
                </p>

                {/* nome */}
                <div className="pt-2">
                  <p className="text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-white/60">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* indicador em barras (pager fake) */}
        <div className="mt-10 flex justify-center gap-2">
          <span className="h-0.5 w-10 rounded-full bg-white/20" />
          <span className="h-0.5 w-10 rounded-full bg-brand-gold" />
          <span className="h-0.5 w-10 rounded-full bg-white/20" />
        </div>
      </Container>
    </section>
  );
}
