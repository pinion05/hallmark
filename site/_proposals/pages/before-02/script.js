/* Nocturne — a browser-based drum machine.
 * The audio is synthesised live with the Web Audio API; there are no samples.
 * Nothing makes sound until the listener presses Play (browser autoplay policy,
 * and the right manners for a late-night tool).
 */
(function () {
  "use strict";

  var STEPS = 16;
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Track model: name, role label, default pattern, synth voice id.
  var TRACKS = [
    { name: "Kick",  role: "55 Hz",  voice: "kick"  },
    { name: "Snare", role: "noise",  voice: "snare" },
    { name: "Hat",   role: "hi-pass", voice: "hat"  },
    { name: "Clap",  role: "burst",  voice: "clap"  }
  ];

  // A musical starting pattern so the first paint already reads as a beat.
  var DEFAULT = [
    [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,1,0],   // kick
    [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],   // snare
    [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,1],   // hat
    [0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0]    // clap
  ];

  // ── State ────────────────────────────────────────────────────
  var pattern = [];     // pattern[track][step] = 0|1
  var muted = [false, false, false, false];
  var tempo = 92;
  var playing = false;
  var current = -1;     // current step while playing
  var timer = null;
  var audio = null;     // AudioContext, lazily created

  var grid = document.getElementById("grid");
  var playBtn = document.getElementById("play");
  var playLabel = document.getElementById("play-label");
  var tempoInput = document.getElementById("tempo");
  var tempoOut = document.getElementById("tempo-readout");
  var clearBtn = document.getElementById("clear");
  var scopeLine = document.getElementById("scope-line");
  var cells = [];       // cells[track][step] = button element

  // ── Pattern <-> URL ──────────────────────────────────────────
  // Each track's 16 steps pack into a 4-hex string (16 bits). Four tracks
  // join with "-" in the hash, e.g. #b=8888-0808-aaab-0020
  function encode() {
    return TRACKS.map(function (_, t) {
      var bits = 0;
      for (var s = 0; s < STEPS; s++) { if (pattern[t][s]) bits |= (1 << s); }
      var hex = bits.toString(16);
      while (hex.length < 4) { hex = "0" + hex; }
      return hex;
    }).join("-");
  }

  function decode(str) {
    if (!str) { return null; }
    var parts = str.split("-");
    if (parts.length !== TRACKS.length) { return null; }
    var out = [];
    for (var t = 0; t < parts.length; t++) {
      var bits = parseInt(parts[t], 16);
      if (isNaN(bits)) { return null; }
      var row = [];
      for (var s = 0; s < STEPS; s++) { row.push((bits >> s) & 1); }
      out.push(row);
    }
    return out;
  }

  function syncUrl() {
    try {
      var hash = "#b=" + encode();
      history.replaceState(null, "", hash);
    } catch (e) { /* file:// or sandbox may block replaceState — ignore quietly */ }
  }

  function readUrl() {
    var m = (location.hash || "").match(/b=([0-9a-f-]+)/i);
    return m ? decode(m[1]) : null;
  }

  // ── Build the grid DOM ───────────────────────────────────────
  function build() {
    var fromUrl = readUrl();
    pattern = fromUrl
      ? fromUrl
      : DEFAULT.map(function (row) { return row.slice(); });

    grid.innerHTML = "";
    cells = [];

    TRACKS.forEach(function (track, t) {
      var rowCells = [];
      var trackEl = document.createElement("div");
      trackEl.className = "track";

      // Mute toggle as the row label
      var label = document.createElement("button");
      label.type = "button";
      label.className = "track__label";
      label.setAttribute("aria-pressed", "false");
      label.setAttribute("aria-label", "Mute " + track.name + " track");
      label.innerHTML =
        '<span class="track__name">' + track.name + "</span>" +
        '<span class="track__role">' + track.role + "</span>";
      label.addEventListener("click", function () {
        muted[t] = !muted[t];
        label.setAttribute("aria-pressed", muted[t] ? "true" : "false");
      });
      trackEl.appendChild(label);

      var stepsRow = document.createElement("div");
      stepsRow.className = "steps-row";
      stepsRow.setAttribute("role", "group");
      stepsRow.setAttribute("aria-label", track.name + " steps");

      for (var s = 0; s < STEPS; s++) {
        var cell = document.createElement("button");
        cell.type = "button";
        cell.className = "cell";
        cell.dataset.track = String(t);
        cell.dataset.step = String(s);
        if (s % 4 === 0) { cell.dataset.beat = "1"; }
        cell.setAttribute("aria-pressed", pattern[t][s] ? "true" : "false");
        cell.setAttribute("aria-label",
          track.name + ", step " + (s + 1) + (s % 4 === 0 ? ", downbeat" : ""));
        cell.addEventListener("click", onToggle);
        stepsRow.appendChild(cell);
        rowCells.push(cell);
      }
      trackEl.appendChild(stepsRow);
      grid.appendChild(trackEl);
      cells.push(rowCells);
    });

    drawScope();
  }

  function onToggle(e) {
    var cell = e.currentTarget;
    var t = +cell.dataset.track, s = +cell.dataset.step;
    pattern[t][s] = pattern[t][s] ? 0 : 1;
    cell.setAttribute("aria-pressed", pattern[t][s] ? "true" : "false");
    drawScope();
    syncUrl();
    // Audible feedback when the machine is already running and audio is live.
    if (pattern[t][s] && audio) { trigger(TRACKS[t].voice, audio.currentTime); }
  }

  // ── Scope: a hand-drawn envelope of the pattern's density ────
  function drawScope() {
    if (!scopeLine) { return; }
    var pts = [];
    for (var s = 0; s < STEPS; s++) {
      var hits = 0;
      for (var t = 0; t < TRACKS.length; t++) { if (pattern[t][s]) { hits++; } }
      var x = (s + 0.5) * (320 / STEPS);
      // more hits on a step -> taller spike (inverted y; 40 tall viewport)
      var y = 36 - (hits / TRACKS.length) * 30;
      pts.push(x.toFixed(1) + "," + y.toFixed(1));
    }
    scopeLine.setAttribute("points", pts.join(" "));
  }

  // ── Audio engine — synthesised voices ────────────────────────
  function ensureAudio() {
    if (audio) { return audio; }
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) { return null; }
    audio = new Ctx();
    return audio;
  }

  function env(node, time, peak, decay) {
    var g = audio.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(peak, time + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, time + decay);
    node.connect(g);
    g.connect(audio.destination);
    return g;
  }

  function noiseBuffer(dur) {
    var len = Math.floor(audio.sampleRate * dur);
    var buf = audio.createBuffer(1, len, audio.sampleRate);
    var data = buf.getChannelData(0);
    for (var i = 0; i < len; i++) { data[i] = Math.random() * 2 - 1; }
    return buf;
  }

  function trigger(voice, time) {
    if (!audio) { return; }
    if (voice === "kick") {
      var o = audio.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(150, time);
      o.frequency.exponentialRampToValueAtTime(55, time + 0.08);
      env(o, time, 0.9, 0.32);
      o.start(time); o.stop(time + 0.35);
    } else if (voice === "snare") {
      var src = audio.createBufferSource();
      src.buffer = noiseBuffer(0.2);
      var hp = audio.createBiquadFilter();
      hp.type = "highpass"; hp.frequency.value = 1500;
      src.connect(hp);
      env(hp, time, 0.5, 0.18);
      var body = audio.createOscillator();
      body.type = "triangle"; body.frequency.setValueAtTime(180, time);
      env(body, time, 0.3, 0.1);
      src.start(time); src.stop(time + 0.2);
      body.start(time); body.stop(time + 0.12);
    } else if (voice === "hat") {
      var hsrc = audio.createBufferSource();
      hsrc.buffer = noiseBuffer(0.06);
      var hpf = audio.createBiquadFilter();
      hpf.type = "highpass"; hpf.frequency.value = 7000;
      hsrc.connect(hpf);
      env(hpf, time, 0.28, 0.05);
      hsrc.start(time); hsrc.stop(time + 0.06);
    } else if (voice === "clap") {
      // three short bursts a few ms apart
      [0, 0.012, 0.026].forEach(function (offset, i) {
        var c = audio.createBufferSource();
        c.buffer = noiseBuffer(0.09);
        var bp = audio.createBiquadFilter();
        bp.type = "bandpass"; bp.frequency.value = 1400; bp.Q.value = 0.8;
        c.connect(bp);
        env(bp, time + offset, i === 2 ? 0.4 : 0.28, i === 2 ? 0.16 : 0.05);
        c.start(time + offset); c.stop(time + offset + 0.12);
      });
    }
  }

  // ── Transport ────────────────────────────────────────────────
  function stepDuration() { return (60 / tempo) / 4; } // sixteenth notes

  function tick() {
    current = (current + 1) % STEPS;

    // visual playhead
    for (var t = 0; t < TRACKS.length; t++) {
      for (var s = 0; s < STEPS; s++) {
        if (prefersReduced) { cells[t][s].removeAttribute("data-playing"); continue; }
        if (s === current) { cells[t][s].setAttribute("data-playing", "true"); }
        else { cells[t][s].removeAttribute("data-playing"); }
      }
    }

    // audio
    if (audio) {
      var when = audio.currentTime + 0.02;
      for (var k = 0; k < TRACKS.length; k++) {
        if (pattern[k][current] && !muted[k]) { trigger(TRACKS[k].voice, when); }
      }
    }

    timer = window.setTimeout(tick, stepDuration() * 1000);
  }

  function start() {
    var ctx = ensureAudio();
    if (ctx && ctx.state === "suspended") { ctx.resume(); }
    playing = true;
    current = -1;
    playBtn.setAttribute("aria-pressed", "true");
    playLabel.textContent = "Stop";
    tick();
  }

  function stop() {
    playing = false;
    if (timer) { window.clearTimeout(timer); timer = null; }
    playBtn.setAttribute("aria-pressed", "false");
    playLabel.textContent = "Play";
    for (var t = 0; t < TRACKS.length; t++) {
      for (var s = 0; s < STEPS; s++) { cells[t][s].removeAttribute("data-playing"); }
    }
    current = -1;
  }

  // ── Wire up controls ─────────────────────────────────────────
  playBtn.addEventListener("click", function () {
    if (playing) { stop(); } else { start(); }
  });

  tempoInput.addEventListener("input", function () {
    tempo = +tempoInput.value;
    tempoOut.textContent = tempo + " BPM";
  });

  clearBtn.addEventListener("click", function () {
    for (var t = 0; t < TRACKS.length; t++) {
      for (var s = 0; s < STEPS; s++) {
        pattern[t][s] = 0;
        cells[t][s].setAttribute("aria-pressed", "false");
      }
    }
    drawScope();
    syncUrl();
  });

  // Sync from URL if someone pastes a shared beat into an open tab.
  window.addEventListener("hashchange", function () {
    var p = readUrl();
    if (!p) { return; }
    pattern = p;
    for (var t = 0; t < TRACKS.length; t++) {
      for (var s = 0; s < STEPS; s++) {
        cells[t][s].setAttribute("aria-pressed", pattern[t][s] ? "true" : "false");
      }
    }
    drawScope();
  });

  // ── In-view reveals for below-the-fold sections ──────────────
  function setupReveals() {
    var items = document.querySelectorAll(
      ".band__head, .step, .kit__voice, .browser__lead, .notes"
    );
    if (!("IntersectionObserver" in window) || prefersReduced) {
      items.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  }

  // ── Go ───────────────────────────────────────────────────────
  build();
  tempo = +tempoInput.value;
  tempoOut.textContent = tempo + " BPM";
  setupReveals();
})();
