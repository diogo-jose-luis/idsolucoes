// src/components/PageBanner.tsx
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  image?: string; // fundo customizável por página
};

export default function PageBanner({
  title,
  subtitle,
  image = "/hero/slide4.png", // fallback se não passar nada
}: PageBannerProps) {
  return (
    <section className="relative isolate">
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority={false}
          className="object-cover"
        />
        {/* véu escuro + toque dourado IDS */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
      </div>

      <div className="py-16 md:py-20">
        <Container>
          <div className="space-y-3">
            {/* breadcrumb */}
            <nav
              className="text-xs md:text-sm text-white/60 font-medium"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-brand-gold transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li className="text-white/80">{title}</li>
              </ol>
            </nav>

            {/* título + subtítulo */}
            <div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-sm md:text-base text-white/70 max-w-2xl">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
