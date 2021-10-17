import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
	// see https://github.com/nuxt/framework/discussions/751

	// Import tailwind style
	// https://github.com/nuxt-community/tailwindcss-module/issues/387#issuecomment-944598196
	css: ["~/assets/tailwind.scss", "~/assets/_base.scss", "~/assets/_utilities.scss"],

	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
});
