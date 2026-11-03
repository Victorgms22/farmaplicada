import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farmacologia — Oferta R$ 17,90" },
      { name: "description", content: "Acesso imediato ao material de Farmacologia de R$ 59,90 por R$ 17,90, pagamento único." },
      { property: "og:title", content: "Farmacologia — Oferta R$ 17,90" },
      { property: "og:description", content: "Acesso imediato por pagamento único de R$ 17,90." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16 font-sans">
      <section className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-xl">
        <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-extrabold tracking-widest text-primary-foreground">
          ACESSO IMEDIATO
        </span>
        <p className="mt-6 text-muted-foreground">
          De <span className="line-through">R$ 59,90</span> por
        </p>
        <p className="font-display text-6xl font-extrabold text-primary">R$ 17,90</p>
        <p className="mt-2 text-sm font-semibold text-foreground">Pagamento único</p>
        <a
          href="https://pay.cakto.com.br/hwnhc4g"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block rounded-2xl bg-cta px-6 py-4 text-sm font-extrabold tracking-wide text-cta-foreground shadow-lg transition-transform hover:scale-[1.03]"
        >
          QUERO ACESSAR FARMACOLOGIA AGORA
        </a>
        <p className="mt-4 text-xs text-muted-foreground">Oferta por R$ 17,90.</p>
      </section>
    </main>
  );
}
