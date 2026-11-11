// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tarunbjoseph.github.io",
  base: "/tarunjoseph_portfolio",
  vite: { plugins: [tailwindcss()] },
});
