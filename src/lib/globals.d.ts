// Ambient declarations for globals loaded via <script> tags in index.html.
// jQuery + Owl Carousel are provided by assets/js/vendors.min.js, and
// main.js initializes them on document ready. This lets the React components
// re-initialize plugins (e.g. the testimonials carousel) after SPA navigation,
// when the one-time document.ready handler in main.js does not run again.

interface JQuery<TElement = HTMLElement> {
  owlCarousel(options?: object): JQuery<TElement>;
  owlCarousel(method: string, ...args: unknown[]): JQuery<TElement>;
  hasClass(className: string): boolean;
  removeClass(className: string): JQuery<TElement>;
}

interface JQueryStatic {
  (element: Element | string | Document | Window): JQuery;
}

declare const $: JQueryStatic;

// Vite environment variables
interface ImportMetaEnv {
  readonly VITE_BREVO_API_KEY: string;
  readonly VITE_BREVO_NEWSLETTER_LIST_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
