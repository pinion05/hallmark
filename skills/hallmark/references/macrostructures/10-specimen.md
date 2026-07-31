## 10 · Specimen *(no longer the default)*

Huge serif display, asymmetric column spans, hairline rules, typographic-only CTA, generous whitespace. Editorial / type-foundry energy.

- **Heading:** a large serif phrase, standing alone. When the run is genuinely ordinal the figure is generated on the heading itself (`<ol>` + `counter()`, S1); a number typed beside or above it is an eyebrow and gate 54 bans it.
- **Body:** asymmetric spans — narrow marginalia column (captions, dates, sidenotes) / wide content column.
- **Divider:** hairline rules between sections.
- **Button:** typographic link with arrow ("Open your studio →"); no box, no fill.
- **Image:** none, or a hand-drawn SVG accent in the wide left margin.
- **Reveal:** fade-up stagger on first load.

Reach for it ONLY when the brief is explicitly editorial, type-foundry, journal, or "specimen sheet". Otherwise pick something else.

**Banned as a default.** If the brief is vague and you've defaulted here, restart.

Reference: type foundry homepages (Klim, Pangram Pangram, Production Type), some editorial portfolios.

**Sample opening lines** (imitate the *specificity* — Specimen openings are foundry-voice, treating type as material culture):
> *"A thing well made."* — klim.co.nz — refusal of the verb, treats design as material
> *"Type, set with care."* — Hallmark Specimen — three words, a colon implied
> *"Creative direction, design and type for culture since 2003."* — apracticeforeverydaylife.com — date-anchored, names verticals

```html
<header class="specimen">
  <h1 class="serif-xxl">A quiet instrument.</h1>
  <p class="lede narrow">…</p>
  <a class="link">Open your studio →</a>
</header>
```

---
