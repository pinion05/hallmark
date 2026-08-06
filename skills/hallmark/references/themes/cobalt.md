# Theme - Cobalt

Modern-minimal, dev-tool register: the GitBook and Vercel school, executed in **cool cobalt-on-light, not orange**. A calm cool-white ground, ruler-drawn hairlines, exactly one electric cobalt signal, tight technical radii, and mono for anything machine-shaped. It reads like good infrastructure: calm, precise, fast.

The material, in one line: **cool near-white, hairlines instead of boxes, and one electric blue used as a signal.**

> **Why not orange.** GitBook and Firecrawl both converged on orange-as-signal, but that lane is crowded and Hallmark's warm slots are taken (Lumen brass, Bloom terracotta, Coral coral). Cobalt keeps the discipline - cool ground, one signal, hairline structure - and aims the signal at the open electric-blue lane. The blue is the differentiator, not a copy.

## Axes (diversification)

- **Paper band** - cool light (`L 98.5%`, hue ~250, very low chroma), an engineered near-white distinct from Coral's warm grey and from the genre's dark grounds. Ink is cool charcoal `oklch(24% 0.02 258)`; body text sits a notch lighter at `oklch(34% 0.018 257)`.
- **Display style** - **grotesk-sans** (Familjen Grotesk 500/600, flared terminals and a slightly idiosyncratic `g`, tight tracking). Distinct from Geist (Coral) and from every serif and rounded option.
- **Accent hue** - **electric cobalt** (`oklch(58% 0.20 256)`). High-chroma true blue, reads "API-live", sits clear of Midnight and Lumen's dusky indigos (~250 and 268). A signal, never a flood.

## Reference register

GitBook · Firecrawl · Vercel and Geist · Linear · Mintlify · Stripe docs · Resend · Clerk · Railway · Supabase. The material to match: a cool engineered canvas, one signal accent, mono machine-readout against a grotesk display, hairline structure, and a graphite surface where something technical is shown. When in doubt, ask whether this reads like an instrument panel or a marketing template, and keep the former. Never name any of these in the output.

## Typography

Three families, all sans, no serif anywhere.

- **Display** - Familjen Grotesk 500/600, tight tracking.
- **Body** - Inter 400/500.
- **Mono and label voice** - JetBrains Mono, UPPERCASE at `0.06em` tracking for captions, meta rows, table headers, status chips, units, folios, and keyboard hints; lowercase mono for code and commands. The machine-readout register against the Familjen Grotesk display. It is never a kicker over a heading.

## Material

- **Cool engineered paper, never `#fff`, never `#000`.** `oklch(98.5% 0.004 250)` on cool charcoal.
- **Hairlines do the work.** 1px `--color-rule` borders define every surface. No boxed cards and no drop shadows beyond a single barely-there `0 1px 2px` lift. Depth comes from borders, not blur.
- **One cobalt signal, under 5% of any viewport** - a link's hover underline, the one primary button, focus rings, a status chip, an active nav item, a syntax token. Everything else is ink on cool white.
- **Tight technical radii** - 6px on controls, 10px on larger surfaces. Not Coral's soft pills, not zero-radius brutalism: drawn with a ruler.
- **Graphite is the dark material.** Where the page needs a dark surface it is `oklch(22% 0.016 260)` (or `~20%` full-bleed) with light cool text and cobalt popping. Cobalt is a light theme *with* graphite in it, never a dark theme.
- **No background texture or pattern at all.** No glassmorphism, no gradient text, no aurora or mesh blob. Cool paper plus hairlines carry the page.

**Shapes Cobalt suits** (affinities, never requirements): a graphite code or terminal surface as the focal artefact, with a window bar, syntax tokens, and a status chip; a single full-bleed graphite band giving the page a light-dark-light rhythm; a working ⌘K palette (real keyboard handling, `role="dialog"`, focus-managed) so the page *behaves* like a dev tool rather than only looking like one.

## Motion

Composed and sparse. Section reveals fade and rise ~10px over ~600ms ease-out via one `IntersectionObserver`. One line of a code demo may type in once, then stay static. Hover gives a cobalt underline-grow on links and a 1px border shift to cobalt on focusable surfaces. No bounce, no parallax, no autoplay. Everything gates behind `prefers-reduced-motion: no-preference`; reduced motion ships static and fully visible.

