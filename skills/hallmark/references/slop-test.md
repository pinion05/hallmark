# Slop test — 58 gates, tiered, + pre-emit self-critique

Run this list before handing back any output. Update the Step 5 preview block's `Slop test` row to reflect the actual outcome of this run.

Thirty-four of the fifty-eight gates carry a **Floor** clause and nothing ships through them. Eighteen are **Reflex** only: the defaults a language model falls into, which a build with an argument may waive on the record, with no cap on how many. The last six never block a ship (four **Finish**, two bookkeeping). The tiers, the two doors into the Floor, and the grades are below.

Some gates are **universal** (apply to every genre); some are **genre-scoped** (apply only when the active genre is editorial, atmospheric, modern-minimal, or playful). Genre overrides are noted inline. Where a gate has *no* genre note, treat it as universal.

---

## Component sweep

When the artifact is a single component (one nav, one footer, one card, one section), sweep **the Floor tier minus the page-only gates**. That is a rule, not a hand-picked list, so it cannot drift: sloplint computes the same set for `--scope component`.

It comes out at the familiar core — banned-font pairing, gradients, pure black/white, transition hygiene, box-model animation, focus rings, neutral chroma, interaction states, reduced motion, icon tells, italic emphasis in headings, input states, both contrast gates, token discipline — and skips the ones that need a whole page to mean anything (macrostructure, nav and footer fingerprints, hero fit, mobile page gates).

Any artifact that is a page, including fast-mode pages, runs all 58. The component sweep cuts narration and check time for single components, never page guarantees. One exception: unpicked `variants` drafts run the Floor sweep plus sloplint; the promoted winner runs all 58 (see [`verbs/variants.md`](verbs/variants.md)).

---

## Tiers

Every gate carries a **tier**, which says how hard it binds. The question that sorts them:

> *Can you name a shipped, admired page that breaks this rule on purpose and is better for it?*

- **[Floor]** No. Absolute, and **never waivable**. Bans and correctness: the things no good designer does on purpose. Thirty-four gates carry a Floor clause (nineteen whole, fifteen as the Floor half of a split).
- **[Reflex]** Yes, and the break needs an argument. These are the defaults a language model falls into, not laws. A build with a reason may **waive** one on the record (see § Waivers). Eighteen gates are Reflex-only, plus the Reflex half of every split.
- **[Finish]** Yes, and the break is invisible at arm's length. Craft detail. Reported, never blocks a ship. Four gates, plus 39c and the nine F-checks.
- **[a11y]** A tag, not a tier, on the nine gates that are also an access requirement. It exists so `audit` can group them and so no later pass quietly re-tiers them.
- **[Ledger]** A tag on the two gates that are skill bookkeeping rather than design quality (32, 57). They report at grade `NOTE`, never set the exit code, and never count toward the Floor verdict. A page is not slop for repeating last month's archetype; it is just a repeat.

### The second door into the Floor

That question sorts design rules, and Hallmark is not a general design authority: it is an anti-slop skill for language models. So the Floor has a second, narrower admission criterion, and a gate needs only one of the two:

> **1.** No admired page breaks it on purpose. (Correctness, access, honesty, and the bans.)
> **2. House rule.** Admired pages *do* break it, but it is a reflex so reliably machine-made that Hallmark chooses to be stricter than the field, and says so out loud.

Door 2 is deliberately hard to walk through, because every rule that uses it is the skill overruling good designers. The membership is small, explicit, and listed here in full:

| Gate | House rule | Why it is stricter than the field |
| --- | --- | --- |
| **54** | No eyebrow, kicker, or overline, in any geometry | Plenty of admired pages ship one. A language model ships one on *every section*, unprompted, and it is the single most reliable tell in the set. Removing the option outright is worth more than the pattern is. |

Anything added to this table has to name the reflex it is displacing and accept that it is a house preference, not a fact about design. Nothing else gets in through door 2.

### Grades

The tier says whether you are allowed to disagree. The **grade** says what the checker found and what it costs:

| Grade | Meaning |
| --- | --- |
| `FAIL` | A Floor finding. Nothing ships. Not waivable. |
| `REFLEX` | An unanswered Reflex finding. Also blocks, but it is not a Floor failure: fix it or waive it on the record. |
| `WAIVED` | A Reflex finding the build waived, guard satisfied. Visible, never silent. |
| `WARN` | The checker suspects but cannot prove; confirm or dismiss by judgment. |
| `ANSWERED` | A Finish finding the build recorded an answer for. |
| `NOTE` | Bookkeeping. Never blocks, never counts toward the verdict. |

`FAIL` and `REFLEX` are reported separately on purpose, so **"0 FAIL" stays a true statement about the floor** even while a build still owes an argument somewhere above it.

**Split gates keep their number and gain two clauses** (`7a` Floor, `7b` Reflex). That is how a gate can hold a real floor without also enforcing a taste threshold, and it is why the count is still 58.

The tier table here is the single source of truth. `anti-patterns.md`'s groups and `sloplint.mjs`'s `TIERS` map are derived from it; when they disagree, this file wins.

## Gate classes

Every gate below also carries a class tag, which says **who can check it**:

- **[M]** Mechanical: checked by `scripts/sloplint.mjs`. Fix FAILs before judging; WARNs need a human or model to confirm.
- **[M/R]** Static partial: sloplint covers the code-level half; the optional `--render` tier completes it.
- **[R/J]** Render-verifiable: confirm on the rendered page when rendering is available, else judge.
- **[J]** Judged: the model verifies these at Step 7; no script can.

Tier and class are independent: a Floor gate can emit `WARN` when the script suspects but cannot prove, and a Reflex gate emits `REFLEX` when it is certain. Class says who can check it, grade says what was found, tier says whether you are allowed to disagree.

When sloplint has run, walk the J and R/J gates, plus the judged halves of M/R gates when --render did not run, and confirm or dismiss every WARN; re-litigating M gates the script already passed is wasted judgment. Verification is budgeted: one batched inspection round, one fix batch, at most one confirm round, then stop.

## Waivers

A **Reflex** gate may be waived by declaring it in the CSS stamp, below the pre-emit critique line:

