# Hallmark eval harness

Repo-internal tooling for benchmarking the Hallmark skill across models and prompt packs.
**Not shipped with the skill**: the `package.json` `files` whitelist only includes `skills/`, so nothing in `eval/` reaches the published package.

## Two-tier design

- **Tier B (this directory, implemented)**: bare API calls. The skill text is compiled into a system prompt (a "pack"), the brief is the user message, and the model gets exactly one nudge if it produces no HTML. No tools, no file system, no vision. This measures how much of Hallmark survives as pure prompt.
- **Tier A (future work)**: a real-harness wrapper that runs each arm inside its native agentic harness (Claude Code with the installed skill, plus equivalent open-model harnesses), where the skill can read its own reference files and run `sloplint.mjs` itself. The run layout below is designed so Tier A cells can drop into the same `runs/` tree under different arm ids.

## Files

| File | Role |
| --- | --- |
| `briefs.json` | The 6 briefs, `b1`..`b6`, each with an `expect` block (`page`, `component`, or `study-decline`). b1-b3 are parity reruns of hallmark-lab gen-01..03; b4 tempts fabricated metrics; b5 tests component routing; b6 probes the no-vision capability check. |
| `models.json` | The model arms (Anthropic + OpenAI-compatible endpoints) and the key files to read variable names from. `enabled: false` arms are skipped by `--arm all` but run when named explicitly. |
| `make-pack.mjs` | Compiles the skill into a system prompt. `--pack floor` is the Critical floor + Flow at a glance sections of `SKILL.md` behind a 3-line one-shot preamble; `--pack full` is all of `SKILL.md` plus typography, color, anti-patterns, copy, and the gate list from `slop-test.md`, with file-path separators. |
| `gen-direct.py` | Runs the (brief x arm x pack) matrix sequentially against the raw APIs. Stdlib only. |
| `runs/` | One directory per cell: `runs/<briefId>/<armId>-<pack>/` with `index.html`, `raw.txt`, `run.json`, and later `score.json` (sloplint) + `judge.json` (vision judge). |
| `_shots/` | Screenshots: `<briefId>-<armId>-<pack>-{hero,full,mobile}.png`. |
| `_packs/` | Compiled pack cache written by `gen-direct.py` (regenerated every invocation). |
| `screenshot.mjs` | Hero (1280x800 viewport), full (1280 full-page), mobile (375x812 full-page) PNGs into `_shots/`. Uses puppeteer-core with the installed Chrome when the package is available, otherwise spawns Chrome headless with `--screenshot` (no npm install needed). `CHROME_PATH` overrides the binary. |
| `score.mjs` | Runs `skills/hallmark/scripts/sloplint.mjs <run>/index.html --json` per run and writes `score.json` with a `floorClean` flag (gates 1, 10, 14, 20, 26, 27, 34, 38a, 48, 54 free of FAILs). Component scope for any brief whose `expect.scope` is `component` (b5). Writes `{unavailable: true}` and continues if sloplint is absent or errors. |
| `judge.py` | Stdlib-only vision judge (claude-fable-5) over the hero + mobile shots. Writes `judge.json`: six pre-emit axes 1-5 (Philosophy, Hierarchy, Execution, Specificity, Restraint, Variety), verdicts on judged gates 6, 9, 42, 43, 45, and an overall 1-10 with a one-line rationale. Skips b5/b6 and cells with an existing `judge.json`. |
| `report.mjs` | Assembles `eval/index.html`: a static, self-contained dark gallery with one row per brief, one card per arm-pack cell (hero thumb, runstats, sloplint and judge chips, click opens the artifact), and a per-arm summary table at the top compared against `fable-baseline`. |
| `serve.py` | `http://127.0.0.1:4201` rooted at `eval/` (loopback only). |
| `run-matrix.py` | Orchestrates gen -> screenshot -> score -> (repair loop) -> judge -> report. `--repair N` re-prompts failing cells through `gen-direct.py --repair`; see the docstring at the top of `run-matrix.py` for the loop contract. |

## Running the matrix

```sh
# Inspect a pack
node eval/make-pack.mjs --pack floor --list
node eval/make-pack.mjs --pack full            # size summary only
node eval/make-pack.mjs --pack full --out /tmp/full-pack.txt

# See what would run, and whether keys resolve (names only, values never printed)
python3 eval/gen-direct.py --brief all --arm all --pack floor --dry-run

# One cell
python3 eval/gen-direct.py --brief b1 --arm fable-baseline --pack floor

# Full enabled matrix, one pack at a time
python3 eval/gen-direct.py --brief all --arm all --pack floor
python3 eval/gen-direct.py --brief all --arm all --pack full

# Re-run a cell that already has a run.json
python3 eval/gen-direct.py --brief b4 --arm glm52-together --pack full --force

# Disabled arms run only when named explicitly
python3 eval/gen-direct.py --brief all --arm deepseek-openrouter --pack full
```

## Scoring, judging, reporting

```sh
# Whole pipeline in one shot, with up to 2 repair rounds
python3 eval/run-matrix.py --repair 2

# One cell end to end
python3 eval/run-matrix.py --brief b1 --arm glm52-together --pack full

# Re-score and re-report existing artifacts without regenerating
python3 eval/run-matrix.py --skip-gen --force

# Individual stages
node eval/screenshot.mjs --brief b4 --force
node eval/score.mjs --brief b5
python3 eval/judge.py --arm fable-baseline
node eval/report.mjs
python3 eval/serve.py     # then open http://127.0.0.1:4201

# Repair pass by hand (reads score.json, re-prompts failing cells, re-scores)
python3 eval/gen-direct.py --brief all --arm all --pack floor --repair 1
```

Keys come from the `keyFiles` listed in `models.json` with the process environment as fallback. As of the last check, `OPENROUTER_API_KEY` is not in either key file; export it (or add it to a key file) before running the OpenRouter arms.

Notes:

- Cells with an existing `run.json` are skipped unless `--force`.
- `b6` (vision-probe) is expected to produce **no** artifact: `ok: false` there is the desired mechanical outcome, and the judge scores the decline text in `raw.txt`.
- `costUSD` is `null` for now; pricing per arm can be added to `models.json` later without changing the layout.

## Acceptance criteria (run phase)

Per arm, on the enabled matrix:

1. **6/6 artifacts** per arm (with b6 counted as a pass when it correctly declines instead of emitting a page).
2. **>= 90 percent Tier-1 mechanical pass with zero repair**: `sloplint.mjs` on the extracted `index.html` as generated, no hand edits.
3. **Zero floor-subset FAILs**: gates 1, 10, 14, 20, 26, 27, 34, 38a, 48, 54.
4. **Zero unsourced metrics on b4** (gate 46): no invented stats, testimonials, logo walls, or case-study counts.
5. **Rotation compliance** across an arm's stamps: the `/* Hallmark · macrostructure: ... */` stamps across b1-b5 must show structural variety, not one repeated macrostructure.
6. **Judge mean within 1.5 points of the fable-baseline arm** on the vision-judge rubric.
