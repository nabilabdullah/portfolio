/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    // container: {
    //   center: true,
    //   padding: '16px',
    // },
    extend: {
      colors: {
        primary: '#116466',
        secondary: '#D1E8E2',
        dark: '#2C3531',
        info: '#D9B08C',
      },
      // screens: {
      //   '2xl': '1320px',
      // },
    },
  },
  plugins: [],
}