```css
/* Hallmark · waive 47b · one frame, real Warp screenshot inside · the terminal is the product being sold */
```

Three fields, in order: **the gate**, **the guard evidence**, **the reason**. The middle field is the point. sloplint does not take your word for it, it re-derives the guard itself; writing it out is what turns a shrug into a decision, and a build that cannot state its guard usually finds the guard does not hold.

The rules:

- **Floor is never waivable.** Naming one is rejected and the gate fires normally.
- **One per gate.** A second waiver on the same gate is rejected.
- **No hard cap.** A genuinely expressive page can overrule four or five reflexes and still be right: a colour-field poster on a pure-black stage, achromatic by intent, long measure, one display face doing everything. Blocking it at an arbitrary count would be exactly the restraint this tier exists to remove. Past three, the build gets a `NOTE` saying what it now is: **a house style, not a set of exceptions**, which belongs in a `design.md` so later pages inherit it instead of re-arguing it.
- **The guard is what keeps this honest**, not a count. Guards are mechanical preconditions the linter re-derives; on the gates most tempting to waive (23, 37, 42, 43, 47, 7) the guard is exactly the thing a lazy build will not have done.
- **The reason has to be about this page.** Under 24 characters, or boilerplate once filler and stock phrases are stripped, or shared word-for-word with another waiver, and it is rejected. A waiver that does not parse is reported as malformed rather than silently ignored.
- **Waivers are logged.** They append to `.hallmark/log.json`. The same gate waived on three consecutive builds is not an exception any more.

An honoured waiver reports at grade `WAIVED` and is visible in the output. Silent waiving would be free waiving.

**Answering a Finish finding.** Finish findings are read and answered, and the answer has a record form too, so the next run can parse it instead of finding freeform prose in a comment:

```css
/* Hallmark · answered F3 · the display head is one word and cannot wrap, so balance has nothing to balance */
```

Two fields: the check, and why it does not apply here. Same reason-quality rules. Only Finish findings are answered; a Reflex finding is waived and a Floor finding is fixed.

---

## Pre-emit self-critique (six axes)

Run this **before** the gate list, not after. Score the planned output 1–5 on each axis. Anything **< 3 on any axis triggers a revision pass** before the gate sweep — don't bring known weakness into a fifty-eight-gate review.

Two passes is normal. Three is a sign the brief is wrong, not the design — re-read the brief.

| # | Axis | What you're scoring (what a 3 looks like vs a 5) |
|---|---|---|
| **P** | **Philosophy** | Is there a clear *why* — a position the page is taking? A 3 has a tone; a 5 has an argument a reader could disagree with. |
| **H** | **Hierarchy** | Can a reader tell, in 2 seconds, what's primary, secondary, tertiary? A 3 needs a second look; a 5 survives the squint test. |
| **E** | **Execution** | Are the details (rule weight, accent footprint, text-wrap, focus rings, contrast) in spec? A 3 has two or three loose details; a 5 would pass the gates on the first sweep. |
| **S** | **Specificity** | Does this look like *this brief*? A 3 fits the category; a 5 could belong to no other product. |
| **R** | **Restraint** | Is everything earning its place? A 3 keeps one decoration too many; a 5 lost something you liked. |
| **V** | **Variety** | Structural distance from the log's `fingerprint` entries, never visual distance — colour-swaps don't count. A 3 differs on three of the six axes; a 5 shares almost nothing with the last three runs. |

Record the six scores in a one-line stamp comment directly below the macrostructure stamp (which stays line 1, per gate 20): `/* Hallmark · pre-emit critique: P5 H4 E5 S3 R5 V4 · weakest: S - hero could be any dev tool; added the ledger-rule motif */`.

**Score honestly.** Where an axis lands below 5, name it in the `weakest:` clause with the fix taken. Straight 5s are permitted, but then the clause names what was **cut** to earn them (`weakest: none - dropped the stat row; the quote was doing that work already`). Restraint is evidence; a manufactured flaw is not. Never invent a weakness to satisfy the format. Future runs read this clause, so it should be true.

---

## Visual

1. **[Reflex]** **[M]** Is the display font Inter, Roboto, Open Sans, Poppins, Lato, or a system default?
2. **[Floor]** **[M]** **2a. The purple gradient.** Is there a purple-to-blue or cyan-to-magenta gradient anywhere, including a `background-clip: text` headline? That hue pair is the tell; it is the single most-trained-on background in the set. *Genre note: atmospheric allows radial gradients on background only, never on text or pill buttons.*
   **[Reflex]** **[M]** **2b. Gradient text in any other hue.** A `background-clip: text` fill outside that family. *Waivable* when the gradient is the brand's own ramp. *Guard:* a single-hue ramp (both stops within 40° of each other), both stops bound to `--color-*` tokens, and contrast gates 40-41 passing against the effective background.
3. **[Reflex]** **[M]** Is there a 3-equal-column card grid with icon-above-heading tiles?
4. **[Floor]** **[M]** Is any card nested inside another card?
5. **[Reflex]** **[M]** Is any card using a thick coloured left/right side-stripe border?
6. **[Floor]** **[M]** **6a. Hero viewport unit.** Does the hero size itself with `vh` rather than `dvh` or `svh`? `vh` ignores mobile browser chrome, so the hero overshoots on every phone and the fold lands mid-sentence. Not a taste call, a unit bug.
   **[Reflex]** **[J]** **6b. Hero shape.** Does the hero run 92dvh or taller outside a stamped **Poster** posture, OR do the title, lede, CTA, and any mark all sit on one centred vertical axis? Prefer at most two centred elements, with one breaking alignment (margin-aligned, right-flush, numeral-anchored). *Waivable:* a hero built around a single centred object is a composition, not a default, and a canvas hero where the fold IS the artwork legitimately fills the screen. *Guard:* the stamp declares a `hero:` posture and gate 44b (fold fit) passes. *Genre note: atmospheric and playful reach the centred canvas often enough that it is their normal answer.*
