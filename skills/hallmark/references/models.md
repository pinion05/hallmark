# Running Hallmark on other models

This file loads when the running model is not Claude inside Claude Code; it tunes execution, never standards.
The Critical floor in SKILL.md binds regardless of anything here. Nothing below relaxes a gate.
When in doubt, do the simple sequential thing: one tool call at a time, the numbered steps in order.

## Model quirks

Family-level only; no version pins. If your family is not listed, run the DeepSeek / Qwen / MiniMax rows: assume no vision until confirmed, follow the skeleton strictly.

| Model family | Quirk | What to do |
| --- | --- | --- |
| GLM (Z.ai) | Text-only, no vision | Never claim to have seen an image. Take every text-only fallback path: `study` image mode is unavailable (offer the routes in `references/study.md` § Capability check), gates 35 and 44 run on their numeric paths (verify gradient stops, clamp maxima, line-heights, and padding ratios arithmetically, not by eye), and sloplint replaces eyeballing wherever Node exists. |
| GLM (Z.ai) | Strong single-shot HTML | Prefer fewer, larger emits: one `index.html` plus `tokens.css` beats a long chain of small edits. Plan the whole page, then emit it whole. |
| GLM (Z.ai) | Restating drift | Do not restate the brief back to the user. Start at Step 0 directly. |
| Kimi (Moonshot) | Vision available | Image mode in `study`, visual gate passes, and screenshot checks all work as written. |
| Kimi (Moonshot) | Temperature is fixed by the API | Never set or suggest a temperature, anywhere. |
| Kimi (Moonshot) | Reasoning always on | No "think step by step" scaffolds; they add tokens, not quality. Sequence dependent tool calls one at a time. |
| DeepSeek / Qwen / MiniMax | Vision uncertain | Run the same no-vision capability check as GLM unless a vision variant is confirmed. Cannot retrieve and actually see the image means saying so and taking the text routes. |
| DeepSeek / Qwen / MiniMax | Flow drift | Follow the numbered flow skeleton strictly: Step 0 through the slop test, in order. |
| DeepSeek / Qwen / MiniMax | Preview skipping | Never skip the Step 5 preview. The user approves the spec before code, on every model. |

## Rules for every model

1. If you notice you have restated the plan twice, stop narrating. Jump to Step 6 and build.
2. Never write a gate count you did not verify. A fabricated 58/58 is slop; run the gates and report the true count, or name the sweep you actually ran.
3. If a referenced file fails to load, proceed on the Critical floor and tell the user which file was unavailable. Do not improvise the missing protocol silently.
4. No parallel tool calls unless your harness reliably supports them. Unsure means sequential.
5. When a step names a tool your harness lacks, do the intent with what you have: any URL-fetch tool stands in for WebFetch, any screenshot path stands in for visual checks, inline work stands in for subagents. Those tools are optional; the checks they serve are not.
6. No structured-question tool means asking the Step 1 questions (Audience / Use case / Tone) as plain chat text and waiting for the reply before building.

## What this file never does

- Never adds, removes, or renumbers gates. The slop test is 58 gates (numbered 1-57 plus 38a) on every model.
- Never reorders the flow. Step 0 first, preview at Step 5, build at Step 6, slop test before handing back.
- Never overrides SKILL.md. On any conflict between this file and SKILL.md, SKILL.md wins.
