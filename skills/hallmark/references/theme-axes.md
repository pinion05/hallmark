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
| Almanac | light (94%, cool) | grotesk-sans (Hanken Grotesk) | cool (~250°) |
| Garden | light (95.5%) | roman-serif (Young Serif) | chromatic-leaf (~140°) |
| Riso | light (91%, pink) | grotesk-sans (Public Sans) | cool (~220°) |
| Sport | light (98%) | display-condensed (Inter Tight) | warm (~35°) |
| Bloom | light (97%) | geometric-sans (Geist) | warm (~35°) |
| Coral | light (96.5%) | geometric-sans (Geist) | warm (coral ~28°) |
| Cobalt | light (98.5%, cool) | grotesk-sans (Space Grotesk) | cool (~256°) |
| Aurora | dark (11%, teal) | geometric-sans (Geist) | cool (~200°) |
| Editorial | light (94%, cream) | display-condensed (Inter Tight) | warm (coral ~35°) |
| Carnival | light (92%, warm) | display-heavy (Big Shoulders) | chromatic-amber (~95°) |
| Lumen | dark (13%, indigo; day drop flips light) | classical-serif (Instrument Serif) | warm (~50°) |
| Hum | light (97%, warm) | rounded-sans (Plus Jakarta Sans) | chromatic-amber (~95°) |

When two candidate themes match on two of the three axes, pick a more distant one. All display is roman; italic headers are banned globally (gate 38a).
