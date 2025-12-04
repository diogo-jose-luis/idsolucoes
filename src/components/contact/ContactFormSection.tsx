// src/components/contact/ContactFormSection.tsx
"use client";

import Container from "../Container";
import { FormEvent } from "react";

export default function ContactFormSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // aqui depois ligamos com API / serviço de email
    console.log("Formulário de contacto submetido");
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-brand-coal to-[#02141e] py-16 md:py-20">
      <Container>
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-gold">
            Entre em contacto
          </span>
          <h2 className="mt-4 font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Fale connosco para qualquer tipo de assunto
          </h2>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-4xl space-y-6"
        >
          {/* Nome + Email */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-white/70 mb-1"
              >
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/80"
                placeholder="O seu nome"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-white/70 mb-1"
              >
                Seu Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/80"
                placeholder="email@exemplo.com"
              />
            </div>
          </div>

          {/* Assunto */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold text-white/70 mb-1"
            >
              Assunto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/80"
              placeholder="Sobre o que gostaria de falar?"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-white/70 mb-1"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/80 resize-y"
              placeholder="Escreva a sua mensagem..."
            />
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
        </form>
      </Container>
    </section>
  );
}
