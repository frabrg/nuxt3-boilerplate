<template>
	<div class="svg-background">
		<navbar-default />
		<!-- Route -->
		<slot />
		<footer-default />
	</div>
</template>

<style lang="scss" scoped>
.svg-background {
	@apply border-1;
	@apply border-blue-500;

	@apply h-full;
	@apply flex;
	@apply flex-col;

	// bg style - tailwind
	@apply w-full;
	@apply bg-no-repeat;
	@apply bg-center;
	@apply bg-cover;

	// bg style - css
	aspect-ratio: 960/300;
	// see https://app.haikei.app/
	background-image: url("/img/layered-waves-haikei.svg");
}
</style>
