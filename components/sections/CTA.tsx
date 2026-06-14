import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative bg-black py-28 text-white overflow-hidden">

      {/* linha separadora superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.12)_0%,transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-8">

        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            <span className="eyebrow mb-6 text-gold">
              Vamos trabalhar juntos
            </span>

            <h2 className="font-display text-[clamp(34px,4vw,56px)] font-medium leading-[1.1]">
              Pronto para transformar
              <span className="gold-text block">
                o seu negócio?
              </span>
            </h2>

            <p className="mt-6 text-muted text-[16.5px] max-w-[520px]">
              Fale connosco e descubra como podemos ajudar a sua empresa a crescer com soluções tecnológicas e estratégicas.
            </p>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contactos"
                className="btn btn-fill group relative"
              >
                Pedir Proposta

                {/* linha dourada animada */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[linear-gradient(100deg,#9e6e1f,#c99a3a,#f2dd9a,#c99a3a,#9e6e1f)] transition-all duration-500 group-hover:w-full" />
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <div className="relative border border-linedark bg-nearblack/40 backdrop-blur-md p-6">

              {/* imagem placeholder */}
              <Image
                src="/logoIDS-white.png"
                alt="CTA Image"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}