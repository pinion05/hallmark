# Opening a section

Reaching for a small caps label above the heading is the reflex, and the reflex is the tell. Gate 54
bans it outright, in every geometry. This file is what you reach for instead: a menu, not a
checklist. Take one, change it, or invent a thirteenth.

## The one question

*What does the reader not yet know?*

If the answer is "nothing, the heading already says it", open with nothing. That is the default and
it is not a failure of imagination.

If there IS something, it rides on one of three passports. Small type before a heading survives only
when it carries a **fact**, a **destination**, or an **identifier** the reader would otherwise lack.
A line that renames the heading below it carries none of the three. The full ban and its carve-outs
live in [`slop-test.md`](slop-test.md) § 54; this file is the other half of that gate, the part that
says what to do instead.

## Twelve ways in

Most of these already exist somewhere in the skill. Follow the link for the working code rather than
rebuilding it here.

**1. Nothing.** The heading and the space around it. A generous margin above, a heading that starts
flush, and the section has announced itself. The most under-used opening in the catalog, and the
right default when you are not sure. See [`components/s2-hanging.md`](components/s2-hanging.md),
which is already label-free.

**2. Let the heading do the announcing.** Move the subject into the first two words. `Features` above
`Everything you need` becomes `Six things it does that nothing else does`. This is a copy move, not a
layout move, and it is usually the best one: the label existed because the heading was vague. See
[`copy.md`](copy.md).

**3. A lead-in inside the paragraph.** The orienting words open the first sentence in small caps or
a heavier weight and never leave the prose flow. Book chapters have done this for four hundred
years. See [`components/s4-inline-no-break.md`](components/s4-inline-no-break.md), which is exactly
this pattern already written.

**4. A drop cap.** The scale change is the marker; no words are spent on it. Working CSS ships in
[`themes/newsprint.md`](themes/newsprint.md), [`themes/specimen.md`](themes/specimen.md), and
[`themes/atelier.md`](themes/atelier.md).

**5. A rule that is doing more than ruling.** Divider language carries the break on its own: a
hairline, a fleuron, a double rule, a colour edge, or pure gap. The full vocabulary is axis 3 in
[`structure.md`](structure.md) § Divider language. Pick one and let it be the only thing that
separates sections all the way down the page, so the reader learns it.

**6. A numeral at graphic scale.** Not a caps label with a number in it: an object, 8 to 18rem,
unmistakably part of the composition. [`enrichment/hp4-decorative-numeral.md`](enrichment/hp4-decorative-numeral.md)
has the clamp and the discipline, and the discipline is the point: the numeral must carry
information (issue, year, version, chapter). If you cannot name what the number is, drop it.

**7. A real `<ol>`.** When the sequence is genuine, let the list element say so and let `counter()`
draw the figures. Every hand-typed `01` disappears, the semantics get better, and screen readers
stop hearing the number twice. See [`components/f4-step-sequence.md`](components/f4-step-sequence.md).

**8. A caption below.** The identifying line sits under the content instead of over it, which
inverts the hierarchy and reads as a plate in a catalogue rather than a slide title. See
[`components/s5-bottom-anchored.md`](components/s5-bottom-anchored.md).

**9. Marginalia.** The orienting line lives in the outer margin beside the *body*, not above the
heading. It orients without announcing, and it gives a wide page something to do with its edge. See
[`components/t1-pull-quote-with-marginalia.md`](components/t1-pull-quote-with-marginalia.md) and
axis 2 in [`structure.md`](structure.md).

**10. A change of paper.** The band's surface changes and that edge is the section break. No words at
all. Costs one token and reads at a glance from across the room. See [`color.md`](color.md) and the
bleed-colour block in [`structure.md`](structure.md) axis 3.

**11. A running head or folio.** A mark at the page edge that persists as you scroll: a vertical
rail, a rotated spine, a sticky folio. Legal because it is continuous chrome rather than a label
glued to one heading. See [`enrichment/hp1-vertical-rail-title.md`](enrichment/hp1-vertical-rail-title.md).

**12. Persistence instead of announcement.** The heading itself stays in view while its content
scrolls beneath, so nothing has to introduce it. See
[`components/s3-sticky-pinned.md`](components/s3-sticky-pinned.md).

## Combining, and breaking

Two moves can share a section: a change of paper AND a drop cap is one idea, not two. Three is
usually panic.

One page should not use all twelve. Pick one opening and repeat it, or pick two and alternate; the
repetition is what teaches the reader to read the page. Varying the opening every section is its own
kind of noise.

Rotate against `.hallmark/log.json` the way you rotate everything else, so the same opening does not
become your signature across three builds.

If you invent a thirteenth and it passes the three-passport test, use it. Say what it was in the
stamp so the next run knows.

## Still legal

None of these is an eyebrow, because each names a thing that is *present* rather than announcing a
thing that has not happened yet:

- a `<figcaption>` inside a `<figure>`
- a `<th>` column header, a `<label for>` on a field, a `<legend>`
- a nav item, a tab label
- a byline, or a dateline wrapping `<time datetime>`
- a unit label sitting *after* the figure it labels
- a code block's real filename
- a status chip carrying live data (`role="status"`, `aria-live`)
- a linked announcement chip that goes somewhere real (one per page, and `href="#"` does not count)
- a plan or tier name, though it usually wants to *be* the heading rather than sit above one

## Going stale

Every move here becomes the next eyebrow if it gets stamped on every section. The caps that keep
them honest:

| Move | Cap | Why |
| --- | --- | --- |
| Numeral at graphic scale | one per page, and only when the number is real | the highest-risk move in the file: a 22 in the corner that means nothing is decoration, and gate 45 will say so |
| Drop cap | one per page, first paragraph only | more than one and it reads as newsprint cosplay |
| Lead-in inside the paragraph | it stays inside the paragraph | pull it onto its own line and you have rebuilt the eyebrow |
| Running head or rail | only when there is a real running head to show | rotated type with nothing to say is a portfolio tic |
| Ornamental rules and fleurons | two per page | past that they are wallpaper |
| Nothing at all | no cap | it is the default; it never goes stale |
