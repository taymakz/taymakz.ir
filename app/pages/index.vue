<script lang="ts" setup>
import {  appDescriptionEN, appName, appNameEN } from '~~/constants';

defineOgImageComponent('Main', {
  title: appNameEN,
  description: appDescriptionEN,
  headline: 'Taymakz.ir',
})
</script>

<template>
	<div class="pb-10">
		<Introduce />
		<ClientOnly>
			<Skills />
			<Projects />
		</ClientOnly>
	</div>
</template>
