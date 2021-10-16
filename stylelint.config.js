module.exports = {
	extends: ["stylelint-config-standard", "stylelint-config-prettier"],
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	rules: {
		// https://stylelint.io/user-guide/rules/at-rule-no-unknown
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"extends",
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
					"layer",
					"include",
					"mixin",
					"at-root",
					"use",
				],
			},
		],
		"block-no-empty": null,
		"no-descending-specificity": null,
	},
};
