export default {
  target: "static",
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
        type: "image/png",
        href: "https://isaac-wong-pt.netlify.app/_nuxt/img/isaac-wong-pt.b0d47ca.png",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-carousel.js", mode: "client" },
  ],

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
            sans: ["Noto Sans SC", "Helvetica", "Arial", "sans-serif"],
            display: ["Noto Sans SC", "Helvetica", "Arial", "sans-serif"],
            body: ["Noto Sans SC", "Helvetica", "Arial", "sans-serif"],
          },
          spacing: {
            "2px": "2px",
            "5px": "5px",
            "10px": "10px",
            "20px": "20px",
            "30px": "30px",
            "40px": "40px",
            "50px": "50px",
            "70px": "70px",
            "80px": "80px",
            "100px": "100px",
            "200px": "200px",
            "400px": "400px",
            "500px": "500px",
            "1300px": "1300px",

            "80vh": "80vh",
            "100vh": "100vh",
          },
          colors: {
            "yellow-FAC710": "#FAC710",
            "orange-EE642A": "#EE642A",
            "blue-142C90": "#142C90",
            "blue-468BCC": "#468BCC",
            "green-2B986B": "#2B986B",
            "gray-ACACAC": "#ACACAC",
            "black-00000033": "#00000033"
          },
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
          borderRadius: {
            "5px": "5px",
            "10px": "10px",
          },
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
