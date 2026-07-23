# `hallmark variants`

One brief, three full directions, side by side, in the user's own browser. The user flips between them, picks one, and only the winner ships. A single build is a bet; three structurally distinct builds are a conversation.

## Flow at a glance

1. Detect the mode: greenfield or routes; routes mode asks for the dev server URL.
2. Run SKILL.md Steps 0-1 once; read `.hallmark/log.json` once.
3. Say the direction plan table; end with "Redirect now or I build all three."
4. Build three self-contained directions: parallel subagents or sequential fallback.
5. `start.mjs`; relay the picker URL in one line.
6. Await the pick via the poll ladder; a chat reply always works.
7. Promote the winner: full 58-gate sweep, archive all three, ack, stop, log.

## The machinery

The verb rides on four zero-dependency scripts in `<skill-dir>/scripts/variants/` (`core.mjs` · `serve.mjs` · `start.mjs` · `await.mjs`) and one run directory inside the USER'S project:

```
.hallmark/variants/<run-id>/     run-id: date + letter, e.g. 2026-07-23-a
  manifest.json                  run state (shape below)
  v1/ v2/ v3/                    greenfield direction folders (index.html + optional css)
  requests/  requests/done/      the pick/riff queue
  server.log                     serve.mjs stdout/err
.hallmark/variants/server.json   live-server identity: {port, pid, run, startedAt}
```

Second run the same day: increment the letter (`2026-07-23-b`). Respect any existing `.gitignore` treatment of `.hallmark/`.

`manifest.json` (you write it; `start.mjs` only ensures a skeleton exists):

```json
{ "run": "2026-07-23-a", "mode": "greenfield", "brief": "...",
  "devServer": null,
  "directions": [
    { "n": 1, "title": "The broadsheet", "macrostructure": "Long Document",
      "theme": "Newsprint", "nav": "N6", "footer": "Ft2",
      "axes": "light / roman-serif / warm", "url": "/frame/1/", "status": "ready" }
  ],
  "picked": null }
```

`mode` is `"greenfield"` or `"routes"`. In routes mode `devServer` holds the user's dev-server origin and each direction's `url` is absolute into it (e.g. `http://localhost:3000/hallmark-v1`). Write `mode`, `brief`, and `devServer` as soon as § 2 resolves; add each direction row when you plan it, flip its `status` to `"ready"` when its files land.

---

## 1 · Trigger and arguments

