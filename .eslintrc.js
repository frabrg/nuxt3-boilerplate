module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ["prettier"],
	plugins: ["prettier"],
	// https://github.com/prettier/eslint-plugin-prettier
	rules: { "prettier/prettier": "error" },
};
