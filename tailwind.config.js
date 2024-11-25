/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html", // Include the main HTML file
		"./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/React files in the src folder
	],
	theme: {
		extend: {
			// Customize your theme here if needed
			colors: {
				background: "#0A1828", // Black background
				gold: "#BFA181", // Gold color
				blue: "#2EB2A8", // Blue color
			},
			fontFamily: {
				mono: ['"Fira Code"', 'monospace'], // Use for code or monospaced text
			},
		},
	},
	plugins: [],
};
