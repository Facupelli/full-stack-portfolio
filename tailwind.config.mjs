import defaultTheme from "tailwindcss/defaultTheme";
import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        title: ['"Open Sans"'],
      },
      colors: {
        white: "rgb(225,225,225)",
        "opacity-white": "rgba(225,225,225,0.5)",
        "border-white": "rgba(225,225,225,0.2)",
      },
      backgroundImage: {
        "highlight-border":
          "linear-gradient(90deg, rgb(15, 15, 15) 0%, rgb(15, 15, 15) 48%, rgba(255, 255, 255, 0.8) 50%, rgb(15, 15, 15) 52%, rgb(15, 15, 15) 100%)",
      },
      animation: {
        "color-change": "colorChange 1.5s ease-in-out infinite",
        float: "float 2.5s ease-in-out infinite",
      },
      keyframes: {
        colorChange: {
          "0%, 100%": { color: "rgb(215,215,215)", transform: "scale(1.3)" },
          "33%": { color: "gray", transform: "scale(.9)" },
        },
        float: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-7px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
