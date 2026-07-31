# Theme - Carnival

Loud-maximalist editorial. A duo-tone accent system on tinted paper, chunky variable-width display, typographic ornaments, hard-offset ink shadows. The loud sibling to Riso, Manifesto, and Brutal, but **decorative, not raw**: this is poster craft, printed by someone who prints posters as a side hustle.

The material, in one line: **tinted paper, two accents that compete instead of blending, and a flat ink shadow offset four pixels.**

## Axes (diversification)

- **Paper band** - light (`L 88-95%`), always tinted, never white. The tint varies by drop.
- **Display style** - **display-heavy** (Big Shoulders Display 800, with the variable width axis in use).
- **Accent hue** - **per-drop**. Each drop carries its own duo-tone pair (warm+warm, cool+warm, warm+cool). The drop name is logged beside the theme name so consecutive builds rotate drops, not just themes.

## Reference register

Dropout TV · Fly.io · Stones Throw Records · Third Man Records · Drag City · Moodelier · Kelsey Dake · Bold Monday.

Independent music labels, comedy networks, illustrator portfolios, hot-sauce brands, indie game studios. Things with **character**. Things that sound loud out loud. When in doubt about decorative density, ask whether Dropout or Stones Throw would run this much: if less, add ornaments; if more, it has gone too far.

## Palette drops

A drop is a named duo-tone palette that holds Carnival's material (saturated accent-1, complementary accent-2, tinted paper, deep ink) while rotating hue. Every Carnival build picks one.

### Drop 01 · Cold Snap *(default)*

Warm + warm. Indie record-label, winter, scrappy. The canonical Carnival. **Pick for** independent music, winter releases, DIY, cassettes, vinyl, EPs.

- `--color-paper: oklch(92% 0.045 50)` - warm pink-cream
- `--color-paper-2: oklch(88% 0.050 45)` · `--color-paper-3: oklch(82% 0.060 40)`
- `--color-ink: oklch(18% 0.080 20)` - deep aubergine
- `--color-ink-2: oklch(28% 0.060 25)` · `--color-muted: oklch(45% 0.05 30)`
- `--color-accent: oklch(86% 0.18 95)` - mustard
- `--color-accent-2: oklch(40% 0.21 25)` - oxblood · `--color-rule: oklch(40% 0.18 25)` (decorative)
- `--color-accent-ink: oklch(18% 0.080 20)` · `--color-focus: oklch(40% 0.21 25)`

### Drop 02 · Citrus Riot

Loud + neon. 90s zine, summer, electric. Lime against magenta, the hardest collision in the catalogue. **Pick for** zine collectives, summer drops, skate and DIY culture, briefs that want LOUD without referencing music.

- `--color-paper: oklch(94% 0.040 85)` - pale acid cream
- `--color-paper-2: oklch(90% 0.048 82)` · `--color-paper-3: oklch(84% 0.055 80)`
- `--color-ink: oklch(20% 0.07 145)` - deep forest
- `--color-ink-2: oklch(32% 0.05 140)` · `--color-muted: oklch(48% 0.04 130)`
- `--color-accent: oklch(82% 0.20 130)` - chartreuse-lime
- `--color-accent-2: oklch(28% 0.28 350)` - deep magenta, also `--color-rule` (reads AA on paper, and as text)
- `--color-accent-ink: oklch(20% 0.07 145)` · `--color-focus: oklch(28% 0.28 350)`

### Drop 03 · Diner Sign

Americana. Cream, cherry red, navy. Postwar diner, road trip, neon-and-chrome. **Pick for** food and drink, hospitality, vintage Americana, briefs mentioning burgers, milkshakes, motels, roadside.

- `--color-paper: oklch(95% 0.035 90)` - bright cream
- `--color-paper-2: oklch(91% 0.042 88)` · `--color-paper-3: oklch(86% 0.050 85)`
- `--color-ink: oklch(16% 0.04 30)` - black-brown
- `--color-ink-2: oklch(28% 0.05 30)` · `--color-muted: oklch(45% 0.04 35)`
- `--color-accent: oklch(60% 0.22 25)` - cherry red
- `--color-accent-2: oklch(30% 0.16 250)` - navy, also `--color-rule`
- `--color-accent-ink: oklch(95% 0.035 90)` · `--color-focus: oklch(30% 0.16 250)`

### Drop 04 · Studio Night

Cool + cool. Dusk warmth, cyan and plum. Late-night booth, blue hour, studio at midnight. **Pick for** late-night radio, podcasts, music and atmosphere, briefs mentioning "late", "after dark", "blue hour", "moonlight".

