# Typography

Type carries the design. If the type is wrong, nothing else matters.

## Principles

- A page is a pairing, not a single font. Display face + body face, minimum. *Single-font pages are allowed only when the single font IS the design choice* — a true terminal aesthetic is monospace-everywhere on purpose; a Manifesto poster might be one display face on purpose. The default is a pairing.
- Commit to extremes. Weight 200 next to weight 800 reads as intentional. Weight 400 next to weight 600 reads as a default setting.
- Size steps should be ratios, not increments. Major third (1.25), perfect fourth (1.333), perfect fifth (1.5), or golden (1.618). Pick one and use it.
- Line-height changes with size. Tight for display, comfortable for body (1.5–1.65). This file owns the display range; see § Display line-height below, and never restate the numbers elsewhere.
- Measure — line length — lives between 45 and 75 characters. Use `max-width: 65ch` as the default.

## The 2+1 rule — three faces is the ceiling

**A page may use at most three distinct font families.** One **display**, one **body**, and an optional **outlier** for a single typographic moment — wordmark, hero stat, pull quote, masthead — where the page wants exactly one note that doesn't sound like the rest. Four families is slop. Two is canonical. Three is the ceiling, used sparingly.

The pattern:

```css
:root {
  --font-display:  "Fraunces", ui-serif, Georgia, serif;       /* headings, hero */
  --font-body:     "Geist", ui-sans-serif, system-ui, sans;    /* prose, UI */
  --font-outlier:  "Geist Mono", ui-monospace, monospace;      /* wordmark + hero stat ONLY */
}
```

The outlier is a *register*, not a third surface. Rules:

- **The outlier carries ONE role, not a slot count.** It tags a specific kind of content: the brand, the headline figure, the manifesto line, the label voice. Reaching for it on a second *kind* is how it becomes a third body font, which is slop. How many times that one role appears is the content's business, not a budget: a label voice with six instances is one role, while a wordmark plus a pull quote plus a stat figure is three roles and already too many. Once you know what it tags, every instance of that role uses it; don't apply it to one button label and not another.
- **Mono counts as a face.** A page with Fraunces display, Geist body, and Geist Mono in code blocks is using three families. That's fine — code is the outlier role. Don't sneak in a fourth.
- **Same family at different weights is one family**, not two. Geist 400 + Geist 700 is one font; pairing it with Fraunces is two. Adding Geist Mono on top is three.

Two families is still the right answer for most pages. Three is for SaaS / brand-heavy / editorial-rich pages where the wordmark needs a different register than the body.

## Banned defaults

These fonts are on-distribution for every LLM. Do not reach for them without a deliberate reason:

- **Sans-serif:** Inter, Roboto, Open Sans, Lato, Poppins, Source Sans, Nunito, Montserrat, Raleway, Work Sans, DM Sans, system-ui, Arial, Helvetica.
- **Serif:** Merriweather, Playfair Display (as body — banned as overused body serif; ok as display in moderation), Lora, Source Serif, Georgia-as-default.
- **Mono:** Courier New, Consolas-as-default, system mono.

If the user insists on one, do it. Otherwise pick from the allowlist below.

**Saturated as display, not banned.** Several faces still in the catalog below are over-reached specifically as *display*: Fraunces, Playfair Display, Cormorant, Lora, Crimson, Newsreader, Space Grotesk, Space Mono, DM Sans, DM Serif, Outfit, Plus Jakarta Sans, Instrument Sans, and Inter in any display role. They are fine faces; the problem is that they are the first answer, and nine of the catalog's own themes were re-faced off them for exactly that reason. Treat them the way [`direction.md`](direction.md) § R.2 treats a spent default: available with a written argument, never as the reflex.

## The font catalog

**Skip this section when a catalog theme is in play.** The theme file has already named the display, body and label faces, and picking a different one breaks the theme. Read it when the route is custom or studied-DNA, when the pre-flight found no font stack, or when a face here needs its source and licence checked.

Three sources, in priority order:

- **Google Fonts** — free, served via CDN, works everywhere. The default source.
- **Fontshare** (Indian Type Foundry) — free for commercial use, foundry-grade. The "you didn't know these were free" tier. Drop-in via `<link href="https://api.fontshare.com/v2/css?f=...">`.
- **Foundry-licensed** — Klim, Pangram Pangram, Production Type, Lineto, Colophon. Only when the user has confirmed they're licensed.

### Free display faces

