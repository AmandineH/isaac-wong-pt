module.exports = {
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
        "200px": "200px",
        "250px": "250px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
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
};