7. **[Floor]** **[M]** **7a. Untokenised absolute.** Does `#000`, `#fff`, `rgb(0,0,0)`, `oklch(0% …)` or `oklch(100% …)` appear as a colour value **outside** the `:root` / theme token block? An improvised absolute is the reflex; a declared one is a decision. (Overlaps gate 48 on purpose: this is the half that is never waivable.)
   **[Reflex]** **[M]** **7b. Absolute base surface.** Does `--color-paper`, `--color-ink`, or any surface token resolve to a pure absolute? *Waivable* when the flat extreme is the brand: the pure-black stage, an Apple-style product section, a gallery-white specimen. *Guard:* the stamp carries `surface: absolute` and gates 40-41 pass on every pairing touching that surface. Unguarded, tint every neutral toward the anchor hue (minimum 0.005 chroma). *Genre note: modern-minimal reaches pure `#fff` paper as its normal answer.*

## Structural

8. **[Reflex]** **[J]** Does the page reuse a structure it shouldn't — either the generic AI template (Hero → 3 features → CTA → footer), **or** the *same* structural fingerprint / macrostructure as a previous Hallmark output in this project? Read the file system: if `.hallmark/log.json` entries or a CSS macrostructure stamp exist, this build's macrostructure must differ from the last three (SKILL.md § Rotation).
9. **[Reflex]** **[J]** Are sections separated only by equal whitespace, with no rule, no ornament, no colour shift — every section identical in rhythm? The fix vocabulary is the escalation ladder in layout-and-space.md § Surfaces: different regions climb different rungs (whitespace, hairline, tinted well, card).

## Microinteractions

10. **[Floor]** **[M]** Is `transition-all` (or `transition: all`) used anywhere? (Specify the properties.)
11. **[Reflex]** **[M]** Is `hover:scale-105` (or any uniform hover-scale) applied across multiple unrelated elements?
12. **[Reflex]** **[M]** Are bouncy / overshoot easings (`cubic-bezier(0.34, 1.56, ...)`, etc.) used on UI state changes — buttons, modals, tooltips? (Reserve overshoots for physical interactions only.)
13. **[Reflex]** **[J]** Does any element have *more than one* hover effect at the same time (translate + scale + shadow + colour + rotate)?
14. **[Floor]** **[M]** **14a. Animating layout.** Are you animating `width`, `height`, `top`, or `left`? These run on the layout thread and jank on every device.
    **[Reflex]** **[M]** **14b. Animating box spacing.** Are you transitioning `margin` or `padding`? *Waivable* for a deliberate morph where the box's total height is invariant: the scroll-morphing nav is the canonical case. *Guard:* Law 1 of [`floating-nav.md`](floating-nav.md) holds, so the transition list also carries the compensating property and the element's outer height does not change.
15. **[Floor · a11y]** **[M]** Does the focus ring transition into existence (fade in)? (Focus rings must appear instantly — keyboard users need an immediate indicator.)
16. **[Reflex]** **[J]** Is there a celebratory success toast for an action whose effect the user can already see? (Silent success is taste; toasts are for failures and invisible effects.)
17. **[Floor · a11y]** **[M]** Are tooltip hover-delay and focus-delay equal? (Hover should delay 800–1000 ms; focus should be 0 ms.)
18. **[Floor · a11y]** **[M]** Is auto-rotating content (carousel, banner, stats) lacking pause-on-hover-and-focus? (WCAG 2.2.2.)
19. **[Floor]** **[M]** Is there a placeholder name "Jane Doe / John Smith" or a startup cliché (Acme, Nexus, Seamless, Unleash)?

## Variety

20. **[Floor]** **[M]** Is the `/* Hallmark · macrostructure: <name> · ... */` stamp missing from the top of the CSS? (It must be present.)
21. **[Reflex]** **[J]** Did I default to the **Specimen** macrostructure (numbered left-margin labels + huge serif + asymmetric spans + typographic-only CTA) when the brief did not explicitly call for editorial / foundry / specimen energy? (Specimen fall-through is banned.) *Genre note: atmospheric, modern-minimal, and playful never default to Specimen — only editorial does, and only when the brief signals it.*

## Implementation gates

22. **[Reflex]** **[M]** Does any neutral / surface colour have `oklch(... 0 ...)` (zero chroma)? Pure greys read as flat. Tint every neutral toward the anchor hue — minimum 0.005 chroma. *Genre note: modern-minimal allows zero-chroma neutrals (the monochrome Stripe / ElevenLabs school).*
23. **[Reflex]** **[M/R]** Does the accent colour cover more than ~5 % of any single viewport (count by area: solid fills, large headings in accent, full-bleed accent backgrounds)? If yes, retreat — accent is for emphasis, not for filling. *Genre note: atmospheric allows accent-tinted radial blooms covering up to ~20 % of the canvas, since the bloom is the design.* *Posture note: a colour serving as a declared surface under a stated colour posture (`--color-paper*`, `--color-field` on Committed / Drenched custom runs, and every dark theme already) is not accent footprint; the accent token proper stays <= 5%, contrast gates 40-41 bind unchanged on the coloured surface, and undeclared accent sprawl still fails. See [`color.md`](color.md) § Colour postures.* *Mechanics: sloplint's static half WARNs on accent tokens painting viewport-scale rules or display-size text (posture-aware via the stamp); `--render` measures the painted area on the 1280x800 fold and FAILs past 8% (atmospheric: 30%).*
24. **[Floor]** **[M]** **24a. Improvised spacing.** Is any `padding` / `margin` / `gap` a raw length where a named `--space-*` token already exists for that value? Spacing goes through tokens for the same reason colour does (gate 48).
    **[Reflex]** **[M]** **24b. Off-scale values.** Is any spacing value off the named scale in [`layout-and-space.md`](layout-and-space.md) § Spacing? (That file owns the scale; this gate does not restate it.) *Waivable for optical tuning:* a 2px nudge that lands a cap-height on a rule is craft. *Guard:* at most **three** off-scale values per file, each on an optical-alignment property (a nudge beside text, an icon offset, a border-compensating inset). A dozen `17px` values is improvisation, and the guard fails.
