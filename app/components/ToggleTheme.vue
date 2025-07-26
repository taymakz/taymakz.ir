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

function toggle() {
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
	<button title="Toggle Theme"
		class="text-muted-foreground hover:text-foreground duration-200 flex items-center justify-center "
		@click="toggle()">
		<span class="icon-[lucide--moon] dark:hidden size-5" />
		<span class="icon-[lucide--sun] hidden dark:block size-5" />
	</button>
</template>
