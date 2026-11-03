import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  AlertCircle,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  Clock,
  Download,
  GraduationCap,
  Headset,
  HeartPulse,
  Microscope,
  Pill,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import mockupHero from "@/assets/mockup-hero.png";
import mockupOferta from "@/assets/mockup-oferta.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farmacologia Aplicada — Guia Completo por R$ 17,90" },
      {
        name: "description",
        content:
          "Domine farmacologia: classes de medicamentos, mecanismos de ação, farmacocinética e efeitos adversos. Material digital por R$ 17,90, pagamento único.",
      },
      { property: "og:title", content: "Farmacologia Aplicada — Guia Completo por R$ 17,90" },
      {
        property: "og:description",
        content:
          "Aprenda os principais conceitos da farmacologia com um material digital prático, organizado e de fácil consulta. Acesso por R$ 17,90.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://pay.cakto.com.br/hwnhc4g";

function CtaButton({ texto, className = "" }: { texto: string; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-cta px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-cta-foreground shadow-lg shadow-cta/30 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-cta/40 ${className}`}
    >
      {texto}
    </a>
  );
}

function SectionTitle({
  titulo,
  subtitulo,
  claro = false,
}: {
  titulo: string;
  subtitulo?: string;
  claro?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${
          claro ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {titulo}
      </h2>
      {subtitulo ? (
        <p className={`mt-4 text-base sm:text-lg ${claro ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {subtitulo}
        </p>
      ) : null}
    </div>
  );
}

function InfoCard({
  icone: Icone,
  titulo,
  descricao,
}: {
  icone: LucideIcon;
  titulo: string;
  descricao: string;
}) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-md shadow-primary/5 transition-transform hover:-translate-y-1">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tint">
        <Icone className="h-6 w-6 text-secondary" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{descricao}</p>
    </div>
  );
}

/* ---------------------------- Seções ---------------------------- */

function Hero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-cta px-4 py-1.5 text-xs font-extrabold tracking-widest text-cta-foreground">
            + GUIA COMPLETO DE FARMACOLOGIA
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Domine a Farmacologia Aplicada e entenda como os medicamentos{" "}
            <span className="text-cta">realmente funcionam!</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Aprenda os principais conceitos da farmacologia, mecanismos de ação, classes
            medicamentosas, indicações, contraindicações e efeitos adversos de forma prática e
            organizada.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60 sm:text-base">
            Um material desenvolvido para facilitar seus estudos, ajudar na compreensão dos
            medicamentos e tornar seu aprendizado na área da saúde muito mais completo.
          </p>
          <div className="mt-8">
            <CtaButton texto="QUERO ACESSAR O MATERIAL" />
          </div>
        </div>
        <div className="relative">
          <img
            src={mockupHero}
            alt="Guia digital de Farmacologia Aplicada em notebook, tablet e celular"
            width={1024}
            height={1024}
            className="w-full rounded-3xl shadow-2xl shadow-black/30"
          />
        </div>
      </div>
    </section>
  );
}

const CONTEUDO_CARDS: { icone: LucideIcon; titulo: string; descricao: string }[] = [
  { icone: Pill, titulo: "Classes de Medicamentos", descricao: "Conheça as principais classes farmacológicas e suas características." },
  { icone: Activity, titulo: "Mecanismos de Ação", descricao: "Entenda como os medicamentos agem no organismo e produzem seus efeitos." },
  { icone: Microscope, titulo: "Farmacocinética", descricao: "Aprenda sobre absorção, distribuição, metabolismo e eliminação dos medicamentos." },
  { icone: HeartPulse, titulo: "Farmacodinâmica", descricao: "Compreenda a relação entre medicamentos, receptores e respostas do organismo." },
  { icone: AlertCircle, titulo: "Efeitos Adversos", descricao: "Estude reações adversas, contraindicações, interações e cuidados importantes." },
  { icone: BookOpen, titulo: "Material de Consulta", descricao: "Tenha um conteúdo digital organizado para estudar, revisar e consultar." },
];

