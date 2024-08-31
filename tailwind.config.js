/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "selector",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				extensions: {
					ts: "#3178c6",
					js: "#f7df1e",
					jsx: "#61dbfb",
					css: "#20639b",
					html: "#FF5733",
				},
				light: {
					primary: {
						normal: "#007acc",
					},
					secondary: {
						normal: "#1e1e1e",
						alternate: "#0e0e0e",
						highlight: "#37373e",
					},
					background: {
						normal: "#f5f5f5",
					},
					backgroundHeader: {
						normal: "#2D3133",
					},
					yellow: {
						normal: "#E5C365",
					},
				},
				dark: {
					primary: {
						normal: "#007acc",
						highlight: "#00b1fb",
					},
					secondary: {
						normal: "#f1f1f1",
						alternate: "#4a4c4e",
					},
					background: {
						normal: "#252526",
					},
					backgroundHeader: {
						normal: "#2D3133",
					},
					yellow: {
						normal: "#E5C365",
					},
				},
			},
		},
	},
	plugins: [],
}
