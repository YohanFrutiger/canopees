/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Liens vers le fichier index.html et vers tous les fichiers React/JSX
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Ajout des couleurs de la charte graphique
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
        // Ajout des polices du design system
        outfit: ["Outfit", "sans-serif"],
        rosario: ["Rosario", "serif"],
      },
    },
  },
  plugins: [],
};

