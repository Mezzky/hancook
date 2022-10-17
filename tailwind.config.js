/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
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
        primary: '#000F92',
        secondary: '#404BA9',
        btn: '#4355FC',
        shape: '#C4E3FF',
      },
    },
  },
  plugins: [],
}
