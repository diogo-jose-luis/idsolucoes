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
    <section className="relative py-16 md:py-24 bg-brand-coal">
      {/* camada suave para profundidade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/40" />

      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* LEFT SIDE — TEXT */}
        <div className="flex flex-col justify-center space-y-6 max-w-lg">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-gold">
            A nossa equipa
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
            A equipa de especialistas<br /> dedicada ao{" "}
            <span className="gold-text">sucesso do seu negócio</span>
          </h2>

          <p className="text-white/70 text-sm md:text-base">
            A IDS reúne profissionais certificados em áreas chave — formação,
            segurança, operações industriais e soluções técnicas — garantindo
            qualidade, confiança e excelência em cada serviço prestado.
          </p>

          <Link
            href="/sobre#equipa"
            className="inline-block btn-gold px-6 py-3 text-sm font-semibold gold-ring mt-4 w-max"
          >
            Ver todos os membros →
          </Link>
        </div>

        {/* RIGHT SIDE — GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={index} className="space-y-3">
              {/* imagem */}
              <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* nome + função */}
              <div className="px-1">
                <h3 className="font-semibold text-white text-lg">
                  {member.name}
                </h3>
                <p className="text-sm text-white/60">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
