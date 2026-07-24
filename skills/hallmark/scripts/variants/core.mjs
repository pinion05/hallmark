// Shared internals for the hallmark variants bridge (start.mjs, serve.mjs,
// await.mjs). Zero dependencies. Thin fs/http helpers, the run-dir layout,
// the request-queue naming, and the three embedded UI payloads: the picker
// page, the chip.js overlay, and the static compare page.
//
// Not a CLI. Imported by the other three scripts.

import fs from "node:fs";
import path from "node:path";
import http from "node:http";

// ---------------------------------------------------------------------------
// small helpers

export const nowIso = () => new Date().toISOString();

export function readSafe(file) {
  try { return fs.readFileSync(file, "utf8"); } catch { return null; }
}

export function atomicWrite(file, content) {
  const tmp = file + ".tmp-" + process.pid;
  fs.writeFileSync(tmp, content);
  fs.renameSync(tmp, file);
}

export function readJsonSafe(file) {
  const raw = readSafe(file);
  if (raw == null) return { json: null, error: "missing" };
  try { return { json: JSON.parse(raw), error: null }; }
  catch {
    // One brief retry: we may have caught a writer mid-rename.
    try { return { json: JSON.parse(fs.readFileSync(file, "utf8")), error: null }; }
    catch (e2) { return { json: null, error: String(e2).slice(0, 120) }; }
  }
}

export function statMtime(p) {
  try { return fs.statSync(p).mtimeMs; } catch { return null; }
}

/** --flag value pairs; a flag followed by another flag (or nothing) is true. */
export function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    if (!argv[i].startsWith("--")) continue;
    const next = argv[i + 1];
    out[argv[i].slice(2)] = next == null || next.startsWith("--") ? true : argv[++i];
  }
  return out;
}

export function escapeAttr(s) {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ---------------------------------------------------------------------------
// run layout: .hallmark/variants/<run-id>/ inside the user project.
// server.json is a per-project singleton, one level up from the run dir.

export function runPaths(runDir) {
  const RUN = path.resolve(String(runDir));
  const REQ = path.join(RUN, "requests");
  return {
    RUN,
    RUN_ID: path.basename(RUN),
    REQ,
    REQ_DONE: path.join(REQ, "done"),
    MANIFEST: path.join(RUN, "manifest.json"),
    SERVER_JSON: path.join(path.dirname(RUN), "server.json"),
    LOG: path.join(RUN, "server.log"),
  };
}

export function defaultManifest(runId) {
  return { run: runId, mode: "greenfield", brief: "", devServer: null, directions: [], picked: null };
}

/** Next zero-padded queue id, scanning requests/ AND requests/done/. */
export function nextRequestId(P) {
  let max = 0;
  for (const dir of [P.REQ, P.REQ_DONE]) {
    let files = [];
    try { files = fs.readdirSync(dir); } catch { /* not created yet */ }
    for (const f of files) {
      const m = f.match(/^(\d+)-/);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    }
  }
  return String(max + 1).padStart(4, "0");
}

export const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

// ---------------------------------------------------------------------------
// loopback http (start.mjs identity checks, await.mjs --stop)

export function httpGetJson(port, pathname, timeoutMs = 900) {
  return new Promise((resolve) => {
    const req = http.get({ host: "127.0.0.1", port, path: pathname, timeout: timeoutMs }, (res) => {
      let buf = "";
      res.on("data", (c) => (buf += c));
      res.on("end", () => { try { resolve(JSON.parse(buf)); } catch { resolve(null); } });
    });
    req.on("error", () => resolve(null));
    req.on("timeout", () => { req.destroy(); resolve(null); });
  });
}

export function httpPostJson(port, pathname, body = {}, timeoutMs = 1500) {
  return new Promise((resolve) => {
    const data = JSON.stringify(body);
    const req = http.request(
      { host: "127.0.0.1", port, path: pathname, method: "POST", timeout: timeoutMs,
        headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(data) } },
      (res) => {
        let buf = "";
        res.on("data", (c) => (buf += c));
        res.on("end", () => { try { resolve(JSON.parse(buf)); } catch { resolve({ ok: (res.statusCode ?? 500) < 300 }); } });
      },
    );
    req.on("error", () => resolve(null));
    req.on("timeout", () => { req.destroy(); resolve(null); });
    req.end(data);
  });
}

