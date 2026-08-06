# Theme - Field

Warm, credible, hand-drawn SaaS. The warm-cream playful lane executed as **calm marigold-on-cream, one signal accent, hand-drawn ink**. Cream paper, a Literata headline over a Public Sans body, a marigold highlighter behind one phrase, and drawn objects where a colder theme would ship app chrome. It reads like a plain-spoken team that ships.

The material, in one line: **warm cream, warm ink, one marigold highlighter, everything drawn by hand.**

## Axes (diversification)

- **Paper band** - **light warm cream** (`oklch(96.5% 0.015 90)`, hue 90). Never `#fff`, never cool grey. Ink is warm near-black `oklch(25% 0.02 70)`, hue 70 - warm, not neutral.
- **Display style** - **roman serif** (Literata 600, tracking `-0.02em`). A screen-tuned reading serif with sturdy slabby serifs, warm rather than formal. No italic display. A serif headline over a Public Sans body - the friendly-but-serious pairing that separates it from the all-sans playful sibling.
- **Accent hue** - **chromatic marigold** (`oklch(75% 0.13 80)`). One warm gold-orange signal, used as highlighter and ink-stroke accent, never a flood (< 5% of any viewport).

## Reference register

Notion · the Anthropic marketing school · Coda. **Never name any of these in the output.**

The material to match: the warm-but-credible productivity surface - cream canvas, a serif display, a single marigold signal, hand-drawn strokes over a real content artifact. Internally: a serious tool that lets itself be *warm*. When in doubt ask "does this read like a person wrote it, or a template?" Keep the former.

## Palette

Canonical values live in [`site/css/tokens.css`](../../../../site/css/tokens.css) under `[data-theme="field"]`.

- `--color-paper: oklch(96.5% 0.015 90)` - warm cream ground
- `--color-paper-2` - the surface a drawn artifact sits on
- a deeper cream at `oklch(93% 0.045 84)` - the one warmer band the theme allows, hairlined top and bottom
- `--color-ink: oklch(25% 0.02 70)` - warm near-black
- `--color-ink-2: oklch(43% 0.02 72)` - body, a notch lighter
- `--color-accent: oklch(75% 0.13 80)` - marigold, the highlighter
- `--color-focus` - a deeper marigold for strokes and focus rings

Shadows are warm-tinted (hue 70), **never neutral grey**. No pure black or white anywhere.

## Typography

- **Display** - Literata 600 at `font-variation-settings: "opsz" 72`, tracking `-0.02em`, line-height ~1.08. Roman only, no italic display. The serif carries the warmth; hold the optical size up so the display cut sheds its reading-size sturdiness.
- **Body** - Public Sans 400/500/600 at `1.0625rem` / 1.6. The sans carries the plain voice.
- **Label** - Public Sans UPPERCASE, `0.12em` tracking, for captions, meta rows, table headers, units, and entry numbers inside a real `<ol>`. It labels content; it never sits above a heading to announce it. `--font-mono` (Geist Mono) is defined but rarely used; only load it if the page actually shows mono.

**The marigold highlighter is THE core move.** One phrase wears a marigold band behind its x-height, drawn with a `linear-gradient` on a `<mark>` with `box-decoration-break: clone`. Highlighter, not a fill. Exactly one per page.

## Material

- **Hand-drawn ink strokes.** Arrows, connectors, spot illustrations, checkmarks are **stroke-based inline SVG** with round caps and joins, never flat filled icon tiles. Loose, slightly imperfect, marigold-tipped where it matters.
- **Drawn objects, not app chrome.** Where the page shows the product, it shows a real content artifact built in markup (a note, a card, a row of fields) on `--color-paper-2`, given a hair of rotation (~1.6deg) and a warm note-shadow. Never a product screenshot.
- **Radii** at 10px on controls, up to 16px on a drawn artifact. Soft, not pill-round: 20px radii belong to the loud sibling.
- **Rules** are hairlines at `--color-rule`; depth comes from warm-tinted shadow, not from borders stacking.
- **Buttons**: the one primary is **ink-filled** (ink background, cream text) with a warm shadow lift. Marigold stays a highlighter and an underline, never the button flood.

## Motion

Composed and warm. The primary control lifts `translateY(-2px)` on hover; link underlines grow via `scaleX`; a ghost arrow nudges `translateX`. Ease `cubic-bezier(0.2, 0.6, 0.3, 1)`. **No bounce, no parallax, no autoplay.** No JS is required: the highlighter is pure CSS and the strokes are inline SVG. All motion gates behind `prefers-reduced-motion`; reduced-motion ships static.

## Voice range

