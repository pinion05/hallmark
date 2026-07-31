# Theme - Riso

Risograph-print register: warm blush stock, two saturated spot inks printed slightly out of register, paper you can almost smell. It reads like a soy-ink poster that got a URL - heavy grotesk misregistered in blue and pink, a serif lede, machine-set labels underneath.

The material, in one line: **pink stock, two spot inks multiplied, an offset that missed the drum, grain on the ink.**

## Axes (diversification)

- **Paper band** - **mid warm pink stock**, `oklch(84% 0.048 30)`. True riso stock (real risograph paper ships saturated), ink `oklch(18% 0.060 30)` at 11.5:1. Not white, not cool - everything tinted hue 30.
- **Display style** - grotesk-sans: **Public Sans 800/900**, tight `--tracking-display: -0.04em`, `--lh-tight: 0.92`. Heavy poster grotesk, distinct from every serif-display sibling.
- **Accent hue** - cool riso blue, `oklch(46% 0.140 220)` (deep enough to hold a 3:1 focus ring on the pink stock), paired with riso yellow `oklch(78% 0.180 95)`. Two spot inks overprinted, never flooded; accent text runs >= 18px bold or sits on an ink underline.

## Reference register

Risotto Studio · Hato Press · Nieves · Colorama · People of Print · Present & Correct · Draw Down Books · It's Nice That · Printed Matter fairs. **Never name any of these in the output.**

The material to match: warm stock, spot-colour duotone, deliberate misregistration, halftone grain. Internally: *a two-colour riso print that missed register by a hair* - the offset is the charm, not a defect. When in doubt ask "does this look printed on a drum, or exported from a vector tool?" Keep the former.

## Palette

Canonical values live in [`site/css/tokens.css`](../../../../site/css/tokens.css) under `[data-theme="riso"]`.

- `--color-paper: oklch(84% 0.048 30)` - warm pink stock, never white; panels step to `80%` / `75%` on the same hue
- `--color-ink: oklch(18% 0.060 30)` - warm near-black
- `--color-neutral: oklch(34% 0.060 30)` - body
- `--color-accent: oklch(46% 0.140 220)` - riso blue, spot ink one
- `--color-accent-2: oklch(78% 0.180 95)` - riso yellow, spot ink two
- the pink echo in the overprint: `oklch(64% 0.19 12)`
- `--color-rule: oklch(70% 0.040 30)` - hairline

Every neutral tilts hue 30. Blue and yellow are the only colours; where they cross, `mix-blend-mode: multiply` makes a third hue for free. Keep the two inks under ~15% of any viewport: the blush paper stays dominant.

## Typography

- **Display** - Public Sans 800/900 at `-0.04em`, `--lh-tight: 0.92`. Poster weight.
- **Body / lede** - Newsreader serif at 45-75ch. The poster-headline against reading-serif contrast is load-bearing.
- **Label** - Geist Mono, UPPERCASE, `--tracking-label: 0.06em`. The print-shop readout voice: plate captions (`Plate 04 · 3 colours · 280 gsm`), item counts, table headers, meta rows, folios, units, and entry numbers inside a real `<ol>`. It states a printed fact; it never sits above a heading to announce it.

## Material

- **Off-register overprint (THE move).** A key word or a mark gets a misregistered echo: `::before` in riso blue nudged up-left ~2px, `::after` in riso pink nudged down-right ~2px, both `mix-blend-mode: multiply` over the black `data-text`. The colour fringes read as ink that missed the drum. Use on 1-2 focal words only, never every heading. Ship it at least once per page or the theme is not present.
- **Halftone / paper grain.** A faint noise or dot-grain overlay sits on the ink art (and optionally very lightly on paper) so fills read printed, not vector. Riso is the one editorial theme where texture belongs - keep it on the ink, subtle, never a loud full-page flood. Recipes and budget: [`texture.md`](../texture.md) § Grain and § Misregistration.
- **Hairlines and a spot highlight, zero shadow.** A single-accent `<mark>` band at x-height, `--color-rule` hairlines, solid rectangle buttons at ~2px radius. No boxed cards, no drop-shadow, no blur; depth comes from overprint and rule.

## Motion

