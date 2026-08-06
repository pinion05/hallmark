# Theme - Studio

Editorial, design-studio register: the considered-agency school, executed in **a distressed hand-set Erode on a cool studio-white, with one deep botanical green**. A faintly cool near-white ground, ruler-drawn hairlines, a huge roman serif whose edges have not been sanded smooth, and whitespace doing the structural work. It reads like a studio that sets its own type: crafted, confident, curatorial.

The material, in one line: **cool studio-white, a roughened roman serif at scale, hairlines and air, one botanical green.**

## Axes (diversification)

- **Paper band** - light, cool: `oklch(96.5% 0.005 200)`. An engineered studio-white, hue ~200, almost no chroma. Distinct from warm editorial grounds and from any dark canvas.
- **Display style** - **roman serif** (Erode 500, tracking `-0.022em`). Moderate contrast with a deliberately eroded, hand-set edge: the letterforms look printed rather than rendered, and that roughness is the theme. Not a grotesk, not a slab, not a condensed, and not the Didone hairlines of Specimen.
- **Accent hue** - **chromatic green** `oklch(46% 0.140 145)`. A deep botanical emerald, mid-dark and saturated but never neon. One signal only, ink-on-white everywhere else.

## Reference register

Aesop · Stripe Press · Readymag · Instrument · Locomotive · Area 17 · Cosmos · Semplice · a type foundry's own printed specimen. **Never name any of these in the output.**

The material to match: a cool crafted canvas, one green signal, a big roughened roman serif, hairline structure, mono meta-lines. Internally: the specimen discipline of a type foundry with the warmth of a working studio. When in doubt ask "does this read like a studio that hand-sets its own page, or a template?" Keep the former.

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

- **Display** - Erode 500, letter-spacing `-0.022em`, up to `6.25rem` (`--text-display`). Edge-aligned left, 2-3 lines. Moderate stroke contrast with a roughened, chipped edge on every terminal: at display size the letterforms read as impressed into the page rather than drawn on it, and that texture is the signature. No optical-size axis, so scale is the only lever; set it big enough that the erosion is legible as intent.
- **Body** - Geist 400 at a 45-75ch measure. The tension of a clean neutral sans under a textured display serif is the pairing. **Never set running body in the serif**; Erode is display and pull-quotes only, and its edge treatment turns to mud at reading size.
- **Label** - Geist Mono UPPERCASE, tracking `0.08em` (`--tracking-label`). A studio's colophon voice: captions, dates, roles, disciplines, table headers, meta rows, folios, units, and entry numbers inside a real `<ol>`. It records a fact; it never sits above a heading to announce it.
- **Emphasis is green, never italic.** A single emphasised word takes `--color-accent-ink` or a green underline; the display face stays roman. Erode italic is body emphasis and pull-quotes only.

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

- **Never smooth Erode out.** Do not substitute a clean roman serif "for legibility" at display size, and do not soften the edge with a text-shadow or a blur. The roughness is the theme; without it this is a generic serif-on-white studio page.
- **No italic display.** Roman only; italic is body emphasis.
- **No green flood, no neon green.** One deep botanical signal, under 5%. Green backgrounds or a bright green break it.
- **No warm paper, no pure `#fff` / `#000`.** Studio is cool (hue ~200-205); warm cream is Atelier and Garden vocabulary.
- **No boxed cards, shadows, or glassmorphism.** Hairlines and whitespace carry the page.
- **No pill or gradient CTA.** One filled green control plus typographic links.

## How Studio differs from its neighbours

| vs | what settles it instantly |
|---|---|
| **Garden** (green sibling) | Garden is a warm, botanical, organic register where green floods a soft world. Studio is a cool engineered studio-white where the same green is one restrained signal. Temperature and the role of the green settle it. |
| **Atelier** (quiet-serif sibling) | Atelier is the hushed, plaster-and-umber practice set in a smooth Sentient. Studio is bigger, cooler, and roughened - Erode on cool white with a green signal. Palette temperature and the edge treatment settle it. |
| **Specimen** (serif-display sibling) | Specimen exists to display a typeface: type is the subject, set in a razor-clean Bodoni Moda. Studio uses a deliberately eroded serif as its own voice to present a studio's work. Didone-hairlines vs chipped-edge, and the subject differs. |

## When the brief routes here

*design studio · creative studio · branding · brand identity · art direction · agency · portfolio · case study · selected work · editorial design · typography · creative direction · graphic design · design practice*. Categories: design and creative studios, branding agencies, art-direction shops, portfolio sites, editorial and publishing practices. Tone: considered, crafted, confident, curatorial, high-contrast, editorial, tasteful.

Dev-tool, enterprise, warm-consumer, and loud-maximalist briefs route elsewhere (the cool-modern lane for developer products, Carnival for loud editorial, Garden for organic and nature).

## Build hint

```html
<link href="https://api.fontshare.com/v2/css?f[]=erode@300,400,500,600,700&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-neutral);
       font-family: var(--font-body); font-weight: 400; }

/* Erode display - big, roman, tight; the eroded edge does the work */
.display { font-family: var(--font-display); font-weight: var(--display-weight);
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
