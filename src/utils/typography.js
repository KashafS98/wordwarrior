import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.2,
  headerLineHeight: 1,
  scaleRatio: 3,
  headerFontFamily: [
    "Poppins",
    "Dancing Script",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["DM Sans","Georgia", "serif"],
  googleFonts: [
    {
      name: 'Poppins',
      styles: [
        '400',
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
    {
      name: 'Dancing Script',
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