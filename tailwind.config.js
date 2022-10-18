/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px',
      'lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        poppins: 'Poppins'
      },
      colors: {
        box: 'rgba(120, 120, 120, 0.2)',
        paragraf: '#787878',
        main: '#500DE0',
        boxborder: '#4D4D4D',
        bg: '#212027',
      },
    },
  },
  plugins: [],
}
