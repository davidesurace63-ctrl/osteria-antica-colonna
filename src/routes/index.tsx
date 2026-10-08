import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import sala from "@/assets/sala.jpg.asset.json";
import ingresso from "@/assets/ingresso.avif.asset.json";
import tagliere from "@/assets/tagliere.avif.asset.json";
import affettati from "@/assets/affettati.avif.asset.json";
import bigoli from "@/assets/bigoli.avif.asset.json";
import tagliatelle from "@/assets/tagliatelle.avif.asset.json";
import sarde from "@/assets/sarde.avif.asset.json";
import patate from "@/assets/patate.avif.asset.json";
import carpaccio from "@/assets/carpaccio.avif.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Osteria Antica Colonna — Cucina tradizionale veneta" },
      { name: "description", content: "Osteria Antica Colonna a Padova, Via Altinate 127: bigoli fatti in casa, baccalà, sarde in saor e vini veneti. Prenota il tuo tavolo." },
      { property: "og:title", content: "Osteria Antica Colonna — La vera tradizione veneta a Padova" },
      { property: "og:description", content: "I sapori autentici di una volta nel cuore di Padova, Via Altinate 127. Prenota un tavolo." },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "#home"], ["Chi Siamo", "#chi-siamo"],
  ["Menu", "#menu"], ["Contatti", "#contatti"],
];

const dishes = [
  { src: tagliere.url, t: "Tagliere della casa", d: "Affettati misti con scaglie di formaggio" },
  { src: bigoli.url, t: "Bigoli fatti in casa", d: "Pasta fresca condita secondo tradizione" },
  { src: tagliatelle.url, t: "Tagliatelle al tartufo", d: "Pasta fresca con spolverata di tartufo" },
  { src: affettati.url, t: "Affettati misti", d: "Selezione di salumi e formaggi" },
  { src: sarde.url, t: "Sarde in saor", d: "Affogate nella cipolla stufata, ricetta veneziana" },
  { src: patate.url, t: "Patate alla Ca' Dorina", d: "Speck croccante, cipolla e burro fuso" },
  { src: carpaccio.url, t: "Carpaccio di scottona", d: "Con funghi e prezzemolo fresco" },
];

type Item = [string, string?];
const menu: Record<string, Item[]> = {
  Antipasti: [
    ["Affettati misti con formaggi", "medio 14 € · grande 16 €"],
    ["Bufala, prosciutto crudo e pomodorini", "15 €"],
    ["Baccalà alla vicentina e mantecato con sarde in saor e polenta"],
    ["Uova in padella e tartufo di Acqualagna D.O.P.", "12 €"],
    ["Terracotta", "12 €"],
    ["Fusione di asiago e gorgonzola con pere e noci"],
  ],
  Primi: [
    ["Bigoli di pasta fresca al ragù bianco di cortile", "13 €"],
    ["Bigoli di pasta fresca in salsa di acciughe", "13 €"],
    ["Tagliatelle con verdure spadellate", "11 €"],
    ["Paccheri con gamberetti, pesto e stracciatella", "15 €"],
  ],
  Secondi: [
    ["Tartare o carpaccio di scottona", "24 €"],
    ["Costata di scottona (all'etto)", "5 € / hg"],
    ["\u201CLabbra salate\u201D", "17 €"],
    ["Baccalà alla vicentina e mantecato con sarde in saor e polenta"],
    ["Arrosto di vitello con patate", "20 €"],
    ["Ribs di maiale con salsa dello chef", "20 €"],
    ["Fegato alla veneziana con polenta", "22 €"],
  ],
  Contorni: [
    ["Insalata con pomodori e cipolla", "5 €"],
    ["Fagioli alla Bud Spencer con salsiccia e pomodoro piccante", "7 €"],
    ["Fagioli e cipolla", "6 €"],
    ["Verdure spadellate", "6 €"],
    ["Patate alla Ca' Dorina con speck, cipolla e burro fuso", "7 €"],
  ],
  Dolci: [
    ["\u201CIl nostro\u201D tiramisù medaglia d'oro al valore (quando c'è!)", "6 €"],
    ["Semifreddo al pistacchio", "6 €"],
    ["Semifreddo al torroncino", "6 €"],
    ["Soufflé al cioccolato con cuore caldo", "6 €"],
  ],
  Vini: [
    ["Rossi — Valpolicella Ripasso, Benedetti La Villa", "26 €"],
    ["Rossi — Valpolicella Classico Superiore, Benedetti La Villa", "24 €"],
    ["Rossi — Cabernet, Parco del Venda", "22 €"],
    ["Rossi — Merlot, Parco del Venda", "22 €"],
    ["Rossi — Merlot Lapilli, Parco del Venda", "26 €"],
    ["Rossi — Cabernet Agape, Parco del Venda", "26 €"],
    ["Bianchi — Rio Floriano Friulano Collio DOC", "26 €"],
    ["Bianchi — Chardonnay, Parco del Venda", "22 €"],
    ["Bianchi — Chardonnay, Frassinella", "21 €"],
    ["Bianchi — Pinot Bianco, Parco del Venda", "22 €"],
    ["Bianchi — Pinello Autoctono, Parco del Venda", "22 €"],
    ["Bollicine — Prosecco, Parco del Venda", "20 €"],
    ["Bollicine — Champagne Uve Blanche Estelle Encry Brut", "80 €"],
  ],
  "Casa & Birra": [
    ["Rosso fermo della casa (1/4 L)", "4 €"],
    ["Prosecco della casa (1/4 L)", "4 €"],
    ["Birra alla spina (piccola)"],
  ],
};

