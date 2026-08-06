# Theme - Lumen

The premium AI-tool register, built out of **precision optics** rather than glowing orbs. Cool-violet ground, a light source that is either emitted or refracted, a lowercase classical serif, and mono UPPERCASE machine-readout labels. It should feel instrument-grade and after-hours: something a lab built, not something a landing page generated.

The material, in one line: **quiet lowercase prose, loud uppercase mono, and one source of light.**

## Axes (diversification)

- **Paper band** - Night: dark cool-violet (`L 13%, H 265`). Day: light cool bone with violet pull (`L 97%, H 265`). The 265° hue is deliberate: 25° from Midnight's 250 and 65° from Aurora's 200, so a Lumen page is not confusable with either neighbour at a glance.
- **Display style** - **classical-serif-lowercase** (Instrument Serif 400, upright, all-lowercase). The catalog's only lowercase-headline theme.
- **Accent hue** - Night: **molten brass** (`H 50`, not amber). Day: **deep indigo with violet tilt** (`H 268`). A coral chord (`H 18`) sits behind both as the secondary chromatic.

## Reference register

Modal · Anthropic · Together AI · ElevenLabs · Cluely · Adept · Granola · Cohere · Linear's premium pricing surfaces · Vercel's frontier-AI sections.

The material to match: a hand-engineered artefact standing in dead space; a lowercase classical-serif headline carrying one accent-coloured verb; mono UPPERCASE labels that read as if pulled from an internal docs site; tabular numerals wherever a number appears. When in doubt about restraint, ask whether Modal would ship this much chrome. If yes, it is too much.

## Palette drops

A drop is a palette plus a **physics**: what the light on this page is doing. Two drops, not five, because Lumen's identity is the optics rather than the colour, and two drops with different physics carry more variety than five drops with one artefact recoloured.

### Drop 01 · Night Foundry *(default)*

Cool-violet near-black canvas, molten-brass accent that **emits**. The light source is contained inside a built object, and a slow pulse suggests the instrument is running.

- `--color-paper: oklch(13% 0.014 265)` - late-night studio, violet tilt
- `--color-ink: oklch(96% 0.006 262)` - near-white headlines
- `--color-accent: oklch(76% 0.17 50)` - molten brass
- `--color-accent-2: oklch(68% 0.16 18)` - coral chord
- `--color-glow: oklch(80% 0.16 50 / 0.42)` - dense halo
- `--color-paper-emit: oklch(76% 0.17 50 / 0.04)` - inner-emit canvas wash
- `--rule-blueprint: oklch(96% 0.006 262 / 0.04)` - grid hairline

Shadows are soft depth (`0 24px 60px -28px oklch(0% 0 0 / 0.55)`), never glows: only the light source emits.

**When to pick:** inference platforms, serverless GPU, model APIs, coding agents, voice synthesis, developer infra. Anything that wants to feel after-hours and instrument-grade.

### Drop 02 · Day Foundry

Cool-bone canvas with a violet pull, deep indigo accent that **refracts**. Light passes through and is separated rather than generated: a prism, a lens stack, a chromatic dispersion. Static at rest, with a 320ms reveal on first paint and no perpetual motion.

- `--color-paper: oklch(97% 0.008 265)` - cool bone, violet pull
- `--color-ink: oklch(18% 0.014 265)` - near-black, cool
- `--color-accent: oklch(46% 0.24 268)` - deep violet-indigo
- `--color-accent-2: oklch(68% 0.16 18)` - coral chord, the red end of the spectrum
- `--color-glow: oklch(58% 0.22 268 / 0.28)` - indigo halo through prism
- `--color-paper-emit: oklch(46% 0.24 268 / 0.03)` - canvas wash, faint

**When to pick:** AI for science, research labs, document AI, typography and design tools, daytime productivity. Briefs that want considered and clear rather than after-dark and intense.

**Rotation.** The log records `"theme": "lumen", "drop": "night"` or `"day"`. Two consecutive Lumen builds use different drops unless the brief signals one.

## Typography

Three families, three weights each at most.

- **Display** - Instrument Serif 400, upright, **all-lowercase**. Fallback chain `"Tiempos Headline", ui-serif, Georgia, serif`; never a system font.
- **Body** - Geist 400/500/600.
- **Label** - JetBrains Mono 400/500, **UPPERCASE**, tracked `0.08-0.12em`.

**The two-register split is the signature.** All prose is lowercase: headlines, lede, body, buttons, nav, brand, footer copy, and acronyms in running text. Mono labels are the only uppercase surface: captions, meta rows, table headers, callouts, units. The contrast between quiet lowercase prose and loud uppercase machine-readout is what makes a Lumen page recognisable at a glance.

