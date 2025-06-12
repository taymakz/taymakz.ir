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
	if (!isAppearanceTransition) {
		isDark.value = !isDark.value;
		return;
	}

	document.startViewTransition(async () => {
		isDark.value = !isDark.value;
		await nextTick();
	});
}
</script>

<template>
	<button
		class="text-text/60 hover:text-text/80"
		@click="toggle($event)"
		title="Toggle Theme"
	>
		<IconMoon class="dark:hidden" />
		<IconSun class="hidden dark:block" />
	</button>
</template>