- `--color-paper: oklch(88% 0.05 25)` - warm dusk pink
- `--color-paper-2: oklch(84% 0.055 22)` · `--color-paper-3: oklch(78% 0.06 20)`
- `--color-ink: oklch(20% 0.05 270)` - deep navy-black
- `--color-ink-2: oklch(32% 0.045 265)` · `--color-muted: oklch(48% 0.04 260)`
- `--color-accent: oklch(78% 0.18 220)` - cyan
- `--color-accent-2: oklch(24% 0.18 320)` - deep plum, also `--color-rule` (reads AA on paper, and as text)
- `--color-accent-ink: oklch(20% 0.05 270)` · `--color-focus: oklch(24% 0.18 320)`

### Drop 05 · Aqua Park

Cool + warm. Turquoise against coral. Summer pool, motel sign, vacation. **Pick for** summer brands, vacation and hospitality, skate, surf, pool, briefs mentioning summer, beach, motel, sun.

- `--color-paper: oklch(94% 0.040 180)` - pale aqua-cream
- `--color-paper-2: oklch(90% 0.048 178)` · `--color-paper-3: oklch(84% 0.055 175)`
- `--color-ink: oklch(20% 0.06 200)` - deep teal
- `--color-ink-2: oklch(32% 0.05 198)` · `--color-muted: oklch(48% 0.04 195)`
- `--color-accent: oklch(72% 0.16 195)` - turquoise
- `--color-accent-2: oklch(36% 0.24 35)` - deep coral, also `--color-rule` (reads AA on paper, and as text)
- `--color-accent-ink: oklch(20% 0.06 200)` · `--color-focus: oklch(36% 0.24 35)`

### Drop 06 · Pressroom

Warm + cool. Amber-gold against slate-blue. 1950s journalism, print shop, broadsheet weight. **Pick for** journalism, newsletters, editorial and opinion, briefs mentioning "press", "newspaper", "broadsheet", "subscription".

- `--color-paper: oklch(89% 0.025 65)` - warm slate-cream
- `--color-paper-2: oklch(85% 0.030 62)` · `--color-paper-3: oklch(79% 0.035 58)`
- `--color-ink: oklch(16% 0.02 60)` - ink-black
- `--color-ink-2: oklch(28% 0.025 58)` · `--color-muted: oklch(45% 0.025 55)`
- `--color-accent: oklch(78% 0.18 75)` - amber-gold
- `--color-accent-2: oklch(34% 0.10 240)` - slate-blue, also `--color-rule`
- `--color-accent-ink: oklch(16% 0.02 60)` · `--color-focus: oklch(34% 0.10 240)`

**Picking and rotating.** Match the brief's domain before reaching for the loudest palette: food and hospitality → Diner Sign; independent music → Cold Snap; late-night and radio → Studio Night; summer and pool → Aqua Park; zine, skate, deliberately chaotic → Citrus Riot; journalism and editorial → Pressroom. Citrus Riot and Aqua Park are the highest-chroma drops: reach for them when the brief genuinely wants maximum loudness, not by default. The log records `"theme": "carnival", "drop": "studio-night"`, and a new build picks a drop absent from the last three entries unless the brief signals one. If the brief names a brand colour no drop fits, route to a custom theme rather than stretching a drop; six is the right number.

## Typography

- **Display** - Big Shoulders Display 800 with `font-variation-settings: "wdth" 110, "wght" 800`. Setting `font-stretch` does nothing on this face; only `font-variation-settings` moves the width axis.
- **Case and tracking** - headlines are ALL CAPS (or `font-variant: all-petite-caps`), tracked **tight**: `-0.005em` on a hero word, `0.02em` on a section head. Loose `0.04em` reads as AI-spread and belongs only to a marquee, where horizontal spread is the point. Line-height stays tight too: `0.82` for a single hero word, `0.92` for multi-line heads.
- **Body** - DM Sans, sentence case, short, present tense, full-ink. Carnival does not do subtle grey.
- **Label voice** - JetBrains Mono caps micro-type, tracked `0.18em`. It sets captions, table headers, meta rows, folios, and units. It is not a kicker over a heading.

## Material