## Do-nots (this theme's own failure modes)

- **Never an orange accent.** That is the crowded lane Cobalt exists to leave, and it collides with Lumen, Bloom, and Coral. Cobalt is blue.
- **Never warm paper, and never pure `#fff` or `#000`.** Warm grey is Coral's. Cobalt is cool, hue 250-258, on cool charcoal.
- **Never a pill or gradient CTA.** One solid cobalt button at 6px radius plus understated typographic links. Name the destination.
- **Never a floating pill nav.** That is softer, and it is Coral's vocabulary. Cobalt's chrome is a flush bar with a single hairline.
- **Never fake code.** A snippet on a Cobalt page compiles, resolves, or returns; an invented endpoint or a placeholder response is the theme's worst failure.
- **Never more than one dark beat.** A second full-bleed dark section turns the light theme into a striped one.

## Voice range

Declarative, technical, specific: name the endpoint, the command, the number. No hype adjectives. Never: seamless, robust, cutting-edge, leverage, synergy, revolutionary, unlock, supercharge. Never "click here."

## How Cobalt differs from its neighbours

| vs | difference |
|---|---|
| **Coral** | Coral is warm-grey paper, warm coral accent, Geist, soft pills, quiet type. Cobalt is cool-white, electric blue, Familjen Grotesk and JetBrains Mono, tight bordered controls, graphite. Same genre, opposite temperature; the rotation walks between them. |
| **Midnight** | Both live near hue 250-258, but Midnight is a **dark** atmospheric canvas with a numbered display and typewriter reveals. Cobalt is a **light** engineered canvas. Light vs dark settles it instantly. |
| **Lumen** | Lumen is an apparatus page with Instrument Serif and an emit-or-refract focal artefact. Cobalt is all-sans, hairline-structured, and its focal material is literal code, not a built light-instrument. |
| **Ledger** | Ledger is the dark sibling in the same cluster: navy ground, teal, Hanken and IBM Plex Mono, money as its subject. Cobalt is light, cobalt, and code as its subject. |
| **Grid** | Grid is editorial Swiss: red accent, single-family Archivo, a visible 12-column grid, zero radius. Cobalt is a blue instrument with radii and a graphite surface. |

## When the brief routes here

*API · SDK · CLI · dev tool · developer platform · docs · documentation · infrastructure · backend · database · observability · webhooks · type-safe · open-source tool · ship · deploy · developer experience*. Categories: APIs, developer tools, dev platforms, docs sites, infra, SaaS for engineers. Tone: precise, engineered, fast, technical, instrument-panel, calm-confident, cool.

Warm, consumer, editorial, or image-led briefs route elsewhere. When the brief is for developers and wants to show the code, it is Cobalt.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400..700;1,400..700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-ink-2);
       font-family: var(--font-body); font-weight: 400; }

/* Reveal - the whole motion engine */
.reveal { opacity: 0; transform: translateY(10px);
          transition: opacity .6s cubic-bezier(0.16,1,0.3,1),
                      transform .6s cubic-bezier(0.16,1,0.3,1); }
.reveal.is-in { opacity: 1; transform: none; }

/* Graphite: the theme's one dark material, hairline-framed, 10px */
.graphite { background: var(--color-graphite); border: 1px solid var(--color-rule-2);
            border-radius: 10px; box-shadow: 0 1px 2px oklch(24% 0.02 258 / 0.05);
            font-family: var(--font-mono); }

.mono {                                /* captions, meta, status, kbd hints - never a kicker */
  font: 500 0.75rem/1 var(--font-mono); letter-spacing: .06em; text-transform: uppercase;
}
.signal { color: var(--color-accent); } /* the one blue: a token, a chip, a focus ring */

/* Flush bordered chrome + the one cobalt button (6px, never a pill) */
.bar { border-bottom: 1px solid var(--color-rule); backdrop-filter: blur(8px); }
.btn--primary { background: var(--color-accent); color: var(--color-accent-ink);
                border-radius: 6px; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

Cobalt supplies the cool ground, the hairlines, the graphite, and the one blue. What gets built on it is the brief's business, not the theme's.
