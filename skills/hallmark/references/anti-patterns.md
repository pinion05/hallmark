# Anti-patterns - the named tells

Read this list before emitting anything: these are the named tells of AI-generated UI.
Enforcement details, genre overrides, and full fixes live in [slop-test.md](slop-test.md); "(gate N)" cites its gates.

The three groups here are the three **tiers**, and they say how hard each one binds:

- **The Floor** - never done, never waivable. Fix it.
- **Reflexes** - the defaults a model falls into. A build with a real reason can waive one on the record (slop-test.md § Waivers); a build without one fixes it.
- **Finish** - craft detail, invisible at arm's length. Read and answer; never blocks a ship.

`hallmark audit` reports findings by these exact names and maps the tiers to reader-facing severities: Floor to `critical`, Reflex to `major`, Finish to `minor`, and a Reflex gate already waived in the audited output to `noted`.

## The Floor

### The purple-gradient hero
Purple-to-blue or purple-to-pink hero background. Fix: one anchor hue, no gradient hero backgrounds. (gate 2a)
### The gradient headline
`background-clip: text` gradient fill on a headline in the purple-blue family. Fix: solid ink; use weight or a display face. (gate 2a)
### Card-in-card
Cards nested inside bordered containers. Fix: keep one containment layer. (gate 4)
### The `vh` hero
`min-height: 100vh` sizes past the fold on every phone, because `vh` ignores browser chrome. Fix: `dvh` or `svh`. (gate 6a)
### Sound-on autoplay
A hero video shipped without `muted`. Fix: `<video autoplay muted loop playsinline>`, always all four. (gate 28a)
### Lazy-loaded LCP
`loading="lazy"` on the hero image or video. Fix: `fetchpriority="high"`; lazy-load below the fold only. (gate 28a)
### Italic emphasis word in a heading
One italicised word inside an otherwise roman headline. Fix: weight, accent colour, a drawn underline, or a line break. (gate 38a-i)
### The eyebrow
Short inert type before a heading that announces the heading: `01 · THE TOUR`, `FEATURES`, an inert badge pill. Banned in every geometry. Fix: open the section another way ([section-entry.md](section-entry.md)). (gate 54)
### Generic emoji as feature icon
Sparkle or rocket emoji standing in for icons. Fix: one icon library, custom SVG, or typography. (gate 30a)
### Invented metrics
Numbers the user never supplied filling stats and proof bars. Fix: labelled placeholder, ask, or drop the slot. (gate 46a)
### Re-drawn browser and OS chrome
Fake browser bars with traffic-light dots, fake window title bars. Fix: real screenshots in `<figure>`. (gate 47a)
### Mid-render token improvisation
Inline colours or fonts outside the locked token block. Fix: every value through `var(--token)`; extend tokens first. (gate 48)
### Wrapping button or nav link
A CTA or primary nav label breaking onto two lines. Fix: shorten the label; `white-space: nowrap`. (gate 49a)
### `transition-all`
Every property animating, including instant ones. Fix: list the transitioned properties. (gate 10)
### Animating layout
Transitioning `width`, `height`, `top`, or `left`. Fix: `transform` and `opacity` only. (gate 14a)
### Focus rings that animate in
The ring fades in; keyboard users wait. Fix: focus rings appear instantly. (gate 15)
### Missing focus-visible
An interactive element with no `:focus-visible` style at all. Fix: ring at >= 3:1, instantly. (gate 26a)
### Hover-only affordances
Menus, buttons, or tooltips reachable only by hover. Fix: focus states plus tap access everywhere.
### Tooltips with the same delay on hover and focus
Both delayed 800ms. Fix: hover 800-1000ms, focus 0ms. (gate 17)
### Auto-rotating carousels with no pause
WCAG 2.2.2 failure. Fix: manual advance, or pause on hover and focus. (gate 18)
### Placeholder names
"Jane Doe", "John Smith", "Example User". Fix: plausible audience-fitting names, or a seeded faker. (gate 19)
### Startup-cliché product names
"Acme", "Nexus", "Pulse", "Unleash". Fix: concrete, domain-specific names. (gate 19)
### 100vw widths
`width: 100vw` breaks on scrollbar-visible desktops. Fix: `width: 100%` with container padding. (gate 34)
### Cap collision on wrapped caps
Uppercase display type at line-height below 1.0, on a head that wraps. Fix: line-height 1.0 floor. (gate 55a)

## Reflexes

