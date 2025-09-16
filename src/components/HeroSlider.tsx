"use client";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";
import clsx from "clsx";

type Slide = {
  id: string;
  image: string; // /hero/slide1.jpg
  title: string; // curto
  description: string; // objetivo
  cta?: { label: string; href: string };
  align?: "left" | "center" | "right";
};

export default function HeroSlider({
  slides,
  options = { loop: true },
}: {
  slides: Slide[];
  options?: EmblaOptionsType;
}) {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, idx) => (
            <div className="relative min-w-0 flex-[0_0_100%]" key={s.id}>
              {/* Background image */}
              <div className="relative h-[72vh] sm:h-[78vh]">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  priority={idx === 0}
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/30" />{" "}
                {/* overlay leve */}
                {/* overlay escuro para contraste */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
              </div>

              {/* Texto */}
              <div className="absolute inset-0 flex">
                <Container
                  className={clsx(
                    "relative z-10 my-auto",
                    s.align === "center" && "flex justify-center text-center",
                    s.align === "right" && "flex justify-end text-right"
                  )}
                >
                  <AnimatePresence mode="wait">
                    {selected === idx && (
                      <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-2xl"
                      >
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-tight gold-text">
                          {s.title}
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-white/80">
                          {s.description}
                        </p>
                        {s.cta && (
                          <Button asChild href={s.cta.href} className="mt-6">
                            {s.cta.label}
                          </Button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Container>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0">
        <Container className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={clsx(
                "h-2 w-2 rounded-full transition-all",
                i === selected ? "bg-brand-gold w-8" : "bg-white/40"
              )}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </Container>
      </div>
    </section>
  );
}
