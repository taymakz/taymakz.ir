<script lang="ts" setup>
import {  appDescriptionEN, appNameEN } from '~~/constants';

defineOgImageComponent('Main', {
  title: appNameEN,
  description: appDescriptionEN,
  headline: 'Taymakz.ir',
})
</script>

<template>
	<div class="pb-10">
		<Introduce />
			<Projects />

	</div>
</template>
