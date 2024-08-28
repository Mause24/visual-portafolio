/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				light:{
					primary: {
						normal: "#007acc",
					},
					secondary: {
						normal: "#1e1e1e",
					},
					background: {
						normal: "#f5f5f5",
					},
				},
				dark:{
					primary: {
						normal: "#007acc",
					},
					secondary: {
						normal: "#f1f1f1",
					},
					background: {
						normal: "#252526",
					},
				}
			},
		},
	},
	plugins: [],
}
