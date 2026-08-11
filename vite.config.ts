import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Route prerendering happens in `scripts/prerender.mjs` after `vite build`
// (see the `build` script in package.json).
export default defineConfig({
  plugins: [react()],
});
