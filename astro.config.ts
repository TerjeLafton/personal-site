import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export default defineConfig({
  site: "https://lafton.io",

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },

  integrations: [icon()],
});