25. **[Reflex]** **[M]** Is any prose container's `max-width` outside the 45–75 ch range? Measure must read; under 45 ch is choppy, over 75 ch loses the eye.
26. **[Floor · a11y]** **[M]** **26a. Missing `:focus-visible`.** Does any interactive element lack a `:focus-visible` style? A keyboard user cannot see where they are. Never waivable.
    **[Reflex]** **[M]** **26b. Missing `:active` or `:disabled`.** Eight states is the rule; these two are the ones a build most often skips. *Waivable* when the element genuinely has no disabled state to show. *Guard:* it is not a form control and no `aria-disabled` appears anywhere in the artifact.
27. **[Floor · a11y]** **[M]** Is there any `transform` / `animation` keyframe that is NOT covered by a `@media (prefers-reduced-motion: reduce)` fallback? Every motion gets a reduced-motion alternative.

## Hero enrichment gates

(When the page carries enrichment — see [`hero-enrichment.md`](hero-enrichment.md). Exception: gate 30 is about icon libraries and emoji, not enrichment; it applies to every page and component regardless.)

28. **[Floor]** **[M]** **28a. Sound-on autoplay, lazy LCP.** Does a demo video autoplay without `muted`, or does `loading="lazy"` sit on the LCP element? One ambushes the visitor, the other guarantees a slow paint.
    **[Reflex]** **[M]** **28b. Missing poster or priority hint.** Does the video lack a `poster` or `fetchpriority="high"`? *Waivable* when the video is below the fold and demonstrably not the LCP element. *Guard:* the element appears after the first 800px of markup and no other candidate LCP is deferred.
29. **[Reflex]** **[J]** If the page has an abstract background, is it more than one accent colour, more than ~5 % footprint, or animating mesh-gradient on the whole page? (Aurora blobs and mesh-on-everything fail this gate.) *Genre note: atmospheric allows up to two warm-toned radial blooms covering ~20–30 % of the canvas, fixed-attached, no animation.*
30. **[Floor]** **[M]** **30a. Emoji as an icon.** Does an emoji glyph (✨ 🚀 ⚡ 🔥 🎯 ✅) stand in as a feature-card, value-prop, step, or pricing-tier icon? The single most legible "a model made this" signal on the page. (Emoji used as *content*, in a quote or a body sentence, is not this gate.)
    **[Reflex]** **[M]** **30b. Mixed icon libraries.** Are two or more icon sets on one page (Material + Heroicons + Lucide)? *Waivable* when the second set is a brand or platform mark that has no equivalent in the primary set (payment marks, app-store badges, social glyphs). *Guard:* the second set appears in at most two slots and never inside the same component as the first. Otherwise pick one library (see [assets.md](assets.md)), build a custom SVG, or drop the icon and lead with typography.
31. **[Finish]** **[J]** If the page has illustration, did I default to a Lottie library when a hand-built SVG or pure-CSS shape would have worked? (Lottie is last resort, not the default.)

## Diversification gates

(Cross-reference `.hallmark/log.json` when present.)

32. **[Floor · Ledger]** **[J]** If I used the same archetype as a previous Hallmark output (per `.hallmark/log.json` or the latest macrostructure stamp), did I pick at least one different *variation knob*? Two Bento Grids with `tiles=6, spans=irregular, accent=corner-only` are the same Bento — the within-archetype knobs in [`component-cookbook.md`](component-cookbook.md) exist precisely to prevent that. State the knob deltas in the stamp, and check the log's `fingerprint` field: sharing more than three of the six structural axes with a logged entry is the same failure at page scale.
33. **[Floor · a11y]** **[M]** Does any visual-only `<svg>`, custom-art `<div>`, `<canvas>`, or decorative figure lack `aria-label` or `aria-hidden="true"`? Hand-built CSS art and SVG illustrations need an accessible name *or* an explicit hide. Skipping this is the new accessibility tell.

## Layout-safety gates

(The page must survive every viewport.)

34. **[Floor]** **[M/R]** Does the page horizontally scroll on any viewport between 320 px and 1920 px? Open the rendered page; drag the dev-tools width slider across that range. If a horizontal scrollbar appears at any width, fail. The required fix is `overflow-x: clip` on **both** `html` and `body` — use `clip`, not `hidden` (`clip` preserves `position: sticky` and `position: fixed` on descendants). This is a hard requirement on every emitted page, not only when scroll is observed. (Cross-reference: [`layout-and-space.md` § Page-edge clipping](layout-and-space.md).)
35. **[Finish]** **[J]** For every decorative effect on text — highlighter `<mark>` / `<em>` band / accent stroke / underline — did I visually confirm the position and size? A highlighter band must sit behind the x-height (`linear-gradient(180deg, transparent ~38%, accent ~38%, accent ~92%, transparent ~92%)`), **not** at the baseline (which reads as a fat underline). Underlines must be 1–2 px and offset 1–2 px from the baseline, never 5+ px. Decorative strokes must not exceed 5 % of the viewport (gate 23). The check is *visual*: imagine the rendered output and confirm the band lands in the right vertical zone. No render available: verify the numbers from code instead; the highlighter band's gradient stops sit at ~38% and ~92% of the line box (the x-height zone, never the baseline), underlines are `text-decoration-thickness: 1-2px` with `text-underline-offset: 1-2px`, and decorative strokes stay under 5% of viewport area.
36. **[Finish]** **[J]** Are interactive bars (nav, toolbar, command bar, hero CTA row, footer link strip) explicitly vertically centered? Default flex layouts inherit `align-items: stretch`, which makes a button taller than its sibling text and breaks the visual baseline. Every flex row mixing height-different elements (button + text, icon + text, mark + body) must declare `align-items: center` and `line-height: 1` on the items with intrinsic height. Inheriting `line-height: 1.55` from `html` fights the row's vertical rhythm.

## Typography discipline gates

(Three faces is the ceiling. See [`typography.md` § The 2+1 rule](typography.md).)

