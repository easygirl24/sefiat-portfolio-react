
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6C3BFF",
          dark: "#4F24D8",
          light: "#EEE7FF",
        },
        accent: {
          DEFAULT: "#FF6B6B",
          yellow: "#FFD166",
          teal: "#36CFC9",
        },
        ink: "#201A31",
        paper: "#FFFDF9",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        playful: "6px 6px 0px #201A31",
      },
    },
  },
  plugins: [],
};