function Conteudo() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionTitle
          titulo="O que você vai aprender?"
          subtitulo="Um conteúdo organizado para ajudar você a compreender os principais fundamentos da farmacologia e sua aplicação na área da saúde."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONTEUDO_CARDS.map((card) => (
            <InfoCard key={card.titulo} {...card} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton texto="QUERO MEU MATERIAL" />
        </div>
      </div>
    </section>
  );
}

const BENEFICIOS_CARDS: { icone: LucideIcon; titulo: string; descricao: string }[] = [
  { icone: Clock, titulo: "Economize tempo", descricao: "Tenha os conteúdos organizados para facilitar seus estudos e revisões." },
  { icone: GraduationCap, titulo: "Aprenda com facilidade", descricao: "Compreenda conceitos importantes da farmacologia com explicações didáticas." },
  { icone: Brain, titulo: "Fixe o conhecimento", descricao: "Estude os principais conceitos e organize melhor suas informações." },
  { icone: Smartphone, titulo: "Estude onde quiser", descricao: "Acesse seu material digital pelo celular, tablet ou computador." },
];

function Beneficios() {
  return (
    <section className="bg-tint">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionTitle
          titulo="Por que estudar com este material?"
          subtitulo="Mais clareza, organização e praticidade para aprender farmacologia."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFICIOS_CARDS.map((card) => (
            <InfoCard key={card.titulo} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

const PUBLICO_CARDS: { icone: LucideIcon; titulo: string; descricao: string }[] = [
  { icone: GraduationCap, titulo: "Estudantes de Enfermagem", descricao: "Para estudantes que desejam compreender os medicamentos e seus efeitos no organismo." },
  { icone: Stethoscope, titulo: "Estudantes da Área da Saúde", descricao: "Para estudantes de cursos da saúde que precisam aprender os fundamentos da farmacologia." },
  { icone: UserRound, titulo: "Profissionais da Saúde", descricao: "Para profissionais que buscam revisar conceitos e ampliar seus conhecimentos farmacológicos." },
];

function Publico() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionTitle
          titulo="Para quem é este material?"
          subtitulo="Desenvolvido para quem deseja aprender, revisar e aprimorar seus conhecimentos em farmacologia."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PUBLICO_CARDS.map((card) => (
            <InfoCard key={card.titulo} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

const OFERTA_ITENS = [
  "Fundamentos da Farmacologia",
  "Principais classes de medicamentos",
  "Mecanismos de ação dos fármacos",
  "Farmacocinética: absorção, distribuição, metabolismo e excreção",
  "Farmacodinâmica e efeitos dos medicamentos",
  "Indicações e contraindicações",
  "Efeitos adversos e interações medicamentosas",
  "Cuidados relacionados à utilização de medicamentos",
  "Material digital para estudo e consulta",
];

function Oferta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:py-24 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <img
            src={mockupOferta}
            alt="Guia Completo de Farmacologia Aplicada em formato digital"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full rounded-3xl shadow-2xl shadow-black/30"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="inline-block rounded-full bg-cta px-4 py-1.5 text-xs font-extrabold tracking-widest text-cta-foreground">
            ACESSO DIGITAL
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Tenha acesso ao seu material de Farmacologia Aplicada!
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
            Aprenda os principais conceitos da farmacologia com um material digital prático,
            organizado e de fácil consulta.
          </p>
          <div className="mt-8 rounded-2xl bg-card/10 p-6 ring-1 ring-primary-foreground/15">
            <p className="font-display text-lg font-semibold">Guia Completo de Farmacologia Aplicada</p>
            <p className="mt-1 text-sm text-primary-foreground/70">
              Acesso digital ao material educativo de Farmacologia Aplicada.
            </p>
            <ul className="mt-5 space-y-3">
              {OFERTA_ITENS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex items-end gap-3">
            <p className="font-display text-5xl font-extrabold text-cta">R$ 17,90</p>
            <p className="pb-2 text-sm font-semibold text-primary-foreground/70">Pagamento único</p>
          </div>
          <p className="mt-2 text-xs text-primary-foreground/60">
            Valor promocional de R$ 17,90, conforme oferta comercial.
          </p>
          <div className="mt-8">
            <CtaButton texto="QUERO GARANTIR MEU ACESSO POR R$ 17,90" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

const GARANTIA_ITENS: { icone: LucideIcon; titulo: string; descricao: string }[] = [
  { icone: ShieldCheck, titulo: "Compra segura", descricao: "Pagamento realizado por plataforma de checkout segura." },
  { icone: Download, titulo: "Acesso digital", descricao: "Receba as instruções de acesso após a confirmação do pagamento." },
  { icone: Headset, titulo: "Suporte", descricao: "Orientações para acessar seu material." },
];

function Garantia() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionTitle titulo="Sua compra com tranquilidade" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GARANTIA_ITENS.map((item) => (
            <div
              key={item.titulo}
              className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-md shadow-primary/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tint">
                <item.icone className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{item.titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  {
    pergunta: "Como vou receber o material?",
    resposta: "Após a confirmação do pagamento, você receberá as orientações de acesso ao material digital.",
  },
  {
    pergunta: "O material é físico ou digital?",
    resposta: "O material é 100% digital e pode ser acessado em dispositivos compatíveis.",
  },
  {
    pergunta: "Posso acessar pelo celular?",
    resposta: "Sim! Você poderá acessar pelo celular, tablet ou computador.",
  },
  {
    pergunta: "O material é indicado para estudantes?",
    resposta: "Sim! É indicado para estudantes de enfermagem, farmácia e outros cursos da área da saúde.",
  },
  {
    pergunta: "O material serve para profissionais?",
    resposta: "Sim! Pode ser utilizado como material complementar de estudo e revisão por profissionais da saúde.",
  },
  {
    pergunta: "O material ensina a prescrever medicamentos?",
    resposta:
      "O conteúdo tem finalidade educativa e não substitui formação profissional, habilitação legal, protocolos clínicos ou avaliação individual do paciente.",
  },
  {
    pergunta: "Vou receber atualizações?",
    resposta: "As condições de atualização devem seguir o que estiver previsto na oferta do produto.",
  },
];

function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <SectionTitle titulo="Dúvidas frequentes" />
        <div className="mt-10 space-y-3">
          {FAQ.map((item, index) => {
            const expandida = aberta === index;
            return (
              <div key={item.pergunta} className="rounded-2xl bg-card shadow-md shadow-primary/5">
                <button
                  type="button"
                  onClick={() => setAberta(expandida ? null : index)}
                  aria-expanded={expandida}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-foreground">
                    {item.pergunta}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-secondary transition-transform ${
                      expandida ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandida ? (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.resposta}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
          Transforme sua maneira de estudar Farmacologia!
        </h2>
        <p className="mt-4 text-base text-primary-foreground/80 sm:text-lg">
          Tenha mais praticidade para aprender, revisar e compreender os principais conceitos dos
          medicamentos por apenas R$ 17,90.
        </p>
        <div className="mt-8">
          <CtaButton texto="QUERO GARANTIR MEU ACESSO AGORA" />
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-primary-foreground/50">
            Material educativo complementar. Não substitui formação profissional, avaliação
            clínica, prescrição legalmente habilitada, bulas oficiais ou protocolos institucionais.
          </p>
          <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-primary-foreground/70">
            <a href="#" className="transition-colors hover:text-cta">Política de Privacidade</a>
            <a href="#" className="transition-colors hover:text-cta">Termos de Uso</a>
            <a href="#" className="transition-colors hover:text-cta">Contato</a>
          </nav>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <Conteudo />
      <Beneficios />
      <Publico />
      <Oferta />
      <Garantia />
      <Faq />
      <CtaFinal />
    </main>
  );
}
