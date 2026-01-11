/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        rumor: "#0E21A0",
        whisper: "#4D2FB2",
        echo: "#F375C2",
      },
      fontFamily: {
        heading: ["'Dela Gothic One'", "cursive"],
        body: ["'Happy Monkey'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
