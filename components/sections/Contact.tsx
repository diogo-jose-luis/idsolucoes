"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:sales@idsolucoes.ao?subject=Contacto IDS - ${form.name}&body=Nome: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section 
    id="contactos"
    className="bg-paper py-28">
      <div className="mx-auto max-w-[1240px] px-8">

        {/* HEADER */}
        <div className="mb-14">
          <span className="eyebrow text-ink">
            Contactos
          </span>
        </div>

        {/* GRID */}
        <div className="grid gap-16 md:grid-cols-2 items-start">

  {/* LEFT SIDE */}
  <div className="self-start">

    <div className="space-y-8">

      <h2 className="font-display text-[clamp(34px,4vw,54px)] font-medium text-ink leading-[1.1]">
        Fale com a nossa equipa
      </h2>

      <p className="max-w-[520px] text-muted text-[16px]">
        Estamos prontos para responder às suas necessidades e criar soluções personalizadas para a sua empresa.
      </p>

      <div>
        <h3 className="font-display text-[18px] mb-2 text-ink">
          Telefone
        </h3>
        <p className="text-muted">+244 929 481 473</p>
        <p className="text-muted">+244 929 826 387</p>
      </div>

      <div>
        <h3 className="font-display text-[18px] mb-2 text-ink">
          Email
        </h3>
        <p className="text-muted">sales@idsolucoes.ao</p>
      </div>

      <div>
        <h3 className="font-display text-[18px] mb-2 text-ink">
          Localização
        </h3>
        <p className="text-muted">
          Av. Mortala Mohamed, Ilha de Luanda
        </p>
      </div>

    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="self-start border border-line bg-white p-6">

    <form className="space-y-4">

      <input
        type="text"
        placeholder="Nome"
        className="w-full border border-line p-3 text-sm outline-none"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border border-line p-3 text-sm outline-none"
      />

      <textarea
        placeholder="Mensagem"
        rows={12}
        className="w-full border border-line p-3 text-sm outline-none"
      />

      <button className="btn btn-fill w-full">
        Enviar Mensagem
      </button>

    </form>

  </div>

</div>
      </div>
    </section>
  );
}