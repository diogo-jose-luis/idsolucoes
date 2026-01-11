// src/components/contact/ContactFormSection.tsx
"use client";

import Container from "../Container";
import { FormEvent, useState } from "react";
import { Mail, PhoneCall, User, MessageSquareText, Sparkles } from "lucide-react";

export default function ContactFormSection() {
  const [sent, setSent] = useState<null | "ok">(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // depois liga na API/email service
    setSent("ok");
    // console.log("Formulário de contacto submetido");
  };

  return (
    <section className="relative py-16 md:py-20 bg-brand-surface2/60">
      {/* profundidade leve */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/30 via-transparent to-transparent" />

      <Container>
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-goldDark">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            Entre em contacto
          </span>

          <h2 className="mt-4 font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-brand-ink">
            Fale connosco para qualquer tipo de assunto
          </h2>

          <p className="mt-3 max-w-2xl text-sm md:text-base text-brand-ink/75 leading-relaxed">
            Responderemos o mais breve possível. Se preferir, pode também ligar
            ou enviar e-mail diretamente.
          </p>

          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark shadow-[0_10px_24px_rgba(212,175,55,0.16)]" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Form */}
          <div className="rounded-2xl bg-white/85 backdrop-blur border border-black/10 shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="h-[3px] bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark" />

            {sent === "ok" ? (
              <div className="p-8 md:p-10">
                <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-900">
                  <p className="font-semibold">Mensagem enviada com sucesso.</p>
                  <p className="mt-1 text-sm text-emerald-800/80">
                    Obrigado por entrar em contacto. Vamos responder em breve.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                {/* Nome + Email */}
                <div className="grid gap-6 md:grid-cols-2">
                  <Field
                    id="name"
                    label="Nome"
                    placeholder="O seu nome"
                    icon={<User className="h-4 w-4" />}
                  />
                  <Field
                    id="email"
                    label="Seu Email"
                    placeholder="email@exemplo.com"
                    type="email"
                    icon={<Mail className="h-4 w-4" />}
                  />
                </div>

                {/* Telefone opcional */}
                <Field
                  id="phone"
                  label="Telefone (opcional)"
                  placeholder="+244 ..."
                  type="tel"
                  icon={<PhoneCall className="h-4 w-4" />}
                />

                {/* Assunto */}
                <Field
                  id="subject"
                  label="Assunto"
                  placeholder="Sobre o que gostaria de falar?"
                  icon={<MessageSquareText className="h-4 w-4" />}
                />

                {/* Mensagem */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-brand-ink"
                  >
                    Mensagem
                  </label>

                  <div className="mt-1 rounded-md border border-black/10 bg-white/70 backdrop-blur shadow-sm ring-1 ring-black/5 focus-within:border-brand-gold/60 focus-within:ring-brand-gold/30">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-3 py-3 bg-transparent outline-none text-sm text-brand-ink placeholder:text-brand-ink/40 resize-y"
                      placeholder="Escreva a sua mensagem..."
                    />
                  </div>
                </div>

                {/* Botão */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="btn-gold px-10 py-3 text-sm font-semibold gold-ring"
                  >
                    Enviar mensagem
                  </button>
                </div>

                <p className="text-xs text-brand-ink/60 text-center">
                  Ao enviar, aceita ser contactado pela IDS apenas para resposta
                  ao seu pedido.
                </p>
              </form>
            )}
          </div>

          {/* Lateral (CTA/ajuda rápida) */}
          <aside className="rounded-2xl bg-white/70 backdrop-blur border border-black/10 shadow-lg ring-1 ring-black/5 p-6 md:p-7">
            <h3 className="font-heading text-xl font-bold text-brand-ink">
              Precisa de uma solução à medida?
            </h3>
            <p className="mt-2 text-sm text-brand-ink/75 leading-relaxed">
              Envie o máximo de detalhes possível (tipo de serviço, localização,
              prazos e orçamento). Assim respondemos mais rápido e com precisão.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-brand-ink/75">
              <li>• Formação in-company e certificações</li>
              <li>• Serviços técnicos e operações</li>
              <li>• Man power e suporte em campo</li>
              <li>• Projetos e consultoria</li>
            </ul>

            <div className="mt-6 h-px bg-black/10" />

            <div className="mt-5 text-sm text-brand-ink/75">
              <p className="font-semibold text-brand-ink">Horário</p>
              <p className="mt-1">Seg–Sex • 08:00–17:00</p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  icon,
}: {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-brand-ink">
        {label}
      </label>

      <div className="mt-1 flex items-center gap-2 rounded-md border border-black/10 bg-white/70 backdrop-blur px-3 h-11 shadow-sm ring-1 ring-black/5 focus-within:border-brand-gold/60 focus-within:ring-brand-gold/30">
        {icon ? <span className="text-brand-ink/50">{icon}</span> : null}
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={id}
          className="w-full bg-transparent outline-none text-sm text-brand-ink placeholder:text-brand-ink/40"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
