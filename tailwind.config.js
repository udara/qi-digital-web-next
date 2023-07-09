/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
      },
      fontFamily: {
        CormorantGaramond: ["CormorantGaramond"],
        Manrope: ["Manrope"],
        SourceSansPro: ["SourceSansPro"],
        LexendDeca: ["LexendDeca"],
      },
      colors: {
        "light-grey": "#aaaaaa",
        "mid-grey": "#696969",
        "dark-grey": "#292828",
        burgundy: "#3d3236",
        cream: "#fbf9ed",
        khaki: "#c3bdad",
        "article-header": "#dfd1c8",
        "article-link": "#c3bdad",
        "article-link-hover": "#000000",
        "article-quote-bg": "#f6f6f6",
        nav: "#030804",
      },
      screens: {
        620: "620px",
        600: "600px",
        550: "550px",
        500: "500px",
        450: "450px",
        400: "400px",
        350: "350px",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
}