37. **[Reflex]** **[M]** Does the page use **more than three** distinct `font-family` families? Count: `--font-display`, `--font-body`, and at most one outlier (`--font-outlier` for wordmark / hero stat / pull quote). A fourth family on the page — e.g. body + display + mono in code blocks + a separate display for the hero — is slop. Same family at different weights counts as one family. Mono counts as a family if used in any non-code context (captions, labels, numerals). If you find four, drop one back to the body or display face.
38. **[Finish]** **[J]** Is the outlier face carrying **more than one role**? The outlier is a register, not a surface: it tags one kind of content (the brand, the headline figure, the label voice) and every instance of that kind uses it. A second *kind* means it has become a third body font. The count of instances is not the test; the count of roles is. See [`typography.md`](typography.md) § The 2+1 rule.
38a. **[Floor]** **[M]** **38a-i. Italic emphasis word inside a heading.** Is `font-style: italic`, `<em>`, or `<i>` applied to **part** of a heading whose surrounding type is roman? Fail, always. The italicised emphasis-word inside an upright headline is a top AI tell and has no admired counterexample. Emphasis comes from weight, accent colour, a drawn underline, or a line break.
     **[Reflex]** **[M]** **38a-ii. Italic display face.** Is the display or heading face italic as a **system** — every head at that level set in italic, or a face that is italic by design? *Waivable when the italic IS the type system, not a flourish* (The New Yorker's Irvin, Vogue's Didone italics, Aesop's editorial heads). *Guard, all three:* the italic is declared on `--font-display` or a dedicated `--font-display-italic` token; it applies to **every** element at that heading level rather than one-off; and the face ships a true italic with `font-synthesis: none` declared, never a synthesised oblique. One italic head among roman siblings is 38a-i, not this.

## Input-state gate

(Inputs are where almost-right UIs lose. See [`interaction-and-states.md` § Input field states](interaction-and-states.md).)

39. **[Floor · a11y]** **[M]** **39a. Input states that break.** Fail on **any** of these four:
    - **Border-width shifts between states** — whatever the resting width is (1px on most themes, 2px where the theme's material is a heavier rule), default / hover / focus / error all keep it. State changes go to `background-color`, `outline`, `box-shadow`, or `border-color`, never to `border-width`, because changing it shifts layout. The constant is the constancy, not the number.
    - **Focus ring built from `border` instead of `outline`** — must be `outline: 2px solid var(--color-focus)` with `outline-offset: 1px`; reserve `outline: 2px solid transparent` at rest to prevent geometry shift on activate.
    - **Input height ≠ adjacent button height** on the same form. Whatever the base height is, the input and the button beside it share it; a 38px input next to a 44px button is the most common form-tuning slop.
    - **Disabled signalled by `opacity` alone** — disabled needs three channels: `opacity: 0.55` AND `cursor: not-allowed` AND the native `disabled` attribute (or `aria-disabled="true"`).

    **[Reflex]** **[M]** **39b. Control height.** Marketing-page controls run 44-52px visual height. App UI and component scope may run 32-40px with the hit-target expansion recipe from [`finish.md`](finish.md) § Control finish (the `::before` inset trick keeps the logical target at 44px; the coarse-pointer 48px rule stands). *This is not a waiver, it is the number:* `finish.md` was always right and this gate used to contradict it. A dense dashboard at 36px passes.

    **[Finish]** **[M]** **39c. Helper-text slot collapses when empty** — reserve `min-height: 1lh` even with no helper or error, so an appearing error doesn't push the page down.

## Contrast & readability

Universal — apply to every genre. These gates catch the real-world failures the user flagged: black-text-on-black-button, dark sections with unreadable text, ink-on-ink slop where the LLM forgot to flip the text colour after flipping the surface.

Contrast computation: for every `(color, background-color)` pair on the page, run **APCA Lc** OR **WCAG 2.1 ratio**. OKLCH lightness is a fast pre-check — if `|L_text − L_bg| < 50 %`, the pair likely fails 4.5:1 — confirm with a full calculation.

40. **[Floor · a11y]** **[M/R]** **Contrast thresholds.** Does any text, icon, or `:focus-visible` ring fail its threshold against its *computed* background? Pair every `color` declaration with its effective `background-color` and verify. Thresholds: **body text** (under 24 px regular OR under 18 px bold) needs **WCAG 4.5:1 / APCA Lc ≥ 60**; **large text** (≥ 24 px regular / ≥ 18 px bold), **icons**, and **focus rings** need **WCAG 3:1 / APCA Lc ≥ 45**. The most-missed cases: text inside a card that inherits `color` but the card switched to `background: var(--color-paper-2)`; muted text (`var(--color-muted)`) on `var(--color-paper-3)`; a focus ring whose `--color-focus` clears 3:1 against the element but not the page surface.

41. **[Floor · a11y]** **[M/R]** **The contrast failures that ship most often.** Fail on **any**:
    - **Button text ≈ button fill** — if the computed text colour and fill are within **5 % lightness AND 0.05 chroma** in OKLCH, fail. This catches the black-on-black bug (`color: var(--color-ink)` on `background: var(--color-ink)` — the model forgot `--color-accent-ink` / `--color-paper`).
    - **`--color-accent-ink` missing or unused** — whenever `--color-accent` fills a surface that carries text, `--color-accent-ink` must be defined, verify ≥ APCA Lc 60 / WCAG 4.5:1 against `--color-accent`, and be applied as the `color` on that fill.
    - **Dark-section ink-on-ink** — any section / panel whose `background-color` is OKLCH lightness < 50 % must also swap its text colour (typically to `--color-paper`) and ensure nested children inherit. A class that sets `background: <dark>` must set `color: <light>` in the same rule (or be wrapped in a parent that does). Common failure: a `.vs__col:first-child` painted with accent / ink but the inner panels still using default ink-coloured text.

The CSS stamp at Step 6 should record the result: `· contrast: pass (40–41)` if both gates pass, or `· contrast: FAIL gates <list>` if any are open. Fix before shipping.

## Nav · footer · hero structural slop

Universal — apply to every genre. These gates catch the most-recognised AI fingerprints in nav, footer, and hero shape. They sit alongside the structural-fingerprint gate (gate 8): gate 8 catches the *page* fingerprint; 42–45 catch the *chrome* fingerprints that sit on top of it.

42. **[Reflex]** **[M]** **Nav fingerprint, undeclared.** Is the page's `<nav>` (or top-of-page `<header role="banner">`) the AI default — wordmark-left + 4-5 inline links + button-right at full width + 1px hairline bottom + plain background — **without the stamp naming it**? The default nav is a legitimate answer for a product with real destinations; most of the industry converged on it because it works. Arriving there without deciding is the tell. *Passing:* the stamp's `nav:` field names the shipped pattern (`nav: N1a`), or the nav is any other shape. [`component-cookbook.md`](component-cookbook.md) § Navigation is a place to look for alternatives, not a rotation you owe.

43. **[Reflex]** **[M]** **Footer fingerprint, undeclared.** Is the `<footer>` the AI default — four link columns (Product / Company / Resources / Legal) + social-icon row + tiny copyright + 1px hairline top-border + neutral grey — **without the stamp naming it**? Four columns is an information-architecture solution, and a hub with forty destinations has earned it. *Passing:* the stamp's `footer:` field names the shipped pattern (`footer: Ft3`), or the footer is any other shape. [`component-cookbook.md`](component-cookbook.md) § Footers is a place to look, not an obligation.

44. **[Reflex]** **[R/J]** **44a. Posture envelope.** The min-height bands in the posture table are guidance with no gate behind them: when a posture's content genuinely needs more room (a Banner carrying a signup form, say), overshoot the band and say so in the stamp. What this gate actually tests is the padding ratio. Does the hero obey its declared posture's padding ratio ([`hero-discipline.md`](enrichment/hero-discipline.md) § Hero postures; the stamp's `hero:` field, Settled when absent)? Settled / Banner / Corridor / Stage: `padding-block-end` ≥ 1.3× `padding-block-start`. Ledge inverts it (block-start ≥ 2× block-end, content anchored to the base). Poster waives it when content is edge- or corner-anchored. *Waivable:* a genuinely symmetric composition wants symmetric padding, and plenty of admired product heroes are built that way. *Guard:* the stamp names a `hero:` posture and **44b passes**. Bottom-heavy padding exists to stop a hero floating off the page; a hero that fits its fold is not floating.

    **[Floor]** **[R/J]** **44b. Fold fit.** On a standard laptop viewport — test at **1280×800** (13″), not just 1440×900 — can the hero's essential content (headline, lede, **the primary CTA**, and any hero visual's focal point) all be seen **without scrolling**? A hero can satisfy `min-height` and still overflow because the content is intrinsically too tall: usual culprits are an **oversized display clamp**, **loose display line-height**, a **lede that runs 3+ lines**, or **bloated `padding-block`**. Right-size to the fold: pull the display `clamp()` max down until the headline lands in 2-3 lines, set display line-height at the tight end of the range in [`typography.md`](typography.md) § Display line-height, hold the lede to ~2 lines (≤ ~60 ch), trim hero padding. **Don't overcorrect:** a hero that already fits passes untouched, and this never means tiny type or stripped whitespace. Long-form and art-directed statements (a poem broadside, a scroll-poster) may legitimately run taller, but even then the **first screen must read as a complete, deliberate composition**, never a headline sliced in half by the fold.

45. **[Reflex]** **[J]** **Decorative-without-purpose.** Does the hero contain a decorative element (cursor, scanline, gradient blob, abstract shape, ornament, badge, sticker) that has no semantic anchor in the content? Fail. Decoration must be motivated: a cursor inside a typed command (signals "you'd type next"), a numeral that names an issue / year / version / chapter, a gradient that responds to interaction (HP3 cursor-spotlight), a stamp that names an authorship or date. Random ornaments — a "42" in the corner with no edition meaning, a cursor floating beside a hero, a Pantone chip with no colour rationale — are slop.

The CSS stamp at Step 6 should record the result alongside contrast: `· nav: N# · footer: Ft# · slop: pass (42–45)`. If any of 42–45 fail, fix before shipping.

## Honest copy · no fabricated content

Universal — apply to every genre. The page must not invent facts about the user's product, team, or market.

46. **[Floor]** **[M]** **46a. Invented metric.** Does the page contain any quantitative claim — "10× faster", "saves 5 hours per week", "trusted by 50,000+ teams", "99.9 % uptime", "+47 % conversion" — that the user did not supply, that has no source, and that the model fabricated to fill a stat-led layout, comparison row, or proof bar? If yes, fail. **Never waivable: this is truth, not taste.** The fix is one of: replace the number with `—` and a labelled grey block, replace it with a question to the user ("metric to confirm"), or rebuild the section without the proof slot. Stat-led macrostructures are slop the moment their stats become decorative.
    **[Reflex]** **[M]** **46b. Bare-number hero.** Is a giant figure the hero's *sole* headline, with no worded line saying what it means? *Waivable* when the number is the whole argument and the page is built around it. *Guard:* the figure is user-supplied (so 46a passes) and carries a labelled unit within the hero. *(See [anti-patterns.md § Invented metrics](anti-patterns.md).)*

## Re-drawn UI chrome

Universal. A frame is not the tell; a fake frame around fake content is.

47. **[Floor]** **[M]** **47a. Fake browser or OS window.** Did Hallmark hand-build a browser bar (URL pill + traffic-light dots) or an OS window title bar in HTML/CSS/SVG? Fail, always, including on Arcade. This is the specific tell: the model re-drew the window the visitor is already looking at. Fix: a real screenshot in `<picture>` / `<figure>`, or drop the chrome. *Arcade carve-out applies only to atmosphere, never to windows: pixel type, scanline overlay, starfield, and a blinking cursor anchored to typed text re-draw no interface and stay legal there.*
    **[Reflex]** **[M]** **47b. Device, terminal, and editor frames.** Did Hallmark draw a phone / tablet / laptop bezel, terminal chrome, IDE chrome, or a windowed code-block frame? *Waivable when the frame is product photography rather than decoration:* a phone bezel is right when the phone is the product, terminal chrome is right when the terminal is the product. *Guard, both required:* (1) the frame appears **once** on the page, never templated across a grid or repeated per feature card; (2) the content inside is **real** — a genuine screenshot, executable code, or a live component — never lorem and never a mocked-up UI the product does not have. *(See [anti-patterns.md § Re-drawn UI chrome](anti-patterns.md).)*

## Token discipline

Universal. The theme picks the palette and font stack at the top of the run; the rest of the run consumes tokens, never invents them.

48. **[Floor]** **[M]** **Mid-render token improvisation.** Did Hallmark introduce any colour value (`#hex`, `oklch(...)`, `rgb(...)`, `hsl(...)`) or `font-family` declaration *outside* the design tokens defined in `:root` / `[data-theme="..."]` / a variants route-wrapper token block (verbs/variants.md § 4)? If yes, fail. Every colour and every font in the artifact must reference a named token (`var(--color-accent)`, `font-family: var(--font-display)`). Inline OKLCH or one-off hexes are mid-render improvisation — the model picked the theme, then forgot it and freestyled. The fix: lift the value into the token block as a new named variable, or replace it with an existing token. *(See [SKILL.md § Locked tokens](../SKILL.md) and [anti-patterns.md § Mid-render token improvisation](anti-patterns.md).)*

## Responsive — clickable affordances

Universal. Buttons, links, and nav items must remain readable as single-line affordances when the viewport shrinks.

49. **[Floor]** **[M/R]** **49a. A wrapping button or nav link.** Does a button label, a CTA, or a primary nav link wrap to two or more lines at any viewport between 320 px and 1920 px? Visitors read it as a styling error, not as intent, and these are the two affordances the page is built to be clicked through. The fix is one of: shorten the label (best; "Get started free" → "Start free"), set `white-space: nowrap` and let the parent reflow, drop a non-essential item at narrow widths via `hidden=until-found`, or collapse the nav into a sheet.
    **[Reflex]** **[M/R]** **49b. A wrapping secondary label.** A footer link, tab label, or breadcrumb wrapping. *Waivable* when the label is a real phrase in a language that cannot be shortened; localised UIs wrap routinely. *Guard:* the affordance is not in the nav or a CTA row, and it wraps to at most two lines. *(See [responsive.md § Clickable text — never wraps](responsive.md).)*

The CSS stamp at Step 6 should record results: `· honest: pass (46) · chrome: pass (47) · tokens: pass (48) · responsive: pass (49) · icons: pass (30)`. Any failure must be fixed before shipping.

## Mobile-responsiveness — the non-negotiables

Universal. Every emitted page must render flawlessly at 320 px, 375 px, 414 px, and 768 px CSS-pixel widths. Gates 34 (no horizontal scroll) and 49 (no two-line clickable text) already cover the headline cases; 50–57 below codify the patterns the marketing-site responsiveness pass uncovered. Eyeball each viewport before marking the output complete.

50. **[Floor]** **[M]** **Image-bearing grid track without `minmax(0, 1fr)`.** Does any `grid-template-columns` (or `grid-template-rows`) containing a `1fr` track render an `<img>` / `<picture>` / image-bearing element inside one of those tracks? If yes, the track must be `minmax(0, 1fr)` instead. Plain `1fr` resolves to `minmax(auto, 1fr)`, where `auto` minimum is the largest content's intrinsic width — for a 1024 + px native image, that's 1024 + px minimum, which pushes the layout past viewport on phones. The fix is one character per track: `1fr` → `minmax(0, 1fr)`.

51. **[Floor]** **[M]** **Display headers without long-word wrap.** Does any element rendering display-size text (`h1`, `.hero__display`, `.section__title`, `.skill-row__title`, hero-equivalent classes) lack `overflow-wrap: break-word; min-width: 0`? If yes, fail. Long hyphenated words ("AI-generated", uppercase compound brand names) overflow the viewport because the only break opportunity is at the hyphen; `break-word` lets the engine break inside the word as a last resort. **Use `break-word`, not `anywhere`.** `anywhere` also collapses the element's min-content width to a single character, which lets `text-wrap: balance` (F3) produce mid-word breaks it never needed. `break-word` leaves intrinsic sizing alone, so the two rules compose instead of fighting. Escalate to `anywhere` only for a container that can genuinely be narrower than its longest word.

52. **[Floor]** **[M]** **Per-theme section-head override without mobile collapse.** When a theme or variant overrides `.section__head { grid-template-columns: ... }` to anything other than `1fr`, does it also include the mobile-collapse rule, OR does a global `[data-theme] .section__head { grid-template-columns: 1fr }` exist at `@media (max-width: 48rem)` with matching specificity? If neither, fail. Theme-specific 2-column heads keep their template on mobile, the title collides with whatever shares its row, and the page reads broken. (Gate 54 removed the commonest occupant of that second column, but any two-column head still has to collapse.)

53. **[Floor]** **[M]** **CSS-only radio tab pattern that scroll-jumps.** When implementing tab toggles via `<input type="radio">` siblings + `:checked` selectors, does the artifact either (a) keep the radios in normal document flow with zero size + opacity 0 (no `position: absolute; top: 0`), OR (b) ship a JS handler that intercepts label clicks, calls `e.preventDefault()`, manually sets `radio.checked = true`, dispatches `change`, and focuses with `{ preventScroll: true }`? If the radios are at `position: absolute; top: 0` with no JS guard, fail. Default-position radios cause the page to jump to the section's top on every tab click — visible on every viewport but most disruptive on mobile.

54. **[Floor]** **[M]** **The eyebrow.** Does any element render short inert type before a heading that announces what the heading is about? `FEATURES`, `01 · THE TOUR`, `INTRODUCING`, `◇ workbench`, `Chapter Three`, an inert `✨ Now with AI` badge pill. Auto-fail. Hallmark does not ship one in **any** geometry: not stacked above the heading, not in a side column, not as a pill over a hero, not with a leading ordinal, not scoped to a card. Earlier versions of this gate licensed the stacked variant; that licence is revoked. The geometry was never the problem, the label was.

    **The test.** Small type before a heading survives only when it carries a **fact**, a **destination**, or an **identifier** the reader would otherwise lack. Delete the line and read the page: if nothing was lost but a name for what comes next, it was an eyebrow. Legal by that test, and never flagged: a `<figcaption>` in a `<figure>`; a `<th>`, `<label for>`, or `<legend>`; a nav or tab label; a byline or a `<time datetime>` dateline; a unit label sitting *after* its figure; a code block's real filename; a `role="status"` chip on live data; and a **linked** announcement chip going somewhere real (`href="#"` does not count, one per page). Banned despite the costume: an inert badge pill over a hero, a bare `01` above each step heading, an inert category tag on a card, a `TRUSTED BY` over a logo row.

    **The fix is never just deletion.** [`section-entry.md`](section-entry.md) carries twelve other ways to open a section, ten of which are already built elsewhere in the skill. When the sequence is genuine, reach for a real `<ol>` with `counter()` or set the numeral at graphic scale. One honest edge case: when a label is a section's *only* heading (`aria-labelledby` pointing at it, no `<h1>-<h6>` anywhere), the gate WARNs instead, and the fix is promoting it to `<h2>`.

    **This is a house rule** and it enters the Floor through door 2 (§ Tiers, The second door into the Floor), the only gate that does. Plenty of admired pages ship eyebrows; a language model ships one on every section, unprompted, which is what makes removing the option worth more than the pattern. Never waivable.

55. **[Floor]** **[M]** **55a. Cap collision on wrap.** Does a display-size element (`.hero__display`, `.section__title`, `h1`, `h2`, anything `≥ --text-2xl`) declare both `text-transform: uppercase` AND a `line-height` below `1.0` **while being able to wrap** (it renders on more than one line at 375 px and carries no `white-space: nowrap`)? Uppercase glyphs have no descenders and their cap-tops sit at the very top of the line box, so at `0.94` the cap-tops of line N+1 collide with line N's baseline and a trailing comma fuses into the cap beside it. Condensed faces (Anton, Inter Tight 900, Bebas Neue) make it worse. A rendering defect, not a preference. Bump `--lh-tight` to ≥ 1.0, or drop the uppercase.
    **[Reflex]** **[M]** **55b. Tight all-caps lockups.** Does a single-line-guaranteed all-caps element (a one-word wordmark, a masthead, a stat) run below the recommended `1.02-1.08`? *Waivable:* a nowrap wordmark at 0.85 is standard lockup practice and cannot collide with a line that does not exist. *Guard:* the element cannot wrap at 320 px.

56. **[Floor]** **[M/R]** **Sticky element at `top: 0` below a sticky page-level nav → bleed.** Does the artifact declare `position: sticky; top: 0;` on any element OTHER than the page's top-level nav / banner / header, when a sticky `<header>` / `<nav>` / `.banner` also exists at `top: 0` (i.e. there are two sticky-at-top-0 elements on the page)? Auto-fail. Both stick to the viewport top during scroll and overlap; the deeper-in-DOM element paints over the nav (visible as a "section header bleeding into the nav bar" glitch). Fix: define a `--banner-height` token (~44–64 px depending on nav design) and offset every secondary sticky to `top: var(--banner-height)`, so it docks **beneath** the nav. Also give the nav a higher z-index than in-page sticky elements — split `--z-sticky` (in-page, e.g. 200) from `--z-sticky-nav` (top nav, e.g. 300) so the nav always out-paints when sticky boxes momentarily overlap. This gate fires only when the page actually has sticky elements (S3 sticky-pinned section heads, F2 sticky-scroll feature stacks, sticky tables-of-contents); pages without sticky behaviour pass trivially.

57. **[Floor · Ledger]** **[J]** **Studied DNA discarded for a catalog theme.** Did a `study` diagnosis emit earlier in the conversation, AND does the build's CSS stamp's `theme:` field name a catalog theme (any of the 24 in [`theme-axes.md`](theme-axes.md); that table is the list, so this gate cannot drift when the catalog grows) rather than `studied-DNA (source: ...)` — without the user having explicitly pivoted ("use Newsprint instead", "ignore the DNA", "rotate to a different theme")? Auto-fail. The studied DNA was meant to be the system (SKILL.md § 2.6 Condition 0); defaulting back to catalog is the attractor pull. Fix: re-emit using the studied DNA's tokens directly (paper OKLCH, accent OKLCH, named candidate fonts, macrostructure, archetypes) and update the stamp to `theme: studied-DNA (source: <URL or image>)` with the inline values. This gate is trivially passed when no recent study exists in conversation scope.

The CSS stamp at Step 6 records mobile pass alongside contrast: `· mobile: pass (34, 49, 50–57)`.

---

## The Finish tier

Six numbered gates sit in this tier — **31** (Lottie where CSS would do), **35** (highlighter and underline geometry), **36** (flex rows not vertically centred), **38** (outlier face in more than two slots) — plus **39c** (helper-slot collapse), and alongside them the nine **F-checks** sloplint runs. They are all the same kind of thing: craft detail that is invisible at arm's length. Confirm or fix each at Step 7 with the same seriousness as a WARN; none of them ever blocks a ship the Floor approved.

The F-checks keep their own ids because they are not numbered gates, but they are Finish-tier members, not a separate system:

- **F1** straight quotes in prose · **F2** `...` instead of `…` · **F3** `text-wrap: balance` on display heads · **F4** more than one filled-primary button recipe · **F5** icon in a coloured circle coin · **F6** display-size numerics without tabular figures · **F7** one container recipe stamped on six or more selectors · **F8** more than one scroll-choreography pattern · **F9** fake-human avatar hotlinks (FAIL) / person-keyword stock URLs (WARN).

Rules live in [`finish.md`](finish.md) (F1-F6), [`layout-and-space.md`](layout-and-space.md) § Surfaces (F7), [`scroll-choreography.md`](scroll-choreography.md) (F8), and the imagery kit's avatar discipline (F9, whose fake-avatar half is the tier's one FAIL, because a fabricated human is a truth problem, not a polish one).

---

**Nothing ships with an open `FAIL` or an open `REFLEX`.** A Floor finding is fixed; a Reflex finding is fixed or waived on the record; a Finish finding is read and answered. The difference between the first two is not whether they block, it is whether you are allowed to disagree.
