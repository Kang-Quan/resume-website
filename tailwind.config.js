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
				mono: ['"Fira Code"', "monospace"], // Use for code or monospaced text
			},
			padding: {
				"30p": "30%",
				"20p": "20%",
                "25p": "25%",
			},
			animation: {
				rotateIn: "rotateIn 1s linear", // Custom rotate animation
				slideIn: "slideIn 1s ease-in-out forwards", // Custom slide animation
			},
			keyframes: {
				rotateIn: {
					"0%": {
						transform:
							"translateX(10%) translateY(-40%) rotateX(-90deg)", // Start at 10% X and 40% Y
						opacity: "0",
					},
					"25%": {
						transform:
							"translateX(7.5%) translateY(-30%) rotateX(-67.5deg)", // Intermediate state
						opacity: "0.3",
					},
					"50%": {
						transform:
							"translateX(5%) translateY(-20%) rotateX(-45deg)", // Halfway
						opacity: "0.5",
					},
					"75%": {
						transform:
							"translateX(2.5%) translateY(-10%) rotateX(-22.5deg)", // Almost there
						opacity: "0.8",
					},
					"100%": {
						transform: "translateX(0) translateY(0) rotateX(0)", // End in the final position
						opacity: "1",
					},
				},

				slideIn: {
					"0%": { transform: "translateX(-100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
			},
		},
	},
	plugins: [
        require("tailwindcss-animation-delay"),
        require('tailwind-scrollbar-hide'),
    ],
};
