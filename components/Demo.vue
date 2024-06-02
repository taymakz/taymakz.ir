<script lang="ts" setup>
defineProps<{
  title: string,
  link: string,
  media:string,
  mediaType: 'video' | 'image',
  date: string,
  github?:string,
  githubText?:string,
}>()
</script>

<template>
  <NuxtLink
    :to="link" 
    external
    target="_blank"
    :aria-label="title"

    class="border overflow-hidden pb-4 border-border/50 hover:border-border/100 rounded-xl shadow duration-300  "
  >
    <!-- media -->
    <div class="mb-6 border-b ">
      <video v-if="mediaType === 'video'" autoplay loop muted inline class="w-full aspect-[1.75/1] object-cover">
        <source :src="media" type="video/mp4">
      </video>
      <NuxtImg v-else :src="media" class="w-full aspect-[1.75/1] "/>
    </div>
    <div class="text-text/80 px-4 line-clamp-2 mb-4 h-12">
      {{ title }}
    </div>
    <slot />
    <div class="flex justify-between text-text/60 text-sm  px-2">
      <div>
        <NuxtLink
          v-if="github" external target="_blank" :to="github"
          class="flex items-center gap-x-2 text-text/60 hover:text-text/80 duration-200 "
        >
          <IconGithub :sze="24" />
          {{ githubText }}
        </NuxtLink>
      </div>
      <p>{{ date }}</p>
    </div>
  </NuxtLink>
</template>

  <style>

  </style>
