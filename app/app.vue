<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';

</script>

<template>
  <div>
    <AppHeader />
    <Introduce />
    <LazyProjects hydrate-on-visible />
  </div>
</template>
