/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Interstate"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'yellow-gold': '#FFF16D',
        'gold': '#AB9834',
        'light-grey': '#D2D2D2',
        'footer-grey': '#737373',
        'grad-grey': '#222222',
        'gastro': '#121212',
        'star1': '#FFC884',
        'star2': '#FEDEB8',
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  plugins: [],
});

