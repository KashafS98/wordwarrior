import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.2,
  headerLineHeight: 1,
  headerFontFamily: [
    "Poppins",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["DM Sans","Georgia", "serif"],
  googleFonts: [
    {
      name: 'Poppins',
      styles: [
        '700',
      ],
    },
    {
      name: 'DM Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
})
export default typography