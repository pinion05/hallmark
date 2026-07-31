# Theme - Studio

Editorial, design-studio register: the considered-agency school, executed in **high-contrast Fraunces on a cool studio-white, with one deep botanical green**. A faintly cool near-white ground, ruler-drawn hairlines, a huge thick/thin display serif, and whitespace doing the structural work. It reads like a studio that sets its own type: crafted, confident, curatorial.

The material, in one line: **cool studio-white, Fraunces at optical 144, hairlines and air, one botanical green.**

## Axes (diversification)

- **Paper band** - light, cool: `oklch(96.5% 0.005 200)`. An engineered studio-white, hue ~200, almost no chroma. Distinct from warm editorial grounds and from any dark canvas.
- **Display style** - **high-contrast serif** (Fraunces at optical 144, `SOFT` 30, weight 400, tracking `-0.022em`). The thick/thin contrast is the theme. Not a grotesk, not a slab, not a condensed.
- **Accent hue** - **chromatic green** `oklch(46% 0.140 145)`. A deep botanical emerald, mid-dark and saturated but never neon. One signal only, ink-on-white everywhere else.

## Reference register

Aesop · Stripe Press · Readymag · Instrument · Locomotive · Area 17 · Cosmos · Semplice · a type foundry's Fraunces specimen. **Never name any of these in the output.**

The material to match: a cool crafted canvas, one green signal, big high-contrast serif, hairline structure, mono meta-lines. Internally: the specimen discipline of a type foundry with the warmth of a working studio. When in doubt ask "does this read like a studio that hand-sets its own page, or a template?" Keep the former.

## Palette

Canonical values live in `site/css/tokens.css` under `[data-theme="studio"]`.

- `--color-paper: oklch(96.5% 0.005 200)` - cool studio-white, never `#fff`
- second surface `oklch(93.5% 0.007 200)`
- `--color-ink: oklch(13% 0.024 205)` - cool near-black
- `--color-neutral: oklch(34% 0.016 205)` - body
- `--color-accent` / `--color-accent-ink: oklch(46% 0.140 145)` - the one green
- `--color-rule: oklch(82% 0.008 200)` - the 1px hairline

Everything tints faintly toward hue 200-205. The green stays under 5% of any viewport: an emphasised word, a link underline, a small tick, an active state. The **one** filled control uses green as background with a `--color-paper` label, never green on green.

## Typography

- **Display** - Fraunces at optical size 144 (`--display-optical`), weight 400, `SOFT` 30, letter-spacing `-0.022em`, `font-variation-settings: "opsz" 144, "SOFT" 30`, up to `6.25rem` (`--text-display`). Edge-aligned left, 2-3 lines. The dramatic thick/thin stroke is the signature: do not flatten it with a low optical size.
- **Body** - Geist 400 at a 45-75ch measure. The tension of a clean neutral sans under a high-contrast display serif is the pairing. **Never set running body in the serif**; Fraunces is display and pull-quotes only.
- **Label** - Geist Mono UPPERCASE, tracking `0.08em` (`--tracking-label`). A studio's colophon voice: captions, dates, roles, disciplines, table headers, meta rows, folios, units, and entry numbers inside a real `<ol>`. It records a fact; it never sits above a heading to announce it.
- **Emphasis is green, never italic.** A single emphasised word takes `--color-accent-ink` or a green underline; the display face stays roman. Fraunces italic is body emphasis and pull-quotes only.

## Material

- **Hairlines, not cards.** 1px `--color-rule` defines structure. **No boxed cards, no drop-shadows, no glass.** Depth is rules and whitespace.
- **Whitespace as material.** `--section-gap` 6.5rem between beats, `--section-head-gap` 1.5rem under heads. Generous and unhurried; the air is part of the palette.
- **Radius** ~4px on the one filled control. No pills.
- **No texture.** The cool paper is the whole surface.
- **Imagery** sits clean on the cool ground, framed by whitespace rather than by a border or a shadow.

## Motion

