module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        display: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        body: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      spacing: {
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
        "1300px": "1300px",

        "80vh": "80vh"
      },
      colors: {
        "blue-191F6B": "#191F6B",
        "blue-03ABD7": "#03ABD7",
        "blue-03ABD7": "#03ABD7",
        "blue-0D86C0": "#0D86C0",
        "gray-666666": "#666666",
        "gray-E8E3DD": "#E8E3DD",
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
};
