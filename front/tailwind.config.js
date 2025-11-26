/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2a4b9b",
        violet: "#692b85",
        green: "#098136",
        orange: "#f1a80f",
        pink: "#da4d66",
        red: "#b23b53",
        white: "#f5f5f5",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        rosario: ["Rosario", "serif"],
      },
    },
  },
  plugins: [],
};

