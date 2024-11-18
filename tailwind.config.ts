import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				deep_blue: "var(--deep_blue)",
				dark: {
					800: "var(--dark-800)",
					900: "var(--dark-900)",
				},
				sunglow: {
					main: "var(--sunglow-main)",
					100: "var(--sunglow-100)",
					300: "var(--sunglow-300)",
					200: "var(--sunglow-200)",
					400: "var(--sunglow-400)",
					500: "var(--sunglow-500)",
					600: "var(--sunglow-600)",
					700: "var(--sunglow-700)",
					800: "var(--sunglow-800)",
					900: "var(--sunglow-900)",
				},
				aqua_blue: {
					main: "var(--aqua_blue-main)",
					100: "var(--aqua_blue-100)",
					200: "var(--aqua_blue-200)",
					300: "var(--aqua_blue-300)",
					400: "var(--aqua_blue-400)",
					500: "var(--aqua_blue-500)",
					600: "var(--aqua_blue-600)",
					700: "var(--aqua_blue-700)",
					800: "var(--aqua_blue-800)",
				},
				baby_pink: {
					main: "var(--baby_pink-main)",
					100: "var(--baby_pink-100)",
					200: "var(--baby_pink-200)",
					300: "var(--baby_pink-300)",
					400: "var(--baby_pink-400)",
					500: "var(--baby_pink-500)",
					600: "var(--baby_pink-600)",
					700: "var(--baby_pink-700)",
					800: "var(--baby_pink-800)",
					900: "var(--baby_pink-900)",
				},
				lavender: {
					main: "var(--lavender-main)",
					800: "var(--lavender-800)",
					900: "var(--lavender-900)",
				},
				retro_blue: {
					main: "var(--retro_blue-main)",
					100: "var(--retro_blue-100)",
					200: "var(--retro_blue-200)",
					300: "var(--retro_blue-300)",
					400: "var(--retro_blue-400)",
					500: "var(--retro_blue-500)",
					600: "var(--retro_blue-600)",
					700: "var(--retro_blue-700)",
					800: "var(--retro_blue-800)",
					900: "var(--retro_blue-900)",
					1000: "var(--retro_blue-1000)",
					1100: "var(--retro_blue-1100)",
				},
				grey: {
					100: "var(--grey-100)",
					200: "var(--grey-200)",
					300: "var(--grey-300)",
					400: "var(--grey-400)",
					500: "var(--grey-500)",
					600: "var(--grey-600)",
					700: "var(--grey-700)",
					800: "var(--grey-800)",
					900: "var(--grey-900)",
					1000: "var(--grey-1000)",
				},
				neutral: {
					100: "var(--neutral-100)",
					200: "var(--neutral-200)",
					300: "var(--neutral-300)",
					400: "var(--neutral-400)",
					500: "var(--neutral-500)",
					600: "var(--neutral-600)",
					700: "var(--neutral-700)",
					800: "var(--neutral-800)",
					900: "var(--neutral-900)",
				},
				red: {
					100: "var(--red-100)",
					200: "var(--red-200)",
					300: "var(--red-300)",
					400: "var(--red-400)",
					500: "var(--red-500)",
					600: "var(--red-600)",
					700: "var(--red-700)",
					800: "var(--red-800)",
					900: "var(--red-900)",
					1000: "var(-red--1000)",
				},
				orange: {
					100: "var(--orange-100)",
					200: "var(--orange-200)",
					300: "var(--orange-300)",
					400: "var(--orange-400)",
					500: "var(--orange-500)",
					600: "var(--orange-600)",
					700: "var(--orange-700)",
					800: "var(--orange-800)",
					900: "var(--orange-900)",
					1000: "var(--orange-1000)",
				},
				yellow: {
					100: "var(--yellow-100)",
					200: "var(--yellow-200)",
					300: "var(--yellow-300)",
					400: "var(--yellow-400)",
					500: "var(--yellow-500)",
					600: "var(--yellow-600)",
					700: "var(--yellow-700)",
					800: "var(--yellow-800)",
					900: "var(--yellow-900)",
					1000: "var(--yellow-1000)",
				},
				green: {
					100: "var(--green-100)",
					200: "var(--green-200)",
					300: "var(--green-300)",
					400: "var(--green-400)",
					500: "var(--green-500)",
					600: "var(--green-600)",
					700: "var(--green-700)",
					800: "var(--green-800)",
					900: "var(--green-900)",
					1000: "var(--green-1000)",
				},
				blue: {
					100: "var(--blue-100)",
					200: "var(--blue-200)",
					300: "var(--blue-300)",
					400: "var(--blue-400)",
					500: "var(--blue-500)",
					600: "var(--blue-600)",
					700: "var(--blue-700)",
					800: "var(--blue-800)",
					900: "var(--blue-900)",
					1000: "var(--blue-1000)",
				},
				purple: {
					100: "var(--purple-100)",
					200: "var(--purple-200)",
					300: "var(--purple-300)",
					400: "var(--purple-400)",
					500: "var(--purple-500)",
					600: "var(--purple-600)",
					700: "var(--purple-700)",
					800: "var(--purple-800)",
					900: "var(--purple-900)",
					1000: "var(--purple-1000)",
				},
				pink: {
					100: "var(--pink-100)",
					200: "var(--pink-200)",
					300: "var(--pink-300)",
					400: "var(--pink-400)",
					500: "var(--pink-500)",
					600: "var(--pink-600)",
					700: "var(--pink-700)",
					800: "var(--pink-800)",
					900: "var(--pink-900)",
					1000: "var(--pink-1000)",
				},
			},

			fontFamily: {
				figtree: ["var(--font-figtree)", "system-ui"],
				inter: ["var(--font-inter)", "sans-serif"],
				nunito: ["var(--font-nunito)", "san-serif"],
				nunitosans: ["var(--font-nunitosans)", "san-serif"],
				//jakarta: ["Plus Jakarta Sans", "sans-serif"],
			},

			fontSize: {
				h1: ["var(--fs-h1)", { lineHeight: "var(--lh-default)" }],
				h2: ["var(--fs-h2)", { lineHeight: "var(--lh-default)" }],
				h3: ["var(--fs-h3)", { lineHeight: "var(--lh-default)" }],
				h4: ["var(--fs-h4)", { lineHeight: "var(--lh-default)" }],
			},
			screens: {
		        'sl': '400px',
		    }
		},
	},
	plugins: [],
};
export default config;
