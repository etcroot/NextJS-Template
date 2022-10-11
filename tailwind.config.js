/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms", {
      strategy: "class",
    }),
    require("@tailwindcss/line-clamp"),
  ],
};
