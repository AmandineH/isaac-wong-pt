require("dotenv").config({
  path: `./.env`,
})

module.exports = {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Real Estate Analytics',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/rea-logo.png' }
    ],
    script: [
      {
        src: "~/plugins/gtag.js",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
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
          spacing: {
            "1/2": "50%",

            "2px": "2px",
            "5px": "5px",
            "10px": "10px",
            "20px": "20px",
            "30px": "30px",
            "40px": "40px",
            "50px": "50px",
            "60px": "60px",
            "70px": "70px",
            "80px": "80px",
            "90px": "90px",
            "100px": "100px",
            "150px": "150px",
            "200px": "200px",
            "250px": "250px",
            "300px": "300px",
            "400px": "400px",
            "500px": "500px",
            "750px": "750px",
            "1000px": "1000px",
            "1300px": "1300px",

            "80vh": "80vh"
          },
          colors: {
            "blue-191f6C": "#191f6C",
            "blue-00ACD7": "#00ACD7",
            "blue-0689BC": "#0689BC",
            "blue-333333": "#333333",
            "gray-666666": "#666666",
            "gray-E8E8F0": "#E8E8F0",
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
          fontSize: {
          },
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
          boxShadow: {
          },
          borderRadius: {
          },
          transitionProperty: {
          },
          zIndex: {
          },
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
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/apollo",
      {
        clientConfigs: {
          default: {
            httpEndpoint: `${process.env.API_URL}/graphql`,
          },
        },
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        baseUrl: process.env.BASE_URL,
        langDir: "lang/",
        locales: [
          {
            code: "en-US",
            iso: "en-US",
            file: "en-US.json",
            dir: "ltr",
            name: "English",
          },
          {
            code: "id-ID",
            iso: "id-ID",
            file: "id-ID.json",
            dir: "ltr",
            name: "Basaha Indonesia",
          },
        ],
        defaultLocale: "en-US",
        langDir: "lang/",
        vueI18n: {
          fallbackLocale: "en-US",
        },
        lazy: true,
        detectBrowserLanguage: {
          useCookie: false,
        },
      },
    ],
    '@nuxtjs/dayjs',
  ],

  env: {
    COUNTRY_CODE: process.env.COUNTRY_CODE,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
