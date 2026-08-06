# Theme - Hum

The playful, vibrant, **alive** register. Cream paper pulled toward pear-yellow, three accents on stage at once, rounded humanist sans, generous radii, soft shadows that lift, and a response on almost anything a pointer touches. Hum is for products that do not take themselves too seriously and still take craft seriously: the room is warm and someone smart is smiling.

The material, in one line: **cream, three accents that never blend, round corners everywhere, and a press you can feel.**

## Axes (diversification)

- **Paper band** - light (`L 97%`), warm cream tinted toward pear-yellow (~95°). Yellower and brighter than any other warm paper in the catalog; never the rose-warm or oat-warm cream of the editorial themes.
- **Display style** - **rounded-sans** (Chillax: softened terminals, generous curves, closed apertures, the Open Runde register). Distinct from geometric-sans, italic-serif, and classical-serif.
- **Accent hue** - **multi**: pear-yellow `H 95`, sky-cyan `H 235`, coral-red `H 18`, all on stage at once. Distinct from every single-accent and duo-tone theme.

## Reference register

Brilliant.org (Koto's 2024 pear-yellow on cream) · Duolingo's named-colour system · PostHog · tldraw · Cosmos · Liveblocks · Hover.dev · Tella.

The material to match: cream paper (never pure white), generous rounded surfaces, big confident figures in rounded display, soft drop shadows that lift on hover, accent surfaces that sit beside each other rather than blending. Pear-yellow on cream is the **calibration** pair: more saturated than that has gone gaudy, more muted has lost the playfulness. When in doubt about restraint, ask the inverse question: is there a single moment here that would not exist if we were not trying to feel alive? If no, it is too quiet for Hum.

## Palette

Multi-accent. No single accent dominates; different surfaces carry different accents, and the contrast between them is part of the rhythm.

- `--color-paper: oklch(97% 0.012 95)` - cream, slight pear-yellow pull
- `--color-paper-2: oklch(94% 0.016 95)` - tinted band (yellower)
- `--color-paper-3: oklch(91% 0.020 95)` - deeper hover
- `--color-ink: oklch(20% 0.012 250)` - near-black with a cool tilt, never pure black
- `--color-accent: oklch(86% 0.18 95)` - pear-yellow (primary action)
- `--color-accent-2: oklch(66% 0.18 235)` - sky-cyan (links, hover tints)
- `--color-accent-3: oklch(68% 0.24 18)` - coral-red (the pop; one high-energy moment)
- `--color-mint: oklch(80% 0.16 150)` - soft green, sparingly
- `--color-lavender: oklch(74% 0.16 305)` - sparingly

**Three rules for the accents:**

1. Each accent owns its own kind of surface. Pear = primary action. Cyan = link and hover tint. Coral = the single high-energy moment.
2. Accents never blend into each other in a gradient. No pear-to-cyan, ever.
3. Mint and lavender are occasional, never more than one of each on a page.

Ink is modified **with opacity, not with new hexes**: body ~88-90%, links 95%, hover 100%. Fewer literal colours, used consistently.

## Typography

Two families. Rounded sans throughout; Hum has no serif anywhere.

- **Display and body** - Chillax 400/500/600/700 (variable, 200-700). Falls back to Geist, then a rounded system stack, never a bare system font.
- **Label** - JetBrains Mono, UPPERCASE, tracked `0.10em`. It sets captions, meta rows, table headers, units, ordinals, folios, and streak readouts. It never sits above a heading as a kicker.

Display weight is **600**, tracking `-0.025em`: confident, not delicate. Body is 400 with 500 for inline emphasis. Sentence case throughout (Hum is not Lumen's all-lowercase). Big figures run at `clamp(3rem, 5vw + 1rem, 5rem)` in rounded display with `tabular-nums`.

## Material

- **Round, everywhere.** `--radius-card: 20px`, `--radius-pill: 999px`, `--radius-input: 12px`. How much round is a per-build lever (a kids' build can go chunky at 28px, a quiet one tight at 14px); what never changes is that no corner is square.
- **Card physics is a lever, not a constant.** Hairline-flat with no shadow, chunky with the button's hard edge, borderless tinted blocks, one soft single layer, or a layered contact-plus-ambient pair. Pick one personality per build instead of `20px` plus one shadow on everything.
- **The press.** Hum's button is a solid colour **edge** plus a soft ground shadow: `0 4px 0 0 var(--btn-edge), 0 6px 12px -3px var(--btn-cast)`. Never a negative spread, which makes the edge narrower than the button. Hover lifts 2px and the edge grows to 6px; `:active` presses **down** 3px and the edge shrinks to 1px. Snappy easing, 140ms hover and 70ms active, no `scale()`, no spring overshoot. The press is the feedback.
- **Accent tint on a surface** sits at ~6% of its accent at rest and deepens to ~12% on hover. That is a technique for whatever shape a build chooses, never a licence for a row of three equal cards.
- **Emphasis is painted on the text.** A highlighted word carries a clipped `background-image` band with `box-decoration-break: clone`, so it follows every wrapped line and scales with font-size. Never an absolutely-positioned bar behind the word, and never `font-style: italic` - emphasis here is weight 500, an accent colour, or the band.
- **Marks are drawn in CSS or SVG.** No emoji standing in for icons, no `<img>` for a character, no Lottie.

## Motion

The loudest stack in the catalog: almost every interactive element does something on hover or on first paint.

| Element | Motion |
|---|---|
| Primary button | lift 2px on hover (edge grows), press down 3px on `:active` (edge shrinks), `cubic-bezier(0.2,0.7,0.3,1)`. No scale, no wobble |
| Cards | lift 4px, shadow brightens, accent tint deepens. 220ms `--ease-spring` |
| Figures | tick up from 0 on view enter over 1200ms, then one 1 → 1.06 → 1 pulse on arrival |
| A character mark | gentle 4s pulse at rest; a 4-point coral star bursts from the click point over 420ms on a completed primary action, once, never looping |
| Headings | 12px rise plus opacity on view enter, 600ms, 80ms stagger |
| Scroll | Lenis optional (`duration: 0.8, lerp: 0.10`) |

Easings: `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)` for micro press and pop only (never a hero entrance), `--ease-snap: cubic-bezier(0.22, 1, 0.36, 1)` for tick-ups and reveals.

`prefers-reduced-motion: reduce` collapses springs to opacity and colour, renders figures at final value, stops the pulse, disables the burst. The page stays delightful without motion: restraint, not breakage.

## Do-nots (this theme's own failure modes)

- **Never a serif, never pure white paper, never pure black ink, never a square corner.** Any one of the four and it is a different theme wearing Hum's radii.
- **Never a gradient between two accents,** and never a rainbow ground. Multi-accent means each accent holds its own surface; it does not mean they mix.
- **Never a single restrained accent.** A brief that wants one quiet accent is Coral, not Hum.
- **Never more than one character moment on a page,** and never one assembled from stock icons or emoji. One mark, drawn, with a personality.
- **Never an invented metric.** A streak count is real data or it is not on the page.
- **Never over-rotate the motion.** Bouncy easing on everything is exhausting; the spring belongs to primary actions.

## Voice range

Warm, smart, casual, direct. Sentence case, verbs over nouns, confident without being knowing, never condescending. Honest numbers only, never big-number theatre. Never: revolutionize, supercharge, unlock, leverage, unleash, transform, journey, holistic, mindful, ecosystem, platform, AI-powered, intelligent. The alive feeling comes from motion and colour, not from breathless copy.

## How Hum differs from its neighbours

| vs | difference |
|---|---|
| **Coral** (closest sibling) | Coral is warm-grey paper with one restrained coral accent, motion optional. Hum uses coral only as its pop, on yellower cream, with two other accents and motion everywhere. Coral is friendly-but-quiet; Hum is exuberant. A brief wanting one restrained accent routes to Coral. |
| **Bloom** | Bloom is dark or cream with warm radial blooms behind the content. Hum is fully light, no blooms, and its energy is in interaction rather than atmosphere. |
| **Arcade** (playful sibling) | Arcade is violet-black CRT, pixel type, zero-blur hard shadows, magenta and cyan. Hum is daylight cream, rounded sans, soft lifting shadows. Same cluster, opposite build. |
| **Specimen** | Specimen is italic-serif on warm oat, classical. Hum is rounded sans on cream with a drawn mark. Opposite registers. |

## When the brief routes here

*daily · habit · streak · practice · learning · curiosity · mood · energy · friendship · community · kids · family · game · puzzle · creative · indie tool · character · mascot · playful · alive*. Categories: learning platforms, habit trackers, daily-thing apps, friendship and community apps, creative tools with character, kids' and family software, mood and wellness apps, indie creative SaaS. Tone: warm, alive, smart-but-warm, energetic, joyful.

Briefs about enterprise, infrastructure, B2B, APIs, inference, dashboards, manifestos, galleries, or monographs never route to Hum.

## Build hint

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://api.fontshare.com/v2/css?f[]=chillax@200,300,400,500,600,700&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

```css
body {
  background: var(--color-paper); color: var(--color-ink);
  font-family: var(--font-body);
  font-feature-settings: "ss01" on, "cv11" on;
  font-variant-numeric: tabular-nums;
}

h1, h2, h3 { font-weight: 600; letter-spacing: -0.025em; }

.mono {                       /* captions, meta, units, ordinals - never a kicker */
  font-family: var(--font-label); font-size: 11px;
  letter-spacing: 0.10em; text-transform: uppercase; opacity: 0.75;
}

.btn {  /* the press: a solid colour EDGE plus a soft ground shadow. No negative spread, no scale() */
  background: var(--color-accent); color: var(--color-ink); font-weight: 600;
  border: 0; border-radius: var(--radius-pill); cursor: pointer;
  box-shadow: 0 4px 0 0 var(--color-accent-deep), 0 6px 12px -3px oklch(76% 0.20 95 / 0.45);
  transition: transform 140ms cubic-bezier(0.2,0.7,0.3,1), box-shadow 140ms cubic-bezier(0.2,0.7,0.3,1);
}
.btn:hover  { transform: translateY(-2px); box-shadow: 0 6px 0 0 var(--color-accent-deep), 0 12px 22px -4px oklch(76% 0.20 95 / 0.45); }
.btn:active { transform: translateY(3px);  box-shadow: 0 1px 0 0 var(--color-accent-deep); }

em, .hl {                     /* the band follows the text across every wrapped line */
  background-image: linear-gradient(var(--hl, oklch(86% 0.18 95 / 0.55)) 0 0);
  background-repeat: no-repeat; background-size: 100% 0.32em; background-position: 0 82%;
  -webkit-box-decoration-break: clone; box-decoration-break: clone;
}
```

Those tokens carry the theme. What gets built out of cream, three accents, and a press is the brief's business, not Hum's.
