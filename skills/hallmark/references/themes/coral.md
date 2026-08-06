# Theme - Coral

Modern-minimal in warmth rather than cool steel. A warm-grey ground (never pure white), warm charcoal ink (never black), exactly ONE warm coral signal, General Sans for everything, soft pills. The confident-but-human school: calm, generous, typographic. It reads like a product that is easy to trust.

The material, in one line: **warm grey, one coral signal, one sans family, and soft pills.**

## Axes (diversification)

- **Paper band** - warm light (`oklch(96.5% 0.005 50)`, hue 50, very low chroma). A warm near-white grey, not Cobalt's cool white and not Garden's oat cream.
- **Display style** - grotesk-sans (General Sans 600, `-0.025em` tracking). Single-family, distinct from Cobalt's Familjen Grotesk and from every serif.
- **Accent hue** - warm coral (`oklch(64% 0.165 28)`). One warm signal, clear of Cobalt's electric blue and Garden's leaf green. A signal, never a flood.

## Reference register

Stripe · Linear · Vercel · ElevenLabs · Framer · Raycast · Resend · Mercury.

The material to match: the confident warm landing - generous whitespace, soft pill controls, one restrained accent, thin visible borders, monochrome-with-conviction warmed one notch off cool grey. Ask "does this feel like a calm, trustworthy product, or a loud template?" Keep the former. Never name any of these in the output.

**Voice range:** declarative, warm, specific. Name the number, the product, the outcome; never "click here", never hype.

## Palette

- `--color-paper: oklch(96.5% 0.005 50)` - warm near-white grey, never `#fff`
- `--color-paper-2: 94%` / `--color-paper-3: 91%` - layered warm greys
- `--color-ink: oklch(20% 0.010 35)` - warm near-black
- `--color-ink-2: oklch(26% 0.012 40)` - body, a notch lighter
- `--color-accent: oklch(64% 0.165 28)` - the one coral signal
- `--color-rule: oklch(86% …)` - thin visible borders

The warmth is the whole differentiator from the cool siblings, so commit to it and never drift to pure white. Coral stays under 5% of any viewport: spend it on a link's hover underline, focus rings, one figure, OR a single coral-filled control. Pick one, do not flood. Never a coral background wash.

## Typography

- **Display** - General Sans 600 at `--tracking-display: -0.025em`, up to `4.5rem`.
- **Body** - General Sans 400/500. Single-family discipline: display and body are the same face. Coral is warmed by paper and accent, never by a font swap.
- **Label** - Geist Mono, UPPERCASE, `--tracking-label`. Small meta, captions, table headers, units, code, folios. No serif anywhere, no second sans.

## Material

- **Soft pills.** `999px` (`--radius-pill`) on controls and chips; surfaces at `8px` (`--radius-card`), inputs at `6px`. The rounded, friendly control vocabulary, the opposite of Cobalt's ruler-drawn 6px tightness. This is a load-bearing sibling separator.
- **Control pair** - an ink-filled primary (`--color-ink` fill, `--color-paper` text) beside a 1px `--color-rule` outlined secondary. If the one coral signal is being spent on a fill, the primary takes `--color-accent` with `--color-accent-ink` instead.
- **Thin visible borders, generous air.** 1px `--color-rule` on surfaces and divisions, with a barely-there `--shadow-card` (`0 1px 2px`). Not the 0.5px editorial hairline, not boxed-in. Whitespace does the luxury work: `--section-gap: 6rem`.

## Motion

Composed and sparse. Optional reveals fade and rise ~8px, once; keep them subtle or off. Hover: a coral underline-grow on links, a 1px border-colour lift to `--color-rule-2` on focusable surfaces. No bounce, no parallax, no autoplay, no type-in. Everything gates behind `prefers-reduced-motion: no-preference`; reduced-motion ships static and fully visible.

## Do-nots (this theme's own failure modes)

- **Never cool paper.** Cool grey or blue is Cobalt's. Coral is warm, hue 35-50.
- **Never a second typeface.** General Sans only, with Geist Mono for meta and code. No serif, no mono-as-display.
- **Never tight ruler radii.** Coral is soft pills at 999px, not 6px bordered controls.
- **Never a coral flood, gradient, or background wash.** The accent is a sub-5% signal.
- **Never background texture, mesh, or blur.** Warm paper, thin borders, and whitespace carry the page.
- **Never a code, API, or terminal focal treatment.** That is Cobalt's move; Coral leads typographically.

## How Coral differs from its neighbours

| vs | difference |
|---|---|
| **Cobalt** | Cool white, electric blue, Familjen Grotesk plus JetBrains Mono, tight 6px bordered controls, a live code register. Coral is warm grey, coral, General Sans, soft 999px pills. Same genre, opposite temperature; the rotation walks between them. |
| **Garden** | Also warm and light, but oat-cream botanical *editorial* with green ink and hand-built craft. Coral is warm-*grey* modern-minimal, all General Sans, coral signal. Register settles it. |
| **Lumen** | A premium apparatus register with a classical serif headline and a built light instrument. Coral is light, all-sans, soft pills, no artefact. Serif-plus-apparatus vs sans-plus-pills. |

## When the brief routes here

*SaaS · platform · billing · payments · dashboard · B2B · startup · product landing · pricing · analytics · fintech · workflow · team tool · onboarding · trust · warm · human*. Categories: SaaS, fintech, B2B platforms, startup landings, dashboards, billing and payments. Tone: warm, calm, confident, trustworthy, human, premium-restrained.

Warmth plus product-not-code routes here. If the brief wants to *show the code* or reads cool and technical, route Cobalt; if it is editorial or image-led, route elsewhere.

## Build hint

```html
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-ink-2);
       font-family: var(--font-body); font-weight: 400; }

/* Display - General Sans 600, tight */
.display { font-family: var(--font-display); font-weight: var(--display-weight);
           letter-spacing: var(--tracking-display); font-size: var(--text-display); }

/* Soft pills - the control vocabulary */
.btn { border-radius: var(--radius-pill); }
.btn--primary { background: var(--color-ink); color: var(--color-paper); }
.btn--secondary { border: 1px solid var(--color-rule); color: var(--color-ink); }

/* One coral signal + mono label voice (meta, captions, units) */
.link:hover { color: var(--color-accent); }
.label { font-family: var(--font-mono); text-transform: uppercase;
         letter-spacing: var(--tracking-label); }

/* Reveal - restrained, optional */
.reveal { opacity: 0; transform: translateY(8px);
          transition: opacity .5s cubic-bezier(0.16,1,0.3,1),
                      transform .5s cubic-bezier(0.16,1,0.3,1); }
.reveal.is-in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

Plus an optional `IntersectionObserver` adding `.is-in`. Coral supplies the warm ground, the one signal, and the soft control vocabulary; the composition is the brief's business.
