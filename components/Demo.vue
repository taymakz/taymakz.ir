<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: false,
  },
  githubText: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <NuxtLink
    :to="link" external
    class="border overflow-hidden pb-4 border-border/50 hover:border-border/100 rounded-xl shadow duration-300  "
  >
    <!-- media -->
    <div class="mb-6 border-b ">
      <video autoplay loop muted inline>
        <source :src="media" type="video/mp4">
      </video>
    </div>
    <div class="text-text/80 px-4 line-clamp-2 mb-4">
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
