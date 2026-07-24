# Hallmark variants v2 vs the field

An honest look at where the Hallmark variants loop sits next to the other tools
that let you see more than one design before you commit. The competitors are
described by shape, not by name, because the point is the pattern, not the logo.
Everything claimed for Hallmark below is a real v2 feature, cited to the
machinery in `skills/hallmark/scripts/variants/` and the flow in
`references/verbs/variants.md`.

## The shared promise

Every tool in this space sells the same insight: a single generated design is a
bet, and you make a better call when you can hold two or three side by side. The
disagreement is entirely about the loop around that comparison, and that is
where the friction lives.

## The four shapes in the field

**Canvas-branching tools.** You work on an infinite spatial canvas. Each
generation drops in as a node; you branch, fork, and fan out variations as more
nodes, then pan and zoom to compare. Powerful for open-ended ideation, but the
comparison is spatial: the two things you want to weigh are rarely the same size
in the same place, so you judge by panning between them, and the canvas state is
a separate artifact from your codebase.

**The section-by-section studio pattern.** A dedicated studio UI builds a page
one region at a time and lets you iterate each region in place. Precise for
refining a single composition, but it optimizes depth on one design rather than
breadth across several, and the studio is another surface to live in alongside
your editor.

**The injected-overlay tools.** A widget or toolbar is injected into your
running app so you can select and tweak elements where they actually render.
Honest about context because it is your real app, but it is built to edit one
live thing, and the panel is a persistent passenger in your app while you use it.

**The tab-switcher generators.** You prompt, get N options rendered into tabs or
a strip, click through them, and keep one. Fast and familiar, but the options
usually all arrive at once after the full wait, the losers evaporate when you
close the tab, and "keep one" is the only verb: there is no way to take the good
section from option 3 into option 1.

## Friction-point comparison

| Friction point | The field's usual shape | Hallmark variants v2 |
| --- | --- | --- |
| Where you compare | A canvas app, a studio UI, an in-app panel, or a web tool's tab strip: a surface away from your terminal | Your own terminal starts it; your own browser shows it. The picker is a single dark surface you already trust. |
| When the first option appears | Most wait for all options before showing anything | Progressive reveal: each direction is written to the manifest as `generating` and flipped to `ready` the moment its files land, so the first is viewable after about one direction's work, not three. |
| How you weigh two designs | Pan across a canvas, or click between tabs that reflow | Single-surface flip: arrow keys and number keys swap directions on the exact same spot, so differences register by muscle memory instead of by hunting. |
| Composing across options | "Keep one" is usually the only move | Compositional graft: from the winner you post `section from N` (for example "pricing from 3") and the good section from another direction comes into the one you are keeping. |
| Rendering fidelity | Often a sandbox preview divorced from your stack | Routes mode renders each direction as a throwaway route inside your real app, so your fonts, components, and tokens are the ones being compared. Greenfield mode serves standalone frames when there is no dev server. |
| What survives the decision | Canvas nodes and tabs are ephemeral; losers vanish | Durable decisions: all three directions are archived to `.hallmark/variants/<run-id>/`, the winner's tuple is logged, and the rotation memory steers future runs away from all three. "Show me the 3 again" is free. |
| Failure behavior | If the tool's service or preview breaks, the loop stalls | The flow never dead-ends: a plain chat reply naming a direction is always a valid pick, a serverless static `compare.html` is one flag away, and the on-page chip degrades to "tell your agent: pick 2" if the helper dies. |
| Cost of looking | Full generation of every option, every time | Sketch-default speed: `--sketch` builds hero plus one signature section plus footer per direction, and only the winner is completed to full depth after the pick, so you pay full price once, not three times. |
| Seeing it over your real app | The in-app tools own this; most others cannot | Scoped preview injection (v2): a small dev-only overlay drops the chosen direction over your running app as a preview, dismissible, keyboard-guarded, and strictly preview-only. It never writes to your source; the winner still ships as a normal Hallmark build. |

## Where Hallmark variants wins

1. **Terminal-native single surface.** No new app to learn and no canvas to pan.
   The agent you are already talking to opens one picker in your browser, and
   arrows plus number keys do all the comparing.
2. **Progressive reveal.** You are looking at the first direction while the
   others are still being written, which is the difference between waiting and
   deciding.
3. **Compositional grafts.** The loop has a verb beyond "keep one." Taking a
   section from one direction into another turns three finished bets into a
   parts bin you can assemble from.
4. **Durable decisions.** Nothing you generated is thrown away. The archive plus
   the rotation log means a comparison you ran today informs the next run instead
   of evaporating when you close a tab.
5. **Never dead-ends.** Server down, offline, or a harness with no browser at
   all: a chat reply still picks, and a self-contained static page still lets you
   look. The decision is never hostage to a running process.
6. **Sketch-default speed.** Looking at three directions should not cost three
   times a build. Sketch depth trims the drafts and completes only the winner, so
   breadth is cheap and finish is reserved for the page that earns it.

## Where the other shapes still lead (the honest part)

- **Open-ended spatial ideation.** If your goal is to fan out twenty loosely
  related concepts and rearrange them by hand, a branching canvas is a better
  home than a three-up picker. Hallmark variants is opinionated: it defaults to
  three structurally distinct directions and asks you to decide, not to sprawl.
- **Deep single-composition refinement.** The section-by-section studio pattern
  is built to polish one design region by region. Hallmark keeps drafts cheap on
  purpose and saves the deep finish for after the pick, so mid-run it is
  deliberately shallower on any one direction.
- **Live in-app editing.** The injected-overlay tools edit your real, running
  app directly. Hallmark's v2 injection is preview-only by design: it shows the
  variant over your app but never touches your source, so if you specifically
  want to nudge the live DOM in place, that is not what this loop is for.

The trade Hallmark makes is clear and intentional: less sprawl and less in-place
editing, in exchange for a faster, cheaper, single-surface comparison whose
decisions are durable and whose flow cannot get stuck.
