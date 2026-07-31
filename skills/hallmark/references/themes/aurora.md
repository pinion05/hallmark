# Theme - Aurora

Atmospheric, after-dark register, rendered in **cold blue-green light rather than the genre's warm firelight**. A near-black cyan-tilted canvas, cool near-white ink, one teal-green signal, and the identity move: **two overlapping cool blooms curtaining the ground like the northern lights**. Weighty Sora display for confidence, a Sentient serif body so the cold canvas never reads clinical. It should feel like the moment after a deploy goes green.

The material, in one line: **two cold blooms, a heavy sans, and a serif reading voice.**

> **Why the bloom, not the glow.** Midnight is the cluster's one *diffuse azure glow*; Aurora is the one *paired bloom curtain*. The genre licenses up to two blooms and Aurora spends the whole budget: cyan plus teal-green, overlapping, so the ground reads as an aurora and not as a single light. That two-hue cold curtain plus a serif body is the differentiator, not a recolour.

## Axes (diversification)

- **Paper band** - **near-black, cyan-tilted** (`oklch(11% 0.025 200)`). The *deepest* ground in the cluster (Midnight 15%, Lumen Night 13%). The 0.025 chroma at hue 200 is load-bearing: cold blue-green, never `#000`.
- **Display style** - **geometric-sans, weighty** (Sora `--display-weight: 600`, tracking `-0.035em`, up to `5.75rem`). Confident and heavy, the opposite of Midnight's airy thin 300.
- **Accent hue** - **teal-green** (`oklch(68% 0.145 172)`) with a **cyan** secondary (`oklch(72% 0.170 200)`). Both cold; hue 172 sits ~78deg green of Midnight's azure 250. Teal-green is the UI signal; cyan lives in the first bloom.

## Reference register

Linear (dark) · Vercel after-dark · Raycast · Resend dark · Railway · Supabase dark · Planetscale · northern-lights dev landings.

The material to match: the cool-dark product page where the canvas glows blue-green behind a confident sans display, one teal-green signal, a serif reading voice. Hand-built, moody, cold but not clinical. Ask "does this feel like blue-green light on a night sky, or a warm-lit room?" Keep the former. Never name any of these in the output.

**Voice range:** cool, after-dark, dev-fluent, warmed by the serif. Name the command or the number.

## Palette

- `--color-paper: oklch(11% 0.025 200)` - deepest ground in the cluster, cyan-tilted
- `--color-paper-2: oklch(15% 0.028 200)` / `--color-paper-3: oklch(18% 0.030 200)` - elevation
- `--color-ink: oklch(96% 0.010 200)` - cool near-white headlines
- `--color-ink-2: oklch(82% 0.012 200)` - body
- `--color-accent: oklch(68% 0.145 172)` - teal-green, the one UI signal
- `--color-accent-2: oklch(72% 0.170 200)` - cyan, lives in the bloom
- `--color-accent-ink` = paper, for text on a filled teal-green control
- `--color-rule: oklch(28% 0.022 200)` - hairline seams (`rule-2` for a brighter edge)

The cyan tilt runs through every neutral. Accent stays under 5% of any viewport: a link hover, the one primary button, focus rings, a status chip, an active nav item. Cyan never becomes a second UI flood.

## Typography

- **Display** - Sora 600, roman, `--tracking-display: -0.035em`, `--text-display: clamp(3rem, 6vw + 1rem, 5.75rem)`. Heavy sans confidence against the serif body.
- **Body** - **Sentient** 400/500 (Fontshare), a soft-contrast variable serif. The cluster's one serif reading voice: lede and running text both. It warms the cold canvas, and since Midnight and Terminal are all-sans it reads as Aurora instantly. Roman only.
- **Label** - Geist Mono, UPPERCASE, `--tracking-label: 0.10em`. The machine-readout voice: captions, meta rows, status chips, table headers, units, folios.

## Material

- **Two cool blooms.** Fixed-attached radial gradients: cyan (hue 200) top-right, teal-green (hue 172) bottom-left, each ~25-30% footprint at low chroma, overlapping toward the centre so the ground curtains. Static, never animated. One lonely glow is Midnight, not Aurora.
- **Elevated dark surfaces, faint hairlines.** Surfaces ride `paper-2` / `paper-3`, seamed by 1px `--color-rule`. Hover lifts with a soft cyan glow and `translateY(-4px)`. No drop-shadow theatre.
- **Radius** - soft: pill controls at `999px`, gentle radii elsewhere. Nothing ruler-drawn.
- **Void** - `--section-gap: 6.5rem`. The bloom field frames the type; let the void carry it.