### Inter-everywhere
Inter, Roboto, or Open Sans as both display and body. Fix: pair a display face with a body face (typography.md). (gate 1)
### The 3-column feature grid
Three equal icon-above-heading columns. Fix: vary widths and heights, or drop the cards. (gate 3)
### The side-stripe card
Thick coloured border on one card edge. Fix: hairline all round, none, or an accent square. (gate 5)
### Centred everything
The whole hero on one centred axis, then section after section of centred columns. Fix: bias the layout; break symmetry once. (gate 6b)
### Pure black, pure white
`#000` or `#fff` as a base colour. Fix: tint neutrals toward the anchor hue (color.md), or declare `surface: absolute` and mean it. (gate 7b)
### Default-attractor sameness
Same structure as the previous Hallmark output in the project. Fix: check the CSS stamp and the log; build differently. (gate 8)
### Every section padded the same
Identical rhythm on every section, no rule, no ornament, no colour shift. Fix: vary; tighten one, expand another. (gate 9)
### Universal `hover:scale-105`
Every card lifts identically on hover. Fix: one signal per element. (gate 11)
### Bounce and elastic easing
Buttons bounce in, icons wobble on hover. Fix: exponential ease-out (motion.md). (gate 12)
### More than one hover effect at once
Translate plus scale plus shadow plus colour on the same element. Fix: pick one. (gate 13)
### Celebratory success toasts
"Done!" for an effect the user already sees. Fix: silent success; toasts for failures only. (gate 16)
### Specimen fall-through
Specimen structure emitted without an editorial brief. Fix: build the shape this brief wants. (gate 21)
### Flat grey neutrals
Zero-chroma neutrals on a page with an anchor hue. Fix: tint toward the hue, minimum 0.005 chroma. (gate 22)
### Accent flood
The accent past ~5% of a viewport with no declared colour posture. Fix: retreat, or declare the posture. (gate 23)
### Off-scale spacing
`padding: 17px` and friends outside the named scale. Fix: use the scale; keep optical nudges to three. (gate 24b)
### Aurora-blob background
Purple-pink-cyan mesh blobs behind hero text. Fix: solid surface, or subtle gradient plus grain. (gate 29)
### Mismatched icon sets
Two or more icon libraries mixed on one page. Fix: one library per project (assets.md). (gate 30b)
### Four type families
Display plus body plus mono plus a wordmark face, unnamed. Fix: three, or bind the fourth to its own token. (gate 37)
### Italic display face
An italic heading system. Fix: keep it if it IS the system, on a real italic with `font-synthesis: none`. (gate 38a-ii)
### The AI nav
Wordmark-left, inline links, CTA-right, sticky, hairline border-bottom, arrived at by reflex. Fix: decide it and name it in the stamp. (gate 42)
### The AI footer
Four link columns, social-icon row, copyright tail, arrived at by reflex. Fix: decide it and name it in the stamp. (gate 43)
### Symmetric hero padding
Equal padding top and bottom on a hero that is not a poster. Fix: bottom-heavy, so the hero sits into the page. (gate 44a)
### Floating-orb decoration
Blurred spheres drifting behind the hero "for depth". Fix: cut them; anchor the hero typographically. (gate 45)
### Bare-number hero
A giant figure as the hero's only headline. Fix: pair it with a line that says what it means. (gate 46b)
### Re-drawn device and terminal frames
Phone bezels and terminal chrome around mocked-up content. Fix: one frame, real content inside, or none. (gate 47b)
### Shadow-glow on dark
Soft coloured halo box-shadow on a dark surface. Fix: elevate via lightness, not shadow.
### Icon-tile feature card
Icon in a coloured square, heading, two lines, "Learn more". Fix: asymmetric sizes, inline icons, or none. (gate 3)
### Glassmorphism without purpose
Frosted-glass panels as decoration. Fix: glass only when it communicates overlay depth.
### AI-illustration look
Mesh-blob characters, corporate-doodle humans, raw generated art. Fix: hand-build in CSS or SVG (hero-enrichment.md).
### Three.js for a still object
WebGL for a non-interactive spinning thing. Fix: still photograph or hand-built SVG.
### Animated hover gradients
Background gradient slides through colour space on hover. Fix: cut, or one instant colour shift.
### Cursor follower dots
A trailing dot lagging the pointer. Fix: cut.
### Confirmation dialogs for reversible actions
"Are you sure?" before a one-row delete. Fix: optimistic action plus Undo toast.
### Toasts that shift layout
A new toast pushes content down. Fix: fixed stack at a viewport corner.
### Animate-on-scroll on everything
Every section fades in, every list staggers. Fix: one orchestrated entrance only.
### `z-index: 9999`
Arbitrary large z-values. Fix: the six-level named scale (layout-and-space.md).

## Finish

### Lottie shortcut
A community Lottie for jobs CSS or SVG does lighter. Fix: build it custom; Lottie is last resort. (gate 31)
### Highlighter bands at the baseline
A `<mark>` gradient sitting under the text instead of behind the x-height. Fix: stops at ~38% and ~92%. (gate 35)
### Flex rows not vertically centred
A button taller than its sibling text, inheriting `align-items: stretch`. Fix: `align-items: center`. (gate 36)
### Outlier face in three slots
The third register becomes a third body font. Fix: collapse it back. (gate 38)
### Tabular data without tabular-nums
Columns of figures misaligned by proportional numerals. Fix: `font-variant-numeric: tabular-nums`. (F6)
### Straight quotes
Straight `"` and `'` in rendered text. Fix: curly quotes and apostrophes. (F1)
### Three periods instead of ellipsis
`...` in body copy. Fix: the ellipsis character (U+2026). (F2)
### Double-hyphen dashes
`--` in body copy where a dash belongs. Fix: a true em dash (U+2014).
### Spinners that flash
A spinner visible 50ms on a fast action. Fix: delay-show 150ms, or minimum 300ms visible.
### Collapsing helper-text slot
The error message pushes the page down when it appears. Fix: reserve `min-height: 1lh`. (gate 39c)