// ---------------------------------------------------------------------------
// chip.js: the overlay a generated variant route embeds via
//   <script src="http://127.0.0.1:<port>/chip.js" data-direction="2"
//           data-of="3" data-mode="routes" data-base="http://localhost:3000/hallmark-v"></script>
// Greenfield: data-mode="greenfield", data-base="http://127.0.0.1:<port>/frame/"
// (greenfield hrefs get a trailing slash; routes hrefs do not). The chip skips
// rendering when the page is inside an iframe (the picker frames these pages
// and carries its own controls).

export function buildChipJs() {
  return '(function(){\n' +
    '"use strict";\n' +
    'if(window.self!==window.top)return;\n' +
    'var s=document.currentScript;if(!s)return;\n' +
    'var origin;try{origin=new URL(s.src).origin}catch(e){return}\n' +
    'var n=parseInt(s.getAttribute("data-direction")||"1",10);\n' +
    'var total=parseInt(s.getAttribute("data-of")||"3",10);\n' +
    'var mode=s.getAttribute("data-mode")||"greenfield";\n' +
    'var base=s.getAttribute("data-base")||"";\n' +
    'var reduce=false;try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}\n' +
    'function urlFor(k){return base+k+(mode==="greenfield"?"/":"")}\n' +
    'function go(d){var k=n+d;if(k<1)k=total;if(k>total)k=1;location.href=urlFor(k)}\n' +
    'var pill=document.createElement("div");\n' +
    'pill.setAttribute("data-hallmark-chip","");\n' +
    'pill.style.cssText="position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483647;display:flex;align-items:center;gap:2px;background:rgba(17,17,19,.94);color:#e9e7e2;font:12px/1 system-ui,sans-serif;border-radius:999px;padding:5px 7px;box-shadow:0 10px 30px -10px rgba(0,0,0,.55);opacity:0;"+(reduce?"":"transition:opacity .2s ease;");\n' +
    'function btn(label,title,fn,pad){var b=document.createElement("button");b.type="button";b.textContent=label;b.title=title;b.style.cssText="font:inherit;border:0;background:none;color:inherit;cursor:pointer;padding:6px "+(pad||10)+"px;border-radius:999px;";b.addEventListener("mouseenter",function(){b.style.background="rgba(255,255,255,.14)"});b.addEventListener("mouseleave",function(){b.style.background=b.getAttribute("data-bg")||"none"});b.addEventListener("click",fn);pill.appendChild(b);return b}\n' +
    'btn("\\u2039","previous direction (ArrowLeft)",function(){go(-1)});\n' +
    'var label=document.createElement("span");label.textContent="Direction "+n+"/"+total;label.style.cssText="padding:6px 5px;white-space:nowrap;letter-spacing:.02em;";pill.appendChild(label);\n' +
    'btn("\\u203a","next direction (ArrowRight)",function(){go(1)});\n' +
    'var pickBtn=btn("Pick","keep this direction",function(){post({action:"pick",choice:n},"Picked "+n+" \\u2713")});\n' +
    'pickBtn.style.background="rgba(255,255,255,.12)";pickBtn.setAttribute("data-bg","rgba(255,255,255,.12)");pickBtn.style.fontWeight="600";pickBtn.style.margin="0 2px";\n' +
    'btn("Riff","ask for one more direction",function(){var steer=window.prompt("Optional steer for the new direction (leave blank for a free riff):","");if(steer===null)return;post({action:"riff",choice:n,steer:steer.trim()},"Riff queued \\u2713")});\n' +
    'btn("\\u00d7","dismiss",function(){pill.remove();document.removeEventListener("keydown",onKey,true)},8);\n' +
    'function post(body,ok){fetch(origin+"/api/pick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}).then(function(r){if(!r.ok)throw new Error("bad status");label.textContent=ok}).catch(function(){pill.textContent="picker offline: tell your agent - pick "+n;pill.style.padding="9px 14px"})}\n' +
    'function onKey(e){var el=document.activeElement;if(el&&(el.tagName==="INPUT"||el.tagName==="TEXTAREA"||el.isContentEditable))return;if(e.key==="ArrowLeft"){e.preventDefault();go(-1)}else if(e.key==="ArrowRight"){e.preventDefault();go(1)}}\n' +
    'document.addEventListener("keydown",onKey,true);\n' +
    'function mount(){(document.body||document.documentElement).appendChild(pill);requestAnimationFrame(function(){pill.style.opacity="1"})}\n' +
    'if(document.body)mount();else document.addEventListener("DOMContentLoaded",mount);\n' +
    '})();\n';
}