- `hallmark variants <brief>` : the full run described here. Default depth: **3 full directions**.
- Bare `hallmark variants` : continue an in-flight brief. If this conversation already carries one (a default build was being scoped, the user just answered the Step 1 gate, or the latest run's manifest has `"picked": null`), reuse it and say so in one line. No brief anywhere: ask for it, once, and nothing else.
- **Count override.** "Give me 4" / "five directions" is honored. The divergence rules below stay pairwise; with only three paper bands, directions 4+ relax the theme rule to >= 2 axes distinct against each earlier direction. Say so in the plan. Never offer more than 3 unprompted.
- **`--sketch`** : each direction is hero + one signature section + footer, nothing more. The winner is completed to full depth after the pick. This is the cheap path; offer it unprompted on heavy briefs (see § 9, token budget).

"Show me 3 again" after a finished run: a new run-id, same ceremony reuse, and the archived directions stay where they are.

## 2 · Context detection

Two modes. Decide before the ceremony, state the mode in one line.

**Greenfield** : no project, or a project without a framework dev server. Directions are standalone pages in `v1/ v2/ v3/`; the picker serves them itself at `/frame/<n>/`.

**Routes mode** : a framework with file-based routing AND a running dev server. The directions become throwaway routes inside the user's own app, rendered by their real stack: their fonts load, their components import, the comparison is honest. **Ask for the dev server URL: never guess a port, never start a server yourself.** One line: *"Is your dev server running? Give me its URL (e.g. http://localhost:3000)."* No running server, or no answer: greenfield.

Detect the framework from the Step 0 pre-flight you already ran (`package.json` deps + directory shape): `next` with `app/` = app router · `next` with `pages/` = pages router · `@sveltejs/kit` = SvelteKit · `astro` = Astro · `nuxt` = Nuxt · `@remix-run/*` = Remix.

Route recipes, direction `n`:

| Framework | Route file |
| --- | --- |
| Next.js (app router) | `app/hallmark-v<n>/page.tsx` |
| Next.js (pages router) | `pages/hallmark-v<n>.tsx` |
| SvelteKit | `src/routes/hallmark-v<n>/+page.svelte` |
| Astro | `src/pages/hallmark-v<n>.astro` |
| Nuxt | `pages/hallmark-v<n>.vue` |
| Remix | `app/routes/hallmark-v<n>.tsx` |

**No file router** (CRA, Vite SPA with react-router, anything unrecognized): do not wire router config; touching a routes array is exactly the shared-file edit § 4 forbids. Fall back to greenfield-style standalone sketches built on the pre-flight tokens, and tell the user the winner gets implemented into the real app afterwards.

**Root-layout warning.** If the app's root layout ships its own nav or shell, the directions will render inside it, chrome and all. Say so before building, and offer sketch mode (greenfield frames) when the shell would drown the comparison. A direction's own nav inside the app's nav is a confusing artifact, not a bug; name it once so the user does not think it is one.

## 3 · Shared ceremony

**Do:** run SKILL.md Steps 0-1 exactly ONCE for the whole run: one pre-flight scan, one three-question gate, one genre detection. Read `.hallmark/log.json` once. Three directions never means three interrogations, and "go ahead" at the gate covers all three.

Then state **the direction plan**: a markdown table, said before any code. It replaces three separate Picks blocks; do not also narrate per-direction picks.

| # | Title | Macrostructure | Theme | Axes | Nav | Footer | Enrichment |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | The broadsheet | Long Document | Newsprint | light / roman-serif / warm | N6 | Ft2 | none |
| 2 | The control room | Workbench | Cobalt | mid / grotesk / cool | N13 | Ft5 | E1 Tier-A |
| 3 | The poster wall | Manifesto | Midnight | dark / display-slab / chromatic | N9 | Ft8 | none |

**Divergence rules, hard:**

- Three **different macrostructures from different structural families**: grid-led (Bento, Catalogue, Portfolio Grid, Ecosystem Index) · document-led (Long Document, Letter, Conversational FAQ, Index-First) · poster-led (Manifesto, Marquee Hero, Quote-Led, Type Specimen) · product-led (Workbench, Feature Stack, Stat-Led, Component Playground). One family, one direction. Three shapes from one family is a colour swap wearing three hats.
- Themes **pairwise distinct on ALL THREE Rotation axes** (paper band, display style, accent hue; SKILL.md § Rotation). Three paper bands, three directions: this forces one dark, one mid, one light paper. Non-negotiable; it is what makes the picker grid legible at a glance.
- Three **distinct nav codes** and three **distinct footer codes** (index in [`component-cookbook.md`](../component-cookbook.md)).
- Every tuple also respects the log's last-3 rotation (SKILL.md § Rotation), because the winner gets logged and must not collide with history.

**Titles** are short evocative names ("The broadsheet", "The control room"), never theme names or "Option A". The title is what the user will say back to you in chat, so make each one unmistakable.

**Direction roles:** direction 1 is genre-faithful (what the brief most expects, done properly); direction 2 pulls from an adjacent genre; direction 3 is the wildcard. When Step 1's custom signals fired, the custom route ([`custom-theme.md`](../custom-theme.md)) is allowed for direction 3, run at draft depth: slate, draw, and direction contract, no finish review until it wins.

End the plan with the accountability beat, verbatim: *"Redirect now or I build all three."* A beat, not a blocking question; silence means build.

## 4 · Build recipes

**Parallel path** (harness supports subagents): after the table, spawn one subagent per direction. Each receives the brief + the inferred audience/use/tone + its tuple row + its output target + the **fragment contract**. Briefing template:

```
You are building direction <n> of 3 for a Hallmark variants run.
Brief: <brief>. Inferred: audience <a> · use <u> · tone <t> · genre <g>.
Tuple: "<title>" · <macro> · <theme> · axes <axes> · nav <N#> · footer <Ft#> · enrichment <E# or none>.
Output: <absolute path to v<n>/index.html, or the route file from the recipes table>.
Include this chip tag verbatim: <the § 4 snippet with data-direction="<n>">.
Load ONLY references/macrostructures/<picked file>, the picked component archetype
files, and the universal set (typography · color · layout-and-space · motion ·
copy · anti-patterns). Do not read log.json. Do not append memory. Do not run
the full gate sweep: Core-15 plus contrast gates 40-41 only. Styles fully
self-contained. Stamp the CSS with `direction: <n> of 3 · run: <run-id>`.
```

**Sequential fallback** (no subagents): same table, build v1 then v2 then v3 in one context, universal references loaded once and reused. Same fragment contract per direction, minus the spawning.

**Draft quality bar.** Drafts get an abbreviated pass: the **Core-15 sweep** ([`slop-test.md`](../slop-test.md) § Core-15) plus contrast gates 40-41. ONLY THE WINNER runs the full 58-gate sweep, later, at § 7. Do not spend three full sweeps on two pages that will be archived.

**Self-containment.** Each direction is fully self-contained: its own inline styles or a sibling css file in its folder. No shared `tokens.css` across directions; shared tokens would quietly homogenize the three systems you are trying to keep apart. In routes mode, hang each direction's token block on the route's own root element (a wrapper class), not `:root`, so three simultaneous routes cannot fight each other or leak into the app shell; every colour still references a `var(--*)` per the critical floor. The winner gets properly tokenized at promotion.

**Greenfield target:** `.hallmark/variants/<run-id>/v<n>/index.html`. Sibling assets referenced by relative path (`./style.css`), never root-absolute, because the frame serves under `/frame/<n>/`.

**Routes mode target:** the framework route from the § 2 table. Author the chip script tag into each generated route, exactly this shape (adjust `data-direction`, port, and base):

```html
<script src="http://127.0.0.1:<port>/chip.js" data-direction="2" data-of="3" data-mode="routes" data-base="http://localhost:3000/hallmark-v"></script>
```

Greenfield frames carry the chip too, with `data-mode="greenfield"` and `data-base="http://127.0.0.1:<port>/frame/"`. What the chip does (so you can describe it, not so you can rebuild it):

- Renders a small fixed bottom-center pill: "Direction 2/3", dismissible with an x.
- Arrow buttons and ArrowLeft/ArrowRight flip to the sibling direction via `data-base` + n.
- A Pick and a Riff button POST to `/api/pick` on the chip's own origin.
- On fetch failure the pill swaps to the text *"picker offline: tell your agent - pick 2"*, so the flow survives the server dying.
- Respects `prefers-reduced-motion`; nothing animates beyond opacity.

Assume port 4180 when writing the tags; § 9 covers the walk-up case.

**Routes-mode discipline:** never touch shared stylesheets, config files, or `package.json` during variant generation. Each direction is additive route files only. Write all of a direction's files in **one batch** so the dev server hot-reloads once per direction, not once per file.

## 5 · Serve and hand over

Start the picker (idempotent; safe to re-run):

```
node <skill-dir>/scripts/variants/start.mjs --run <run-dir>
```

`start.mjs` ensures the skeleton + manifest exist, reuses a live server whose `/api/state` identity matches this run, otherwise spawns `serve.mjs` detached (stdout/err to `server.log`), and prints exactly:

```
PICKER http://127.0.0.1:<port>
AWAIT  node <abs-path>/await.mjs --run <run-dir> --timeout 540
DRAIN  node <abs-path>/await.mjs --run <run-dir> --drain
```

Relay the picker URL to the user in one line: *"Flip with arrows or the number keys; Pick when one clicks; Riff deals a fourth."* If the harness has a browser preview pane, open the picker there too.

What the user sees (built by `core.mjs`, dark neutral shell, system-ui, self-contained):

- An overview grid of the three directions as scaled live iframes: real 1280x800 frames scaled down via transform, non-interactive in the grid.
- Each frame labelled with the direction's title and its macro/theme/nav/footer meta.
- Click or 1/2/3 enters full-size single view; arrows cycle directions.
- P or the Pick button confirms; R or the Riff button deals a fourth, with an optional one-line steer prompt.
- The page binds to 127.0.0.1 only and polls `/api/state` every 2 seconds, so manifest updates (a riff landing) appear without a restart.

**No-server variant:** `node <skill-dir>/scripts/variants/start.mjs --run <run-dir> --static` skips the server, writes `compare.html` into the run dir (self-contained, srcdoc-inlined iframes of v1-v3, keyboard 1/2/3 and arrows, a banner telling the user to reply "pick N" in chat), and prints its path. Reach for it when a long-lived process is unwelcome but node exists.

## 6 · The poll ladder

The pick comes back through `await.mjs`:

```
node <abs-path>/await.mjs --run <run-dir> [--drain] [--timeout <sec>] [--ack <id>] [--note "<line>"] [--stop]
```

Exit codes: **0** = one request claimed (atomic rename to `.working`) and printed as JSON on stdout · **2** = idle/timeout · **1** = error.

Handling on exit 0:

1. Parse the JSON from stdout. A pick looks like:

   ```json
   { "id": "0001-pick", "action": "pick", "choice": 2 }
   ```

   A riff carries `"action": "riff"` and an optional `"steer"` line instead of `choice`.
2. Dispatch on `action`: `"pick"` → § 7, `"riff"` → § 8.
3. Ack: `--ack <id>` moves the claimed file to `requests/done/`; `--note "<line>"` records what you did with it.
4. A request carrying `"redelivered": true` is an orphaned claim older than 5 minutes (a previous attempt died mid-handle); handle it normally.

On exit 1: read `server.log`, then fall back to chat.

Pick the rung your harness supports:

1. **Claude Code:** blocking wait with a long shell timeout (>= 600000 ms), or run the same command in the background and act when it exits:

   ```
   node <abs-path>/await.mjs --run <run-dir> --timeout 540
   ```

   Between turns, `--drain` prints ALL queued requests as a JSON array (exit 2 when empty); drain at the top of any turn where the user might have clicked meanwhile.

2. **One-shot harnesses (Cursor, Codex):** short loops:

   ```
   node <abs-path>/await.mjs --run <run-dir> --timeout 60
   ```

   After 3 consecutive idle exits, stop polling and ask in chat: *"Reply 1, 2, or 3 (or riff)."*

3. **No node / no scripts installed** (the Cursor `.mdc` install channel ships no scripts): skip the server entirely. Write `compare.html` by hand into the run dir, in the static template shape, and ask for the pick in chat. The hand-written file must be:

   - Fully self-contained: each direction's page inlined into an iframe `srcdoc` attribute (escape quotes), no external requests.
   - Navigable: keyboard 1/2/3 jumps to a direction, arrow keys cycle, plus visible buttons for mouse users.
   - Honest about the channel: a fixed banner reading "Reply in chat: pick 1, 2, or 3 (or riff)". No Pick button that pretends to work.
   - Labelled: each frame shows its direction title and macro/theme meta from the plan table.

**THE FLOW NEVER DEAD-ENDS.** A chat reply naming a direction ("2", "pick 2", "the poster one") is a valid pick channel at every rung, always, even while the server is up. After acting on a chat pick, run `--drain` once and ack anything stale so `requests/` ends empty.

## 7 · Pick and continue

On `{"action": "pick", "choice": n}` or the chat equivalent:

**Greenfield:**

1. Copy the winner into place as the normal build output (wherever a default Hallmark build would land for this project).
2. If `--sketch` was used, complete it to full depth first: remaining sections, states, responsive pass.
3. Run the FULL 58-gate sweep + sloplint, fix every FAIL, stamp, emit `tokens.css`, exactly as SKILL.md Steps 6-7 demand. The draft's abbreviated pass counts for nothing here; the winner earns the whole bar.

**Routes mode:** state the file plan first: the standard safety rail, promoting into real targets needs the user's ok. For example:

> Promoting direction 2. Plan: modify `app/page.tsx` (the new design), create `app/tokens.css`, delete `app/hallmark-v1/`, `app/hallmark-v2/`, `app/hallmark-v3/`. Ok?

Then implement the winning direction into the real app as a normal Hallmark build: tokenize into the project's system (real `:root` tokens now, not the draft's scoped block), strip the chip tag, delete the other variant routes.

