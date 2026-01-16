/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        rumor: "#5F6F8C",
        whisper: "#C04BFF",
        echo: "#43C000",
      },
      fontFamily: {
        heading: ["'Fredoka'", "cursive"],
        body: ["'Quicksand'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
