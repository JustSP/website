import { useEffect, useMemo } from "react";
import type { ReactNode } from "react";

export interface SEOProps {
  /** Page title (site name is appended automatically). */
  title: string;
  description?: string;
  /** Route path, e.g. "/erpnext". Defaults to "/". */
  path?: string;
  type?: "website" | "article";
  /** Absolute or root-relative image URL for social sharing. */
  image?: string;
  keywords?: string;
  noindex?: boolean;
  /** Structured data (JSON-LD). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "WISH — Winworld Innovative Solutions Hub";
const SITE_URL = "https://www.ww-hub.com";
const DEFAULT_DESCRIPTION =
  "WISH — Winworld Innovative Solutions Hub. We build, deploy, host, audit, and support software — from ERPNext to crypto wallets and Web3 products.";
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/logo-light.png`;

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

interface HeadData {
  fullTitle: string;
  url: string;
  description: string;
  keywords?: string;
  robots: string;
  type: "website" | "article";
  image: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function getHeadData({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  keywords,
  noindex = false,
  jsonLd,
}: SEOProps): HeadData {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    fullTitle,
    url,
    description,
    keywords,
    robots: noindex ? "noindex, nofollow" : "index, follow",
    type,
    image,
    jsonLd,
  };
}

/** Client-only: write the tags straight into <head>. */
function applyToDocument(data: HeadData) {
  document.title = data.fullTitle;

  upsertMeta("name", "description", data.description);
  if (data.keywords) upsertMeta("name", "keywords", data.keywords);
  upsertMeta("name", "robots", data.robots);

  upsertLink("canonical", data.url);

  // Open Graph
  upsertMeta("property", "og:title", data.fullTitle);
  upsertMeta("property", "og:description", data.description);
  upsertMeta("property", "og:type", data.type);
  upsertMeta("property", "og:url", data.url);
  upsertMeta("property", "og:image", data.image);
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:locale", "en_US");

  // Twitter
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", data.fullTitle);
  upsertMeta("name", "twitter:description", data.description);
  upsertMeta("name", "twitter:image", data.image);

  // JSON-LD structured data
  const prev = document.getElementById("seo-jsonld");
  if (prev) prev.remove();
  if (data.jsonLd) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "seo-jsonld";
    script.textContent = JSON.stringify(data.jsonLd);
    document.head.appendChild(script);
  }
}

function escAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Server-only: render the head tags so the prerender step can hoist them into <head>. */
function renderSsrTags(data: HeadData): ReactNode {
  const meta = (attr: "name" | "property", key: string, content: string) =>
    `<meta ${attr}="${key}" content="${escAttr(content)}"/>`;

  const lines: string[] = [
    `<title>${escAttr(data.fullTitle)}</title>`,
    meta("name", "description", data.description),
    meta("name", "robots", data.robots),
    `<link rel="canonical" href="${escAttr(data.url)}"/>`,
    meta("property", "og:title", data.fullTitle),
    meta("property", "og:description", data.description),
    meta("property", "og:type", data.type),
    meta("property", "og:url", data.url),
    meta("property", "og:image", data.image),
    meta("property", "og:site_name", SITE_NAME),
    meta("property", "og:locale", "en_US"),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", data.fullTitle),
    meta("name", "twitter:description", data.description),
    meta("name", "twitter:image", data.image),
  ];

  if (data.keywords) {
    lines.push(meta("name", "keywords", data.keywords));
  }
  if (data.jsonLd) {
    lines.push(
      `<script id="seo-jsonld" type="application/ld+json">${JSON.stringify(
        data.jsonLd,
      )}</script>`,
    );
  }

  // data-seo-head marker lets the prerender step locate & extract these tags.
  // The tags are injected as raw HTML (dangerouslySetInnerHTML) so React 19
  // does NOT hoist real <title>/<meta>/<link> elements out of the marker.
  return (
    <div
      data-seo-head="true"
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: lines.join("") }}
    />
  );
}

export default function SEO(props: SEOProps) {
  const isServer = typeof window === "undefined";
  const data = useMemo(
    () => getHeadData(props),
    [
      props.title,
      props.description,
      props.path,
      props.type,
      props.image,
      props.keywords,
      props.noindex,
      props.jsonLd,
    ],
  );

  useEffect(() => {
    if (isServer) return;
    applyToDocument(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isServer) return renderSsrTags(data);
  return null;
}