| Family | Source | Voice |
| --- | --- | --- |
| **Fraunces** | Google | Variable serif, deeply expressive italic, optical-size axis |
| **Newsreader** | Google | Roman serif with optical-size + italic |
| **Instrument Serif** | Google | Tight contrast, italic available, smart for short heads |
| **Cormorant Garamond** | Google | Classical, high contrast, luxury register |
| **EB Garamond** | Google | Honest classical Garamond, body-grade |
| **Cardo** | Google | Scholarly serif, generous x-height |
| **Source Serif 4** | Google | Modern transitional, big OT family |
| **DM Serif Display** | Google | Bracketed serif, high-contrast display |
| **Bodoni Moda** | Google | Modern Bodoni revival, dramatic |
| **Playfair Display** | Google | Use only as display; banned as body |
| **Geist** | Google | Modern grotesque, geometric, 7 weights |
| **Inter Tight** | Google | Tighter Inter — allowed *only* as a body fallback in technical themes; never as display |
| **Bricolage Grotesque** | Google | Variable display sans, bold weights, condensable |
| **Space Grotesk** | Google | Geometric grotesque, slightly quirky |
| **Anton** | Google | Heavy condensed grotesque |
| **Big Shoulders Display** | Google | Industrial condensed |
| **Tomorrow** | Google | Variable optical condensed |
| **Outfit** | Google | Modern geometric (banned as default; use only when *picked* deliberately) |
| **General Sans** | Fontshare | Modern grotesque, Geist-adjacent |
| **Switzer** | Fontshare | Neutral sans, broad weight range |
| **Cabinet Grotesk** | Fontshare | Display grotesque, 9 weights |
| **Clash Display** | Fontshare | Ultra-condensed display |
| **Satoshi** | Fontshare | Playful geometric sans |
| **Sentient** | Fontshare | Variable serif, soft contrast |
| **Erode** | Fontshare | Distressed serif, chipped edges at display size |
| **Chillax** | Fontshare | Rounded soft sans, closed apertures |
| **Zilla Slab** | Google | Clarendon-lineage slab, blunt and newsy |
| **Literata** | Google | Screen-tuned reading serif, sturdy slabby serifs |
| **Familjen Grotesk** | Google | Grotesk with flared terminals, characterful |
| **Saira Condensed** | Google | True condensed, scoreboard register |
| **Tanker** | Fontshare | Heavy condensed grotesque, pure display |

### Free body faces

| Family | Source | Voice |
| --- | --- | --- |
| **Geist** | Google | The default modern body sans |
| **The Future** | (in repo) | Hallmark's own body workhorse |
| **Newsreader** | Google | Reading serif, optical-size aware |
| **Source Serif 4** | Google | Body-grade serif |
| **EB Garamond** | Google | Classical body |
| **Spectral** | Google | Slab-ish serif, screen-tuned |
| **Literata** | Google | Warm reading serif, optical-size aware |
| **Lora** | Google | Calligraphic serif, body-grade |
| **Crimson Pro** | Google | Old-style body, generous |
| **IBM Plex Sans** | Google | Engineering sans, broad family |
| **Switzer** | Fontshare | Neutral sans body |
| **General Sans** | Fontshare | Geist-adjacent body |

### Free mono / outlier faces

| Family | Source | Voice |
| --- | --- | --- |
| **Geist Mono** | Google | Geist's mono companion |
| **JetBrains Mono** | Google | Engineering mono, ligatures |
| **IBM Plex Mono** | Google | Engineering mono, broad family |
| **Commit Mono** | Google | Tighter mono, modern |
| **Space Mono** | Google | Quirky, slightly retro |

### Tone-based pairing patterns

The rows below are the **free baseline**: Google Fonts and Fontshare, working out of the box, and the right answer unless the user has confirmed a foundry licence. When they have, ask which foundry and pick from it directly; a paid list here would just be a second catalog to reach into.