## Motion

Fade only, composed and slow. Reveals fade and rise ~10px, once. Hover: a teal-green underline-grow on links, a 1px border shift to `--color-accent`, a soft glow-lift on raised surfaces. No slide, no bounce, no parallax, no autoplay; the blooms are fixed and never animate. Everything gates behind `prefers-reduced-motion: no-preference`; reduced-motion ships static and fully visible.

## Do-nots (this theme's own failure modes)

- **Never one azure glow at hue 250.** That is Midnight. Aurora is *two* blooms and greener (172 + 200).
- **Never a warm accent** (amber, orange, terracotta, gold). That lane belongs to Bloom and Lumen Night.
- **Never an all-sans body.** Running text is Sentient serif; the serif is the theme's warmth.
- **Never a thin display.** Sora 600, not Midnight's Geist 300.
- **Never a rainbow aurora.** The curtain is two cold hues, never a full spectrum.
- **Never a built apparatus or leader-line diagram.** That focal grammar is Lumen. Aurora's canvas treatment is ambient, not machined.

## How Aurora differs from its neighbours

| vs | difference |
|---|---|
| **Midnight** | One diffuse azure glow (hue 250), all-Geist sans, thin 300, restrained. Aurora is two blooms (172 + 200), a Sentient serif body, a heavy Sora 600. Paired-cold-curtain-with-serif vs single-glow-all-sans. |
| **Lumen** | Warm brass-on-violet with a *built apparatus*, Instrument Serif *display*, blueprint grid. Aurora is cool ambient blooms, Sora display, Sentient body. Machined-artefact vs atmospheric-curtain, warm vs cold. |
| **Bloom** | Warm cream light paper, expressive consumer register. Aurora is near-black cyan dark, dev-after-dark register. Warm-light vs cold-dark at a glance. |

## When the brief routes here

*dev tool · AI tool · generative · model playground · render · pipeline · observability · deploy · ship · dark mode · after-hours · late-night · nocturnal · moody · aurora · northern lights · blue-green · cold-clarity*. Categories: AI creative tools, generative model UIs, dev tools with a moody register, data and observability consoles, cool nocturnal SaaS. Tone: cool, after-dark, atmospheric, calm-confident, cold but not clinical.

Warm, consumer, editorial, or light briefs route elsewhere (Bloom or Lumen Night for warm atmospheric, Cobalt for a light code tool). When the brief wants dark, cold, and a glowing canvas, it is Aurora.

## Build hint

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link href="https://api.fontshare.com/v2/css?f[]=sentient@400,500&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-ink-2);
       font-family: var(--font-body); font-weight: 400; }   /* Sentient serif reading voice */

/* The two cool blooms - the whole canvas treatment, fixed and static */
body::before { content: ""; position: fixed; inset: 0; z-index: -1; pointer-events: none;
  background:
    radial-gradient(38% 32% at 82% 12%, oklch(72% 0.17 200 / 0.20), transparent 70%),
    radial-gradient(40% 34% at 12% 92%, oklch(68% 0.145 172 / 0.16), transparent 72%); }

/* Weighty Sora display */
.display { font-family: var(--font-display); font-weight: var(--display-weight);
           letter-spacing: var(--tracking-display); font-size: var(--text-display); }

/* Mono label voice - captions, meta, units, status */
.label { font-family: var(--font-label); text-transform: uppercase;
         letter-spacing: var(--tracking-label); color: var(--color-muted); }

/* The one teal-green signal */
.btn--primary { background: var(--color-accent); color: var(--color-accent-ink);
                border-radius: 999px; }
a:hover { color: var(--color-accent); }

/* Reveal - fade only */
.reveal { opacity: 0; transform: translateY(10px);
          transition: opacity .6s ease, transform .6s ease; }
.reveal.is-in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

Plus one `IntersectionObserver` adding `.is-in`. The rest of the page is yours: Aurora supplies the ground, the curtain, and the two voices, and what gets built in that light is the brief's business.
