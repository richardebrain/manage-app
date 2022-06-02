module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens:{
      sm:"375px",
      md:"720px",
      lg:"976px",
      xl:"1440px"

    },
    extend: {
      colors:{
        brightRed:'hsl(12,88%,59%)',
        brightRedLight:'hsl(12,88%,69%)',
        brightRedSupLight:'hsl(12,88%,95%)',
        darkBlue:'hsl(228,39%,23%)',
        darkGrayishBlue:'hsl(227,12%,61%)',
        veryDarkBlue:'hsl(223,12%,13%)',
        vaeyPaleRed:'hsl(13,100%,96%)',
        veryLightGray:'hsl(0,0%,98%)'
      }
    },
  },
  plugins: [],
}
