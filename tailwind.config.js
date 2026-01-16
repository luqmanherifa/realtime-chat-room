/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        rumor: "#C04BFF",
        whisper: "#43C000",
        echo: "#FF4F9A",
      },
      fontFamily: {
        heading: ["'Fredoka'", "cursive"],
        body: ["'Quicksand'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