**Always, both modes:**

- Archive all three directions to `.hallmark/variants/<run-id>/` (never hard-delete; this is what makes "show me the 3 again" free). In routes mode, copy the route files into the run dir before deleting them from the app.
- Ack the request (`--ack <id>`), stop the server (`await.mjs --run <run-dir> --stop`, which POSTs `/api/shutdown` via `server.json` and clears it), and report the cleanup in one line: *"Archived 3 directions to .hallmark/variants/2026-07-23-a/, picker stopped, log updated."*
- Set `"picked": n` in the manifest.
- Append the log entry, winner fields at top level so SKILL.md § Rotation reads it like any other run:

```json
{ "date": "...", "macrostructure": "<winner>", "theme": "<winner>", "nav": "...",
  "footer": "...", "enrichment": "...", "brief": "...", "verb": "variants",
  "picked": 2,
  "variants": [ {"n": 1, "...": "..."}, {"n": 2, "...": "..."}, {"n": 3, "...": "..."} ] }
```

Each `variants[]` row carries that direction's title, macrostructure, theme, nav, footer, and enrichment, so a future run can rotate away from all three, not just the winner.

## 8 · Riff

On `{"action": "riff", "steer": "..."}` (steer optional) or a chat ask ("riff", "deal another", "none of these"):

