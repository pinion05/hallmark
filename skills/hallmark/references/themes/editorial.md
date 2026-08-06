# Theme - Editorial

The contemporary magazine, set for the screen: **warm cream with a heavy condensed-sans headline answered by an EB Garamond italic aside**. Bricolage Grotesque 800 crashes tight against the left margin (tracking `-0.04em`), a serif-italic pulled line answers it, hairline rules and Roman-numeral folios carry the structure. It reads like a well-art-directed feature: stylish, type-forward, warm but crisp.

The material, in one line: **cream paper, a tight grotesque, a Didone italic answer, one coral mark.**

## Axes (diversification)

- **Paper band** - warm cream, light (`--color-paper: oklch(94% 0.020 75)`). A hair darker and a hair cooler than Specimen's oat (96%, hue 80); never `#fff`, never a neutral grey.
- **Display style** - **display-condensed sans** (Bricolage Grotesque, `--display-weight: 800`, `wdth` 75). A heavy grotesque narrowed on its own width axis at `--tracking-display: -0.04em`, magazine-shaped, with just enough irregularity in the letterforms to read art-directed rather than default. Never a serif display; the serif appears only as italic emphasis.
- **Accent hue** - **warm coral** (`--color-accent: oklch(60% 0.160 35)`). Pinker and softer than Specimen's signal orange, far brighter than Newsprint's dried brick. A signal on marks and fills, never a flood.

## Reference register

The Gentlewoman · Racquet · MOLD · AIGA Eye on Design · Dazed · i-D · Wallpaper* · The Face · Are.na blog · Family Style.

The material to match: the contemporary art-directed feature spread - a tight grotesque against a Didone italic, cream margins, hairline furniture, mono folios, one coral tick. Ask "does this read like an art-directed feature, or a marketing template?" Keep the former. **Never name any of these in the output.**

**Voice range:** considered, contemporary, lightly literary. Verbs over adjectives; name the piece, the issue, the byline.

## Palette

- `--color-paper: oklch(94% 0.020 75)` - warm cream
- `--color-ink: oklch(15% 0.014 280)` - deepest ink with a faint **cool** tilt (hue 280), printed-black on warm cream. Deliberate print detail, not a mistake.
- `--color-ink-2: oklch(28% 0.014 55)` - body, warm
- `--color-muted: oklch(48% 0.014 60)` - meta
- `--color-accent: oklch(60% 0.160 35)` - coral, the one signal
- `--color-accent-ink: oklch(98% 0.005 70)` - near-white text on a coral fill
- `--color-focus: oklch(62% 0.160 35)` - rings
- `--color-rule: oklch(80% 0.018 70)` at `--rule-card: 0.5px`; `--color-rule-2: oklch(64% 0.014 68)` for heavier splits

Coral stays under 5% of any viewport: a link underline, one filled tag, a folio mark, one control, the focus ring. It never floods a band and never fills behind body type.

## Typography

- **Display** - Bricolage Grotesque `--display-weight: 800` at `--text-display: clamp(2.5rem, 5vw + 0.75rem, 4.75rem)`, `font-variation-settings: "wdth" 75, "opsz" 96`, `--tracking-display: -0.04em`, title-case, slammed left. Drop the width axis and the headline loses the magazine proportion that defines the theme.
- **Serif** - EB Garamond **italic** (`--font-serif`), the answering voice. A single word or clause inside a head, or a pulled line set large between a top-and-bottom hairline with a coral indent, never in a box. The grotesque-against-Didone-italic tension is the whole voice, and the serif is italic emphasis only, never the display face.
- **Body** - plain Inter 400/500/600, `--section-head-gap: 1.5rem`.
- **Label** - Geist Mono, UPPERCASE, `--tracking-label: 0.10em`, `--color-muted`. Roman numerals and mono folios are the second register, marching down the margin like a contents system, and carrying captions, meta rows, table headers, and units.

## Material

- **Square everything.** `--radius-card: 0`, `--radius-pill: 0`, `--radius-input: 0`. Controls, tags, inputs, filled marks are sharp rectangles. Magazine furniture is set in square blocks, never pills or soft radii.
- **0.5px hairlines, no cards.** Structure is rules and columns: asymmetric splits (2:5, 3:7), `--section-gap: 6rem`, left-biased composition. **No boxed cards, no shadow, no blur.**
- **Flat paper.** Cream plus hairlines plus one coral mark carry the page; no texture, no mesh, no gradient.

