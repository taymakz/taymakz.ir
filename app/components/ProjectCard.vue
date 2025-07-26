<script setup lang="ts">
import type { ProjectType } from '~/types';


defineProps<{
  item: ProjectType
}>()
</script>

<template>

  <div class="flex gap-8 sm:items-center flex-col sm:flex-row">
    <NuxtLink :to="item.link" external target="_blank" :aria-label="item.title" class="block ">
      <NuxtImg :src="item.media.url"
        class="sm:min-w-[350px] sm:w-[350px] md:min-w-[400px] md:w-[400px] w-full rounded-2xl border aspect-[16/8] object-cover"
        :alt="item.media.alt || item.title" placeholder loading="lazy"  />
    </NuxtLink>
    <div>
      <div class="space-y-2">
        <NuxtLink :to="item.link" external target="_blank" :aria-label="item.title"
          class="inline-block md:text-lg font-medium">
          {{ item.title }}
        </NuxtLink>
        <div class="flex items-center gap-x-2 text-muted-foreground font-sans text-sm">

          <span class="icon-[lucide--calendar-clock] size-4.5"></span>
          {{ item.date }}
        </div>
        <NuxtLink v-if="item.github" external target="_blank" :to="item.github.url"
          class="flex items-center gap-x-2 text-muted-foreground font-sans hover:text-text/80 duration-200 text-sm ">
          <span class="icon-[lucide--github] size-4.5"></span>

          github/{{ item.github.text }}
        </NuxtLink>
      </div>
      <div class="flex flex-wrap gap-2 mt-4">
        <div v-for="stack in item.stacks" :key="stack" class="bg-primary/10 rounded-md py-1 px-2 text-sm text-primary">
          {{ stack }}
        </div>
      </div>
    </div>
  </div>

</template>
