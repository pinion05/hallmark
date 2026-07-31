# Theme - Arcade

Retro-nostalgia in the **playful** cluster: a coin-op cabinet rendered entirely in CSS. A violet-black CRT ground, a fixed starfield, scanlines, pixel display type with a magenta ghost, and hard-offset press surfaces. Loud but tasteful - two neon accents, never a rainbow.

The material, in one line: **a violet-black CRT with stars behind it, pixel type with a magenta ghost, and shadows with zero blur.**

## Axes (diversification)

- **Paper band** - **dark** violet-black (`oklch(16% 0.020 300)`), hue 300 carried through every neutral, including the violet-tinted near-white ink (`oklch(95% 0.012 300)`). Not Terminal's green-black 145, not any light ground in the cluster.
- **Display style** - **pixel display** (Silkscreen 700, a mono glyph grid). The one genuinely bitmap face in the catalog, distinct from every grotesk, serif, and rounded option.
- **Accent** - **chromatic-magenta** (`oklch(70% 0.24 340)`) leading, **cyan** (`oklch(85% 0.13 195)`) answering. A high-chroma neon duo, alternated so neither floods. `--color-accent-ink` is the violet-black itself: dark text on the neon fills.

## Reference register

Poolside.fm · Panic · the OP-1 generation of software. The material to match: playful retro-hardware nostalgia - CRT glow, pixel type, coin-op and cassette-era warmth executed with restraint rather than kitsch. Never name any of these in the output.

## Typography

Two families.

- **Display** - Silkscreen 700, for headline scale only, stacked left over the field rather than centred. Body copy is never set in Silkscreen; past about three words a pixel face stops being readable. Secondary heads run in Hanken 800 rather than pixel.
- **Body** - Hanken Grotesk 400-800, `line-height: 1.6`.
- **Label voice** - Silkscreen UPPERCASE, tracked `0.02-0.14em`, alternating cyan and magenta. It sets captions, table headers, meta rows, rank chips, initials, units, and folios. The machine readout against the ink body. It is never a kicker over a heading.

IBM Plex Mono is the `--font-mono` fallback; add it to the font link only if a page actually shows a code or mono run.

## Material

- **Violet-black CRT ground with a fixed starfield.** Around eight layered `radial-gradient` stars (white, cyan, dim) on `--color-paper`, `background-attachment: fixed` so the field holds still while content scrolls.
- **Scanlines over everything.** A full-viewport `repeating-linear-gradient` overlay at high `z-index`, `pointer-events: none`. **Gate-47 carve-out:** scanlines and starfield are the sanctioned retro signal - decorative, never blocking input, never a fake monitor bezel. Budget and portable recipe: [`texture.md`](../texture.md) § Scanline.
- **The magenta ghost.** Pixel display carries `text-shadow: 0.085em 0.085em 0 var(--color-accent)` - an offset drop-shadow with zero blur, the theme's signature on type.
- **Hard-offset press surfaces.** Every interactive surface carries a solid `Npx Npx 0` shadow in magenta or cyan. `:hover` moves *away* from the shadow (grows to 8-9px); `:active` slams *toward* it (2px). A physical press, zero blur.
- **Chunky 2px rules, near-square radii.** Structure is drawn with 2px borders and section rules, not hairlines. `--radius-card: 4px`, `--radius-pill: 0`. Depth is hard shadow and thick rule, never blur.
- **Two-accent alternation.** Magenta leads, cyan answers, and they swap from beat to beat so neither neon dominates. Never a third.
- **A blinking block cursor** - a cyan █ with a magenta `box-shadow`, `steps(1)` blink at `1.06s`, is a sanctioned retro caret (gate 47), not a step toward fake window chrome.

**Shapes Arcade suits** (affinities, never requirements): paired neon slots for a dual action, in arcade language; a bordered lineup of entries as cabinet cards; a marquee strip reading like a cabinet header; a ranked table with pixel initials.

## Motion

Near-static. The one animation is the cyan cursor blink. Interaction is press physics: hard-shadow surfaces translate 2-3px on `:hover` and `:active` over `120ms ease-out`, and a border brightens to `--line-lit`. Focus is a 3px cyan `--ring` at 4-5px offset. The starfield is `fixed`, not animated. No parallax, no autoplay, no bounce. `prefers-reduced-motion: reduce` stops the cursor and every transition, static and fully visible.

## Do-nots (this theme's own failure modes)