// ---------------------------------------------------------------------------
// inject.js: the scoped-preview overlay served at /inject/<n>.js. The user
// drops <script src="http://127.0.0.1:<port>/inject/2.js"></script> into their
// own running dev app (Vite/Astro/SvelteKit) - or the agent injects it - and it
// mounts a fixed full-viewport iframe of the direction's route ON TOP of the
// app, plus the chip controls (flip / pick / riff / dismiss). PREVIEW ONLY: it
// paints the variant over the app, it never edits the app's source. It no-ops
// off localhost, guards arrows against focused inputs, sits at max z-index, and
// is fully dismissible (x, Esc). Flip and pick/riff post to the helper origin.
// The iframe points at <appOrigin>/hallmark-v<n> (the routes-mode recipe).

export function buildInjectJs(n, total, port) {
  const origin = "http://127.0.0.1:" + port;
  return '(function(){\n' +
    '"use strict";\n' +
    'var h=location.hostname;\n' +
    'if(h!=="localhost"&&h!=="127.0.0.1"&&h!=="[::1]")return;\n' +
    'if(window.__hallmarkInject)return;window.__hallmarkInject=true;\n' +
    'var n=' + Number(n) + ',total=' + Number(total) + ',origin="' + origin + '";\n' +
    'var routeBase=location.origin+"/hallmark-v";\n' +
    'var reduce=false;try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}\n' +
    'var wrap=document.createElement("div");\n' +
    'wrap.setAttribute("data-hallmark-inject","");\n' +
    'wrap.style.cssText="position:fixed;inset:0;z-index:2147483646;background:#0b0b0d;";\n' +
    'var frame=document.createElement("iframe");\n' +
    'frame.setAttribute("title","hallmark variant preview");\n' +
    'frame.style.cssText="position:absolute;inset:0;width:100%;height:100%;border:0;background:#fff;";\n' +
    'wrap.appendChild(frame);\n' +
    'function urlFor(k){return routeBase+k}\n' +
    'function load(){frame.src=urlFor(n)}\n' +
    'var pill=document.createElement("div");\n' +
    'pill.setAttribute("data-hallmark-chip","");\n' +
    'pill.style.cssText="position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483647;display:flex;align-items:center;gap:2px;background:rgba(17,17,19,.94);color:#e9e7e2;font:12px/1 system-ui,sans-serif;border-radius:999px;padding:5px 7px;box-shadow:0 10px 30px -10px rgba(0,0,0,.55);"+(reduce?"":"transition:opacity .2s ease;");\n' +
    'function btn(label,title,fn,pad){var b=document.createElement("button");b.type="button";b.textContent=label;b.title=title;b.style.cssText="font:inherit;border:0;background:none;color:inherit;cursor:pointer;padding:6px "+(pad||10)+"px;border-radius:999px;";b.addEventListener("mouseenter",function(){b.style.background="rgba(255,255,255,.14)"});b.addEventListener("mouseleave",function(){b.style.background=b.getAttribute("data-bg")||"none"});b.addEventListener("click",fn);pill.appendChild(b);return b}\n' +
    'function go(d){var k=n+d;if(k<1)k=total;if(k>total)k=1;n=k;label.textContent="Direction "+n+"/"+total;load()}\n' +
    'function dismiss(){wrap.remove();pill.remove();document.removeEventListener("keydown",onKey,true)}\n' +
    'btn("\\u2039","previous direction (ArrowLeft)",function(){go(-1)});\n' +
    'var label=document.createElement("span");label.textContent="Direction "+n+"/"+total;label.style.cssText="padding:6px 5px;white-space:nowrap;letter-spacing:.02em;";pill.appendChild(label);\n' +
    'btn("\\u203a","next direction (ArrowRight)",function(){go(1)});\n' +
    'var pickBtn=btn("Pick","keep this direction",function(){post({action:"pick",choice:n},"Picked "+n+" \\u2713")});\n' +
    'pickBtn.style.background="rgba(255,255,255,.12)";pickBtn.setAttribute("data-bg","rgba(255,255,255,.12)");pickBtn.style.fontWeight="600";pickBtn.style.margin="0 2px";\n' +
    'btn("Riff","ask for one more direction",function(){var steer=window.prompt("Optional steer for the new direction (leave blank for a free riff):","");if(steer===null)return;post({action:"riff",choice:n,steer:steer.trim()},"Riff queued \\u2713")});\n' +
    'btn("\\u00d7","close preview (Esc)",dismiss,8);\n' +
    'function post(body,ok){fetch(origin+"/api/pick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}).then(function(r){if(!r.ok)throw new Error("bad status");label.textContent=ok}).catch(function(){label.textContent="picker offline: tell your agent - pick "+n})}\n' +
    'function onKey(e){var el=document.activeElement;if(el&&(el.tagName==="INPUT"||el.tagName==="TEXTAREA"||el.isContentEditable))return;if(e.key==="ArrowLeft"){e.preventDefault();go(-1)}else if(e.key==="ArrowRight"){e.preventDefault();go(1)}else if(e.key==="Escape"){e.preventDefault();dismiss()}}\n' +
    'document.addEventListener("keydown",onKey,true);\n' +
    'function mount(){var root=document.body||document.documentElement;root.appendChild(wrap);root.appendChild(pill);load()}\n' +
    'if(document.body)mount();else document.addEventListener("DOMContentLoaded",mount);\n' +
    '})();\n';
}

