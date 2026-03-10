/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public_html/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'scout-blue': '#1e40af',
        'scout-green': '#059669',
        'scout-dark': '#1f2937',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
