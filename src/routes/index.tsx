import { createFileRoute } from "@tanstack/react-router";
import { Moon, Sun, Upload, Printer, Truck, MessageCircle, Instagram, Mail, ArrowRight, Sparkles, Handshake, MapPin, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import logoAsset from "@/assets/eixoz-logo.png.asset.json";
import faviconAsset from "@/assets/favicon.png.asset.json";
import imgColecionaveis from "@/assets/cat-colecionaveis.jpg";
import imgCorporativos from "@/assets/cat-corporativos.jpg";
import imgPersonalizados from "@/assets/cat-personalizados.jpg";

const SITE_URL = "https://eixoz.lovable.app";
const OG_IMAGE = `${SITE_URL}${faviconAsset.url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EixoZ Personalizados | Impressão 3D Premium e Sob Medida" },
      { name: "description", content: "Estúdio de impressão 3D premium em PLA e PETG: colecionáveis, chibis, brindes corporativos e peças personalizadas sob medida. Orçamento rápido pelo WhatsApp e envio para todo o Brasil." },
      { name: "keywords", content: "impressão 3D, impressão 3D personalizada, colecionáveis 3D, chibis impressos, brindes corporativos 3D, chaveiros personalizados, peças sob medida, PLA, PETG, EixoZ" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "EixoZ Personalizados | Impressão 3D Premium e Sob Medida" },
      { property: "og:description", content: "Colecionáveis, brindes corporativos e peças personalizadas impressos em 3D com acabamento premium. Da sua ideia à entrega em todo o Brasil." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: "EixoZ Personalizados | Impressão 3D Premium" },
      { name: "twitter:description", content: "Colecionáveis, brindes e peças sob medida impressos em 3D com acabamento premium." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "EixoZ Personalizados",
          description: "Estúdio de impressão 3D premium em PLA e PETG. Colecionáveis, chibis, brindes corporativos e peças personalizadas sob medida.",
          url: SITE_URL,
          image: OG_IMAGE,
          telephone: "+55-22-99945-1081",
          email: "contato@eixozpersonalizados.com.br",
          areaServed: "BR",
          priceRange: "$$",
          sameAs: [
            "https://instagram.com/eixozpersonalizados",
            "https://www.tiktok.com/@eixozpersonalizados",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = `https://wa.me/5522999451081?text=${encodeURIComponent(
  "Olá, EixoZ! Tenho uma ideia que quero ver impressa em 3D — pode me ajudar com um orçamento?",
)}`;

function TickerZ() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="zg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.21 45)" />
          <stop offset="100%" stopColor="oklch(0.52 0.24 290)" />
        </linearGradient>
      </defs>
      <path
        d="M15 18 H85 L30 78 H85 V92 H15 V82 L70 22 H15 Z"
        fill="url(#zg)"
      />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img src={logoAsset.url} alt="EixoZ" className="h-11 w-11 shrink-0 rounded-xl object-cover" />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-lg font-bold tracking-tight">EixoZ Personalizados</div>
            <div className="truncate text-xs text-muted-foreground">Impressão 3D premium</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#produtos" className="transition-colors hover:text-foreground">Produtos</a>
          <a href="#como-funciona" className="transition-colors hover:text-foreground">Como funciona</a>
          <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-foreground)] shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
            Estúdio maker premium · Sob medida
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Sua ideia, impressa em{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
              alta definição.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Colecionáveis e chibis, brindes corporativos e peças personalizadas —
            impressos em 3D com acabamento premium, atenção a cada detalhe e prazo que cabe no seu projeto.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-base font-semibold text-[var(--accent-foreground)] shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Fale Conosco no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Ver portfólio
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              { icon: Handshake, label: "Atendimento direto com o maker" },
              { icon: BadgeCheck, label: "Orçamento sem compromisso" },
              { icon: MapPin, label: "Envio para todo o Brasil" },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <b.icon className="h-3.5 w-3.5 text-[var(--accent)]" />
                {b.label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-8 -z-10 rounded-[3rem] blur-3xl opacity-60"
            style={{ background: "var(--gradient-primary)" }}
            aria-hidden
          />
          <div className="relative aspect-square w-full max-w-md rounded-[2.5rem] border border-border bg-card p-6 shadow-[var(--shadow-elegant)]">
            <img
              src={logoAsset.url}
              alt="Logo EixoZ Personalizados"
              className="h-full w-full object-contain"
            />
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-2xl bg-card p-3 shadow-[var(--shadow-elegant)] sm:block">
              <TickerZ />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = [
  {
    title: "Colecionáveis & Chibis",
    desc: "Personagens, miniaturas e action figures em alta resolução — impressos coloridos ou finalizados com pintura à mão para um acabamento único.",
    img: imgColecionaveis,
  },
  {
    title: "Brindes Corporativos",
    desc: "Brindes únicos com a sua identidade. Lotes pequenos ou grandes, prazo garantido.",
    img: imgCorporativos,
  },
  {
    title: "Peças Personalizadas",
    desc: "Do seu desenho ao objeto real: criamos suas peças únicas — presentes encantadores, suportes, acessórios e projetos especiais. Mande sua ideia e a gente modela e imprime para você.",
    img: imgPersonalizados,
  },
];

function Products() {
  return (
    <section id="produtos" className="bg-[var(--surface)] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">Portfólio</div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">O que imprimimos para você</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Três especialidades, infinitas possibilidades. Tudo desenhado, fatiado e finalizado in-house.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--muted)]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={768}
                  height={576}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--accent)]"
                >
                  Solicitar orçamento <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { icon: Upload, title: "Envie sua ideia", desc: "Mande uma foto, uma ideia ou o seu arquivo 3D (STL/3MF) — a gente cuida do resto." },
  { icon: Printer, title: "Imprimimos com qualidade", desc: "Trabalhamos com impressão FDM em filamentos PLA e PETG, com revisão de qualidade peça por peça e acabamento caprichado." },
  { icon: Truck, title: "Entrega rápida na sua casa", desc: "Embalado com capricho e despachado em todo o Brasil em poucos dias." },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">Como funciona</div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Do clique à sua mão em 3 passos</h2>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-3xl border border-border bg-card p-8 transition-colors hover:border-[var(--primary)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--primary-foreground)]">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-5xl font-bold text-[var(--accent)]/15">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-base font-semibold text-[var(--accent-foreground)] shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            Começar meu projeto
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src={logoAsset.url} alt="EixoZ Personalizados" className="h-24 w-24 rounded-2xl object-contain" />
          <div>
            <div className="font-display text-xl font-bold">EixoZ Personalizados</div>
            <div className="text-sm text-muted-foreground">Impressão 3D premium · Cultura maker</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://instagram.com/eixozpersonalizados"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@eixozpersonalizados"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.3v6.8a6 6 0 1 1-6-6c.34 0 .67.03 1 .09v3.1a3 3 0 1 0 2 2.8V3h3z" />
              </svg>
            </a>
            <a
              href="mailto:contato@eixozpersonalizados.com.br"
              aria-label="Email"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Mail className="h-4 w-4" />
              contato@eixozpersonalizados.com.br
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} EixoZ Personalizados. Todos os direitos reservados.</div>
          <div>Feito com cultura maker no Brasil.</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Products />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
