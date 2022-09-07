/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0E0B16",
        fuschia: "#A239CA",
        jewel: "#4717F6",
        stark: "#E7DFDD",
      },
    },
  },
  plugins: [],
}
