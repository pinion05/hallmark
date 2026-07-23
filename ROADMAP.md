# Roadmap

What's next. (v1.2 shipped: the `variants` verb + picker, the custom art-direction ritual with the draw and the direction atlas, the sloplint mechanical checker, open-model hardening + the eval harness, and the big token diet.)

---

## Now

**Land the new themes.** Five candidates + two alternates are proposed with visuals in `site/_proposals/five-themes.html` (Plate, Grid, Bench, Maison, Field; Ledger, Arcade). Waiting on the pick; each chosen theme gets tokens, axes comments, a spec file, and two example builds.

**Run the eval matrix on real endpoints.** `eval/` is built; run the 6-brief matrix against GLM (Together) and Kimi (OpenRouter), iterate the skill text until the acceptance criteria in `eval/README.md` hold, and publish the compare gallery. Re-run when Together lands Kimi K3.

**Nanobanana hook for image-heavy briefs.** Recommend-only today. First-class hook: write the prompt, invoke the API, ingest the image, wire it into the build (cache by prompt hash). Pairs with the Plate theme candidate.

---

## Next

**sloplint as an edit-time hook.** The checker currently runs at Step 7. Wire it as a PostToolUse hook so mechanical slop is caught the moment a file is written, before the model moves on.

**Theme spec files for the remaining 16 themes.** Only Carnival, Cobalt, Hum, and Lumen carry signature-move specs today. Cap each at ~150 lines; the tokens block cannot encode voice.

**Tier A harness runs.** `eval/gen-cli.mjs`: drive the real Claude Code binary headless per model (Z.ai / Moonshot Anthropic-shaped endpoints) to test skill triggering and load-order discipline, not just instruction-following.

**Brand-first flow.** From a short product description, generate a complete brand (palette, type, voice, imagery) locked into a `design.md`; then every page builds against it.

**Theme-aware motion tokens.** Per-theme `--dur-micro` / `--dur-short` / `--dur-long`; Atelier should feel slower than Brutal.

**Multi-page coherence.** Lock the brand axes, vary the page-voice axes: different pages of the same site, not different sites.

**`study` reads your own codebase.** Third input mode: a path. Walk the files, extract the tokens + fingerprint in use, emit the same `design.md`.

**Structural cookbook.** Twelve to twenty worked fingerprints with short HTML/CSS sketches; patterns are easier to reach for than principles.

**Charts reference.** A `data-viz.md`: small multiples over dense singles, one accent + neutrals, the worst chart types banned outright.

---

## Later

- **Grow the direction atlas.** More lineages, usage-weighted dealing, a ratings pass so strong directions surface more often.
- **Per-harness prebuilt bundles.** Compiled copies for Gemini CLI, Copilot, OpenCode and friends, with placeholder substitution per harness.
- **`hallmark explain`** - narrate the choices axis by axis; the skill teaches.
- **Negative-capability rules** - for each anti-pattern, the perceptual reason it fails.
- **Emotion-first prompting** - *nostalgic · optimistic · sceptical* instead of tone adjectives.
- **Sound + haptic policy** - when web sound is acceptable without kitsch.
- **Live preview as an MCP server** - watch, render, screenshot, feed back into the gate sweep (the `--render` tier is the seed of this).
