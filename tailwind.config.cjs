/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bumblebee: {
          ...require("daisyui/src/theming/themes")["bumblebee"],
          primary: "#da6f2c",
          "primary-content": "#FFFFFF",
          secondary: "#da6f2c",
          "secondary-content": "#FFFFFF",
          accent: "#da6f2c",
          "accent-content": "#FFFFFF",

          "base-100": "#fffcf0",
          "base-200": "#fffef8",
          "base-300": "#fffffe",
        },
      },
    ],
  },
};
