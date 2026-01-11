// src/components/about/TeamSection.tsx
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  const team = [
    { name: "William Smith", role: "Brand designer", image: "/team/user1.jpeg" },
    { name: "David Bell", role: "Marketer", image: "/team/user2.jpeg" },
    { name: "Kevin Woods", role: "Product designer", image: "/team/user3.jpg" },
    { name: "Georgia James", role: "Developer", image: "/team/user4.jpg" },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-brand-ivory">
      {/* fundo diferente do AboutIntro: papel/ivory com detalhe dourado sutil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-brand-surface2/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/7 via-transparent to-transparent" />
      </div>

      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* LEFT SIDE — TEXT */}
        <div className="flex flex-col justify-center space-y-6 max-w-lg">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-goldDark">
            A nossa equipa
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-ink leading-tight">
            A equipa de especialistas
            <br /> dedicada ao{" "}
            <span className="gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
              sucesso do seu negócio
            </span>
          </h2>

          <p className="text-brand-ink/75 text-sm md:text-base leading-relaxed">
            A IDS reúne profissionais certificados em áreas chave — formação,
            segurança, operações industriais e soluções técnicas — garantindo
            qualidade, confiança e excelência em cada serviço prestado.
          </p>

          <Link
            href="/sobre#equipa"
            className="inline-block btn-gold px-6 py-3 text-sm font-semibold gold-ring mt-2 w-max"
          >
            Ver todos os membros →
          </Link>
        </div>

        {/* RIGHT SIDE — GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={index} className="space-y-3">
              {/* card imagem */}
              <div className="group relative w-full h-48 md:h-56 rounded-2xl overflow-hidden border border-black/10 bg-white/80 backdrop-blur shadow-lg ring-1 ring-black/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {/* véu leve para acabamento premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-70" />
              </div>

              {/* nome + função */}
              <div className="px-1">
                <h3 className="font-semibold text-brand-ink text-lg">
                  {member.name}
                </h3>
                <p className="text-sm text-brand-ink/60">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
