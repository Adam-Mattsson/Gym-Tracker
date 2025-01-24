/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#18191a",
        secondary: {
          DEFAULT: "#0085ff",
          100: "#168fff",
          200: "#",
        },
        black:{
          DEFAULT: "#000000",
        },
        grey:{
          DEFAULT: "#18191a",
          100: "#242526",
          200: "#3a3b3c",
          300: "#b0b3b8",
        },
        white:{
          DEFAULT: "#ffffff",
          100: "#e4e6eb"
        }
    },
  },
  plugins: [],
}}