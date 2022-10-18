/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "320px",
      md: "375px",
      lg: "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        box: "rgba(120, 120, 120, 0.2)",
        paragraf: "#787878",
        main: "#500DE0",
        boxborder: "#4D4D4D",
        bg: "#212027",
        outer: "#292929",
        diamond: "(105.94% 1266.17% at 0% 8.28%, #5726C0 0%, #4615B0 100%)",
      },
    },
  },
  plugins: [],
};
