/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        Mobile: "0",
        desktop: "650px",
      },
    },
  },
  plugins: [],
};
