# Theme - Bloom

The **light-paper** atmospheric theme: the generative-creative register rendered in **warm daylight** instead of the usual nocturnal dark. A calm warm off-white ground, a soft terracotta bloom that reads like dawn light through a studio window, Geist geometric-sans display, Instrument Serif as a warm counterpoint, Geist Mono machine labels. It reads like a sunlit studio: inviting, expressive, made-not-manufactured.

The material, in one line: **warm light emitted from a light ground, plain sans, one serif line.**

## Axes (diversification)

- **Paper band** - light warm off-white (`oklch(97% 0.010 72)`, `L 97%`, hue 72, very low chroma). The documented light-paper exception in a mostly-dark genre; distinct from every dark atmospheric ground and from Cobalt's cool near-white.
- **Display style** - **geometric-sans** (Geist `600`, `--tracking-display: -0.022em`, roman). Plain-English and confident. Distinct from serif themes and from Cobalt's grotesk.
- **Accent hue** - **restrained terracotta-coral** (`oklch(56% 0.13 35)`) with a soft warm companion (`oklch(64% 0.09 55)`) used only in the bloom tint. Warm ~35 deg; sits clear of Lumen's brass (~50) and any cool blue.

## Reference register

Suno · Udio · Runway · Luma · Pika · Krea · Ideogram · Playground · Kittl · consumer-facing generative-creative studios.

The material to match: a warm, sunlit creative canvas where the made thing is the hero, plain-English expressive display, one warm accent on small surfaces. Dawn light falling across a fresh studio canvas - the atmospheric bloom recoloured from midnight to morning. Ask "does this feel like a studio at 9am, or a nightclub at midnight?" Keep the former. **Never name any of these in the output.**

**Voice range:** warm, daylight, expressive, specific. Say the verb (make, hum, describe) and say the output (song, scene, image).

## Palette

- `--color-paper: oklch(97% 0.010 72)` - warm off-white, never `#fff`
- `--color-paper-2` / `--color-paper-3` - warm elevated surfaces
- `--color-ink: oklch(20% 0.022 40)` - warm near-black headlines
- `--color-ink-2: oklch(30% 0.022 46)` - body
- `--color-muted: oklch(50% 0.018 58)` - meta
- `--color-accent: oklch(56% 0.13 35)` - terracotta, the one signal
- `--color-accent-2: oklch(64% 0.09 55)` - soft warm companion, bloom tint only
- `--color-accent-ink: oklch(98% 0.010 72)` - text on a terracotta fill

Every neutral carries a warm cast (hue 40-72): the page is warm-tinted top to bottom. Accent stays a signal under ~8% of any viewport, spent on one filled control, links, and small tags; never a wash behind type.

## Typography

- **Display** - Geist at `--display-weight: 600`, `--tracking-display: -0.022em`, `--lh-tight: 1.06`, clamped up to `5.75rem`. Roman, never italic. Expressive plain-English, confident rather than decorative.
- **Body** - Geist 400/500.
- **Serif** - Instrument Serif appears as **one** warm gesture: a lede sentence, a pulled line, or a large numeral. Roman always, never in the H1. This dual voice (geometric sans plus one serif line) separates Bloom from the all-Geist dark siblings without turning editorial.
- **Label** - Geist Mono, UPPERCASE, `--tracking-label: 0.12em`. The dry technical voice against the warm expressive display: captions, tags, model names, meta rows, table headers, units.

## Material

- **Warm bloom on warm light paper.** The name move. One or two **fixed, un-animated** radial blooms sit behind the content: `--color-accent` (35 deg) at ~8-10% alpha and `--color-accent-2` (55 deg) at ~6-8%, each ~25-40% footprint. It reads like sunlight on paper. Bloom **emits warm light from a light ground**, the genre's documented light-paper exception.
- **Elevated warm surfaces, not hairlines.** Depth is `--color-paper-2` / `--color-paper-3` over a soft warm shadow with a `--color-rule` hairline; raised things lift toward the reader with a warm glow on hover. Warm elevation, never cool blur or glass.
- **Radius** - soft pills (`999px`) on controls; the one filled control takes `--color-accent` with `--color-accent-ink` text and a low-alpha warm glow on hover.
- **Hand-built imagery.** Whatever the page shows is drawn in CSS and hand-authored SVG and lit warmly by the bloom, never a stock photo and never a glowing orb.

