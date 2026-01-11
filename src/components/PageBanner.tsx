// src/components/PageBanner.tsx
"use client";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeUp, fadeUpDelayed } from "@/lib/motion";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  image?: string;
  imagePosition?: string; // 👈 NOVO
};


export default function PageBanner({
  title,
  subtitle,
  image = "/hero/slide4.png",
  imagePosition = "center", // 👈 default seguro
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
  style={{ objectPosition: imagePosition }}
/>


        {/* Tema claro: véu branco -> transparente (oblíquo) + toque dourado suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent" />
      </div>

      <div className="py-16 md:py-20">
        <Container>
          <div className="space-y-3">
            {/* breadcrumb */}
            <nav
              className="text-xs md:text-sm text-brand-ink/60 font-medium"
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
                <li className="text-brand-ink/30">/</li>
                <li className="text-brand-ink/80">{title}</li>
              </ol>
            </nav>

            {/* título + subtítulo */}
            <div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-bold font-heading text-3xl md:text-4xl lg:text-5xl block gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
              >
                {title}
              </motion.h1>

              {subtitle && (
                <motion.p
                  variants={fadeUpDelayed(0.15)}
                  initial="hidden"
                  animate="visible"
                  className="mt-2 text-sm md:text-base text-black/80 max-w-2xl leading-relaxed drop-shadow-[0_1px_0_rgba(255,255,255,0.85)]"

                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
