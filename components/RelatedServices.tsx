import Link from "next/link";

type ServiceLink = {
  title: string;
  href: string;
};

type Props = {
  title?: string;
  description?: string;
  links: ServiceLink[];
};

export default function RelatedServices({
  title = "Explore outros serviços",
  description = "Conheça outras áreas de actuação da IDS.",
  links,
}: Props) {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-[1240px] px-8">

        {/* HEADER */}
        <h3 className="font-display text-[28px] font-medium text-ink">
          {title}
        </h3>

        <p className="mt-3 max-w-[600px] text-muted">
          {description}
        </p>

        {/* GRID */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-line bg-white p-6 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1"
            >
              {/* linha dourada animada */}
              <div className="h-[2px] w-10 bg-gold transition-all duration-300 group-hover:w-20" />

              <h4 className="mt-4 font-medium text-ink transition-colors group-hover:text-gold">
                {item.title}
              </h4>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}