Quiet and printed. Section reveals fade and rise ~10px once, ease-out ~600ms, from one `IntersectionObserver`. The misregistration may settle on load (echoes drift a hair into their offset, then rest) but never loops. Hover: rule colour shifts to accent, the mark band grows. No bounce, no parallax, no autoplay. Everything gates behind `prefers-reduced-motion: no-preference`; reduced-motion ships the offsets static and fully visible.

## Voice range

Specific, hand-set, a little literary. Verbs and counts over adjectives: name the ink, the press run, the paper weight. Never *seamless, cutting-edge, revolutionary, synergy, leverage, premium, glossy, pixel-perfect*. Riso is deliberately imperfect - never sell it as flawless.

## Do-nots (this theme's own failure modes)

- **No clean vector flatness.** Riso must show the offset fringe and the grain. Perfectly-registered, texture-free fills kill the theme.
- **No cool-white or pure-white paper.** That is Cobalt's ground. Riso paper is warm blush, hue 30.
- **No pure `#000` ink.** Warm near-black `oklch(18% 0.060 30)`.
- **No gradient, glow, neon, or aurora-mesh.** Riso is flat spot inks multiplied, not RGB light. Colour comes from overprint, not luminance.
- **No drop shadows, no boxed or card-in-card layouts, no pill-gradient CTA.** Hairlines and overprint carry structure; a button is a solid rectangle.
- **Don't borrow Carnival's kit.** Its offset is a hard solid box-shadow and its duo is mustard/oxblood. Riso's offset is ink misregistration; its duo is blue/yellow.

## How Riso differs from its neighbours

| vs | what settles it instantly |
|---|---|
| **Carnival** (loud editorial sibling) | Carnival is duotone mustard + oxblood, chunky variable display, hard-offset **box-shadow**, decorative ornaments. Riso is blue + yellow **spot inks**, off-register overprint plus grain, warm pink stock. Offset-as-ink vs offset-as-shadow. |
| **Newsprint** (paper sibling) | Newsprint is warm cream stock and one-brick ink-only restraint, no spot colour. Riso is warm pink stock, two saturated spot inks, printed grain. Spot colour and print-artifact texture settle it. |
| **Brutal** (editorial sibling) | Brutal is raw system type, hard mono borders, cold. Riso is a crafted print object - grotesk plus serif, spot inks, grain, warmth. Craft and colour vs raw and monochrome. |

## When the brief routes here

*risograph · riso · print fair · zine · zine fest · small press · letterpress · screenprint · poster · gig poster · art book · book fair · spot colour · illustration studio · indie press · DIY · print studio · stockist*. Categories: print fairs, zine fests, art-book events, poster shops, illustration and print studios, indie publishers, creative-studio events. Tone: warm, tactile, handmade, off-register, analog, playful-craft, printed.

Cool and technical routes to Cobalt; loud-decorative editorial routes to Carnival; grey ink-only routes to Newsprint. When the brief wants ink on warm stock with a colour that misses register, it is Riso.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;800;900&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Geist+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-ink);
       font-family: var(--font-body); font-weight: 400; }

/* Grotesk display, tight and heavy */
.display { font-family: var(--font-display); font-weight: var(--display-weight);
           letter-spacing: var(--tracking-display); line-height: var(--lh-tight); }

/* THE move - off-register overprint via data-text echoes */
.riso-mis { position: relative; color: var(--color-ink); }
.riso-mis::before, .riso-mis::after {
  content: attr(data-text); position: absolute; inset: 0;
  mix-blend-mode: multiply; pointer-events: none; }
.riso-mis::before { color: var(--color-accent);  transform: translate(-2px, -2px); } /* riso blue */
.riso-mis::after  { color: oklch(64% 0.19 12);   transform: translate( 2px,  2px); } /* pink */

/* Hairlines + solid rectangle button, never a pill or shadow */
.rule { border-top: 1px solid var(--color-rule); }
.btn--solid { background: var(--color-accent); color: var(--color-paper); border-radius: 2px; }
mark { background: var(--color-accent-2); color: var(--color-ink); } /* yellow band at x-height */

@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; } }
```

Reference build: [`site/examples/riso-01/`](../../../../site/examples/riso-01/) (built on the pre-2026-07 tokens; example builds are dated artifacts and are never retro-edited when a theme's tokens move) - match its register, never its composition; reusing its section order, hero geometry, or grid is a gate-32-grade repeat.

The rest of the page is yours. Riso supplies the stock, the two inks, and the offset; what gets printed on that paper is the brief's business, not the theme's.
