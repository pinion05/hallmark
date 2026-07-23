# Hero discipline: space, motion, and the ship gate

Load this file alongside whichever archetype (E1-E8) or polish pattern (HP1-HP4) you picked. These rules bind on every hero; the eight pre-flight questions decide whether the enrichment ships at all.

## Hero space discipline

Every hero — enriched or not, polished or not — obeys these rules.

- **Footprint.** The hero takes 70–90 % of the first viewport's height — no more, no less. `min-height: 100vh / 100dvh` is the AI fingerprint (gate 6); a hero that's only 20 % of the viewport feels like a header. Aim for `min-height: clamp(60vh, 75dvh, 88dvh)` and let content settle inside.
- **Fit the fold — content, not just the box.** The Footprint rule caps the hero's *height*; this caps its *content*. On a 13″ laptop (~800 px tall) the eyebrow + headline + lede + primary CTA must all be visible **without scrolling**. When they aren't, it's almost always wasted vertical space — an oversized display `clamp()` max, display line-height near 1.2, a 3-line lede, or `padding-block` bloat. Pull the clamp max down, set display line-height 1.0–1.1, hold the lede to ~2 lines, trim the padding. **Right-size, don't cramp** — a hero that already fits needs no shrinking, and this never means tiny type or no whitespace. Slop-test gate 44 enforces this.
- **Asymmetric padding.** `padding-block-end` ≥ 1.3× `padding-block-start`. The hero sits *into* the page; symmetric padding floats. Slop-test gate 44 enforces this.
- **Never centre everything.** Eyebrow + title + lede + CTA all stacked centred is the AI fingerprint. Pick at most *two* centred elements; break alignment for the others. Gate 6 enforces this. Centred-narrow heroes are admissible only when the genre is editorial / atelier *and* the eyebrow or CTA breaks alignment.
- **Entrance animation.** Pick one of {fade, sweep, none} per element — never both fade *and* sweep on the same element. Duration ≤ 220 ms. Disable on `prefers-reduced-motion: reduce`. Cross-reference the "One orchestrated reveal per page" rule below.
- **Headline typography.** Prefer one display weight + tight tracking (-0.02em to -0.04em) over default 0; line-height 0.95–1.05 for display, never 1.2 (which inherits the body line-height and reads as un-set type). Avoid two display weights on the same headline (a `<strong>` in a different weight inside the title is AI's idea of "emphasis"; pick one weight, let the words carry).
- **One polish pattern, max.** HP1–HP4 are mutually exclusive on a single hero. A vertical rail *and* a marquee-overflow *and* a cursor spotlight *and* a decorative numeral on one hero is a panic attack. Pick one.

---

## Animation discipline (hero specifically)

Cross-references [`motion.md`](../motion.md), [`microinteractions.md`](../microinteractions.md), and [`custom-craft.md`](../custom-craft.md). The hero is the highest-stakes animation surface on the page; the rules are tighter here than elsewhere.

**One orchestrated reveal per page.** Not eight. Not "everything fades in on scroll". One: the hero settles in 0.4–0.8 s with a single coordinated motion, then stops.

**Banned for hero entrances:**
- Bouncy elastic easing (`cubic-bezier(0.34, 1.56, ...)`) — reads as 2016 Framer demo
- Scroll-fade-everything (every section fades in when it enters the viewport)
- Mouse-follow gradients on SaaS landing pages (allowed only on portfolio / creative / agency work)
- Parallax-on-mouse (motion sickness, gimmicky)
- Particle / starfield backgrounds (2010s nostalgia, distracting)
- Auto-rotating hero carousels (WCAG 2.2.2 fail unless paused-on-hover-and-focus is implemented)

**Allowed:**
- A single image-fade-in-late after the headline lands (~0.6 s after, ~0.4 s duration)
- Type-unmask on the headline (`clip-path` opening over text)
- View Transitions API for state changes (theme switch, route change)
- Number-tick on a stat-led hero (counter from 0 to final, ≤ 1.2 s)
- A single subtle Lottie / CSS loop ≤ 4 s, with `prefers-reduced-motion` fallback

**Reduced-motion is the default in 2026.** Every animation gets a `@media (prefers-reduced-motion: reduce)` block that either disables the motion or replaces it with a static keyframe. This is non-negotiable; the slop test will catch you.

---

## Quality bar — eight pre-flight questions

Every question must answer *yes* before the enrichment ships. If any answer is *no*, ship the typographic-only hero instead.

1. Does the enrichment **communicate** something the typography can't?
2. Is it under **2 MB** total (video poster + first segment, illustration + animation JSON, image + grain)?
3. Does it have a **`prefers-reduced-motion` fallback**?
4. If video: muted, looped, `playsinline`, with a poster + `fetchpriority="high"` + caption track?
5. If illustration: built or generated with intent? **Not picked from a Lottie library as a shortcut?**
6. If background: under one accent colour at < 5 % footprint? (Aurora and mesh-gradients fail this.)
7. Does it survive being deleted? (If the hero still works without it, it earned its place. If the hero collapses without it, you propped weak typography on a crutch.)
8. Does its tone match the page's tone? (Risograph illustration on a Brutal page = wrong. Hand-drawn doodle on a Workbench developer-tool page = wrong. Three.js bloom on a Coral page = wrong.)

The slop test ([`SKILL.md`](../../SKILL.md) §5) carries four binary gates that mirror these questions; the audit verb runs them.

---

## Common mistakes — and the fixes

- **Defaulting to E5 illustration on every brief.** Most heroes don't want an illustration. Reach for E0 (typography only) first; reach for E1–E4 when there's a *thing* to show; reach for E5 only when illustration genuinely matches the tone.
- **Using a stock Lottie checkmark as the hero animation.** That's tier E used to skip tiers A–D. Build the checkmark in pure CSS (`stroke-dasharray` animated to draw the tick); it's 8 lines.
- **Adding a grain background everywhere.** Grain is a treatment, not a default. Half the existing themes already carry texture (Riso, Atelier, Specimen). Don't double up.
- **Treating the abstract background as the hero.** It isn't. The headline is. The background is paper.
- **Shipping the unmodified Storyset SVG.** That's tier D ungrounded — the library look. Customise the colour to your anchor hue at minimum; recompose if you can.
- **A clipped-edge video on mobile.** The clip reads as broken on a 375-px viewport. Always collapse to stacked at < 60 rem.
