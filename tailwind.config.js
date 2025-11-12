/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
    "./src/app/globals.css", // importante p/ @apply/@layer
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#D4AF37",
          goldDark: "#B68C2C",
          goldLight: "#F1D27A",
          black: "#0A0A0A",
          coal: "#121212",
          white: "#FFFFFF",
          gray: "#6B7280",
        },
      },
      fontFamily: {
        heading: ["var(--font-rajdhani)"], // títulos
        sans: ["var(--font-exo2)"], // textos gerais
      },
      boxShadow: {
        gold: "0 0 0 1px #D4AF37, 0 10px 20px rgba(212,175,55,0.15)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #D4AF37 0%, #F1D27A 50%, #B68C2C 100%)",
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      maxWidth: { container: "1200px" },
      boxShadow: {
        gold: "0 0 0 1px #D4AF37, 0 10px 20px rgba(212,175,55,0.15)",
        "gold-strong": "0 0 0 1px #D4AF37, 0 0 30px rgba(212,175,55,0.25)",
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
};
