/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FAFAFA",
        neutral: "#FFFFFF",
        accent: "#4169E1"
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