Warm, plain, concrete, honest. Name the noun (owner, date, decision), admit the product is small. Never *seamless, robust, effortless, delight, magic, powerful, revolutionary, unlock, supercharge, leverage, synergy*. Never "click here", never hype a small team into a movement.

## Do-nots (this theme's own failure modes)

- **No cool or grey paper, no pure `#fff` / `#000`, no neutral-grey shadows.** Warm cream (hue 90), warm ink, warm-tinted shadows. Cool bone is Almanac's.
- **No multi-accent flood.** One marigold signal only. Three saturated accents is Hum's lane.
- **No flat filled icon tiles.** Illustration is hand-drawn stroke SVG, or it is nothing.
- **No product screenshot or app chrome.** The artifact is drawn, not captured.
- **No marigold-filled buttons or gradient CTAs.** Primary is ink-filled; marigold stays a highlighter.
- **No hype voice, no loud maximalism.** If it wants to shout, it is not Field.

## How Field differs from its neighbours

| vs | difference |
|---|---|
| **Hum** (loud playful sibling) | Hum is cream (`97% 0.012 95`) with **three** saturated accents - pear-yellow (`86% 0.18 95`), sky-cyan (`66% 0.18 235`), coral-red (`68% 0.24 18`) - all-sans Chillax, 20px radii, deliberately loud. Field ships **one** marigold signal (`75% 0.13 80`), a Literata display, 10px radii, and a quiet credible voice. Same lane, opposite volume. |
| **Almanac** (archival editorial) | Almanac is a cool bone with a deep-blue accent (`38% 0.135 250`) and a Newsreader prose serif - a document to read. Field is warm cream (hue 90), marigold, Public Sans body, hand-drawn - a product to try. |
| **Garden** (warm editorial) | Garden shares the warm ground (`95.5% 0.022 92`, hue 92 ~ Field's 90) but its ink is **botanical green** (`24% 0.052 152`) with leaf-green (`47% 0.13 140`) and terracotta, on a Young Serif display. Field's ink is warm-neutral (hue 70) and its one accent is marigold. Shared ground temperature; ink and accent hue settle it. |

## When the brief routes here

*productivity · collaboration · team · workflow · meetings · notes · tasks · planning · workspace · small team · friendly · approachable · human · warm-but-credible · consumer-prosumer SaaS*. Categories: productivity SaaS, team and collaboration tools, note-taking, task and project tools, prosumer apps. Tone: warm, friendly, credible, plain-spoken, human, calm-optimistic.

Loud playful routes to Hum; archival editorial routes to Almanac or Garden; cool technical dev-tool routes to Cobalt; dark and dramatic routes to the atmospheric themes. When the brief is a warm product that wants to feel trustworthy without going cold, it is Field.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600&family=Literata:opsz,wght@7..72,400;7..72,600&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-ink-2);
       font-family: var(--font-body); font-size: 1.0625rem; line-height: 1.6; }
h1, h2, h3 { font-family: var(--font-display); font-weight: 600;
             color: var(--color-ink); letter-spacing: -0.02em; line-height: 1.08; }

/* THE signature - marigold highlighter behind the x-height of one phrase */
.mark { padding-inline: .06em; -webkit-box-decoration-break: clone; box-decoration-break: clone;
        background-image: linear-gradient(180deg, transparent 38%,
          var(--color-accent) 38%, var(--color-accent) 92%, transparent 92%); }

/* hand-drawn strokes: ink + a deeper marigold (--color-focus), round caps, never filled */
.ink { fill: none; stroke: var(--color-ink); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
.acc { fill: none; stroke: var(--color-focus); stroke-width: 2.6; stroke-linecap: round; stroke-linejoin: round; }

/* primary is INK-filled; marigold stays a highlighter and an underline */
.btn--primary { background: var(--color-ink); color: var(--color-paper);
                border-radius: var(--radius-card); box-shadow: var(--shadow-card); }
.btn--primary:hover { transform: translateY(-2px); }

/* a drawn content artifact sits tilted - an object, not app chrome */
.artifact { background: var(--color-paper-2); border: 1px solid var(--color-rule-2);
            border-radius: 16px; box-shadow: var(--shadow-card); transform: rotate(-1.6deg); }

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; } .btn--primary:hover { transform: none; }
}
```

Reference build: [`site/examples/field-01/`](../../../../site/examples/field-01/) - match its register (tokens, voice, motion feel), never its composition; reusing its section order, hero geometry, or grid is a gate-32-grade repeat.

The rest of the page is yours. Field supplies the cream, the marigold, and the drawn line; what gets drawn on that paper is the brief's business, not the theme's.
