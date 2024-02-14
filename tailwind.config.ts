import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        headerLayout: "1fr 5fr auto",
      },
      backgroundImage: {},
      colors: {
        pureWhite: "var(--color-pure-white)",
        red: "var(--color-red)",
        darkBlue: "var(--color-dark-blue)",
        greyishBlue: "var(--color-greyish-blue)",
        semiDarkBlue: "var(--color-semi-dark-blue)",
        backgroundImage: "var(--color-background-image)",
      },
      spacing: {
        "960": "60rem",
        "1664": "154rem",
        "92vh": "92vh",
        "100vh": "100vh",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "920px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "500px" },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
