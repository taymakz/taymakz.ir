<script lang="ts" setup>
import { appDescription, appName } from '~~/constants';


useSeoMeta({
	twitterTitle: appName,
	twitterDescription: appDescription,
	twitterImage: '/logo.png',
	twitterCard: 'summary',
});

useHead({
	link: [
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon.ico',
		},
	],
});
</script>

<template>
	<NuxtPwaAssets />
	<NuxtLayout>
		<NuxtLoadingIndicator :size="3" />
		<NuxtPage />
	</NuxtLayout>
</template>