Quiet and editorial. One orchestrated entrance per section (fade plus ~10px rise, ease-out ~600ms) via a single `IntersectionObserver`, then static. Hover: a green underline grows on links, a 1px rule shifts toward green on focusable rows. **No bounce, no parallax, no autoplay, no marquee.** Everything gates behind `prefers-reduced-motion: no-preference`; reduced-motion ships fully visible and static.

## Voice range

Confident, spare, a little literary. Verbs over adjectives; name the work, the discipline, the year. Never *seamless, cutting-edge, disrupt, synergy, elevate, next-level, world-class, digital solutions*. Never "click here."

## Do-nots (this theme's own failure modes)

- **Never flatten Fraunces.** A low optical size kills the thick/thin contrast that defines the theme. Keep opsz high on the display.
- **No italic display.** Roman only; italic is body emphasis.
- **No green flood, no neon green.** One deep botanical signal, under 5%. Green backgrounds or a bright green break it.
- **No warm paper, no pure `#fff` / `#000`.** Studio is cool (hue ~200-205); warm cream is Atelier and Garden vocabulary.
- **No boxed cards, shadows, or glassmorphism.** Hairlines and whitespace carry the page.
- **No pill or gradient CTA.** One filled green control plus typographic links.

## How Studio differs from its neighbours

| vs | what settles it instantly |
|---|---|
| **Garden** (green sibling) | Garden is a warm, botanical, organic register where green floods a soft world. Studio is a cool engineered studio-white where the same green is one restrained signal. Temperature and the role of the green settle it. |
| **Atelier** (quiet-serif sibling) | Atelier is the hushed, small-serif, plaster-and-umber practice. Studio is bigger and cooler - Fraunces at opsz 144 on cool white with a green signal. Palette temperature and display scale settle it. |
| **Specimen** (Fraunces / high-contrast sibling) | Specimen exists to display a typeface: type is the subject. Studio uses Fraunces as its voice to present a studio's work. Same face possible, different subject. |

## When the brief routes here

*design studio · creative studio · branding · brand identity · art direction · agency · portfolio · case study · selected work · editorial design · typography · creative direction · graphic design · design practice*. Categories: design and creative studios, branding agencies, art-direction shops, portfolio sites, editorial and publishing practices. Tone: considered, crafted, confident, curatorial, high-contrast, editorial, tasteful.

Dev-tool, enterprise, warm-consumer, and loud-maximalist briefs route elsewhere (the cool-modern lane for developer products, Carnival for loud editorial, Garden for organic and nature).

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,400..700,0..100;1,9..144,400..700,0..100&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-neutral);
       font-family: var(--font-body); font-weight: 400; }

/* Fraunces display - big, high-contrast, roman, tight */
.display { font-family: var(--font-display); font-weight: var(--display-weight);
           font-variation-settings: "opsz" 144, "SOFT" 30;
           font-size: var(--text-display); line-height: 0.98;
           letter-spacing: var(--tracking-display); color: var(--color-ink); }
.display .mark { color: var(--color-accent-ink); }        /* the one green signal */

/* Mono colophon label */
.label { font: 500 0.75rem/1 var(--font-mono); text-transform: uppercase;
         letter-spacing: var(--tracking-label); color: var(--color-muted); }

/* Hairline structure - no cards, no shadow */
.rule { border-top: 1px solid var(--color-rule); padding-top: 1.25rem; }

/* The one filled control - paper label, never green-on-green */
.btn--primary { background: var(--color-accent); color: var(--color-paper);
                border-radius: 4px; }

/* Reveal - the whole motion engine */
.reveal { opacity: 0; transform: translateY(10px);
          transition: opacity .6s cubic-bezier(0.16,1,0.3,1),
                      transform .6s cubic-bezier(0.16,1,0.3,1); }
.reveal.is-in { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

The rest of the page is yours. Studio supplies the cool paper, the serif, the hairline, and the one green; what gets set on that page is the brief's business, not the theme's.
