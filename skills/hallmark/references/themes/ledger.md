# Theme - Ledger

Modern-minimal, fintech-terminal register: the Mercury and Ramp school, or Bloomberg density tamed. A dark navy instrument panel, ruler-drawn hairlines, exactly one teal signal on the figures that matter, and numbers set like a printed statement. It reads like a closed book at 06:00 UTC: precise, calm, audited.

The material, in one line: **flat navy, hairlines, tabular mono, and one teal on the figures that matter.**

> **The one dark option in the modern-minimal cluster.** Coral and Cobalt own the light lane; Ledger fills the dark slot. It is dark but **not atmospheric** (that is Midnight): no glow, no bloom, no serif, no thin display. An instrument, not a mood.

## Axes (diversification)

- **Paper band** - **dark navy** (`--color-paper` `L 20%`, hue 255, chroma 0.025), lifted a hair to `--color-paper-2` (`L 24%`) for raised surfaces and a subtle top-band gradient. A cool terminal ground, distinct from Midnight's deeper `L 15%` and from every light theme. Ink is cool light `L 93%`.
- **Display style** - **grotesk-sans** (`--font-display` Hanken Grotesk `600`, `--tracking-display` `-0.02em`) paired with **tabular mono** (`--font-mono` IBM Plex Mono) on every figure. Not a serif, not a thin display.
- **Accent hue** - **chromatic teal** (`--color-accent: oklch(78% 0.12 185)`), a single positive-figure signal sitting clear of Cobalt's 256, Midnight's 220, and Coral's 28. Teal means reconciled, credited, live.

## Reference register

Mercury · Ramp · Brex · Modern Treasury · Stripe's dashboard · a Bloomberg terminal with the density halved · Plaid. The material to match: a fintech surface where the money is the subject, in tabular mono, with mono meta and status against a flat navy ground. Dense but legible; a terminal you would trust with the close. When in doubt, ask whether this reads like a treasury console a controller signs off on, or like a crypto landing. Keep the former: no neon, no gradients on numbers. Never name any of these in the output.

## Typography

Two families, no serif anywhere.

- **Display and body** - Hanken Grotesk 400/500/600/700, display at 600 with `-0.02em` tracking.
- **Figures** - IBM Plex Mono 400/500 with `font-variant-numeric: tabular-nums`, on **every** number: balances, amounts, spec values, timestamps, deltas. Columns align digit-for-digit or the theme breaks. This is the spine.
- **Label voice** - IBM Plex Mono, UPPERCASE, tracked `0.06-0.14em`. It sets captions, table headers, meta rows, status chips, units, folios, and a UTC clock. The terminal readout against the Hanken display. It is never a kicker over a heading.
- **The big figure** is mono, teal, `clamp(2.1rem, 5vw, 3.1rem)`, weight 500, with a small superscript currency mark and faded decimals.

## Material

- **One teal signal, under 5% of any viewport** - positive amounts, the headline figure, a live dot, an operational bullet, and the one solid teal button. Everything else is `--color-ink` or `--color-muted` on navy. **Debits are never red**; they are simply muted. Teal is the only chromatic colour on the page.
- **Hairlines plus one surface tier carry depth.** 1px `--color-rule` borders draw every edge; raised surfaces sit on `--color-paper-2` with a single deep `--shadow-card`. No glow, no inner gradients, no blur-as-depth.
- **Tight instrument radii** - `--radius-card` 12px, `--radius-input` 8px. Never a pill, never zero.
- **Rows, not tiles.** Repeated data reads as ruled rows in a real `<table>`: right-aligned amounts, a hairline under each row, a hover that lifts the row to `--color-paper-3`.
- **Charts stay quiet.** An inline SVG line in teal over a fade-to-transparent fill, no axes, no grid, no second colour. Anything beyond that is [`data-viz.md`](../data-viz.md).

**Shapes Ledger suits** (affinities, never requirements): a datasheet - a dense `<dl>` of label-left and mono-value-right, arguing in specifications rather than adjectives; a live ledger table as a focal artefact; a reconciled figure with a mono meta line under it giving the as-of time and the delta.

## Motion

