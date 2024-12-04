<script setup lang="ts">
import type { ProjectType } from './Projects.vue';

defineProps<{
  item: ProjectType
}>()
</script>

<template>
  <div class="flex gap-8 sm:items-center flex-col sm:flex-row">
    <NuxtLink :to="item.link" external target="_blank" :aria-label="item.title" class="block ">
      <video v-if="item.media.type === 'video'" autoplay loop muted inline class="sm:min-w-[350px] w-full sm:w-[350px] rounded border">
        <source :src="item.media.url" type="video/mp4" />
      </video>
      <NuxtImg v-else :src="item.media.url" class="sm:min-w-[350px] sm:w-[350px] w-full rounded border" :alt="item.title" />

    </NuxtLink>
    <div>
      <div class="space-y-2">
        <NuxtLink :to="item.link" external target="_blank" :aria-label="item.title"
          class="inline-block md:text-lg font-medium">
          {{ item.title }}
        </NuxtLink>
        <div class="flex items-center gap-x-2 text-text/60 text-sm">
          <IconCalendarClock :size="18" />
          {{ item.date }}
        </div>
        <NuxtLink v-if="item.github" external target="_blank" :to="item.github.url"
          class="flex items-center gap-x-2 text-text/60 hover:text-text/80 duration-200 text-sm ">
          <IconGithub :size="18" />
          github/{{ item.github.text }}
        </NuxtLink>
      </div>
      <div class="flex flex-wrap gap-2 mt-4">
        <div v-for="stack in item.stacks" :key="stack"
          class="text-primary bg-primary/5 border border-primary py-0.5 px-2 rounded-full text-sm font-medium">
          {{ stack }}
        </div>
      </div>
    </div>
  </div>
</template>

