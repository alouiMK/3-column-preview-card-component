/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      bigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
      lexendDeca: ["Lexend Deca", "sans-serif"],
    },
    colors: {
      BrightOrange: "hsl(31, 77%, 52%)",
      DarkCyan: "hsl(184, 100%, 22%)",
      VeryDarkCyan: "hsl(179, 100%, 13%)",
      TransparentWhite: "hsla(0, 0%, 100%, 0.75)",
      VeryLightGray: "hsl(0, 0%, 95%)",
    },
  },
  plugins: [],
};
