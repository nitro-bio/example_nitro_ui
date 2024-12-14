/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    /* "./node_modules/@nitro-bio/sequence-viewers/dist/nitro-ui.umd.js", */
  ],
  theme: {
    extend: {
      colors: {
        brand: colors.sky,
        noir: colors.zinc,
      },
    },
  },
  plugins: [],
};