## Motion

Quiet and composed. One orchestrated entrance: reveals fade and rise (`--ease-out`, ~600ms). Optionally a single pulled line that settles once, then holds. Hover: a coral underline-grow on links, a hairline shift toward coral on focusable surfaces. No bounce, no parallax, no autoplay. Everything gates behind `prefers-reduced-motion: no-preference`; reduced-motion ships static and fully visible.

## Do-nots (this theme's own failure modes)

- **Never a serif display face.** Bricolage Grotesque carries every headline; EB Garamond appears only as italic emphasis. A serif headline reads as Newsprint, Specimen, or Atelier.
- **Never rounded corners, pills, or shadows.** Radius is 0 everywhere; soft pills are Coral's vocabulary.
- **Never an orange or brick drift.** Keep the accent coral (hue 35, chroma 0.16): not Specimen's redder orange, not Newsprint's dark brick, not terracotta.
- **Never a centred masthead.** That is Newsprint's broadsheet move; Editorial is left-biased and asymmetric.
- **Never a dark ground.** Editorial is light cream; a dark statement page is Manifesto.
- **Never an ALL-CAPS shout.** Bricolage Grotesque runs title-case and tight, magazine-modern, not a broadside.

## How Editorial differs from its neighbours

| vs | difference |
|---|---|
| **Specimen** | A **serif display** at scale (Bodoni Moda 400, razor-thin) over sans body, signal orange. Editorial is a **heavy condensed sans** (Bricolage Grotesque 800) with EB Garamond as an italic garnish, coral. Thin-serif-head vs heavy-sans-head. |
| **Newsprint** | All-serif (Zilla slab head, Spectral body), a **centred** masthead, columns, brick. Editorial is sans head over sans body, **left-biased** and asymmetric, coral. Broadsheet-serif vs magazine-sans. |
| **Manifesto** | Also condensed, but **dark** ground plus Anton **UPPERCASE** in red. Editorial is **light** cream plus Bricolage Grotesque **title-case** in coral. Light-vs-dark and caps-vs-titlecase settle it. |

## When the brief routes here

*magazine · editorial · feature · culture · fashion · design annual · interview series · longform · publication · issue · contemporary · art direction · profile · lookbook · brand story · considered*. Categories: culture and fashion magazines, digital publications, design annuals, interview series, editorial content sites, brand editorial, agency journals. Tone: considered, contemporary, stylish, type-forward, magazine-modern, warm but crisp.

Route elsewhere: broadsheet or journalism to Newsprint, type foundry or quiet portfolio to Specimen, loud declaration to Manifesto, dev or API to Cobalt.

## Build hint

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,600..800&family=Inter:wght@400;500;600&family=EB+Garamond:ital,wght@0,500;1,400;1,500;1,600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-ink-2);
       font-family: var(--font-body); font-weight: 400; }

/* Two-axis display: heavy condensed sans, tight, slammed left */
.display { font-family: var(--font-display); font-weight: var(--display-weight); /* 800 */
           font-size: var(--text-display); letter-spacing: var(--tracking-display); /* -0.04em */
           color: var(--color-ink); text-align: left; text-wrap: balance; }
.display em, .pull { font-family: var(--font-serif); font-style: italic; /* EB Garamond answer */
                     font-weight: 500; letter-spacing: var(--tracking-tight); }

/* Mono folio + Roman-numeral marginalia, captions, meta */
.folio { font-family: var(--font-mono); text-transform: uppercase;
         letter-spacing: var(--tracking-label); color: var(--color-muted); }

/* Square everything, hairlines carry structure */
.card { border: var(--rule-card) solid var(--color-rule); border-radius: var(--radius-card); } /* 0.5px, 0 */
.tag { background: var(--color-accent); color: var(--color-accent-ink); border-radius: 0; } /* one coral fill */

/* The one coral signal */
a { text-decoration-color: var(--color-accent); }
:focus-visible { outline: 2px solid var(--color-focus); }

.reveal { opacity: 0; transform: translateY(10px);
          transition: opacity .6s var(--ease-out), transform .6s var(--ease-out); }
.reveal.is-in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }
```

Plus one `IntersectionObserver` adding `.is-in`. Editorial supplies the cream, the two type axes, the hairline furniture, and the one mark; how the feature is laid out is the brief's business.
