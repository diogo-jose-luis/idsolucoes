import Link from "next/link";
import Logo from "@/components/Logo";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contactos", href: "#contactos" },
];

export default function Footer() {
  return (
    <footer className="border-t border-linedark bg-nearblack pb-8 pt-16 text-muteddark">
      <div className="mx-auto max-w-[1240px] px-8">
        <div className="grid gap-12 border-b border-linedark pb-11 md:grid-cols-[1.7fr_1fr_1fr]">
          {/* marca */}
          <div>
            <div className="mb-5">
              <Logo />
            </div>
            <p className="max-w-[340px] text-[14.5px]">
              Serviços que capacitam, conectam e desenvolvem. Soluções
              integradas para empresas em Angola, com foco em qualidade,
              segurança e resultados.
            </p>
          </div>

          {/* navegação */}
          <div>
            <h5 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
              Navegação
            </h5>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mb-3 block w-fit text-[14.5px] transition-all hover:pl-1 hover:text-goldsoft"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* contacto */}
          <div>
            <h5 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
              Contacto
            </h5>
            <a href="tel:+244929481473" className="mb-3 block w-fit text-[14.5px] transition-all hover:pl-1 hover:text-goldsoft">
              +244 929 481 473
            </a>
            <a href="tel:+244929826387" className="mb-3 block w-fit text-[14.5px] transition-all hover:pl-1 hover:text-goldsoft">
              +244 929 826 387
            </a>
            <a href="mailto:sales@idsolucoes.ao" className="mb-3 block w-fit text-[14.5px] transition-all hover:pl-1 hover:text-goldsoft">
              sales@idsolucoes.ao
            </a>
            <span className="block text-[14.5px]">Av. Mortala Mohamed, Ilha de Luanda</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-[13px] sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} IDS — Império Dourado Soluções. NIF 5000729728</span>
          <span>www.idsolucoes.ao</span>
        </div>
      </div>
    </footer>
  );
}