**The verb landmark.** One word in a headline, always a verb, set in `--color-accent-2` with a 1px underline that draws in over 320ms after a 900ms delay. Never a noun, never two words, and never italic: the emphasis is colour and rule, not a glyph variation.

## Material

- **Blueprint grid.** A hairline grid at ~4% opacity over the ground. It is the background discipline, and nothing atmospheric should ever be larger or louder than the light source.
- **Rules and radii.** Hairlines at `--rule-blueprint`, small consistent radii; borders do the containing, shadows only carry depth.
- **Numerals.** `font-variant-numeric: tabular-nums` wherever a figure appears; Instrument Serif numerals at display scale.
- **Annotation.** Where the page labels something, the label is mono micro-type carrying a real value (`λ = 612 nm`, `p50 · 28 ms`). An annotation with a placeholder in it is worse than no annotation, and inventing the value is gate 46a.

## Motion

Lighter than Hum, heavier than Coral.

| Element | Motion |
|---|---|
| Night light source | Pulse: 3% intensity oscillation, 4s period. **Never rotates.** |
| Day light source | 320ms reveal on first paint, static thereafter |
| Verb landmark | Underline draws in over 320ms at `delay: 900ms`. No font-style change. |
| Cards | `translateY(-4px)` plus an inner brighten on hover, 220ms `--ease-soft` |
| Section heads | Opacity and a 12px rise on view enter, 600ms, 60ms stagger |
| Scroll | Lenis optional (`duration: 0.7, lerp: 0.08`) |

No magnetic cursors, no tile flips, no parallax, no particles, no rotating orbs. `prefers-reduced-motion: reduce` collapses everything to its final state.

## Do-nots (this theme's own failure modes)

- **Never a glowing orb, sphere, or ring.** The most reliable AI-tool tell of the last two years, and the thing Lumen exists to replace. Build a precision object instead: a filament in a chamber, a topology, an indicator dial, a prism with a spectrum fan.
- **Never `<img>` for the light source.** Pure CSS and hand-written SVG. A Figma-exported path fails this; the object is constructed in code.
- **Never sentence-case or title-case prose.** The two-register split is the theme.
- **Never `font-style: italic` anywhere.** The old italic-pivot signature is retired.
- **Never colour a noun, and never two accent words in one headline.** One verb is a design move; two is a marketing page.
- **Never two light sources on one page.** One per build.
- **Never let a bloom grow larger than the object it comes from.**

## How Lumen differs from its neighbours

| vs | difference |
|---|---|
| **Midnight** | Geometric Geist on cool dark (`H 250`), no built object, no grid. Lumen sits 25° away with a classical serif and an engineered artefact. |
| **Aurora** | Ambient cyan blooms and a Sentient serif body. Lumen is brass-on-violet with a built light source: different temperature, opposite focal philosophy. |
| **Bloom** | Warm cream paper, expressive content. Lumen is dark or cool-bone, technical content. |
| **Atelier** | A bold Sentient on warm plaster, luxury fashion. Instrument Serif is a 1960s technical-journal serif. Atelier sells perfume; Lumen sells inference. |

## When the brief routes here

*inference · model · LLM · AI tool · agent · voice · synthesis · API · GPU · serverless · runtime · developer experience · the console · research lab · climate model*. Categories: AI infrastructure, ML platforms, model APIs, dev tools, voice and audio AI, research and science AI, agentic coding. Tone: engineered, premium, instrument, after-hours, considered.

Briefs about bakeries, cafés, fashion, podcasts, record labels, or agency portfolios never route to Lumen.

## Build hint

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Geist:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

```css
:root {
  --font-display: "Instrument Serif", "Tiempos Headline", ui-serif, Georgia, serif;
  --font-body: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-label: "JetBrains Mono", ui-monospace, monospace;
  --tracking-label: 0.10em;
  --dur-pulse: 4s;
}

body {
  background: var(--color-paper); color: var(--color-ink);
  font-family: var(--font-body);
  font-variant-numeric: tabular-nums;
  text-transform: lowercase;              /* prose default: half the two-register split */
}

h1, h2, h3 { font-family: var(--font-display); font-weight: 400; letter-spacing: -0.01em; }

.mono {                                    /* the only uppercase surface on the page */
  font-family: var(--font-label); font-size: 11px;
  letter-spacing: var(--tracking-label); text-transform: uppercase;
}
```

The rest of the page is yours. Lumen supplies the light, the ground, and the two registers; what gets built in that light is the brief's business, not the theme's.
