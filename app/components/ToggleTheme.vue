<script lang="ts" setup>
const mode = useColorMode();
const isDark = computed<boolean>({
	get() {
		return mode.value === 'dark';
	},
	set() {
		mode.preference = isDark.value ? 'light' : 'dark';
	},
});

const isAppearanceTransition =
	typeof document !== 'undefined' &&
	// @ts-expect-error: Transition API
	document.startViewTransition &&
	!window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function toggle(event?: MouseEvent) {
	if (!isAppearanceTransition || !event) {
		isDark.value = !isDark.value;
		return;
	}

	const x = event.clientX;
	const y = event.clientY;
	const endRadius = Math.hypot(
		Math.max(x, innerWidth - x),
		Math.max(y, innerHeight - y),
	);
	const transition = document.startViewTransition(async () => {
		isDark.value = !isDark.value;
		await nextTick();
	});

	transition.ready.then(() => {
		const clipPath = [
			`circle(0px at ${x}px ${y}px)`,
			`circle(${endRadius}px at ${x}px ${y}px)`,
		];
		document.documentElement.animate(
			{
				clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
			},
			{
				duration: 500,
				easing: 'ease-in',
				pseudoElement: isDark.value
					? '::view-transition-old(root)'
					: '::view-transition-new(root)',
			},
		);
	});
}
</script>

<template>
	<button
		class="text-text/60 hover:text-text/80"
		@click="toggle"
		title="Toggle Theme"
	>
		<IconMoon class="dark:hidden" />
		<IconSun class="hidden dark:block" />
	</button>
</template>
