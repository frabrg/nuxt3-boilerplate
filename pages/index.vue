<template>
	<div class="container">
		<div class="flex items-center">
			<p class="text-green-200">{{ indexContent }}</p>
			<!-- https://github.com/tailwindlabs/heroicons/issues/528 -->
			<!-- <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" /> -->
		</div>
	</div>
</template>

<script lang="ts" setup>
// https://github.com/tailwindlabs/heroicons/issues/528
// import { CheckIcon } from "@heroicons/vue/outline";

const indexContent = "eslint/prettier/stylelint now works";
</script>
