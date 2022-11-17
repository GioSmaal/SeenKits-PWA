/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*",
    "./components/**/*"
  ],
  theme: {
    colors: {
      'text': '#2D3047',
      'lightBlue': '#055D89',
      'lineBlue': '#055b86'
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      xxl: '1.563rem',
      xxxl: '2.1rem',
    },
    extend: {
      backgroundImage: {
        'dynamicKit': "url('~/img/kitWhite.svg')",
      },
      width: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      saturate: {
        'max': '100'
      }
    },
  },
  plugins: [],
}
