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
      'lineBlue': '#055b86',
      'gradientBlue': '#055D89',
      'white': '#ffffff',
      'black': '#000000'
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
        '53': '13.3rem'
      },
      borderWidth: {
        '6': '6px'
      },
      saturate: {
        'max': '100'
      },
      dropShadow: {
        'shadowUp': '0 -6px 8px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
