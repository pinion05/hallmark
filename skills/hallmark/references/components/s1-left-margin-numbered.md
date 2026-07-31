### S1 · Ordinal by structure
When a run of sections is genuinely ordered, the order comes from the markup or from a numeral built at graphic scale, never from a small label typed above the heading. The old form of this archetype (`01 — Foundations` stacked over an `<h2>`) is an eyebrow and gate 54 bans it outright.
*Use when:* the content is truly sequential (chapters, steps, issues, a run of numbered work). Not for "the third section on the page", which is not an ordinal, just a position.
*Don't confuse with:* S5 Bottom-anchored (label *under* the section); [`../enrichment/hp4-decorative-numeral.md`](../enrichment/hp4-decorative-numeral.md) (one numeral, hero scale, not a run).

Sequence carried by the list element, so the numbers are real and screen readers do not hear them twice:

```html
<ol class="chapters">
  <li>
    <h2>Foundations</h2>
    <p>…</p>
  </li>
  <li>
    <h2>The crossing</h2>
    <p>…</p>
  </li>
</ol>
```
```css
.chapters { list-style: none; counter-reset: chapter; padding: 0; }
.chapters > li { counter-increment: chapter; }
.chapters > li > h2::before {
  content: counter(chapter, decimal-leading-zero);
  font-family: var(--font-mono); font-size: var(--text-xs);
  color: var(--color-muted); letter-spacing: 0.06em;
  display: block; margin-block-end: var(--space-2xs);
}
```

The `::before` is a generated ordinal on the heading itself, not a sibling element: nothing to mistake for a kicker, nothing to delete later.

*Mobile:* already single-column; nothing collapses.

## Knobs

Vary at least one knob vs the last logged use of this archetype (gate 32):

- Ordinal form: `decimal-leading-zero` · `upper-roman` · `lower-alpha` · none (a rule instead)
- Ordinal position: above the heading · hung in the margin (`position: absolute` off the list) · inline before the first word
- Ordinal weight: muted mono · accent-tick · display-scale numeral (then read hp4's discipline first)

## Mobile collapse

- **Below 60rem:** unchanged (already a single-column stack). A margin-hung ordinal returns to flow above the heading.
- **Below 40rem:** unchanged
