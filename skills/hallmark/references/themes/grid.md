# Theme - Grid

Swiss neo-grotesque systems design: the object-poster and transit-signage school, executed on a **near-white cool sheet with an exposed 12-column hairline grid, one heavy grotesk, and exactly one signal red used as a geometric mark**. Giant lowercase Archivo slams to the left margin, the column rules stay visible behind the content, and every surface butts against a hairline. It reads like a wayfinding manual: rational, gridded, set once and built to outlast its brief.

The material, in one line: **a visible column grid, one grotesk, and one red square.**

> **The editorial exception.** The editorial cluster is otherwise serif-led (Newsprint, Editorial, Specimen). Grid is its Swiss neo-grotesque slot: no serif anywhere, structure carried by an exposed grid and hairlines, warmth carried by one red. A brief wanting a roman serif or a soft column is a different editorial theme.

## Axes (diversification)

- **Paper band** - **light**, cool near-white (`--color-paper: oklch(99% 0.003 255)`, faintly cool, never `#fff`). Stepped at `paper-2 97.2%` and `paper-3 94.5%`. Ink is cool near-black `--color-ink: oklch(16% 0.010 255)`.
- **Display style** - **grotesk-heavy** (Archivo **800**, `--display-weight: 800`), run **lowercase** at `--tracking-display: -0.045em`. Heavy plus lowercase is the differentiator against every uppercase-condensed and serif option.
- **Accent hue** - **warm signal red** (`--color-accent: oklch(55% 0.21 28)`), one saturated red near 28°, used as a square, a bar, a period, never a wash. `--color-focus` is the same red.

## Reference register

Vitra, Braun, the Vignelli canon, Museum fur Gestaltung, the Swiss International poster tradition. The material to match: the institutional identity manual and the transit-signage system - a modular grid drawn in public, one grotesk, one red, no image needed. When in doubt, ask whether this reads like a systems manual or like a marketing template, and keep the former. Never name any of these in the output.

## Typography

**Archivo only, one family across the whole page** (400/500/600/700/800). Swiss discipline comes from weight, scale, and tracking, not from a second family. `--font-serif` and `--font-mono` resolve to unused fallbacks; do not load them.

- **Display** - Archivo 800, **lowercase**, `clamp(52px, 10.5vw, 136px)`, `letter-spacing: -0.045em`, `line-height: 0.9`. Slammed to the left margin, edge-aligned to the grid.
- **Body** - Archivo 400, 16px, `line-height: 1.5`.
- **Label voice** - Archivo uppercase at 12px, weight 600, `letter-spacing: 0.09em`, `--color-muted`. It sets captions, table headers, meta rows, folios, units, and index numbering - the quiet caps counterpoint to the giant lowercase display. It never sits above a heading as a kicker.

## Material

- **The exposed 12-column hairline grid is the theme.** A `repeating-linear-gradient` of 1px `--color-rule` lines every `calc(100% / 12)`, painted behind the content, capped to the shell width. The grid is content, not scaffolding to delete, and content rides `repeat(12, minmax(0,1fr))` on top of it.
- **Red only as a geometric mark, under 5% of any viewport.** A solid `0.52em` square where a full stop would fall, a short block terminating a row, a `3px` bar over a head. Never a fill wash, never a gradient, never a second colour.
- **Hairlines and ink rules do all the structure; zero cards.** `--radius-card: 0`, `--shadow-card: none`. Faint `--color-rule` hairlines split cells, a 1px-to-2px solid `--color-ink` rule tops a section, and content butts flush against it. No boxes, no float, no drop shadow.
- **Cells, not tiles.** Where the page needs repeated units, they are equal cells of the same grid divided by `border-inline-start` hairlines, sharing the band's top and bottom rules. The band reads as one ruled object, not as a row of separate objects.
- **`::selection` is red on paper.** The one place the accent floods anything.

**Shapes Grid suits** (affinities, never requirements): a numbered index of full-width rows riding the 12 columns, with a hairline between fields and a hover tint; a type specimen where the grid is the exhibit; figures set in bordered cells with caps labels beneath.

## Motion

Near-zero. No reveals, no parallax, no autoplay. The only motion is hover micro-state: a row background shifts to `--color-paper-2` and its title slides 8px, links underline, a bordered surface shifts its border to red. Everything transitions in ~0.18-0.2s ease. Smooth scroll only, and `prefers-reduced-motion: reduce` kills transitions and `scroll-behavior`.

## Do-nots (this theme's own failure modes)