const field = "w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring";

function Title({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{children}</h2>
      <div className="checker mt-5 h-2 w-24 rounded-sm" />
    </div>
  );
}

function Index() {
  const [booked, setBooked] = useState(false);
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const submit = (f: (v: boolean) => void) => (e: FormEvent) => { e.preventDefault(); f(true); };

  return (
    <div className="font-sans">
      <header className="fixed inset-x-0 top-0 z-40 bg-wood/90 text-wood-foreground backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="#home" className="font-display text-2xl font-semibold italic">Osteria Antica Colonna</a>
          <nav className="hidden gap-7 text-sm lg:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="opacity-80 transition hover:text-accent hover:opacity-100">{l}</a>)}
          </nav>
          <a href="#home" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/85">Prenota un Tavolo</a>
        </div>
      </header>

      <section id="home" className="relative pt-24">
        <div className="relative flex min-h-screen items-center bg-cover bg-center" style={{ backgroundImage: `url(${sala.url})` }}>
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr]">
          <div className="text-wood-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Cucina veneta dal cuore</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">La Vera Tradizione Culinaria Veneta</h1>
            <p className="mt-6 max-w-xl text-lg opacity-90">I sapori autentici di una volta, serviti con passione nel cuore di Padova.</p>
          </div>
          <form onSubmit={submit(setBooked)} className="rounded-lg border-t-4 border-primary bg-card p-7 text-card-foreground shadow-2xl">
            <h3 className="font-display text-3xl font-semibold">Prenota il tuo tavolo</h3>
            {booked ? (
              <p className="mt-6 rounded-md bg-secondary p-4 text-sm">Grazie! Abbiamo ricevuto la tua richiesta. Ti richiameremo per confermare.</p>
            ) : (
              <div className="mt-5 grid grid-cols-2 gap-3">
                <input required type="date" aria-label="Data" className={field} />
                <input required type="time" aria-label="Ora" className={field} />
                <select required aria-label="Ospiti" className={`${field} col-span-2`} defaultValue="">
                  <option value="" disabled>Numero di ospiti</option>
                  {Array.from({ length: 12 }, (_, i) => <option key={i}>{i + 1} {i ? "persone" : "persona"}</option>)}
                </select>
                <input required placeholder="Nome" className={`${field} col-span-2`} />
                <input required type="tel" placeholder="Telefono" className={`${field} col-span-2`} />
                <button className="col-span-2 mt-2 rounded-md bg-primary py-3 font-semibold text-primary-foreground transition hover:bg-primary/85">Conferma Prenotazione</button>
              </div>
            )}
          </form>
          </div>
        </div>

        <div id="storia" className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <img src={ingresso.url} alt="L'ingresso dell'Osteria All'Antica Colonna in Via Altinate, Padova" className="aspect-[4/3] w-full rounded-lg object-cover shadow-xl" />
        <div>
          <Title kicker="Dal passato">La Nostra Storia</Title>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>Sotto gli archi di Via Altinate, nel cuore di Padova, l'Osteria All'Antica Colonna custodisce lo spirito delle osterie di una volta: il banco di legno, il calice di vino e le chiacchiere a tavola.</p>
            <p>Ogni giorno impastiamo a mano bigoli e tagliatelle, scegliamo ingredienti a km 0 dai produttori del territorio e cuciniamo le ricette tramandate in famiglia: il baccalà, le sarde in saor, il fegato alla veneziana.</p>
            <p>Nessuna scorciatoia: solo tempo, pazienza e il rispetto per la tradizione.</p>
          </div>
        </div>
        </div>

        <div className="bg-wood py-24 text-wood-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <Title kicker="Galleria">Eccellenze in Tavola</Title>
          <p className="-mt-4 mb-10 opacity-80">I nostri piatti tradizionali preparati con ingredienti freschi e di qualità.</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {dishes.map((d, i) => (
              <button key={d.t} onClick={() => setOpen(i)} className={`group relative overflow-hidden rounded-lg text-left ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={d.src} alt={d.t} loading="lazy" className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="bg-hero-overlay absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-xl font-semibold">{d.t}</p>
                  <p className="text-xs opacity-80">{d.d}</p>
                </div>
              </button>
            ))}
          </div>
          </div>
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-wood/95 p-6 text-wood-foreground" onClick={() => setOpen(null)}>
          <figure className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={dishes[open]!.src} alt={dishes[open]!.t} className="max-h-[75vh] w-full rounded-lg object-contain" />
            <figcaption className="mt-4 flex items-center justify-between gap-4">
              <div><p className="font-display text-2xl">{dishes[open]!.t}</p><p className="text-sm opacity-80">{dishes[open]!.d}</p></div>
              <div className="flex gap-2">
                <button aria-label="Precedente" onClick={() => setOpen((open + dishes.length - 1) % dishes.length)} className="rounded-md border border-wood-foreground/30 px-3 py-1">‹</button>
                <button aria-label="Successivo" onClick={() => setOpen((open + 1) % dishes.length)} className="rounded-md border border-wood-foreground/30 px-3 py-1">›</button>
                <button aria-label="Chiudi" onClick={() => setOpen(null)} className="rounded-md bg-primary px-3 py-1 text-primary-foreground">✕</button>
              </div>
            </figcaption>
          </figure>
        </div>
      )}

      <section id="chi-siamo" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Chi Siamo</p>
        <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">La Passione per l'Ospitalità</h2>
        <div className="checker mx-auto mt-5 h-2 w-24 rounded-sm" />
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">Siamo una piccola squadra che vive l'osteria come una casa: accoglienza calorosa, tovaglie a quadri, un buon bicchiere di vino veneto e la cucina di sempre. Entri da cliente, esci da amico.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[["Pasta fresca", "fatta a mano ogni giorno"], ["Km 0", "dai produttori del territorio"], ["Vini veneti", "dai Colli Euganei e Valpolicella"]].map(([a, b]) => (
            <div key={a} className="rounded-lg bg-card p-6 shadow-sm"><p className="font-display text-2xl font-semibold text-primary">{a}</p><p className="mt-1 text-sm text-muted-foreground">{b}</p></div>
          ))}
        </div>
      </section>

      <section id="menu" className="bg-secondary py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Title kicker="La carta">Il Nostro Menù</Title>
          <Tabs defaultValue="Antipasti">
            <TabsList className="mb-8 flex h-auto flex-wrap justify-start gap-1 bg-transparent p-0">
              {Object.keys(menu).map((k) => (
                <TabsTrigger key={k} value={k} className="rounded-md border border-border bg-card px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{k}</TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(menu).map(([k, items]) => (
              <TabsContent key={k} value={k} className="rounded-lg bg-card p-6 md:p-10">
                <ul className="divide-y divide-border">
                  {items.map(([n, p]) => (
                    <li key={n} className="flex items-baseline justify-between gap-6 py-4">
                      <span className="font-display text-xl">{n}</span>
                      {p && <span className="shrink-0 text-sm font-semibold text-primary">{p}</span>}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="contatti" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <Title kicker="Vieni a trovarci">Contatti</Title>
          <dl className="space-y-5">
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Indirizzo</dt><dd className="font-display text-xl">Via Altinate, 127 · 35121 Padova PD</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Orari</dt><dd>
              Lunedì chiuso<br />
              Mar – Ven · 12:00–14:30 / 19:00–22:30<br />
              Sabato · 12:00–14:30 / 19:00–23:30<br />
              Domenica · 12:00–14:30 / 19:00–22:30
            </dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Telefono & Email</dt><dd><a href="tel:+393200883822" className="hover:text-accent">+39 320 088 3822</a> · info@anticacolonna.it</dd></div>
            <div className="flex gap-4 pt-2 text-sm font-semibold text-primary"><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></div>
          </dl>
          <iframe title="Mappa" src="https://www.google.com/maps?q=Via+Altinate+127,+35121+Padova&output=embed" className="mt-8 h-72 w-full rounded-lg border-0" loading="lazy" />
        </div>
        <form onSubmit={submit(setSent)} className="self-start rounded-lg bg-card p-8 shadow-sm">
          <h3 className="font-display text-3xl font-semibold">Scrivici</h3>
          {sent ? <p className="mt-6 rounded-md bg-secondary p-4 text-sm">Messaggio inviato, grazie! Ti risponderemo presto.</p> : (
            <div className="mt-5 space-y-3">
              <input required placeholder="Nome" className={field} />
              <input required type="email" placeholder="Email" className={field} />
              <textarea required rows={5} placeholder="Messaggio" className={field} />
              <button className="w-full rounded-md bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary/85">Invia messaggio</button>
            </div>
          )}
        </form>
      </section>

      <footer className="bg-wood py-10 text-center text-sm text-wood-foreground">
        <div className="checker mx-auto mb-6 h-2 w-32 rounded-sm" />
        <p className="font-display text-2xl italic">Osteria Antica Colonna</p>
        <p className="mt-2 opacity-70">© {new Date().getFullYear()} Osteria Antica Colonna · P.IVA 00000000000</p>
      </footer>
    </div>
  );
}