| Tone | Tier | Display | Body |
| --- | --- | --- | --- |
| **Editorial** | Free | Fraunces · Newsreader · EB Garamond · Instrument Serif · Cabinet Grotesk | IBM Plex Sans · Switzer · Source Serif 4 |
| **Technical** | Free | JetBrains Mono · Geist Mono · Geist (700) · Commit Mono | Geist · IBM Plex Sans · Switzer |
| **Brutalist** | Free | Bricolage Grotesque (800) · Anton · Tanker · Big Shoulders Display | Geist · Switzer |
| **Soft** | Free | Geist · Bricolage Grotesque (500) · Sentient · Newsreader | Geist · Crimson Pro · Switzer |
| **Luxury** | Free | Cormorant Garamond · Fraunces · Cardo · DM Serif Display · Bodoni Moda | EB Garamond · Crimson Pro · Source Serif 4 |
| **Playful** | Free | Bricolage Grotesque · Fraunces (italic) · Satoshi · Newsreader (italic) · Sentient | Geist · Newsreader · Satoshi |
| **Austere** | Free | system-ui · Inter Tight (regular) · Geist (400) · Switzer (regular) | system-ui · Geist · Switzer |
| **Atmospheric** | Free | Geist (600) · Sentient · Tomorrow · Bricolage Grotesque | Geist (400) · Switzer |
| **Workshop** *(Hallmark's own theme)* | Free | The Future · Geist · Cabinet Grotesk | The Future · Switzer |

**The discipline.** Default to the free pairings. They're not consolation prizes; Fraunces, Geist, Bricolage Grotesque, Cabinet Grotesk, Sentient, and JetBrains Mono are first-rate faces in 2026. The paid upgrades exist for two cases: (a) the user has explicitly confirmed they're licensed, or (b) the user is asking for a specific named foundry voice (e.g., "make it look like Klim", "I want Söhne"). Reach for Tier 2 only then; otherwise the free row is the right answer. Treat the free row as canon, the paid row as a *cited* alternative.

## Wordmark / logo typography

The wordmark in the navbar and footer **may use a different display face than the body**. On tone-rich themes (Editorial, Atelier, Specimen) it **should** — collapsing the wordmark into the body family flattens the visual hierarchy and the page reads as un-branded.

```css
:root {
  --display:       "Geist", system-ui, sans-serif;     /* body + display */
  --font-wordmark: "Fraunces", Georgia, serif;         /* logo only */
}
.wordmark {
  font-family: var(--font-wordmark);
  font-weight: 600;
  letter-spacing: -0.015em;
}
```

Recommended pairings (free baseline first):

- **Geist body → Fraunces wordmark, IBM Plex Mono wordmark, or Bricolage Grotesque (heavy) wordmark**
- **Fraunces body → Geist Mono wordmark, Inter Tight wordmark**
- **System-ui body → JetBrains Mono wordmark, Newsreader wordmark**
- **Inter Tight body → Fraunces wordmark, EB Garamond wordmark**

When to use the same family for both:

- **Editorial · Letter · Manifesto · Long Document** can collapse to a single family because the body voice carries the brand. The wordmark in these contexts is small, grounded, and earns its weight by being typeset rather than decorated.

When to use a contrasting family:

- **Bento Grid · Stat-Led · Workbench · Marquee Hero** — these archetypes lean visually generic (geometric grids, big numbers, browser-frame mockups) and need the wordmark to do the typographic differentiation work the body can't.

**Avoid the same-family collapse on a SaaS page.** A Geist-only page where the wordmark is also Geist 600 reads as un-designed; the wordmark in Fraunces SemiBold over a Geist body costs nothing and adds the one typographic register that says *this is a brand*.

## Scale

Pick a ratio. The default for Hallmark work is **1.25** (major third). Build the scale from a 16px body, then clamp display sizes for responsive.

```css
:root {
  --text-xs:   0.64rem;   /* 10.24px */
  --text-sm:   0.8rem;    /* 12.8px  */
  --text-base: 1rem;      /* 16px    */
  --text-md:   1.25rem;   /* 20px    */
  --text-lg:   1.5625rem; /* 25px    */
  --text-xl:   1.9531rem; /* 31.25px */
  --text-2xl:  2.4414rem;
  --text-3xl:  3.0518rem;
  --text-4xl:  3.8147rem;
  --text-display: clamp(2.75rem, 5vw + 1rem, 5.25rem);
  --text-display-s: clamp(2.2rem, 4vw + 0.75rem, 4.2rem); /* one 1.25 step below display at both ends; the step-down the headline brackets reference */
}
```

**Display max — keep it ≤ 5.5rem (88 px).** Above that, hero headlines crowd themselves on 1280–1440 px viewports and require multi-line wrapping that almost always reads as drama, not gravity. Even on Manifesto / Brutal display-heavy themes, cap at 6rem (96 px). The exception is a single-line, single-word display (e.g. a stat) that occupies ≤ 12 ch — it can grow to 7rem. **Default emit format is `clamp(2.75rem, 5vw + 1rem, 5.25rem)`.**

### Hero headline sizing — match size to copy length

Count characters in the rendered hero `h1`. Pick the cap by bucket — the rule applies on top of any per-theme `--text-display` clamp:

| Headline length | Size cap | Notes |
| --- | --- | --- |
| **≤ 20 chars** (e.g. *"Limitless"*, *"Made not generated"*) | full `--text-display`; single-word can grow to 7rem | Display-heavy themes only |
| **21–50 chars** (the default sweet spot) | `--text-display` | If it wraps past 2 lines at 414 px, step down to `--text-display-s` |
| **51–90 chars** | cap at `--text-display-s` | Cut it, or split it across two lines with `<br>` at the sense break. Never split it into a label plus a headline (gate 54) |
| **> 90 chars** | rewrite shorter, or cap at `--text-4xl` with tighter leading | A 100-char headline at display size is the single most reliable AI tell |

**Aggressive-display themes step down one rung when headline > 50 chars.** Brutal, Riso, and Manifesto clamp `--text-display` at 6.5–9rem — that ceiling is for ≤ 50-char statements only. Past 50 chars, route them to `--text-display-s` automatically. **When you write the headline yourself (no user-supplied copy), aim for ≤ 7 words and ≤ 50 chars from the start** — imperative or nominal phrase, never a gerund opener.

Use no more than five sizes on a single page. If you need more hierarchy, use weight and colour, not another size.

### Heading measure by size

Max-width rides ON the heading element (never the wrapper), in `ch`; body keeps the 45-75ch envelope above:

| Size | max-width |
| --- | --- |
| `--text-display` | ~20ch |
| `--text-display-s` | ~24ch |
| `--text-4xl` | ~30ch |
| `--text-3xl` | ~35ch |
| `--text-2xl` | ~40ch |
| `--text-xl` | ~45ch |

## Weights

- Body: one weight (typically 400 or 350). Bold for emphasis only.
- Headings: a weight that reads as a different voice from the body, not a nudge. With a 400 body, 700 and 200 are the safe poles. 500 and 600 work when the display FACE differs from the body face (which is the normal case on a two-family page, and is why several themes ship a 600 display); they read as un-set only when display and body share a family.
- Never synthesise. Load the weight you need; don't rely on `font-weight: bold` against a single-weight file.

## Required features

- `font-display: swap` on every web font.
- Match fallback metrics with `size-adjust`, `ascent-override`, `descent-override`, `line-gap-override` to prevent CLS.
- Tabular numbers on any data display: `font-variant-numeric: tabular-nums;`.
- Oldstyle figures for body copy where the face supports them: `font-variant-numeric: oldstyle-nums;`.
- Proper typographic punctuation: `" " — … ‘ ’`. Never straight quotes, never `--` or `...`.

## Body text rules

- Minimum 16px. Below 14px is accessibility-hostile.
- Line-height 1.5–1.65 on body copy.

### Display line-height

**One range, owned here: `1.0`–`1.15`.** Every other file cites it rather than restating it (gate 44b's fold-fit path and gate 55 both defer to this line). Sit at the tight end as the type grows; 1.2 on a display head reads as un-set type that inherited the body value.

**Floor for all-caps display heads** (`text-transform: uppercase` on `.hero__display` / `.section__title` / `h1` / `h2`) **is `1.0`, recommended `1.02–1.08`.** Below 1.0 the cap-tops of line N+1 collide with the baseline of line N, since caps have no descenders to cushion the gap; the comma and cap-D on a wrapped "PROMPT, / DIFFERENT" fuse into one glyph blob. Condensed faces (Anton, Inter Tight 900, Bebas Neue) make it worse. Gate 55a auto-fails it on a head that can wrap; a nowrap lockup is 55b and waivable.
- Measure 45–75 characters (`max-width: 65ch`).
- Never all-caps body copy. Never justified text without hyphenation. Never letter-spacing above 0.05em on body.

## Headings rules

- Tight tracking on display sizes (`letter-spacing: -0.02em` to `-0.04em` depending on the face).
- Loose tracking on small caps / labels (`letter-spacing: 0.08em` to `0.14em`, `text-transform: uppercase`, use small caps if the face has them: `font-variant-caps: all-small-caps;`).
- Skip no levels. `h1` → `h2` → `h3`. Style them visually how you like, but keep semantic order.

## Bans

- No Inter, no Roboto, no Open Sans. No system stack as the *only* stack.
- No gradient text on headings (`background-clip: text` with a gradient fill).
- No single-font pages.
- No all-caps paragraphs.
- No font-size below 14px for body copy, below 10px anywhere.
- No hard-synthesised bold or italic.
- **No more than three font families on a single page.** Display + body + one outlier is the ceiling. Four families = slop. Audit gate.
- No outlier face used in more than two slots. Wordmark + hero stat is the canonical pair; if you reach for a third slot, drop it back to the body face.