- **Never body copy in Silkscreen.** Pixel is display and labels only; paragraphs are Hanken Grotesk. This is the single most common Arcade failure.
- **Never fake OS or window chrome** (gate 47): no monitor bezels, browser or title bars, traffic-light dots, or "app window" surfaces. The retro read is scanlines, stars, pixel type, and the cursor, not skeuomorphic desktop furniture.
- **Never a rainbow.** Exactly two accents alternating. No third neon, no RGB spread. Loud but tasteful.
- **Never a soft or blurred shadow, and never a gradient fill.** Shadows are hard zero-blur offsets; the button is flat neon with a 2px ink border, never a gradient pill.
- **Never arcade emoji or clip-art** (👾🕹️), and never pure `#000` or `#fff`. The retro comes from type, scanlines, stars, and hard shadows, not pasted glyphs, and every neutral carries hue 300.

## Voice range

Playful, coin-op, high-score. Short and declarative; name the credit, the theme, the buzzer. Never: seamless, robust, cutting-edge, leverage, synergy, revolutionary, unlock, supercharge, next-level, gamechanger, epic as filler. Never "click here." Never lean on *level up*, *8-bit*, or *16-bit* as filler; earn the retro through the type and the field.

## How Arcade differs from its neighbours

| vs | difference |
|---|---|
| **Hum** (playful sibling) | Hum is **light** cream (`oklch(97% 0.012 95)`), Plus Jakarta Sans rounded sans, 20px radii, pear-yellow plus cyan plus coral, spring motion. Arcade is **dark** violet-black (`16% 0.020 300`), pixel Silkscreen, 4px and 0 radii, magenta plus cyan over scanlines, hard-offset press. Same cluster, opposite build: soft-warm-daylight vs pixel-CRT-night. |
| **Terminal** | Terminal is green-black (`oklch(11% 0.018 145)`), JetBrains Mono for everything including body, phosphor green (`78% 0.190 138`), calm reading. Arcade is violet-black hue 300, pixel display with a **Hanken body**, magenta and cyan. A readable green editor vs a loud neon cabinet. |
| **Carnival** (loud sibling) | Carnival is **light** pink-cream (`oklch(92% 0.045 50)`), Big Shoulders condensed, mustard and oxblood, hard-offset shadow on a poster layout. Both are loud with hard shadows; Carnival is a warm daylight fairground, Arcade is a dark neon arcade at night. |

## When the brief routes here

*game jam · indie game · game studio · launch party · demo night · hackathon · festival · meetup · retro · pixel · arcade · nostalgia · playful launch · music, synth, or lo-fi toy · zine*. Categories: games, creative events, community, music and audio toys, indie tools with personality. Tone: playful, loud, retro, nostalgic, fun, irreverent, high-energy, night.

Calm, corporate, or trust-led briefs route to Cobalt or Coral; sustained editorial reading routes to a warm-editorial theme. Arcade is for pages that want to feel like a coin-op cabinet.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet" />
```

The palette tokens come from `[data-theme="arcade"]`. The decorative vars below (`--star*`, `--scanline`, `--shadow-cyn`, `--shadow-mag`, `--line-lit`, `--ring`) are **page-local**: define them in your own `:root` (gate 48 allows page-defined tokens).

```css
html, body { overflow-x: clip; }
body { background-color: var(--color-paper); color: var(--color-ink);
       font-family: var(--font-body); line-height: 1.6;
       background-image:
         radial-gradient(1.5px 1.5px at 12% 16%, var(--star), transparent 62%),
         radial-gradient(1.5px 1.5px at 83% 24%, var(--color-accent-2), transparent 62%),
         radial-gradient(1px 1px at 46% 62%, var(--star-dim), transparent 62%);
       background-attachment: fixed; background-repeat: no-repeat; }

/* CRT scanlines - decorative, never blocks input */
body::after { content: ""; position: fixed; inset: 0; z-index: 40;
  pointer-events: none;
  background: repeating-linear-gradient(to bottom,
    transparent 0 2px, var(--scanline) 2px 3px); }

/* Pixel display with the magenta ghost - display and labels only */
.pix { font-family: var(--font-display); font-weight: 700; }
.pix--display { text-shadow: 0.085em 0.085em 0 var(--color-accent); }

/* Hard-offset press - zero blur, radius 4px */
.btn { background: var(--color-accent); color: var(--color-accent-ink);
  border: 2px solid var(--color-ink); box-shadow: 6px 6px 0 var(--shadow-cyn);
  transition: transform 110ms ease-out, box-shadow 110ms ease-out; }
.btn:active { transform: translate(3px, 3px); box-shadow: 2px 2px 0 var(--shadow-cyn); }

@media (prefers-reduced-motion: reduce) {
  .cursor { animation: none; opacity: 1; }
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

Arcade supplies the CRT, the stars, the pixel ghost, and the press. What the cabinet is running is the brief's business, not the theme's.
