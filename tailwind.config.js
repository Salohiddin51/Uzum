/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				yurak: 'yurak 0.3s ease-in-out infinite',
			},
			keyframes: {
				yurak: {
					'0%': { transform: 'scale(100%)' },
					'100%': { transform: 'scale(120%)' },
				},
			},
			colors: {
				dark: '#0f172a',
				uzum: '#7f4dff',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
});
