// src/components/ContactInfoStrip.tsx
import Container from "./../Container";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfoStrip() {
  return (
    <section className="bg-brand-coal border-y border-white/5">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Localização */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-gold/40 bg-brand-coal/60 shadow-lg shadow-brand-gold/10">
              <MapPin className="h-6 w-6 text-brand-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase">
                Nossa Localização
              </h3>
              <p className="mt-2 text-sm text-white/70 max-w-xs">
                3481 Melrose Place, Beverly Hills
                <br />
                CA 90210
              </p>
            </div>
          </div>

          {/* Telefone */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-gold/40 bg-brand-coal/60 shadow-lg shadow-brand-gold/10">
              <Phone className="h-6 w-6 text-brand-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase">
                Telefone
              </h3>
              <p className="mt-2 text-sm text-white/70">
                (+1) 517 397 7100
                <br />
                (+1) 517 397 7500
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-gold/40 bg-brand-coal/60 shadow-lg shadow-brand-gold/10">
              <Mail className="h-6 w-6 text-brand-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase">
                Envie um Email
              </h3>
              <p className="mt-2 text-sm text-white/70">
                info@example.com
                <br />
                admin@example.com
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