- **Never hide the grid.** The rails stay visible. Deleting them because they look like scaffolding removes the theme.
- **Never uppercase display, never a serif, never a mono body.** Grid's display is lowercase Archivo; uppercase-condensed is Manifesto or Brutal, and the second family never arrives.
- **Never a dark ground, and never a 3px black rule boxing a solid block.** A dark statement page is Manifesto; marker-weight structure is Brutal. Grid is a 99% sheet drawn with a 1px pencil.
- **Never a second accent, a gradient, or a red wash.** One red, geometric, under 5%.
- **Never a card, a radius, or a drop shadow.** Depth is hairlines and ink rules.
- **Never a centred hero.** Slam left.

## Macrostructure affinity

**Grid loves these.**

- **Index-First** - a numbered register of full-width rows riding the twelve columns, hairline between fields *(canonical - grid-01)*
- **Type Specimen** - the grid is the exhibit and the type is the subject
- **Catalogue** - equal ruled cells sharing the band's top and bottom rules
- **Portfolio Grid** - work as a modular register, not as cards
- **Split Studio** - when a studio's two halves each want their own column span

## Macrostructure rejection

**Grid refuses these.**

- **Photographic** - Grid needs no image; the grid is the picture
- **Manifesto** - dark, uppercase and shouted; Grid is a light sheet drawn with a 1px pencil
- **Quote-Led** - too intimate and too centred; Grid slams left
- **Bento Grid** - bento is boxes with radii; Grid is cells divided by hairlines, zero radius

## Voice fixtures

Rational, plainspoken, institutional. Name the system, the place, the year concretely. No hype.

- *"Schedule, then ship."*
- *"Identity, wayfinding, and editorial systems for institutions that plan in decades."*
- *"We draw the grid first, so every decision after it has somewhere to stand."*
- *"Basel, since 2009. Working in DE / EN."*
- *"Twelve columns. One grotesk. One red."*

Never any of: *seamless, robust, cutting-edge, leverage, synergy, revolutionary, unlock, supercharge, elevate, curated, bespoke*. Never "click here." Name the system, the city, the year.

## How Grid differs from its neighbours

| vs | difference |
|---|---|
| **Manifesto** | Manifesto is a **dark** ground (`oklch(10% 0.005 60)`), Anton 400 **uppercase** at `--lh-tight: 0.86`, red `#E51A1A`. Grid is a **light** sheet (`oklch(99% 0.003 255)`), Archivo **800 lowercase**, red `oklch(55% 0.21 28)`. Same "one red, type carries it" DNA, opposite value and case. |
| **Cobalt** | Cobalt is modern-minimal: electric cobalt `oklch(58% 0.20 256)`, Space Grotesk plus JetBrains Mono, graphite code surfaces, 6-10px radii. Grid is editorial: red accent, single-family Archivo, an exposed 12-column grid, zero radius, no code. Blue instrument vs red Swiss manual. |
| **Brutal** | Both are light near-neutral sheets with one red and zero radius, but Brutal draws with **3px** black rules (`--color-rule: oklch(12%)`) boxing solid inverted blocks in Albert Sans 700 **uppercase**. Grid draws with **1px** hairlines (`--color-rule: oklch(88%)`) painting a **visible column grid**, Archivo 800 **lowercase**, no solid panels. Marker vs pencil; shout vs quiet. |

## When the brief routes here

*identity · brand system · wayfinding · signage · design studio · type specimen · editorial grid · institution · museum · archive · index · directory · systems · modular · Swiss · grotesque · manual · programme*. Categories: design and branding studios, cultural institutions, publishers, specimens and catalogs, portfolio indexes. Tone: rational, systematic, precise, institutional, disciplined, timeless, calm-authoritative.

Warm, consumer, image-led, or serif-editorial briefs route elsewhere. When the brief wants a visible grid, one grotesk, and one red, it is Grid.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-ink);
       font-family: var(--font-body); font-size: 16px; line-height: 1.5; }

/* THE ground: the exposed 12-column hairline grid, painted behind the content */
.rails {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  max-width: 1280px; margin-inline: auto;
  background-image: repeating-linear-gradient(to right,
    var(--color-rule) 0, var(--color-rule) 1px,
    transparent 1px, transparent calc(100% / 12));
}

h1, h2 { font-family: var(--font-display); font-weight: var(--display-weight);
  font-size: clamp(52px, 10.5vw, 136px); letter-spacing: var(--tracking-display);
  line-height: 0.9; text-transform: lowercase; }

.period {                              /* the one signal, as a mark */
  display: inline-block; width: 0.52em; height: 0.52em;
  background: var(--color-accent);
}

::selection { background: var(--color-accent); color: var(--color-accent-ink); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition-duration: 0.01ms !important; }
}
```

Grid supplies the sheet, the rails, the one grotesk, and the one red. What rides those twelve columns is the brief's business, not the theme's.
