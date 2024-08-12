/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: { main: ["Inter", "sans-serif"] },
    extend: {
      colors: {
        azul: "#16304E",
      },
      spacing: {
        "30p": "30px",
      },
    },
  },
  plugins: [],
};
