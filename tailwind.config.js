/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",                 // Include the main HTML file
      "./src/**/*.{js,ts,jsx,tsx}",   // Include all JS/TS/React files in the src folder
    ],
    theme: {
      extend: {
        // Customize your theme here if needed
        colors: {
          background: "#0F0F0F",  // Black background
          gold: "#FFD700",        // Gold color
          blue: "#6495ED",        // Blue color
        },
      },
    },
    plugins: [],
  };
  