// ---------------------------------------------------------------------------
// shared shell CSS for the two host pages (dark neutral, system-ui, no
// external fonts, fully self-contained)

const SHELL_CSS = [
  ':root{--bg:#141416;--card:#1d1d21;--line:#2c2c31;--fg:#e9e7e2;--mut:#8f8d86;--acc:#6ea8fe;--ok:#3ecf8e;--bad:#e2705e;--mono:ui-monospace,"SF Mono",Menlo,monospace;--tw:408px;--th:255px;--scale:0.31875}',
  '*{box-sizing:border-box;margin:0}',
  'body{background:var(--bg);color:var(--fg);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}',
  'header{display:flex;align-items:baseline;gap:12px;padding:16px 24px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--bg);z-index:5}',
  'header b{font-size:15px;letter-spacing:.01em}',
  'header span{font-family:var(--mono);font-size:11px;color:var(--mut)}',
  '#note{margin-left:auto}#note.ok{color:var(--ok)}#note.bad{color:var(--bad)}',
  'button{font:inherit;color:inherit;cursor:pointer}',
].join("\n");

// ---------------------------------------------------------------------------
// picker page (served at /). A static shell: it polls /api/state every 2s and
// renders the manifest's directions, so agent-side manifest edits (a riff's
// 4th direction, status flips, the pick landing) appear without a reload.
// Grid of scaled 1280x800 iframes -> click or 1..9 for single view -> arrows
// cycle, P or Pick posts {action:"pick"}, R or Riff posts {action:"riff"}.