- **Two accents that compete, never blend.** One accent fills a surface; the other fills the next. A block never shows both, and there is never a gradient between them. A mustard tile does not get an oxblood badge inside it.
- **Hard-offset drop shadow.** `box-shadow: 4px 4px 0 var(--color-ink)`, zero blur, on cards, CTAs, and images. This is the single most recognisable Carnival move; a soft `0 8px 24px` shadow is a different theme. Leave clearance at the page edge so the offset is never clipped.
- **Rules are 2px solid** in the drop's rule colour. Hairlines belong to Boutique and Specimen.
- **Colour blocks bleed past the shell.** An accent fill extends ~24px past the page max-width on one side, so it reads as a poster pinned to a wall rather than a button.
- **Typographic ornaments.** `✱` `❋` `◆` as bullets, dividers, and rhythmic spacers, in accent colour. These are ornaments, not emoji; smiley and heart emoji stay banned.
- **Halftone fills** wherever the page would otherwise show a photo placeholder: `radial-gradient(var(--color-ink) 1.5px, transparent 1.5px)` at `12px 12px`. A halftone square holds a fixed small size and never overlaps type. Budget and recipe in [`texture.md`](../texture.md) § Halftone.

## Motion

Mostly still, with one horizontal engine. A marquee of ornament-separated words can scroll at a banner or a footer; its content repeats at least twice (or ships `aria-hidden` siblings) so the loop reads continuous instead of one string sliding off. Hover states are colour swaps and shadow shifts, not lifts. `prefers-reduced-motion: reduce` freezes the marquee at its static state.

## Do-nots (this theme's own failure modes)

- **Never a soft shadow.** Hard-offset or none. Reaching for a blur means the build has drifted to another theme.
- **Never both accents inside one block.** They compete across surfaces; blending them kills the duo-tone read.
- **Never sentence-case headlines,** and never loose tracking outside a marquee. Spread caps is the AI tell this theme is most prone to.
- **Never light-grey body text or thin rules.** Full ink, 2px.
- **Never a neutral CTA.** Every call to action fills with one of the two accents.
- **Never a long paragraph.** Past three sentences, break it with an ornament divider or split it.

## Voice range

Short, loud, declarative. Headlines all-caps, six words or fewer, ending in a period rather than an exclamation mark: the loudness is in the type, not the punctuation. Body in sentence case, one or two sentences a paragraph. Numerals over words. Never: experience, journey, elevate, curate, platform, ecosystem, transform. Carnival is independent, not platformed.

## How Carnival differs from its neighbours

| vs | difference |
|---|---|
| **Riso** | Riso is risograph print-craft: peach paper, CMYK misregistration on display, cyan and yellow. Carnival is editorial maximalism: duo-tone, oxblood on pink, ornaments, variable-width type. Different parent tradition. |
| **Manifesto** | Manifesto is black paper and all-caps red Anton. Carnival is tinted warm paper, duo accents, ornaments. Inverted polarity: one is dark, the other light. |
| **Brutal** | Brutal is raw graphic-design brutalism: heavy borders, slab type, no ornaments. Carnival is decorative: ornaments, layered blocks, variable type, character. |
| **Sport** | Sport is athletic italic uppercase (Inter Tight italic 700). Carnival is poster-art expressive (Big Shoulders 800 with the width axis). Sport feels Nike; Carnival feels Drag City. |
| **Arcade** | Arcade shares the hard-offset shadow but runs it on a dark violet-black CRT with pixel type and neon. Carnival is warm daylight paper and a fairground poster. |

## When the brief routes here

*record label · podcast · comedy · indie · zine · poster · illustrator · games · hot sauce · merch · streetwear · cassette · vinyl · live show*. Categories: music, comedy, games, illustration, food with character, merch, skateboards, gig posters. Tone: loud, fun, scrappy, chaotic, layered, character-led, decorative.

Briefs about enterprise, scale, APIs, B2B, or dashboards never route to Carnival.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;700;800&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

```css
body { background: var(--color-paper); color: var(--color-ink); font-family: var(--font-body); }

h1, h2 {                                  /* tight caps, width axis engaged */
  font-family: var(--font-display); font-weight: 800;
  font-variation-settings: "wdth" 110; text-transform: uppercase;
  letter-spacing: 0.02em; line-height: 0.92;
}
/* a lone hero word goes tighter: letter-spacing: -0.005em; line-height: 0.82 */

.hard {                                   /* the flat ink shadow - zero blur, never negative spread */
  border: 2px solid var(--color-ink);
  box-shadow: 4px 4px 0 var(--color-ink);
}

.ornament { color: var(--color-accent); }
.halftone { background-image: radial-gradient(var(--color-ink) 1.5px, transparent 1.5px);
            background-size: 12px 12px; }
```

Those rules carry the identity. Which surfaces take which accent, and what the page is made of them, is the brief's business, not Carnival's.
