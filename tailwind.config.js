import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				background : "#000000",
				primary: '#FFAC15'
			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', ...fontFamily.sans],
				mono: ['"JetBrains Mono"', ...fontFamily.mono]
			}
		},
	},
};

export default config;
