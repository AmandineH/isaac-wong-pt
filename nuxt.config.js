const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  srcDir: "src/",
  alias: {
    "@/*": `<srcDir>/*`,
  },
  target: "static",
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "Isaac Wong Personal Training - Fitness Coach | Team Singapore 🇸🇬 Powerlifter & Weightlifter",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "https://isaac-wong-pt.netlify.app/isaac-wong-pt/isaac-wong-pt.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "https://isaac-wong-pt.netlify.app/isaac-wong-pt/isaac-wong-pt-black.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/typography.css", "@/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/meta.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/tailwindcss",
      {
        config: tailwindConfig,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
