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

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        neoblack: "8px 8px 0px rgba(0,0,0,1)",
        neowhite: "8px 8px 0px rgba(255,0,0,1)",
        rainbow: `8px 8px 0px ${colors.cyan["400"]}, 16px 16px 0px ${colors.yellow["400"]}, 24px 24px 0px ${colors.violet["400"]}`,
      },
      colors: {
        ...light,
        ...dark,
      },
    },
  },
  plugins: [],
};
