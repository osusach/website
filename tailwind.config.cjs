const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-5%);" },
          "50%": { transform: "translateY(5%);" },
        },
      },
    },
  },
  plugins: [require("daisyui"), addDynamicIconSelectors()],
  daisyui: {
    themes: [
      {
        bumblebee: {
          ...require("daisyui/src/theming/themes")["bumblebee"],
          primary: "#da6f2c",
          "primary-content": "#FFFFFF",
          secondary: "#da6f2c",
          "secondary-content": "#FFFFFF",
          accent: "#9900ff",
          "accent-content": "#FFFFFF",

          "base-100": "#fffcf0",
          "base-200": "#fffef8",
          "base-300": "#fffffe",
        },
      },
    ],
  },
};