export function buildPickerPage() {
  return '<!doctype html>\n<html lang="en">\n<head>\n' +
    '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>hallmark · pick a direction</title>\n' +
    '<style>\n' + SHELL_CSS + '\n' +
    '.grid{display:grid;grid-template-columns:repeat(auto-fill,var(--tw));justify-content:center;gap:26px 22px;padding:26px 24px 60px}\n' +
    '.card{background:none;border:0;padding:0;text-align:left}\n' +
    '.thumb{width:var(--tw);height:var(--th);overflow:hidden;position:relative;border:1px solid var(--line);border-radius:10px;background:#fff}\n' +
    '.card:hover .thumb,.card:focus-visible .thumb{border-color:var(--acc)}\n' +
    '.thumb iframe{width:1280px;height:800px;border:0;transform:scale(var(--scale));transform-origin:top left;pointer-events:none}\n' +
    '.thumb img{display:block;width:100%;height:100%;object-fit:cover;object-position:top left}\n' +
    '.thumb .ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:var(--card);color:var(--mut);font-family:var(--mono);font-size:12px}\n' +
    '.meta{display:flex;flex-direction:column;gap:3px;padding:10px 2px 0}\n' +
    '.meta .t{font-weight:650;font-size:14px}.meta .t i{font-style:normal;color:var(--mut);font-family:var(--mono);font-size:12px;margin-right:8px}\n' +
    '.meta .m{font-family:var(--mono);font-size:11px;color:var(--mut)}\n' +
    '.empty{padding:80px 24px;text-align:center;color:var(--mut);font-family:var(--mono);font-size:13px}\n' +
    '#single{position:fixed;inset:0;background:var(--bg);display:none;flex-direction:column;z-index:10}#single.on{display:flex}\n' +
    '#sbar{display:flex;align-items:center;gap:8px;padding:10px 16px;border-bottom:1px solid var(--line)}\n' +
    '#sbar button{font-size:12px;border:1px solid var(--line);background:var(--card);border-radius:999px;padding:6px 13px}\n' +
    '#sbar button:hover{border-color:var(--acc)}\n' +
    '#sbar .pick{background:var(--acc);border-color:var(--acc);color:#0d1420;font-weight:650}\n' +
    '#sbar .t{font-weight:650;font-size:13px}#sbar .m{font-family:var(--mono);font-size:11px;color:var(--mut)}\n' +
    '#sbar .keys{margin-left:auto;font-family:var(--mono);font-size:10.5px;color:var(--mut)}\n' +
    '#sframe{flex:1;border:0;width:100%;background:#fff}\n' +
    '</style>\n</head>\n<body>\n' +
    '<header><b>hallmark variants</b><span id="run"></span><span id="note"></span></header>\n' +
    '<main class="grid" id="grid"></main>\n' +
    '<div class="empty" id="empty" hidden>waiting for directions... the agent is still writing them (this page refreshes itself)</div>\n' +
    '<div id="single">\n<div id="sbar">\n' +
    '<button id="back" title="back to the grid (Esc)">‹ grid</button>\n' +
    '<button id="prev" title="previous (ArrowLeft)">‹</button><button id="next" title="next (ArrowRight)">›</button>\n' +
    '<span class="t" id="st"></span><span class="m" id="sm"></span>\n' +
    '<span class="keys">arrows flip · P pick · R riff · G graft · Esc grid</span>\n' +
    '<button class="pick" id="pickBtn">Pick this (P)</button>\n<button id="riffBtn">Riff (R)</button>\n<button id="graftBtn">Graft (G)</button>\n' +
    '</div>\n<iframe id="sframe" title="direction preview"></iframe>\n</div>\n' +
    '<script>\n(function(){\n' +
    'var st=null,lastJson="",view="grid",dirs=[],picked=null;\n' +
    'function $(id){return document.getElementById(id)}\n' +
    'function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}\n' +
    'function note(msg,cls){var n=$("note");n.textContent=msg||"";n.className=cls||""}\n' +
    'function metaOf(d){return [d.macrostructure,d.theme,d.nav,d.footer].filter(Boolean).join(" · ")}\n' +
    'function poll(){fetch("/api/state").then(function(r){return r.json()}).then(function(j){\n' +
    '  var s=JSON.stringify(j.manifest);if(s===lastJson)return;lastJson=s;st=j;\n' +
    '  dirs=((j.manifest&&j.manifest.directions)||[]).slice().sort(function(a,b){return a.n-b.n});\n' +
    '  picked=j.manifest?j.manifest.picked:null;render();\n' +
    '}).catch(function(){note("server offline","bad")})}\n' +
    'function render(){\n' +
    '  var bust=Date.now();\n' +
    '  $("run").textContent=st.run+" · "+((st.manifest&&st.manifest.mode)||"");\n' +
    '  if(picked)note("picked: direction "+picked+" ✓ - back to your chat","ok");else note("");\n' +
    '  var g=$("grid");g.innerHTML="";$("empty").hidden=dirs.length>0;\n' +
    '  dirs.forEach(function(d){\n' +
    '    var ready=!d.status||d.status==="ready";\n' +
    '    var inner;\n' +
    '    if(!ready)inner=\'<div class="ph">building...</div>\';\n' +
    '    else if(d.thumb===true)inner=\'<img loading="lazy" alt="" src="/thumb/\'+d.n+\'.png?\'+bust+\'">\';\n' +
    '    else inner=\'<iframe loading="lazy" scrolling="no" tabindex="-1" src="\'+esc(d.url)+\'"></iframe>\';\n' +
    '    var b=document.createElement("button");b.className="card";\n' +
    '    b.innerHTML=\'<div class="thumb">\'+inner+\'</div>\'+\n' +
    '      \'<div class="meta"><span class="t"><i>\'+d.n+\'</i>\'+esc(d.title||("Direction "+d.n))+(picked===d.n?" ✓":"")+\'</span><span class="m">\'+esc(metaOf(d))+\'</span>\'+(d.axes?\'<span class="m">\'+esc(d.axes)+\'</span>\':"")+\'</div>\';\n' +
    '    b.addEventListener("click",function(){openDir(d.n)});g.appendChild(b);\n' +
    '  });\n' +
    '  if(view!=="grid")syncSingle();\n' +
    '}\n' +
    'function dirByN(n){for(var i=0;i<dirs.length;i++)if(dirs[i].n===n)return dirs[i];return null}\n' +
    'function openDir(n){if(!dirByN(n))return;view=n;$("single").classList.add("on");syncSingle()}\n' +
    'function closeSingle(){view="grid";$("single").classList.remove("on")}\n' +
    'function cycle(step){var idx=0;for(var i=0;i<dirs.length;i++)if(dirs[i].n===view)idx=i;idx=(idx+step+dirs.length)%dirs.length;view=dirs[idx].n;syncSingle()}\n' +
    'function syncSingle(){var d=dirByN(view);if(!d){closeSingle();return}\n' +
    '  $("st").textContent=d.n+" · "+(d.title||"");$("sm").textContent=metaOf(d)+(d.axes?"  ·  "+d.axes:"");\n' +
    '  var f=$("sframe");if(f.getAttribute("data-src")!==d.url){f.setAttribute("data-src",d.url);f.src=d.url}\n' +
    '  $("pickBtn").textContent=picked===d.n?"Picked ✓":"Pick this (P)";\n' +
    '}\n' +
    'function api(body,ok){fetch("/api/pick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)})\n' +
    '  .then(function(r){if(!r.ok)throw new Error("bad status");note(ok,"ok")})\n' +
    '  .catch(function(){note("request failed - is the server up?","bad")})}\n' +
    'function pick(){if(view==="grid")return;api({action:"pick",choice:view},"picked: direction "+view+" ✓ - back to your chat");$("pickBtn").textContent="Picked ✓"}\n' +
    'function riff(){var steer=window.prompt("Optional steer for the new direction (leave blank for a free riff):","");if(steer===null)return;\n' +
    '  var body={action:"riff",steer:steer.trim()};if(view!=="grid")body.choice=view;\n' +
    '  api(body,"riff queued ✓ - a new direction will appear here")}\n' +
    'function graft(){if(view==="grid")return;\n' +
    '  var ans=window.prompt("Take which section from which direction? e.g. \\u2018pricing from 3\\u2019","");\n' +
    '  if(ans===null)return;ans=ans.trim();if(!ans)return;\n' +
    '  var m=ans.match(/^(.*?)\\s+from\\s+(\\d+)$/i);\n' +
    '  if(!m){note("could not parse - try \\u2018pricing from 3\\u2019","bad");return}\n' +
    '  var section=m[1].trim(),from=parseInt(m[2],10);\n' +
    '  if(!section||!from){note("could not parse - try \\u2018pricing from 3\\u2019","bad");return}\n' +
    '  api({action:"graft",choice:view,from:from,section:section},"graft queued ✓ - \'"+section+"\' from "+from+" into "+view)}\n' +
    '$("back").addEventListener("click",closeSingle);\n' +
    '$("prev").addEventListener("click",function(){cycle(-1)});\n' +
    '$("next").addEventListener("click",function(){cycle(1)});\n' +
    '$("pickBtn").addEventListener("click",pick);\n' +
    '$("riffBtn").addEventListener("click",riff);\n' +
    '$("graftBtn").addEventListener("click",graft);\n' +
    'document.addEventListener("keydown",function(e){\n' +
    '  var el=document.activeElement;if(el&&(el.tagName==="INPUT"||el.tagName==="TEXTAREA"||el.isContentEditable))return;\n' +
    '  var k=parseInt(e.key,10);\n' +
    '  if(view==="grid"){if(k>=1&&k<=dirs.length)openDir(dirs[k-1].n);return}\n' +
    '  if(e.key==="Escape")closeSingle();\n' +
    '  else if(e.key==="ArrowLeft")cycle(-1);\n' +
    '  else if(e.key==="ArrowRight")cycle(1);\n' +
    '  else if(e.key==="p"||e.key==="P")pick();\n' +
    '  else if(e.key==="r"||e.key==="R")riff();\n' +
    '  else if(e.key==="g"||e.key==="G")graft();\n' +
    '  else if(k>=1&&k<=dirs.length)openDir(dirs[k-1].n);\n' +
    '});\n' +
    'setInterval(poll,2000);poll();\n' +
    '})();\n</script>\n</body>\n</html>\n';
}

