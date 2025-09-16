"use client";
import Container from "./Container";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-black/80 text-white text-sm border-b border-white/10">
      <Container className="flex items-center justify-between h-10">
        {/* ESQUERDA: Localização + telefone */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 text-white/70 hover:text-white transition-colors">
            <MapPin className="h-4 w-4 text-brand-gold" />
            Luanda, Angola
          </span>
          <a
            href="tel:+244923456789"
            className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            +244 923 456 789
          </a>
        </div>

        {/* DIREITA: Social icons */}
        <div className="flex items-center gap-3">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-brand-gold transition-colors"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook text-lg"></i>
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:text-brand-gold transition-colors"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram text-lg"></i>
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className="hover:text-brand-gold transition-colors"
            aria-label="YouTube"
          >
            <i className="bi bi-youtube text-lg"></i>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-brand-gold transition-colors"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin text-lg"></i>
          </Link>
          <Link
            href="https://threads.net"
            target="_blank"
            className="hover:text-brand-gold transition-colors"
            aria-label="Threads"
          >
            <i className="bi bi-threads text-lg"></i>
          </Link>
        </div>
      </Container>
    </div>
  );
}
