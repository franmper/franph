module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,svelte}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Alata", "sans-serif"],
			},
			colors: {
				primary: "#252945",
				secondary: "#e6bdc2",
				dark: "#cd7a84",
				light: "#f9f0f1",
			},
		},
	},
	plugins: [],
};
