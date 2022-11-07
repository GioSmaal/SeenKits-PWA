/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*",
    "./components/**/*"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dynamicKit': "url('~/img/kitWhite.svg')",
      }
    },
  },
  plugins: [],
}
