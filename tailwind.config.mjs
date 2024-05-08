import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors: {
				black: "#101010",
				white: "#F9F9F9",
				blue1: "#03045E",
				blue2: "#0077B6",
				blue3: "#00B4D8",
				blue4: "#90E0EF",
				blue5: "#CAF0F8",

			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				'fira': ['Fira Sans', 'Helvetica', 'Arial', 'sans-serif'],
				space: ['Space Grotesk', 'Helvetica', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
