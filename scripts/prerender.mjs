// Prerenders every route to static HTML after `vite build`.
//
// Boots Vite in middleware mode, loads the app in SSR mode, renders each route
// with <StaticRouter>, then:
//   - extracts the <SEO> head tags (rendered inside `<div data-seo-head>`),
//   - hoists them into the page <head>,
//   - fills #root with the server-rendered body so crawlers get content
//     without executing JavaScript.
import { createServer } from "vite";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ROUTES = [
  { path: "/", out: "index.html" },
  { path: "/erpnext", out: "erpnext/index.html" },
  { path: "/startups", out: "startups/index.html" },
  { path: "/wallet", out: "wallet/index.html" },
  { path: "/contact", out: "contact/index.html" },
  { path: "/privacy", out: "privacy/index.html" },
  { path: "/cookies", out: "cookies/index.html" },
  { path: "/blog", out: "blog/index.html" },
  {
    path: "/blog/migrate-from-tally-or-excel-to-erpnext",
    out: "blog/migrate-from-tally-or-excel-to-erpnext/index.html",
  },
  {
    path: "/blog/erpnext-vs-proprietary-erps-cost-of-ownership",
    out: "blog/erpnext-vs-proprietary-erps-cost-of-ownership/index.html",
  },
  {
    path: "/blog/idea-to-mvp-in-6-weeks",
    out: "blog/idea-to-mvp-in-6-weeks/index.html",
  },
  {
    path: "/blog/wish-wallet-defi-nfts-metaverse",
    out: "blog/wish-wallet-defi-nfts-metaverse/index.html",
  },
  {
    path: "/blog/why-open-source-is-winning",
    out: "blog/why-open-source-is-winning/index.html",
  },
  {
    path: "/blog/reconciling-stripe-payments-with-wish-wallet",
    out: "blog/reconciling-stripe-payments-with-wish-wallet/index.html",
  },
];

const root = process.cwd();
const outDir = resolve(root, "dist");

const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { renderApp } = await server.ssrLoadModule("/src/ssr.tsx");
  const baseHtml = readFileSync(resolve(outDir, "index.html"), "utf-8");

  for (const route of ROUTES) {
    const appHtml = renderApp(route.path);

    // Extract the SEO head block rendered inside <div data-seo-head="true">.
    const markerStart = appHtml.indexOf("<div data-seo-head");
    let headBlock = "";
    let bodyHtml = appHtml;
    if (markerStart !== -1) {
      const openEnd = appHtml.indexOf(">", markerStart);
      const closeStart = appHtml.indexOf("</div>", openEnd);
      headBlock = appHtml.slice(openEnd + 1, closeStart);
      bodyHtml =
        appHtml.slice(0, markerStart) +
        appHtml.slice(closeStart + "</div>".length);
    }

    let page = baseHtml;
    // Drop the base title, then inject the route-specific head tags.
    page = page.replace(/<title>[\s\S]*?<\/title>/, "");
    page = page.replace("<head>", "<head>\n    " + headBlock.trim() + "\n");
    // Fill the root with the server-rendered body.
    page = page.replace(
      '<div id="root"></div>',
      `<div id="root">${bodyHtml}</div>`,
    );

    const file = resolve(outDir, route.out);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, page, "utf-8");
    console.log(`[prerender] ${route.path} -> dist/${route.out}`);
  }
} finally {
  await server.close();
}
