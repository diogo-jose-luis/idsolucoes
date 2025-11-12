// src/components/TopHeader.tsx
"use client";
import Container from "./Container";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-brand-black/95 text-[12px] border-b border-white/10">
      <Container className="flex items-center justify-between h-9">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
            <MapPin className="h-4 w-4 text-brand-gold" />
            Luanda, Angola
          </span>
          <a
            href="tel:+244923456789"
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            +244 923 456 789
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-brand-gold transition-colors">
            <i className="bi bi-facebook text-[15px]"></i>
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-brand-gold transition-colors">
            <i className="bi bi-instagram text-[15px]"></i>
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-brand-gold transition-colors">
            <i className="bi bi-linkedin text-[15px]"></i>
          </Link>
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube" className="hover:text-brand-gold transition-colors">
            <i className="bi bi-youtube text-[15px]"></i>
          </Link>
        </div>
      </Container>
    </div>
  );
}
