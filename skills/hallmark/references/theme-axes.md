# Theme axes - the Rotation lookup

The three diversification axes for every catalog theme, derived from the canonical token values. The Rotation block in [`SKILL.md`](../SKILL.md) reads this table; two consecutive themes must differ on at least one axis. Custom builds declare their own axes per [`custom-theme.md`](custom-theme.md) § D.

Bands: paper **dark** < 30% L · **mid** 30-85% · **light** > 85%. Accent: **warm** 10-60° · **cool** 200-300° · **neutral** chroma < 0.05 · **chromatic-other** anything else (sub-tag the hue).

| Theme | Paper band | Display style | Accent hue |
| --- | --- | --- | --- |
| Specimen | light (oat 96%) | high-contrast-serif (Fraunces) | warm (signal orange ~35°) |
| Atelier | light (94%) | high-contrast-serif (Playfair) | warm (umber ~40°, low chroma) |
| Brutal | light (98%) | display-heavy (Albert Sans) | warm (red ~25°) |
| Newsprint | light (92%, warm) | roman-serif (Playfair/Crimson) | warm (brick ~28°) |
| Studio | light (96.5%, cool) | high-contrast-serif (Fraunces) | chromatic-green (~145°) |
| Manifesto | dark (10%) | display-condensed-bold (Anton) | warm (red ~25°) |
| Terminal | dark (11%, green) | mono (JetBrains Mono) | chromatic-phosphor (~138°) |
| Midnight | dark (15%, blue) | geometric-sans (Geist) | cool (~220°) |
| Almanac | mid (84%, cool slate stock) | grotesk-sans (Hanken Grotesk) | cool (~250°) |
| Garden | light (95.5%) | roman-serif (Young Serif) | chromatic-leaf (~140°) |
| Riso | mid (84%, pink stock) | grotesk-heavy (Public Sans 800/900) | cool (~220°) |
| Sport | light (98%) | display-condensed (Inter Tight) | warm (~35°) |
| Bloom | light (97%) | geometric-sans (Geist) | warm (~35°) |
| Coral | light (96.5%) | grotesk-sans (General Sans) | warm (coral ~28°) |
| Cobalt | light (98.5%, cool) | grotesk-sans (Space Grotesk) | cool (~256°) |
| Aurora | dark (11%, teal) | geometric-sans (Sora) | chromatic-teal-green (~172°) |
| Editorial | light (94%, cream) | display-condensed (Inter Tight) | warm (coral ~35°) |
| Carnival | light (92%, warm) | display-heavy (Big Shoulders) | chromatic-amber (~95°) |
| Lumen | dark (13%, indigo; day drop flips light) | classical-serif (Instrument Serif) | warm (~50°) |
| Hum | light (97%, warm) | rounded-sans (Plus Jakarta Sans) | chromatic-amber (~95°) |
| Grid | light (near-white 99%) | grotesk-heavy (Archivo 800) | warm (signal red ~28) |
| Field | light (cream 96.5%) | roman-serif display (Source Serif) | chromatic-marigold (~80) |
| Ledger | dark (navy 20%) | grotesk-sans + tabular mono (Hanken) | chromatic-teal (~185) |
| Arcade | dark (violet-black 16%) | pixel display (Silkscreen) | chromatic-magenta (~340) + cyan |

When two candidate themes match on two of the three axes, pick a more distant one. Known close pairs that rule arbitrates: Aurora ~172° vs Ledger ~185° (same teal family), Specimen vs Atelier (both light/high-contrast-serif/warm; faces and registers differ), Sport vs Editorial (both light/display-condensed/warm; scoreboard vs magazine register). Display is roman by default; a single italicised word inside a roman heading is banned outright (gate 38a-i), and an italic display *system* is a Reflex gate a theme can carry if it declares one (38a-ii).

---

## The theme contract

**A theme is a material, not a plan.** It says what the page is made of. It does not say what the page contains, in what order, or in what shape. Two pages in the same theme should not share a section sequence.

A theme file **may** carry:

- palette values and their roles (paper, ink, muted, accent, accent-ink, focus, rule), in OKLCH
- the type pairing, the role each face plays, and its tracking, weight, and case conventions
- rule weight, radius, shadow stance, border treatment
- texture and material: grain, overprint, scanline, deckle, and their budgets
- motion character: how fast this theme moves and how it eases
- what the theme feels like, and what it is *not* (its nearest neighbour in the catalog, and the difference)
- three to six do-nots that are specific to **this theme's own failure mode**, not restatements of the global gates

A theme file **may not** carry:

- a section sequence, a page outline, or a "structural signature"
- a mandated nav, footer, hero, or enrichment archetype
- HTML scaffolds or page-part class names (`.masthead`, `.panel`, `.work`, `.meter`)
- verbatim copy, invented brand names, invented people, or taglines that read as strings to ship
- an eyebrow, in any form (gate 54)
- counts that fix a layout ("always three cells, never two, never four")

Where a theme genuinely invented something structural worth keeping, it belongs in the Library as an **optional** entry any brief can reach for, never as a thing this theme's builds must contain. The `## Build hint` block in each file is a token sketch, not a page: `:root` values and the two or three face rules that make the theme recognisable, and nothing that names a page part.
