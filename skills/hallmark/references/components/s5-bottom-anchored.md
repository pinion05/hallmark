### S5 · Bottom-anchored
The label or heading sits *below* the section's content. Inverts hierarchy.
*Use when:* the content is the primary act and the label is a footer to it. Legal under gate 54 precisely because it comes *after*: order is the discriminator between a caption and a kicker.
*Don't confuse with:* S1 Ordinal by structure (which carries the sequence in the markup).

```html
<section>
  <div class="content">…</div>
  <p class="section__colophon">— end of 02</p>
</section>
```

---

## Knobs

Vary at least one knob vs the last logged use of this archetype (gate 32):

- Label form: `— end of 02` · rule + label · label only
- Alignment: left · right-flush

## Mobile collapse

- **Below 60rem:** unchanged; long labels wrap
- **Below 40rem:** label font-size steps down
