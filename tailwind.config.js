/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/public/index.html",
    ".client/src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

