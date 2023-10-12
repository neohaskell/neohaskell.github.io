/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const lightColors = {
  text: colors.black,
  background: colors.yellow[50],
  primary: "#7df9ff",
  secondary: "#9723c9",
  accent: "#fffF00",
};

const light = Object.keys(lightColors).reduce((acc, key) => {
  acc[`light${key}`] = lightColors[key];
  return acc;
}, {});

const darkColors = {
  text: colors.white,
  background: colors.slate[900],
  primary: "#7df9ff",
  secondary: "#9723c9",
  accent: "#fffF00",
};

const dark = Object.keys(darkColors).reduce((acc, key) => {
  acc[`dark${key}`] = darkColors[key];
  return acc;
}, {});

const shadow = (px, py, color) => `${px}px ${py}px 0px ${color}`;
const simpleShadow = (px, color) => shadow(px, px, color);
const borderedShadow = (px, color) => {
  const offset = 2;
  const actualShadow = simpleShadow(px, color);
  const rightBorder = simpleShadow(px + offset, "black");
  const leftBorder = simpleShadow(px - offset, "black");
  const leftCorner = shadow(px - offset, px + offset, "black");
  const rightCorner = shadow(px + offset, px - offset, "black");
  return `${actualShadow}, ${rightBorder}, ${leftBorder}, ${leftCorner}, ${rightCorner}`;
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        neoblack: "8px 8px 0px rgba(0,0,0,1)",
        neowhite: "8px 8px 0px rgba(255,0,0,1)",
        rainbow: `${borderedShadow(8, colors.cyan["400"])}, ${borderedShadow(
          8 * 2,
          colors.yellow["400"]
        )}, ${borderedShadow(8 * 3, colors.violet["400"])}`,
        neocyan: borderedShadow(8, colors.cyan["400"]),
        neoyellow: borderedShadow(8, colors.yellow["400"]),
        neoviolet: borderedShadow(8, colors.violet["400"]),
      },
      zIndex: {
        999: 999,
      },
      padding: {
        "16-9": "56.25%",
      },
      colors: {
        codeBg: "#2D2A55",
        ...light,
        ...dark,
      },
      tracking: {
        supatight: "-0.5em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
