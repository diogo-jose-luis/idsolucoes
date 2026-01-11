// src/components/CandidateWizardForm.tsx
"use client";

import {
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type ChangeEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Calendar,
  MapPin,
  Mail,
  Phone,
  IdCard,
  Home,
  Briefcase,
  ShieldCheck,
  FileText,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Upload,
} from "lucide-react";
import clsx from "clsx";
import Container from "./Container";

/* ============= CONSTANTES ============= */

const PROVINCIAS = [
  "Luanda",
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando-Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Huambo",
  "Huíla",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Namibe",
  "Uíge",
  "Zaire",
];

const DISPONIBILIDADE = ["Imediata", "15 dias", "30 dias", "60 dias"];

const NIVEL_LINGUA = ["Básico", "Intermediário", "Avançado", "Fluente"] as const;

const DOCS_BASE = [
  "Curriculum Vitae",
  "Bilhete de Identidade",
  "Certificado de Habilitação",
  "Atestado Médico",
  "Atestado de Residência",
  "Registo Criminal",
  "4 Fotos tipo passe",
  "Cédula filhos menores de 14 anos",
  "Boletim de Sanidade",
  "Disponibilidade Militar/Talão de Recenseamento",
  "Carta de Condução",
  "Certificado de Trabalho",
] as const;

/* ============= TIPOS ============= */

type DocsKey = (typeof DOCS_BASE)[number];

type FormDataShape = {
  // Passo 1 — Dados Pessoais
  nome: string;
  dataNasc: string;
  estadoCivil: string;
  nacionalidade: string;
  naturalDe: string;
  bi: string;
  bairro: string;
  rua: string;
  casa: string;
  municipio: string;
  provincia: string;
  telefone: string;
  telefone2: string;
  email: string;
  contaBancaria: string;

  // Passo 2 — Formação / Línguas
  nivelAcademico: string;
  curso: string;
  escola: string;
  inicioCurso: string;
  fimCurso: string;
  lingua1: string;
  lingua1Nivel: string;
  lingua2: string;
  lingua2Nivel: string;

  // Passo 3 — Experiência
  funcaoAtual: string;
  empresaAtual: string;
  salario: string;
  admissao: string;
  demissao: string;
  actividades: string;
  pretensaoSalarial: string;

  // Passo 4 — Documentos
  docs: Record<DocsKey, boolean>;
  anexos: Partial<Record<DocsKey, File | null>>;

  // Passo 5 — Preferências
  areaInteresse: string;
  cargoPretendido: string;
  disponibilidade: string;
  inicioPrevisto: string;
  observacoes: string;
};

/* ============= COMPONENTE PRINCIPAL ============= */

