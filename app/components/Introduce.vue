<script setup lang="ts">
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
      Hi! I'm Taymaz Akbari, a Frontend Engineer, and I love it when people enjoy what i Build.
    </p>

    <div class="flex items-center gap-2">
      <p class="text-muted-foreground"> Creator of</p>
      <div class="flex items-center gap-1.5 ">
        <NuxtLink external to="//student-hub.ir" target="_blank" rel="noopener noreferrer"
          aria-label="Studenthub – Modern Student Community Web Application by Taymaz Akbari"
          title="Studenthub – Modern Student Community Web Application by Taymaz Akbari"
          class="bg-card shadow-xs border dark:border-transparent py-0.5 px-2 rounded-md text-primary hover:text-primary/80">
          Studenthub
        </NuxtLink>
        <NuxtLink external to="//menofy.ir" target="_blank" rel="noopener noreferrer"
          aria-label="Menofy – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari"
          title="Menofy – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari"
          class="bg-card shadow-xs border dark:border-transparent py-0.5 px-2 rounded-md text-primary hover:text-primary/80">
          Menofy
        </NuxtLink>
        <span class="sr-only">Menofy is a digital menu solution for cafes and restaurants.</span>
      </div>
    </div>
    <p class="leading-7">
      I've been working in web development for three years, mostly with Vue and modern tools. I love turning ideas into
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