Composed and near-still. A live dot pulses (opacity 1 → 0.4 over `2.4s`). Rows shift background on hover; buttons dip `translateY(1px)` on `:active`; links shift border and colour. An optional one-shot count-up of a headline figure on load, then static. No parallax, no autoplay charts, no glow, no number-scrambling on scroll. Everything gates behind `prefers-reduced-motion: no-preference`; reduced motion ships static and fully visible.

## Do-nots (this theme's own failure modes)

- **Never an atmospheric glow, aurora, mesh, radial bloom, or gradient text, and never pure `#000` or `#fff`.** That is Midnight's lane. Ledger is flat: chromatic navy, hairlines, one teal.
- **Never a proportional numeral on a figure.** Every balance, amount, and spec value is tabular mono. Misaligned columns break the theme faster than any other error.
- **Never a red debit and never a second accent.** Debits are muted; teal is alone.
- **Never a pill or gradient CTA.** One solid teal button at 8px radius, plus typographic links. Name the destination.
- **Never fake dashboard clutter.** One chart at most, real-looking sample figures, no donut walls, no gauge rows, no confetti of KPIs.
- **Never an invented statistic.** A figure on a Ledger page is honest or it is not on the page.

## Voice range

Declarative, numeric, audited. Name the figure, the feed, the lock time; let specifications do the arguing. Never: seamless, robust, cutting-edge, leverage, synergy, revolutionary, unlock, supercharge, effortless, game-changing. Never "click here."

## How Ledger differs from its neighbours

| vs | difference |
|---|---|
| **Cobalt** | Cobalt is cool near-white paper (`oklch(98.5% 0.004 250)`), electric cobalt (`0.20 256`), Familjen Grotesk and JetBrains Mono, and code as its focal material. Ledger is dark navy (`oklch(20% 0.025 255)`), teal (`0.12 185`), Hanken and IBM Plex Mono, and money as its focal material. Same cluster, opposite ground. |
| **Midnight** | Both are dark near hue 250, but Midnight is **atmospheric**: deeper `L 15%`, blue accent (`0.16 220`), Geist plus Instrument Serif, `--display-weight 300` with `0.16em` labels, typewriter reveals. Ledger is **modern-minimal**: lifted `L 20%` navy, teal 185, Hanken 600, flat and still. Mood vs instrument. |
| **Coral** | Coral is warm-grey paper (`oklch(96.5% 0.005 50)`), warm coral (`0.165 28`), Geist, `--radius-pill 999px`. Ledger is dark navy, teal, 12px and 8px radii. Opposite temperature, opposite ground. |
| **Terminal** | Terminal is green-black with mono for everything including body, a reading surface. Ledger keeps mono for figures only and sets its prose in a grotesk. Editor vs console. |

## When the brief routes here

*treasury · banking · fintech · payments · reconciliation · ledger · accounting · close · audit · balance · cash management · finance dashboard · payouts · settlement · compliance · SOC 2 · controller · CFO*. Categories: business banks, treasury software, payments APIs, accounting and reconciliation tools, finance dashboards, fintech SaaS. Tone: precise, audited, calm, trustworthy, dense-but-legible, terminal, dark.

Warm, consumer, editorial, or image-led briefs route elsewhere. When the brief is finance and wants to show the numbers, it is Ledger.

## Build hint

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: linear-gradient(180deg, var(--color-paper-2) 0%, var(--color-paper) 46%) no-repeat;
       background-color: var(--color-paper); color: var(--color-ink);
       font-family: var(--font-body); font-weight: 400; }

/* Every figure is tabular mono - the theme's spine */
.mono { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
.pos  { color: var(--color-accent); }   /* credits and the one signal; debits stay muted, never red */

/* Raised surfaces: one hairline, one deep shadow, no glow */
.raised { background: var(--color-paper-2); border: 1px solid var(--color-rule);
          border-radius: var(--radius-card); box-shadow: var(--shadow-card); }

/* Ruled data rows lift on hover */
td { border-bottom: 1px solid var(--color-rule); color: var(--color-ink-2); }
@media (hover: hover) { tbody tr:hover td { background: var(--color-paper-3); } }

/* The one teal button - 8px, never a pill */
.btn--accent { background: var(--color-accent); color: var(--color-accent-ink);
               border-radius: var(--radius-input); }

@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; } }
```

Ledger supplies the navy, the hairlines, the tabular spine, and the one teal. Which figures earn the page is the brief's business, not the theme's.
