<script setup lang="ts">
import { appName } from '~/constants'

defineOgImageComponent('NuxtSeo', {
  title: appName,
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
