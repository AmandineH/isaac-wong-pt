export default {
  srcDir: "src/",
  alias: {
    "@/*": `<srcDir>/*`,
  },
  server: {
    port: process.env.NODE_ENV === "production" ? 8080 : 3200,
  },
  performance: {
    gzip: true,
  },
  telemetry: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Isaac Wong Personal Training",
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
        type: "image/x-icon",
        href: "https://8prop-app.s3.ap-southeast-1.amazonaws.com/static/assets/favicon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Verdana", "Helvetica", "Arial", "sans-serif"],
            display: ["Verdana", "Helvetica", "Arial", "sans-serif"],
            body: ["Verdana", "Helvetica", "Arial", "sans-serif"],
          },
          spacing: {},
          colors: {},
          width: (theme) => ({
            ...theme("spacing"),
          }),
          maxWidth: (theme) => ({
            ...theme("spacing"),
          }),
          minWidth: (theme) => ({
            ...theme("spacing"),
          }),
          height: (theme) => ({
            ...theme("spacing"),
          }),
          maxHeight: (theme) => ({
            ...theme("spacing"),
          }),
          minHeight: (theme) => ({
            ...theme("spacing"),
          }),
          padding: (theme) => ({
            ...theme("spacing"),
          }),
          margin: (theme) => ({
            ...theme("spacing"),
          }),
          inset: (theme) => ({
            ...theme("spacing"),
          }),
          borderWidth: (theme) => ({
            ...theme("spacing"),
          }),
          fontSize: {},
          fontWeight: {
            hairline: "100",
            thin: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
          },
          boxShadow: {},
          borderRadius: {},
          transitionProperty: {},
          zIndex: {},
          gradientColorStops: (theme) => ({
            ...theme("colors"),
          }),
        },
      },
      variants: ["responsive", "hover", "active", "focus", "first", "last"],
      purge: {
        enabled: true,
      },
      experimental: {
        applyComplexClasses: true,
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