- Plan direction 4: a macrostructure different from all three, from whichever structural family remains; a theme distinct on as many axes as remain. With only three paper bands, direction 4 relaxes to >= 2 axes distinct against each earlier direction; say so in the one-line plan.
- Honor the steer line as art direction ("warmer", "like 2 but dark"). Where the steer and the divergence default conflict, the steer wins; the user is telling you where the target is.
- Build v4 under the same fragment contract, write `v4/` (or the `hallmark-v4` route with a chip tag reading `data-direction="4" data-of="4"`), append its tuple to `manifest.json` `directions` with `"status": "ready"`, then ack the riff request. The picker's 2-second poll shows the new direction without a restart. Bump the earlier chips' `data-of` only if trivially cheap; otherwise leave them, the arrows still work.
- A second riff repeats the ritual as direction 5. If the user riffs twice without picking, ask what is missing instead of dealing a sixth.

## 9 · Risks and edge notes

- **Iframe-refusing dev servers** (`X-Frame-Options` / CSP `frame-ancestors`): the picker cannot embed the routes and shows open-in-tab cards instead. The chip still works in the real tab, so flipping and picking survive; nothing to fix.
- **File watchers that restart on new files:** batch writes (§ 4). One write per direction, never a file-by-file trickle that restarts the dev server three times.
- **Tailwind content globs** pick up new `hallmark-v*` routes automatically. Fine; no config edit, and config edits are forbidden anyway.
- **Port conflicts:** `serve.mjs` tries 4180 and walks up to 4189. If the printed PICKER port differs from the 4180 you stamped into chip tags, update `src` and `data-base` in each direction once.
- **Stale server from a previous run:** `start.mjs` checks the live server's `/api/state` identity against this run; a matching run is reused, anything else is replaced and `server.json` rewritten. The server also self-shuts after 30 minutes without picker polls, so a forgotten run does not linger.
- **Dev server restarts mid-run** (routes mode): the routes are plain files, so they come back with it; the chip reconnects on its next click. Nothing to do.
- **Abandoned run:** the user walks away without picking. The server self-shuts, the manifest keeps `"picked": null`, and a later bare `hallmark variants` resumes exactly this run (§ 1). Do not delete an unpicked run.
- **Uncommitted variant routes:** the `hallmark-v*` routes are throwaway; if the user mentions committing mid-run, suggest waiting until § 7 deletes them.
- **Token budget:** a variants run costs roughly 2.3x one build. `--sketch` is the cheap path: hero + one signature section + footer per direction, winner completed after the pick. Offer it unprompted when the brief is heavy or the model context is tight.
