// see https://tailwindcss.com/docs/customizing-colors#curating-colors
const colors = require("tailwindcss/colors");
// Avoid build error: `lightBlue` has been renamed to `sky`
delete colors['lightBlue'];

module.exports = {
	// https://tailwindcss.com/docs/just-in-time-mode
	mode: "jit",
	purge: [
	  "./components/**/*.{vue,js}",
	  "./layouts/**/*.vue",
	  "./pages/**/*.vue",
	  "./plugins/**/*.{js,ts}",
	  "./nuxt.config.{js,ts}",
	],
	theme: {
		/*
		 * breakpoints
		 */

		screens: {
			// xs
			"before-xs": { max: "360px" },
			"xs": "360px",

			// sm
			"before-sm": { max: "450px" },
			"sm": "450px",

			// md
			"before-md": { max: "680px" },
			"md": "680px",

			// lg
			"before-lg": { max: "950px" },
			"lg": "950px",

			// xl
			"before-xl": { max: "1440px" },
			"xl": "1440px",

			// 2xl
			"before-2xl": { max: "1600px" },
			"2xl": "1600px",
		},

		/*
		 * font-related
		 */

		fontSize: {
			"2xs": "0.625rem", // 10px
			"xs": "0.75rem", // 12px
			"sm": "1rem", // 16px
			"md": "1.25rem", // 20px
			"lg": "1.5rem", // 24px
			"xl": "2rem", // 32px
			"2xl": "2.5rem", // 40px
			"3xl": "3.75rem", // 60px
		},

		lineHeight: {
			"normal": "normal",
			"2xs": "1rem", // 16px
			"xs": "1.25rem", // 20px
			"sm": "1.625rem", // 26px
			"md": "1.875rem", // 30px
			"lg": "2.125rem", // 34px
			"xl": "2.625rem", // 42px
			"2xl": "4.375rem", // 70px
		},

		fontWeight: {
			normal: 400,
			semibold: 600,
			bold: 700,
		},

		/*
		 * colors
		 */

		colors,

		fill: (theme) => theme("colors"),

		/*
		 * div related
		 */

		container: false,

		boxShadow: {
			DEFAULT: "0 0 8px 0 rgba(0, 0, 0, 0.08)",
			none: "none",
			sm: "0 0 8px 0 rgba(0, 0, 0, 0.08)",
			md: "0 0 32px 0 rgba(0, 0, 0, 0.08)",
		},

		/*
		 * borders related
		 */

		borderRadius: {
			DEFAULT: "0.5rem",
			none: "0rem",
			xs: "0.125rem",
			sm: "0.25rem",
			md: "0.5rem",
			full: "100rem",
		},

		borderWidth: {
			0: "0rem",
			DEFAULT: "0.0625rem",
			1: "0.0625rem",
			2: "0.1250rem",
			3: "0.25rem",
			9: "0.75rem",
		},

		/*
		 * extend
		 */

		extend: {
			spacing: {
				150: "40rem",
			},
		},

		/*
		 * variants
		 */

		variants: {
			extend: {
				// Add hover and focus variants for fill utilities
				fill: ["hover", "focus"],
			},
		},
	},
};
