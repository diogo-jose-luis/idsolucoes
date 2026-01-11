// src/components/contact/ContactInfoStrip.tsx
import Container from "../Container";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfoStrip() {
  return (
    <section className="relative bg-brand-surface2/60 border-y border-black/10">
      {/* detalhe sutil (profundidade) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-transparent to-transparent" />

      <Container className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <InfoCard
            icon={<MapPin className="h-6 w-6 text-brand-gold" />}
            title="Nossa Localização"
            lines={["Miramar, ilha de Luanda", "Angola"]}
          />

          <InfoCard
            icon={<Phone className="h-6 w-6 text-brand-gold" />}
            title="Telefone"
            lines={["+244 929 826 391", "929 826 387", "929 826 357"]}

            links={[
              { label: "+244 929 826 391", href: "tel:+244929826391" },
              { label: "929 826 387", href: "tel:+244929826387" },
              { label: "929 826 357", href: "tel:+244929826357" },
            ]}
          />

          <InfoCard
            icon={<Mail className="h-6 w-6 text-brand-gold" />}
            title="Envie um Email"
            lines={["sales@idsolicoes.ao"]}
            links={[
              { label: "sales@idsolicoes.ao", href: "mailto:sales@idsolicoes.ao" },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  lines,
  links,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  links?: { label: string; href: string }[];
}) {
  return (
    <div className="rounded-2xl bg-white/85 backdrop-blur border border-black/10 shadow-lg ring-1 ring-black/5 p-6 md:p-7 text-center">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-black/5">
        {icon}
      </div>

      <h3 className="mt-4 text-xs font-semibold tracking-[0.16em] uppercase text-brand-ink/70">
        {title}
      </h3>

      <div className="mt-2 space-y-1 text-sm text-brand-ink/75">
        {(links?.length ? links : lines.map((l) => ({ label: l, href: "" }))).map(
          (item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="block hover:text-brand-ink transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <p key={item.label}>{item.label}</p>
            )
        )}
      </div>

      {/* micro detalhe dourado */}
      <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark shadow-[0_10px_24px_rgba(212,175,55,0.16)]" />
    </div>
  );
}
