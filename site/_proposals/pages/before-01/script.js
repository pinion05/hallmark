/* Vesper — Lumen Night Foundry build
 * Procedural apparatus + meter, accessible accordion, inline-form states.
 * All motion respects prefers-reduced-motion.
 */
(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 1. Meter strip — 64 ticks from a layered envelope (reads as measured) ── */
  const bars = document.querySelector(".meter__bars");
  if (bars) {
    const N = 64;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      // gaussian centre swell + a slow sine ripple — not a flat row
      const env =
        Math.exp(-Math.pow((t - 0.5) * 2.4, 2)) * 0.8 +
        Math.abs(Math.sin(t * Math.PI * 5)) * 0.22;
      const h = Math.max(0.14, Math.min(1, env));
      const span = document.createElement("span");
      span.style.setProperty("--h", (h * 100).toFixed(1) + "%");
      span.style.setProperty("--o", (0.35 + h * 0.55).toFixed(2));
      frag.appendChild(span);
    }
    bars.appendChild(frag);
  }

  /* ── 2. Spectrum bars inside the dial — the voice being read ── */
  const spectrum = document.querySelector(".dial__spectrum");
  if (spectrum) {
    const heights = [38, 64, 92, 70, 48, 80, 58, 100, 72, 44, 86, 54];
    const frag = document.createDocumentFragment();
    heights.forEach((h, i) => {
      const span = document.createElement("span");
      span.style.setProperty("--h", h + "%");
      span.style.setProperty("--d", (i * 160) + "ms");
      frag.appendChild(span);
    });
    spectrum.appendChild(frag);
  }

  /* ── 3. Accordion — animate grid-template-rows without losing <details> a11y ── */
  // Under reduced motion, do nothing — native <details> + the CSS
  // `[open] > .qa__a { grid-template-rows: 1fr }` fallback handle show/hide.
  if (!reduce) document.querySelectorAll(".qa__item").forEach((item) => {
    const panel = item.querySelector(".qa__a");
    const summary = item.querySelector(".qa__q");
    if (!panel || !summary) return;

    // collapsed by default via inline rows; open items start expanded
    panel.style.gridTemplateRows = item.open ? "1fr" : "0fr";

    summary.addEventListener("click", (e) => {
      e.preventDefault();

      if (item.open) {
        // closing
        panel.style.gridTemplateRows = "1fr";
        requestAnimationFrame(() => {
          panel.style.transition = "grid-template-rows var(--dur-long) var(--ease-in-out)";
          panel.style.gridTemplateRows = "0fr";
        });
        const onEnd = (ev) => {
          if (ev.propertyName !== "grid-template-rows") return;
          item.open = false;
          panel.style.transition = "";
          panel.removeEventListener("transitionend", onEnd);
        };
        panel.addEventListener("transitionend", onEnd);
      } else {
        // opening — set open first so content is measurable, then grow
        item.open = true;
        panel.style.gridTemplateRows = "0fr";
        requestAnimationFrame(() => {
          panel.style.transition = "grid-template-rows var(--dur-long) var(--ease-out)";
          panel.style.gridTemplateRows = "1fr";
        });
      }
    });
  });

  /* ── 4. Inline form — touched validation + busy / success / error states ── */
  const form = document.getElementById("waitlist");
  if (form) {
    const input = form.querySelector("#email");
    const help = document.getElementById("email-help");
    const submit = form.querySelector(".cta-form__submit");
    const restingHelp = help.textContent;
    let touched = false;

    const setHelp = (msg, state) => {
      help.textContent = msg;
      if (state) help.dataset.state = state;
      else delete help.dataset.state;
    };

    const validate = () => {
      const ok = input.checkValidity() && input.value.trim() !== "";
      input.setAttribute("aria-invalid", ok ? "false" : "true");
      if (!ok && touched) {
        setHelp(
          input.value.trim() === ""
            ? "add an email so we know where to send the key."
            : "that doesn’t look like an email — check for a typo.",
          "error"
        );
      } else if (ok) {
        setHelp(restingHelp);
      }
      return ok;
    };

    input.addEventListener("blur", () => { touched = true; validate(); });
    input.addEventListener("input", () => { if (touched) validate(); });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      touched = true;
      if (!validate()) { input.focus(); return; }

      form.classList.add("is-busy");
      submit.disabled = true;
      input.disabled = true;

      // simulate the request — replace with a real endpoint in production
      setTimeout(() => {
        form.classList.remove("is-busy");
        submit.disabled = false;
        input.disabled = false;
        input.value = "";
        input.setAttribute("aria-invalid", "false");
        setHelp("on the list. watch your inbox for a key.", "success");
      }, reduce ? 200 : 850);
    });
  }
})();
