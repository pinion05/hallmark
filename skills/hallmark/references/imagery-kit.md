# Imagery kit - the composition playbook (and, later, hosted assets)

The kit is two things. TODAY it is the composition playbook below: the category vocabulary and the layered, off-centre, blend-mode patterns that make abstract imagery read intentional. LATER it will also be a set of hosted assets at `https://www.usehallmark.com/imagery/<category>/<file>`, listed in the manifest section.

**The hard rule: never emit a URL that is not listed in the manifest below.** While the manifest is empty, every kit asset is CONSTRUCTED in-page: washes and blobs via craft tier-a CSS or tier-b SVG (see [`custom-craft.md`](custom-craft.md)), textures via CSS gradients, generated stills via tier-e only when the user opted in and `TOGETHER_API_KEY` is set (`scripts/imagegen.mjs`). A URL that 404s in the shipped page is worse than no image; the fallback chain in [`assets.md` § Placeholder strategy](assets.md) exists for assets that go missing later, not as licence to emit dead links now.

**Why this exists.** The v0.9.0 watercolor sprinkle was generated per-emit and was inconsistent. The kit recovers that aesthetic but as discrete, swappable, deliberately-composed assets. Compose with them like a senior frontend engineer: layered transparent PNG behind text, biased off-centre, intentionally large, mix-blend-mode where it earns its place. Not "abstract gradient on top of headline" — that's the AI default.

---

## Categories

| Category | What | Format | Example uses |
| --- | --- | --- | --- |
| **watercolor** | Full-bleed soft-edge painterly fields. Warm + cool variants per palette family. | WebP | Section background accent; hero-half flood; behind-quote wash. |
| **transparent** | Organic blob / brushstroke / stylized mark on transparent background. | PNG | Layered hero composition (large, off-centre, behind text). The masterclass move. |
| **ornament** | Small hand-drawn stamps, plates, roman numerals, decorative flourishes. | SVG | Beside a quote; in the section-label gutter; closing a letter. |
| **texture** | Subtle paper, weave, riso-dot, cross-hatch fields. Tile-able. | WebP | Body grain via `mix-blend-mode: multiply`; section-divider banding. |
| **silhouette** | Abstract bottle / box / device / book / mug / card shapes. | PNG | Empty product slots before user uploads photos; comparison rows. |
| **pattern** | Repeating motifs that read as fabric / paper / printed material. | WebP | Section-band texture; full-bleed fills behind decorative text. |

**Naming:** `<category>-<palette-family>-<variant>.<ext>` — e.g. `watercolor-warm-01.webp`, `transparent-brush-cool-03.png`, `ornament-stamp-01.svg`, `texture-grain-paper-02.webp`. Palette families: `warm` · `cool` · `neutral` · `chromatic`.

---

## Manifest (EMPTY - no hosted assets exist yet)

The manifest is the allowlist: an asset may be referenced by URL only once it is listed here with dimensions and a description. Nothing is listed yet, so nothing is referenceable; construct instead (see the hard rule above). When images land in `site/public/imagery/<category>/`, they get listed in this shape:

```
<category>-<palette-family>-<NN>.<ext>   <WxH>   <one-line description>   <intended use>
```

Once entries exist, the picking logic is: match the active theme's palette family + the brief's tone, reference the listed URL, and keep the constructed fallback in reach.

---

## Usage patterns — how a senior engineer would compose these

(The `…/imagery/` paths in the examples below show the future manifest shape. Today, per the hard rule, swap in the constructed equivalent: inline tier-b SVG for ornaments and silhouettes, gradient washes for fields, CSS grain for texture, tier-e generation only when the user opted in.)

### Layered hero composition (the masterclass move)

A transparent abstract object behind hero text. The image is bigger than you think it should be — that's what makes it feel intentional, not decorative.

```css
.hero { position: relative; isolation: isolate; }

.hero__art {
  position: absolute;
  top: 50%;
  right: -10%;
  transform: translateY(-50%);
  width: clamp(60%, 80vh, 1400px);
  height: auto;
  z-index: 0;
  pointer-events: none;
  /* Optional warmth: */
  mix-blend-mode: multiply;
  opacity: 0.85;
}

.hero__art--bias-left  { right: auto; left: -10%; }

.hero > * { position: relative; z-index: 1; }
```