// ---------------------------------------------------------------------------
// static compare page (start.mjs --static): no server, srcdoc-inlined docs of
// the greenfield directions, one visible at a time, keys 1..N and arrows, and
// a banner telling the user to reply "pick N" in chat.
// items: [{ n, title, meta, doc }]

export function buildComparePage({ runId, brief, items }) {
  const frames = items.map((t, i) =>
    '<iframe id="f' + i + '" title="' + escapeAttr(t.title) + '" sandbox="allow-scripts" srcdoc="' + escapeAttr(t.doc) + '"></iframe>').join("\n");
  const meta = JSON.stringify(items.map((t) => ({ n: t.n, title: t.title, meta: t.meta })));
  return '<!doctype html>\n<html lang="en">\n<head>\n' +
    '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>hallmark · compare · ' + escapeAttr(runId) + '</title>\n' +
    '<style>\n' + SHELL_CSS + '\n' +
    '.banner{padding:9px 24px;background:#26261f;color:#e8dfba;font-family:var(--mono);font-size:11.5px;border-bottom:1px solid var(--line)}\n' +
    'main{padding:14px 18px 90px;max-width:1440px;margin:0 auto}\n' +
    'iframe{display:none;width:100%;height:calc(100vh - 190px);min-height:420px;border:1px solid var(--line);border-radius:10px;background:#fff}\n' +
    'iframe.on{display:block}\n' +
    '.pill{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);display:flex;align-items:center;gap:4px;background:rgba(17,17,19,.94);border-radius:999px;padding:6px 8px;box-shadow:0 10px 30px -10px rgba(0,0,0,.55);max-width:94vw;flex-wrap:wrap;justify-content:center}\n' +
    '.pill button{border:0;background:none;color:#d9d4ca;font-family:var(--mono);font-size:12px;padding:6px 11px;border-radius:999px;white-space:nowrap}\n' +
    '.pill button:hover{background:rgba(255,255,255,.12)}.pill button.on{background:var(--acc);color:#0d1420}\n' +
    '</style>\n</head>\n<body>\n' +
    '<div class="banner">static compare (no server running) · to choose, reply in your chat: "pick 2" · keys 1-' + items.length + ' and arrows flip</div>\n' +
    '<header><b>hallmark variants</b><span>' + escapeAttr(runId) + (brief ? ' · ' + escapeAttr(String(brief).slice(0, 90)) : '') + '</span><span id="note"></span></header>\n' +
    '<main>\n' + frames + '\n</main>\n' +
    '<div class="pill" id="pill"></div>\n' +
    '<script>\n(function(){\n' +
    'var items=' + meta + ',cur=0;\n' +
    'var pill=document.getElementById("pill"),note=document.getElementById("note");\n' +
    'function show(i){cur=(i%items.length+items.length)%items.length;\n' +
    '  for(var k=0;k<items.length;k++)document.getElementById("f"+k).classList.toggle("on",k===cur);\n' +
    '  note.textContent=items[cur].title+(items[cur].meta?"  ·  "+items[cur].meta:"");render()}\n' +
    'function render(){var h=\'<button data-go="-1" aria-label="previous">‹</button>\';\n' +
    '  for(var i=0;i<items.length;i++)h+=\'<button data-i="\'+i+\'" class="\'+(i===cur?"on":"")+\'">\'+items[i].n+" · "+items[i].title+"</button>";\n' +
    '  h+=\'<button data-go="1" aria-label="next">›</button>\';pill.innerHTML=h}\n' +
    'pill.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;\n' +
    '  if(b.dataset.i!=null)show(+b.dataset.i);else if(b.dataset.go)show(cur+ +b.dataset.go)});\n' +
    'document.addEventListener("keydown",function(e){\n' +
    '  var el=document.activeElement;if(el&&(el.tagName==="INPUT"||el.tagName==="TEXTAREA"||el.isContentEditable))return;\n' +
    '  if(e.key==="ArrowLeft")show(cur-1);else if(e.key==="ArrowRight")show(cur+1);\n' +
    '  else{var k=parseInt(e.key,10);if(k>=1&&k<=items.length)show(k-1)}});\n' +
    'show(0);\n' +
    '})();\n</script>\n</body>\n</html>\n';
}