export default function CandidateWizardForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<null | { type: "ok" | "err"; text: string }>(
    null
  );

  const DEMO_FORM: FormDataShape = {
    nome: "Toniclenio Luis",
    dataNasc: "1990-05-12",
    estadoCivil: "Solteiro",
    nacionalidade: "Angolana",
    naturalDe: "Luanda",
    bi: "GA-1234567-8",
    bairro: "Talatona",
    rua: "Rua do Mar",
    casa: "12A",
    municipio: "Belas",
    provincia: "Luanda",
    telefone: "+244 923 000 111",
    telefone2: "+244 922 111 222",
    email: "toniclenio.luis@example.com",
    contaBancaria: "AO06 0000 0000 0000 0000 0000",

    nivelAcademico: "Ensino Médio",
    curso: "Técnico de Segurança",
    escola: "Escola Técnica de Luanda",
    inicioCurso: "2008-02-01",
    fimCurso: "2010-12-15",
    lingua1: "Português",
    lingua1Nivel: "Fluente",
    lingua2: "Inglês",
    lingua2Nivel: "Intermediário",

    funcaoAtual: "Vigilante Supervisor",
    empresaAtual: "Segurança Angola Lda",
    salario: "45000",
    admissao: "2018-03-01",
    demissao: "",
    actividades:
      "Supervisão de turno, formação de equipas, relatórios diários.",
    pretensaoSalarial: "60000",

    docs: Object.fromEntries(DOCS_BASE.map((d) => [d, true])) as Record<
      DocsKey,
      boolean
    >,
    anexos: {},

    areaInteresse: "Segurança Física",
    cargoPretendido: "Supervisor de Posto",
    disponibilidade: "15 dias",
    inicioPrevisto: "2025-08-01",
    observacoes: "Disponível para deslocações e turnos noturnos.",
  };

  const [form, setForm] = useState<FormDataShape>(() => DEMO_FORM);

  const STEPS = useMemo(
    () => [
      { key: "pessoais", title: "Dados Pessoais", icon: <User size={18} /> },
      { key: "formacao", title: "Formação e Línguas", icon: <FileText size={18} /> },
      { key: "experiencia", title: "Experiência", icon: <Briefcase size={18} /> },
      { key: "docs", title: "Documentos", icon: <ShieldCheck size={18} /> },
      { key: "preferencia", title: "Preferências", icon: <CheckCircle2 size={18} /> },
    ],
    []
  );

  /* ======= validação simples por passo ======= */
  function validateStep(idx: number): string[] {
    const errs: string[] = [];

    if (idx == 0) {
      if (!form.nome.trim()) errs.push("Informe o nome completo.");
      if (!form.dataNasc) errs.push("Informe a data de nascimento.");
      if (!form.nacionalidade.trim()) errs.push("Informe a nacionalidade.");
      if (!form.provincia) errs.push("Selecione a província.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(form.email || ""))
        errs.push("E-mail inválido.");
      const phoneDigits = (form.telefone ?? "").replace(/\D/g, "");
      if (phoneDigits.length < 9)
        errs.push("Contacto inválido (mín. 9 dígitos).");
    }

    if (idx == 1) {
      if (!form.nivelAcademico.trim()) errs.push("Informe o nível académico.");
      if (form.inicioCurso && form.fimCurso && form.inicioCurso > form.fimCurso) {
        errs.push("Datas do curso inconsistentes.");
      }
    }

    if (idx == 2) {
      if (form.empresaAtual && !form.funcaoAtual)
        errs.push("Informe a função na empresa atual.");
    }

    if (idx == 4) {
      if (!form.cargoPretendido.trim()) errs.push("Informe o cargo pretendido.");
      if (!form.disponibilidade) errs.push("Selecione a disponibilidade.");
    }

    return errs;
  }

  function next() {
    const errs = validateStep(step);
    if (errs.length) {
      setMsg({ type: "err", text: errs[0] });
      return;
    }
    setMsg(null);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function prev() {
    setMsg(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit() {
    const allErrs = [...Array(STEPS.length).keys()].flatMap(validateStep);
    if (allErrs.length) {
      setMsg({ type: "err", text: allErrs[0] });
      return;
    }
    setSubmitting(true);
    setMsg(null);

    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setMsg({
      type: "ok",
      text: "Candidatura enviada com sucesso. Receberá uma notificação da nossa parte dentro de 7 dias.",
    });
  }

  return (
    <section className="py-16 md:py-20 bg-brand-surface2/60">
      <Container className="max-w-5xl">
        {/* Cabeçalho */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-brand-goldDark">
            Candidaturas IDS
          </span>

          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-brand-ink">
            Ficha de Candidatura
          </h2>

          <p className="mt-3 text-brand-ink/75 max-w-2xl mx-auto leading-relaxed">
            Preencha os dados solicitados. O formulário segue o modelo usado em
            papel, com uma experiência mais rápida e organizada.
          </p>

          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark shadow-[0_10px_24px_rgba(212,175,55,0.18)]" />
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-white/85 backdrop-blur border border-black/10 shadow-xl ring-1 ring-black/5">
          {/* faixa dourada no topo */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark" />

          {/* Barra de passos */}
          <ol className="grid grid-cols-1 md:grid-cols-5 border-b border-black/10">
            {STEPS.map((s, i) => {
              const isActive = i === step;
              const isDone = i < step;

              return (
                <li
                  key={s.key}
                  className={clsx(
                    "px-4 py-3 text-xs md:text-sm flex items-center gap-2",
                    isActive
                      ? "bg-brand-surface text-brand-ink font-semibold"
                      : isDone
                      ? "bg-white/70 text-brand-ink/80"
                      : "bg-white/50 text-brand-ink/60"
                  )}
                >
                  <span
                    className={clsx(
                      "inline-flex h-7 w-7 items-center justify-center rounded-full border",
                      isActive
                        ? "border-brand-gold/50 bg-brand-gold/10 text-brand-gold"
                        : isDone
                        ? "border-black/10 bg-white text-brand-gold"
                        : "border-black/10 bg-white/60 text-brand-ink/50"
                    )}
                  >
                    {s.icon}
                  </span>
                  <span className="truncate">
                    {i + 1}. {s.title}
                  </span>
                </li>
              );
            })}
          </ol>

          {/* Mensagem */}
          {msg && (
            <div
              className={clsx(
                "m-4 mb-0 p-3 text-sm border rounded-xl ring-1",
                msg.type === "ok"
                  ? "bg-emerald-50 border-emerald-300 text-emerald-900 ring-emerald-200/50"
                  : "bg-red-50 border-red-300 text-red-900 ring-red-200/50"
              )}
            >
              {msg.text}
            </div>
          )}

          {/* Conteúdo dos passos */}
          <div className="p-6 md:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.18 }}
              >
                {step == 0 && <StepPessoais form={form} setForm={setForm} />}
                {step == 1 && <StepFormacao form={form} setForm={setForm} />}
                {step == 2 && <StepExperiencia form={form} setForm={setForm} />}
                {step == 3 && <StepDocs form={form} setForm={setForm} />}
                {step == 4 && <StepPreferencias form={form} setForm={setForm} />}
              </motion.div>
            </AnimatePresence>

            {/* Navegação */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-between">
              <button
                type="button"
                onClick={prev}
                disabled={step == 0}
                className="inline-flex items-center justify-center h-11 px-4 rounded-md border border-black/10 bg-white/70 text-brand-ink/80 hover:bg-white disabled:opacity-50 disabled:hover:bg-white/70"
              >
                <ChevronLeft size={18} className="mr-2" /> Anterior
              </button>

              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center justify-center h-11 px-6 rounded-md btn-gold text-black font-semibold gold-ring"
                >
                  Próximo <ChevronRight size={18} className="ml-2" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onSubmit}
                  disabled={submitting}
                  className="inline-flex items-center justify-center h-11 px-6 rounded-md btn-gold text-black font-semibold gold-ring disabled:opacity-70"
                >
                  {submitting ? "A validar..." : "Concluir candidatura"}
                </button>
              )}
            </div>

            <div className="mt-3 text-xs text-brand-ink/60 flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold/10 border border-black/5">
                <CheckCircle2 size={14} className="text-brand-gold" />
              </span>
              Os dados são usados apenas para processos de recrutamento.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============= PASSOS ============= */

function StepPessoais({
  form,
  setForm,
}: {
  form: FormDataShape;
  setForm: (u: (p: FormDataShape) => FormDataShape) => void;
}) {
  return (
    <div className="space-y-6">
      <SectionTitle icon={<User size={18} />}>Identificação</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          name="nome"
          label="Nome completo *"
          icon={<User size={16} />}
          value={form.nome}
          onChange={(v) => setForm((p) => ({ ...p, nome: v }))}
          required
        />
        <Field
          name="email"
          label="E-mail *"
          type="email"
          icon={<Mail size={16} />}
          value={form.email}
          onChange={(v) => setForm((p) => ({ ...p, email: v }))}
          required
        />
        <Field
          name="telefone"
          label="Contacto *"
          type="tel"
          icon={<Phone size={16} />}
          value={form.telefone}
          onChange={(v) => setForm((p) => ({ ...p, telefone: v }))}
          required
        />
        <Field
          name="telefone2"
          label="Outro contacto"
          type="tel"
          icon={<Phone size={16} />}
          value={form.telefone2}
          onChange={(v) => setForm((p) => ({ ...p, telefone2: v }))}
        />

        <SelectField
          name="provincia"
          label="Província *"
          value={form.provincia}
          onChange={(v) => setForm((p) => ({ ...p, provincia: v }))}
          required
        >
          <option value="">— selecione —</option>
          {PROVINCIAS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </SelectField>

        <Field
          name="municipio"
          label="Município"
          icon={<MapPin size={16} />}
          value={form.municipio}
          onChange={(v) => setForm((p) => ({ ...p, municipio: v }))}
        />
        <Field
          name="bairro"
          label="Bairro"
          icon={<Home size={16} />}
          value={form.bairro}
          onChange={(v) => setForm((p) => ({ ...p, bairro: v }))}
        />
        <Field
          name="rua"
          label="Rua"
          icon={<Home size={16} />}
          value={form.rua}
          onChange={(v) => setForm((p) => ({ ...p, rua: v }))}
        />
        <Field
          name="casa"
          label="Casa Nº / Apto"
          icon={<Home size={16} />}
          value={form.casa}
          onChange={(v) => setForm((p) => ({ ...p, casa: v }))}
        />

        <Field
          name="dataNasc"
          label="Data de nascimento *"
          type="date"
          icon={<Calendar size={16} />}
          value={form.dataNasc}
          onChange={(v) => setForm((p) => ({ ...p, dataNasc: v }))}
          required
        />
        <Field
          name="estadoCivil"
          label="Estado civil"
          icon={<User size={16} />}
          value={form.estadoCivil}
          onChange={(v) => setForm((p) => ({ ...p, estadoCivil: v }))}
        />
        <Field
          name="nacionalidade"
          label="Nacionalidade *"
          icon={<IdCard size={16} />}
          value={form.nacionalidade}
          onChange={(v) => setForm((p) => ({ ...p, nacionalidade: v }))}
          required
        />
        <Field
          name="naturalDe"
          label="Natural de"
          icon={<IdCard size={16} />}
          value={form.naturalDe}
          onChange={(v) => setForm((p) => ({ ...p, naturalDe: v }))}
        />
        <Field
          name="bi"
          label="Nº do BI"
          icon={<IdCard size={16} />}
          value={form.bi}
          onChange={(v) => setForm((p) => ({ ...p, bi: v }))}
        />
        <Field
          name="contaBancaria"
          label="Conta bancária (IBAN/NIB)"
          icon={<IdCard size={16} />}
          value={form.contaBancaria}
          onChange={(v) => setForm((p) => ({ ...p, contaBancaria: v }))}
        />
      </div>
    </div>
  );
}

function StepFormacao({
  form,
  setForm,
}: {
  form: FormDataShape;
  setForm: (u: (p: FormDataShape) => FormDataShape) => void;
}) {
  return (
    <div className="space-y-6">
      <SectionTitle icon={<FileText size={18} />}>Formação Escolar</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          name="nivelAcademico"
          label="Nível académico *"
          value={form.nivelAcademico}
          onChange={(v) => setForm((p) => ({ ...p, nivelAcademico: v }))}
          required
        />
        <Field
          name="curso"
          label="Curso"
          value={form.curso}
          onChange={(v) => setForm((p) => ({ ...p, curso: v }))}
        />
        <Field
          name="escola"
          label="Escola/Instituição"
          value={form.escola}
          onChange={(v) => setForm((p) => ({ ...p, escola: v }))}
        />
        <Field
          name="inicioCurso"
          type="date"
          label="Início"
          value={form.inicioCurso}
          onChange={(v) => setForm((p) => ({ ...p, inicioCurso: v }))}
        />
        <Field
          name="fimCurso"
          type="date"
          label="Conclusão"
          value={form.fimCurso}
          onChange={(v) => setForm((p) => ({ ...p, fimCurso: v }))}
        />
      </div>

      <SectionTitle icon={<FileText size={18} />}>Línguas</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          name="lingua1"
          label="Língua 1"
          value={form.lingua1}
          onChange={(v) => setForm((p) => ({ ...p, lingua1: v }))}
        />
        <SelectField
          name="lingua1Nivel"
          label="Nível"
          value={form.lingua1Nivel}
          onChange={(v) => setForm((p) => ({ ...p, lingua1Nivel: v }))}
        >
          <option value="">— selecione —</option>
          {NIVEL_LINGUA.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </SelectField>

        <Field
          name="lingua2"
          label="Língua 2"
          value={form.lingua2}
          onChange={(v) => setForm((p) => ({ ...p, lingua2: v }))}
        />
        <SelectField
          name="lingua2Nivel"
          label="Nível"
          value={form.lingua2Nivel}
          onChange={(v) => setForm((p) => ({ ...p, lingua2Nivel: v }))}
        >
          <option value="">— selecione —</option>
          {NIVEL_LINGUA.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </SelectField>
      </div>
    </div>
  );
}

function StepExperiencia({
  form,
  setForm,
}: {
  form: FormDataShape;
  setForm: (u: (p: FormDataShape) => FormDataShape) => void;
}) {
  return (
    <div className="space-y-6">
      <SectionTitle icon={<Briefcase size={18} />}>Experiência Profissional</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          name="empresaAtual"
          label="Última/Actual empresa"
          value={form.empresaAtual}
          onChange={(v) => setForm((p) => ({ ...p, empresaAtual: v }))}
        />
        <Field
          name="funcaoAtual"
          label="Função"
          value={form.funcaoAtual}
          onChange={(v) => setForm((p) => ({ ...p, funcaoAtual: v }))}
        />
        <Field
          name="salario"
          label="Salário (KZ)"
          type="number"
          value={form.salario}
          onChange={(v) => setForm((p) => ({ ...p, salario: v }))}
        />
        <Field
          name="admissao"
          label="Admissão"
          type="date"
          value={form.admissao}
          onChange={(v) => setForm((p) => ({ ...p, admissao: v }))}
        />
        <Field
          name="demissao"
          label="Demissão"
          type="date"
          value={form.demissao}
          onChange={(v) => setForm((p) => ({ ...p, demissao: v }))}
        />
        <Field
          name="pretensaoSalarial"
          label="Pretensão salarial (KZ)"
          type="number"
          value={form.pretensaoSalarial}
          onChange={(v) => setForm((p) => ({ ...p, pretensaoSalarial: v }))}
        />
      </div>

      <TextArea
        name="actividades"
        label="Principais actividades desenvolvidas"
        value={form.actividades}
        onChange={(v) => setForm((p) => ({ ...p, actividades: v }))}
        rows={5}
      />
    </div>
  );
}

function StepDocs({
  form,
  setForm,
}: {
  form: FormDataShape;
  setForm: (u: (p: FormDataShape) => FormDataShape) => void;
}) {
  const inputRefs = useRef<Partial<Record<DocsKey, HTMLInputElement | null>>>(
    {}
  );

  function handleFileChange(doc: DocsKey, e: ChangeEvent<HTMLInputElement>) {
    const f = e.currentTarget.files?.[0] || null;
    setForm((p) => ({
      ...p,
      anexos: { ...p.anexos, [doc]: f || null },
    }));
  }

  return (
    <div className="space-y-6">
      <SectionTitle icon={<ShieldCheck size={18} />}>
        Documentos necessários (checklist)
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DOCS_BASE.map((doc) => {
          const hasFile = !!form.anexos?.[doc];
          return (
            <label
              key={doc}
              className={clsx(
                "flex items-center gap-3 p-3 rounded-xl border bg-white/70 backdrop-blur shadow-sm ring-1",
                "border-black/10 ring-black/5"
              )}
            >
              <input
                type="checkbox"
                className="accent-[#D4AF37]"
                checked={form.docs[doc]}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    docs: { ...p.docs, [doc]: e.currentTarget.checked },
                  }))
                }
              />
              <span className="flex-1 text-sm text-brand-ink/80">{doc}</span>

              <button
                type="button"
                onClick={() => inputRefs.current[doc]?.click()}
                className={clsx(
                  "inline-flex items-center gap-2 h-9 px-3 rounded-md border text-sm font-semibold transition-colors",
                  "border-black/10 bg-white hover:bg-brand-surface2/70 text-brand-ink/85"
                )}
              >
                <Upload size={16} className={hasFile ? "text-brand-gold" : "text-brand-ink/60"} />
                {hasFile ? "Anexado" : "Anexar"}
              </button>

              <input
                ref={(el) => {
                  inputRefs.current[doc] = el;
                }}
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(doc, e)}
              />
            </label>
          );
        })}
      </div>

      <p className="text-xs text-brand-ink/60">
        * Anexos são opcionais neste mock. Na integração real, estes inputs podem
        alimentar um <code className="px-1 rounded bg-black/5">FormData</code>.
      </p>
    </div>
  );
}

function StepPreferencias({
  form,
  setForm,
}: {
  form: FormDataShape;
  setForm: (u: (p: FormDataShape) => FormDataShape) => void;
}) {
  return (
    <div className="space-y-6">
      <SectionTitle icon={<CheckCircle2 size={18} />}>
        Preferências e Encerramento
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          name="areaInteresse"
          label="Área"
          icon={<Briefcase size={16} />}
          value={form.areaInteresse}
          onChange={(v) => setForm((p) => ({ ...p, areaInteresse: v }))}
        />
        <Field
          name="cargoPretendido"
          label="Cargo pretendido *"
          icon={<Briefcase size={16} />}
          value={form.cargoPretendido}
          onChange={(v) => setForm((p) => ({ ...p, cargoPretendido: v }))}
          required
        />
        <SelectField
          name="disponibilidade"
          label="Disponibilidade *"
          value={form.disponibilidade}
          onChange={(v) => setForm((p) => ({ ...p, disponibilidade: v }))}
          required
        >
          <option value="">— selecione —</option>
          {DISPONIBILIDADE.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </SelectField>
        <Field
          name="inicioPrevisto"
          label="Início previsto"
          type="date"
          icon={<Calendar size={16} />}
          value={form.inicioPrevisto}
          onChange={(v) => setForm((p) => ({ ...p, inicioPrevisto: v }))}
        />
      </div>

      <TextArea
        name="observacoes"
        label="Observações (opcional)"
        rows={5}
        value={form.observacoes}
        onChange={(v) => setForm((p) => ({ ...p, observacoes: v }))}
      />

      {/* Resumo compacto */}
      <div className="rounded-2xl bg-white/70 backdrop-blur border border-black/10 p-4 shadow-lg ring-1 ring-black/5">
        <h4 className="font-semibold text-brand-ink mb-2">Resumo</h4>
        <ul className="space-y-1 text-sm text-brand-ink/75">
          <li>
            <span className="font-semibold text-brand-ink/85">Nome:</span>{" "}
            {form.nome || "—"}
          </li>
          <li>
            <span className="font-semibold text-brand-ink/85">E-mail:</span>{" "}
            {form.email || "—"}
          </li>
          <li>
            <span className="font-semibold text-brand-ink/85">Contacto:</span>{" "}
            {form.telefone || "—"}
          </li>
          <li>
            <span className="font-semibold text-brand-ink/85">Província:</span>{" "}
            {form.provincia || "—"}
          </li>
          <li>
            <span className="font-semibold text-brand-ink/85">Nível académico:</span>{" "}
            {form.nivelAcademico || "—"}
          </li>
          <li>
            <span className="font-semibold text-brand-ink/85">Empresa/Função atuais:</span>{" "}
            {form.empresaAtual && form.funcaoAtual
              ? `${form.empresaAtual} — ${form.funcaoAtual}`
              : "—"}
          </li>
          <li>
            <span className="font-semibold text-brand-ink/85">Cargo pretendido:</span>{" "}
            {form.cargoPretendido || "—"}
          </li>
          <li>
            <span className="font-semibold text-brand-ink/85">Disponibilidade:</span>{" "}
            {form.disponibilidade || "—"}
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ============= SUB-COMPONENTES UI ============= */

function SectionTitle({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h3 className="flex items-center gap-2 text-[13px] uppercase tracking-wide text-brand-ink/60">
        <span className="text-brand-gold">{icon}</span>
        {children}
      </h3>
      <span className="h-px flex-1 bg-black/10" />
    </div>
  );
}

function Field({
  name,
  label,
  value,
  onChange,
  type = "text",
  icon,
  required,
  placeholder,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  icon?: ReactNode;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-brand-ink">
        {label} {required && <span className="text-brand-gold">*</span>}
      </label>

      <div className="mt-1 flex items-center gap-2 rounded-md border border-black/10 bg-white/70 backdrop-blur px-3 h-11 shadow-sm ring-1 ring-black/5 focus-within:border-brand-gold/60 focus-within:ring-brand-gold/30">
        {icon ? <span className="text-brand-ink/50">{icon}</span> : null}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-sm text-brand-ink placeholder:text-brand-ink/40"
          required={required}
        />
      </div>
    </div>
  );
}

function SelectField({
  name,
  label,
  value,
  onChange,
  children,
  required,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-brand-ink">
        {label} {required && <span className="text-brand-gold">*</span>}
      </label>

      <div className="mt-1 rounded-md border border-black/10 bg-white/70 backdrop-blur h-11 shadow-sm ring-1 ring-black/5 focus-within:border-brand-gold/60 focus-within:ring-brand-gold/30">
        <select
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          className="w-full h-full px-3 bg-transparent outline-none text-sm text-brand-ink"
          required={required}
        >
          {children}
        </select>
      </div>
    </div>
  );
}

function TextArea({
  name,
  label,
  value,
  onChange,
  rows = 4,
  required,
  placeholder,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-brand-ink">
        {label} {required && <span className="text-brand-gold">*</span>}
      </label>

      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder={placeholder}
        className="mt-1 w-full px-3 py-3 rounded-md border border-black/10 bg-white/70 backdrop-blur shadow-sm ring-1 ring-black/5 focus:border-brand-gold/60 focus:ring-brand-gold/30 outline-none text-sm text-brand-ink placeholder:text-brand-ink/40 resize-y"
      />
    </div>
  );
}
