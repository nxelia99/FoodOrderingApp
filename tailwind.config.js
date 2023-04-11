/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplay Regular', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        tomato: "#E50914",
        marigold: "#ffbe0b",
      }
    },
  },
  plugins: [],
} 
