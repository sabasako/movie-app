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
      height: {
        "92vh": "92vh",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pureWhite: "var(--color-pure-white)",
        red: "var(--color-red)",
        darkBlue: "var(--color-dark-blue)",
        greyishBlue: "var(--color-greyish-blue)",
        semiDarkBlue: "var(--color-semi-dark-blue)",
      },
      spacing: {
        "960": "60rem",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
export default config;
