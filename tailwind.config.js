/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1C325B",
        purp: "#6A669D",
        sage: "#9ABF80",
        grey: "#E5E3D4",
      },
      fontFamily: {
        heading: ["'Dela Gothic One'", "cursive"],
        body: ["'Happy Monkey'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
