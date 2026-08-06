# Derived worked examples

Three landing pages produced by the **derivation** route: the path every build takes by default. Derivation constructs a palette, a font pairing and a direction contract from the brief's own culture, instead of picking a destination from the 24-theme catalog. The catalog is the fast path, reached four ways only (the user names a theme, `--fast`, an existing `design.md` or brand, or component scope).

These three were the worked examples that used to live in the ritual file's § G. They were cut from the reference (three fake brands are copy-paste bait inside a file the model reads at build time) and kept here, rendered as actual HTML, so a constructed palette and pairing can still be inspected visually.

| # | Brand | Vibe | Anchor | Macrostructure | Axes |
| --- | --- | --- | --- | --- | --- |
| 01 | **Coffeebox**, small-batch coffee subscription | "archival warmth, hand-set, no varnish" | terracotta | Long Document | light / italic-serif / chromatic-terracotta |
| 02 | **Loop**, payment-rail observability for fintechs | "industrial precision, cool, technical" | sea-blue | Workbench | dark / mono / cool |
| 03 | **Mossroot**, herbal apothecary in Porto | "moss, lichen, soft pink, herbal" | (skipped, derived) | Catalogue | light / roman-serif / chromatic-other (dusty-pink) |

Each folder holds:

- **`index.html`**, the rendered page
- **`style.css`**, the constructed palette and pairing as inline `:root` tokens, with the stamp at the top

## What derivation unlocks

Twenty-four fixed destinations cannot carry every brand, and reaching for the nearest one is how three different briefs converge on one look. Coffeebox is closest to **Atelier** but warmer and more terracotta-led; Loop is closest to **Midnight** but mono-everywhere and sea-blue rather than phosphor-cyan; Mossroot has no catalog match at all (moss-tinted paper with a dusty-pink accent is not in the catalogue). On the catalog path all three would have compromised on the brand voice. Derived, each gets a system tuned to its own scene, and every rule carries forward unchanged: OKLCH bands, accent footprint, the font ban list, all 58 slop-test gates at their usual tiers. The freedom is the combination, not the rules.

## What keeps a derived run from inventing freely

1. **The catalog is a rejection table, not a menu.** A derived triple that lands within tolerance of any of the 24 coordinates is a failed reflex check, not a coincidence. See [`references/theme-axes.md`](../../../skills/hallmark/references/theme-axes.md) § The rejection reading.
2. **The draw is external.** `scripts/seed.mjs` hashes slug, date and run index to pick which of the seven slate entries gets built, because a model's own ranking is deterministic and returns the same favourite every time.
3. **Every existing rule applies.** The OKLCH bands in `color.md`, the pairing catalogue in `typography.md`, the ban list in `anti-patterns.md`, all 58 slop-test gates. A derived run has no waiver a catalog run lacks.
4. **The Step 5 Picks block surfaces everything before code.** The user sees the slate, the draw, the OKLCH values, the pairing and the direction contract in plain text, and can redirect early.
5. **Rotation is route-blind.** Each run records its axes triple in `.hallmark/log.json`, and the next run rotates against it whether it was derived or picked.

See [`references/direction.md`](../../../skills/hallmark/references/direction.md) for the full ritual.