## Motion

Fade-in only; the atmosphere does the work. Reveals fade (optional <=8px rise), once. The bloom is **static and fixed**, never animated, never a drifting blob. Hover adds a warm glow on the filled control and a lift on raised surfaces. An optional one-shot type-in of a single line is allowed, then static, never looping. No slide, no bounce, no parallax, no autoplay. Everything gates behind `prefers-reduced-motion: no-preference`; reduced-motion ships static and fully visible.

## Do-nots (this theme's own failure modes)

- **Never a dark canvas.** Bloom is the light-paper atmospheric theme; a dark ground is Midnight, Terminal, or Lumen Night. Paper stays `L 97%`.
- **Never cool paper or a cool accent.** Warm throughout (neutrals 40-72, accent ~35); a cool grey or blue reads as Cobalt or Midnight.
- **Never an accent flood.** A large orange field collides with Lumen brass and Coral coral and starts reading as a warning colour.
- **Never a hard-edged or moving bloom.** Soft, low-opacity, static, fixed; a drifting blob is Aurora's move and breaks the calm.
- **Never instrument-panel restraint.** Bloom is expressive and warm, not Cobalt's cool hairline dashboard.
- **Never an italic serif line.** The Instrument Serif counterpoint is roman.

## How Bloom differs from its neighbours

| vs | difference |
|---|---|
| **Midnight** | A **dark** cool canvas (hue ~250), nocturnal. Bloom is **light** warm off-white (hue 72) with a warm terracotta bloom. Light vs dark plus warm vs cool settles it at a glance. |
| **Coral** | Warm-grey paper, hairline structure, a quiet product register, no bloom. Bloom is warm-cream with a warm radial bloom, an expressive display, and elevated surfaces. The bloom plus the register is the tell. |
| **Garden** | Oat-cream with a roman-serif Young Serif display, green ink, hand-built botanical craft. Bloom keeps warm-neutral ink, a geometric display, and a light bloom canvas. Different ink, different focal treatment. |

## When the brief routes here

*generative · AI creative · music · song · video · image · voice · art · make · create · compose · render · imagine · prompt · studio · playground · expressive · warm · daylight · inviting · consumer creative*. Categories: generative music, video, image and voice tools, creative AI apps, consumer model playgrounds, AI art studios. Tone: warm, inviting, optimistic, expressive, daylight-creative, human, playful but refined.

Dark or nocturnal briefs route to Midnight or Lumen, technical or instrument briefs to Cobalt, editorial or real-photography briefs elsewhere.

## Build hint

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Instrument+Serif&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-ink-2);
       font-family: var(--font-body); font-weight: 400; }

/* The bloom - two warm radials on warm paper, static + fixed */
body::before {
  content: ""; position: fixed; inset: 0; z-index: -1; pointer-events: none;
  background:
    radial-gradient(42% 38% at 72% 16%, oklch(56% 0.13 35 / 0.10), transparent 70%),
    radial-gradient(46% 40% at 18% 90%, oklch(64% 0.09 55 / 0.07), transparent 72%); }

/* Geist display - geometric, roman, sized big */
.display { font-family: var(--font-display); font-weight: var(--display-weight);
  letter-spacing: var(--tracking-display); line-height: var(--lh-tight);
  color: var(--color-ink); }

/* Instrument Serif - one warm roman gesture, never the H1 */
.lede--serif { font-family: var(--font-serif); font-style: normal;
  color: var(--color-ink-2); }

/* Mono label voice - captions, tags, meta, units */
.label { font-family: var(--font-label); text-transform: uppercase;
  letter-spacing: var(--tracking-label); color: var(--color-muted); }

/* One filled control, warm terracotta glow on hover */
.btn--solid { background: var(--color-accent); color: var(--color-accent-ink);
  border-radius: 999px; }
.btn--solid:hover { box-shadow: 0 8px 30px oklch(56% 0.13 35 / 0.28); }

/* Reveal - fade only; the atmosphere does the work */
.reveal { opacity: 0; transition: opacity .6s ease; }
.reveal.is-in { opacity: 1; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transition: none; } }
```

Plus one `IntersectionObserver` adding `.is-in`. Bloom supplies the daylight, the warm ground, and the two voices; what the light falls on is the brief's business.