Bias to one side (left or right, never centred). The text sits at `z-index: 1`, the art at `z-index: 0`. Test mobile: art may need to scale down or shift to avoid the headline at 320 px.

### Section background wash

A painterly field as a full-bleed section accent. One section per page, never global. While the manifest is empty the wash is CONSTRUCTED (layered radial gradients at low alpha read painterly; a manifest asset would slot into the same `background` line later):

```css
.section--wash { position: relative; isolation: isolate; }
.section--wash::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(60% 48% at 22% 30%, oklch(from var(--color-accent) l c h / 0.14), transparent 70%),
    radial-gradient(50% 42% at 78% 72%, oklch(from var(--color-accent) calc(l + 0.08) calc(c * 0.6) h / 0.10), transparent 72%);
  z-index: -1;
  pointer-events: none;
}
```

### Decoration

Inline ornament beside a quote or in the section-label gutter. Small. No border, no shadow, no animation.

```html
<p class="section-label">
  <span class="num">02</span>
  <img class="section-label__ornament" src="…/imagery/ornament/ornament-stamp-01.svg" alt="" aria-hidden="true" />
  <span>Examples</span>
</p>
```

```css
.section-label__ornament { width: 1.5em; height: auto; vertical-align: middle; }
```

### Texture overlay

Grain over a solid colour. Always opacity-capped at `0.15`.

```css
.texture-grain {
  background-image: url("…/imagery/texture/texture-grain-paper-01.webp"), var(--paper-fill);
  background-size: 256px 256px, cover;
  background-blend-mode: multiply;
  opacity: 1; /* the grain texture is at 0.15 in the source asset */
}
```

### Empty state

Generic silhouette in unfilled data slots, greyscale-tinted, with a "Replace with real photo" hint visible to the developer (HTML comment).

```html
<!-- TODO: Replace with real product photo, target size: 600×900 -->
<picture class="product-card__photo product-card__photo--empty">
  <img src="…/imagery/silhouette/silhouette-bottle-01.png" alt="Hand-poured ceramic vessel, studio lighting" />
</picture>
```

---

## Anti-patterns

- **Don't use kit imagery as the literal subject.** An abstract bottle is *not* a stand-in for an actual coffee-shop hero — those need photographic placeholders (Picsum / Unsplash). The kit is for atmosphere / composition / decoration, not subject replacement.
- **Don't layer 3+ kit pieces on one page.** Restraint. One transparent object in the hero + one wash in a later section is the cap.
- **Don't apply the same watercolor wash to multiple sections.** It's a section accent, not a global treatment.
- **Don't use kit imagery in modern-minimal genre** (Stripe / Linear / ElevenLabs school). That genre's whole point is the absence of decorative imagery.
- **Don't centre the layered hero art.** Centred behind text is the AI-default move. Bias to one side, off-axis.
- **Don't use mix-blend-mode without testing on the active paper.** `multiply` over a dark canvas inverts; `screen` over light paper washes out. Eyeball the result per theme.

---

## Generation pipeline (out-of-band, one-time)

The kit is generated once per palette family, post-processed, and committed to the marketing site's public folder:

```
site/public/imagery/
  ├── watercolor/        ~6 files × 4 palette families = 24 WebPs
  ├── transparent/       ~6 files × 4 palette families = 24 PNGs
  ├── ornament/          ~8 SVGs (palette-agnostic, use currentColor)
  ├── texture/           ~6 tile-able WebPs
  ├── silhouette/        ~6 PNGs (palette-agnostic, transparent)
  └── pattern/           ~6 tile-able WebPs
```

**Tooling.** Nanobanana 2 / Recraft V4 with reference images. Prompt seed-list per category lives at the top of each file's directory in a `prompts.md` (one-line prompts, results pinned by seed for reproducibility).

**Post-processing.** Trim, transparent-background where applicable, colour-balance against Hallmark's OKLCH palette tokens, save as WebP for size + PNG where alpha matters. Ornaments as inline SVG so they inherit `currentColor`.

**Total target weight.** ≤ 5 MB across all categories. Each individual file ≤ 200 KB. Lossy WebP at q=80 unless the image needs lossless (ornaments → SVG; transparents → PNG with `pngquant`).

**Re-generation.** Treat the kit as a refreshable batch, not a one-off. When the palette catalogue changes (new theme, new accent hue), re-generate the relevant palette family. Manifest above is the spec; assets are the deliverable.
