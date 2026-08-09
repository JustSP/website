/**
 * Scroll the page to the very top instantly.
 *
 * This template's layout uses `body` as the scroll container
 * (`html { overflow: hidden }`, `body { overflow-y: auto }`), so we reset
 * both documentElement and body to cover every layout. We also temporarily
 * disable the global `html { scroll-behavior: smooth }` (set in
 * assets/css/main.css) so the reset is instant, then restore it so in-page
 * anchor links keep their smooth behavior.
 */
export function scrollToTop() {
  const html = document.documentElement;
  const previousBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;
  html.style.scrollBehavior = previousBehavior;
}
