<script lang="ts" setup>
import { appDescription, appName } from '~~/constants';


useSeoMeta({
	ogImage: '/logo.png',
	twitterTitle: appName,
	twitterDescription: appDescription,
	twitterImage: '/logo.png',
	twitterCard: 'summary',
});

useHead({
	htmlAttrs: {
		lang: 'fa',
	},
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
