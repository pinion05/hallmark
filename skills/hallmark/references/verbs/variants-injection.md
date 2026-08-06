# Scoped preview injection - the three dev-config hooks

Loaded only when the run is in scoped-injection mode and the user has said yes to the config edit. `variants.md` § Scoped preview injection owns when to offer it, the consent rule, and the fallbacks; this file is only the wiring.

Every hook is dev-only, loads one script from the helper origin, and swaps the `1` in `/inject/1.js` for the direction being previewed. Show the exact diff before writing any of them.

**Vite** - a dev-only plugin using `transformIndexHtml`:

```js
// vite.config.js - dev only
export default {
  plugins: [{
    name: 'hallmark-variants',
    apply: 'serve',
    transformIndexHtml: () => [{
      tag: 'script',
      attrs: { src: 'http://127.0.0.1:<port>/inject/1.js' },
      injectTo: 'body',
    }],
  }],
};
```

**Astro** - `injectScript('page', ...)` from a dev-only integration:

```js
// astro.config.mjs - dev only
export default {
  integrations: [{
    name: 'hallmark-variants',
    hooks: {
      'astro:config:setup': ({ injectScript, command }) => {
        if (command !== 'dev') return;
        injectScript('page', 'import("http://127.0.0.1:<port>/inject/1.js")');
      },
    },
  }],
};
```

**SvelteKit** - a `handle` hook rewriting the page chunk in dev:

```js
// src/hooks.server.js - dev only
import { dev } from '$app/environment';
export async function handle({ event, resolve }) {
  return resolve(event, {
    transformPageChunk: ({ html }) =>
      dev ? html.replace('</body>', '<script src="http://127.0.0.1:<port>/inject/1.js"></script></body>') : html,
  });
}
```
