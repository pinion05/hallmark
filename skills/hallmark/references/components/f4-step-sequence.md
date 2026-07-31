### F4 · Step sequence
Numbered stages (`1.0 → 2.0 → 3.0`) flow vertically. Each stage has a heading, a paragraph, sometimes a small visual.
*Use when:* the product is a workflow, not a single moment.
*Don't confuse with:* F2 Sticky-scroll (which doesn't number stages).

The stage numbers come from `counter()`, never from a typed `<span>` beside the heading: a hand-typed `1.0` above an `<h3>` is an eyebrow at card scale (gate 54), and it makes screen readers announce the number twice.

```html
<ol class="steps">
  <li><h3>Intake.</h3><p>…</p></li>
  <li><h3>Plan.</h3><p>…</p></li>
</ol>
```
```css
.steps { list-style: none; counter-reset: stage; padding: 0; }
.steps > li { counter-increment: stage; }
.steps > li > h3::before {
  content: counter(stage) ".0";
  font-family: var(--font-mono); color: var(--color-muted);
  margin-inline-end: var(--space-2xs);
}
```

## Knobs

Vary at least one knob vs the last logged use of this archetype (gate 32):

- Numbering: `upper-roman` · `decimal-leading-zero` · `counter(stage) ".0"`
- Layout: vertical stack · horizontal flow · diagonal
- Connector: line · arrow · none

## Mobile collapse

- **Below 60rem:** numbering moves from left margin to inline-with-step
- **Below 40rem:** step containers tighten; connector lines drop
