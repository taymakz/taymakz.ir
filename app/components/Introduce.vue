<script setup lang="ts">
import CafifyLogo from "~/assets/images/cafify.png";
const links = [
  {
    to: "https://github.com/taymakz",
    icon: "icon-[lucide--github]",
    alt: "GitHub"
  },
  {
    to: "https://instagram.com/taymakz",
    icon: "icon-[lucide--instagram]",
    alt: "Instagram"
  },
  {
    to: "https://x.com/taymakz",
    icon: "icon-[hugeicons--new-twitter]",
    alt: "Twitter"
  }
];
</script>

<template>
  <main class="container max-w-screen-md pt-10 prose space-y-6 text-muted-foreground font-sans">
    <h1 class="font-semibold text-4xl text-foreground">
      Taymaz Akbari
    </h1>
    <p>
      Hi! I'm Taymaz Akbari, a Software Engineer, and I love it when people enjoy what i Build.
    </p>

    <div class="flex items-center gap-2">
      <p class="text-muted-foreground"> Creator of</p>
      <div class="flex items-center gap-1.5 ">
        <NuxtLink external to="//student-hub.ir" target="_blank" rel="noopener noreferrer"
          aria-label="Studenthub – Modern Student Community Web Application by Taymaz Akbari"
          title="Studenthub – Modern Student Community Web Application by Taymaz Akbari"
          class="bg-card hover:bg-accent/50 shadow-xs border dark:border-transparent py-1 px-2 rounded-md flex items-center gap-1.5">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.12 508.32"
              class="h-4.5 text-neutral-900 dark:text-foreground">
              <path fill="currentColor"
                d="M439.3,1.2l-213.46,128.62c-1.43.86-3.22.86-4.64,0L6.82.65C3.82-1.15,0,1.01,0,4.51v264.58c0,1.58.83,3.04,2.18,3.85l219.02,131.97c1.43.86,3.22.86,4.64,0l218.1-131.42c1.35-.81,2.18-2.28,2.18-3.85V5.06c0-3.5-3.82-5.66-6.82-3.85Z" />
              <path fill="currentColor"
                d="M446.12,315.63v56.77c0,1.58-.83,3.04-2.18,3.85l-218.1,131.42c-1.43.86-3.22.86-4.64,0L2.18,375.7c-1.35-.81-2.18-2.28-2.18-3.85v-56.77c0-3.5,3.82-5.66,6.82-3.85l187.25,112.83h.01l27.12,16.34c1.43.86,3.22.86,4.65,0l213.45-128.62c3-1.81,6.82.35,6.82,3.85Z" />
            </svg>
          </span>
          Studenthub
        </NuxtLink>
        <NuxtLink external to="//cafify.ir" target="_blank" rel="noopener noreferrer"
          aria-label="Cafify – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari"
          title="Cafify – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari"
          class="bg-card hover:bg-accent/50 shadow-xs border dark:border-transparent py-1 px-2 rounded-md flex items-center gap-1.5">
          <img :src="CafifyLogo" alt="Cafify Logo" class="inline h-6.5 w-auto">
          Cafify
        </NuxtLink>

        <span class="sr-only">Cafify is a digital menu solution for cafes and restaurants.</span>
      </div>
    </div>
    <p class="leading-7">
      I've been working in web development for four years, mostly with Vue and modern tools. Recently, I switched from
      Vue.js/Nuxt to React/Next.js to explore new possibilities. I love turning ideas into
      real products and always look for ways to make things simpler and more engaging.
      <br>
      In every project, I'm eager to learn and share what I discover with my friends.
    </p>
    <p>
      Most importantly, I look forward to working with you ! Find me on
    </p>
    <div class="flex items-center gap-4 flex-wrap">

      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" external target="_blank" rel="noopener noreferrer"
        :aria-label="link.alt"
        class="text-muted-foreground hover:text-foreground duration-200 flex border-b py-px items-center justify-center gap-2">
        <span :class="`${link.icon} size-5`" role="img" :aria-label="link.alt" />
        <span>
          {{ link.alt }}
        </span>
      </NuxtLink>

    </div>

  </main>
</template>
