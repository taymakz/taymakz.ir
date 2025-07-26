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
  <header class="px-8 py-6 flex items-center justify-between" aria-label="Site Header">
    <NuxtImg src="/logo.png" width="38" height="38" loading="lazy" class="rounded-md"
      alt="Taymaz Akbari | تایماز اکبری Logo" fetchpriority="high" />


    <nav aria-label="Social media links" class="flex items-center gap-4.5">
      <ul class="flex gap-4.5">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" external target="_blank" rel="noopener noreferrer" :aria-label="link.alt"
            class="text-muted-foreground hover:text-foreground duration-200 flex items-center justify-center">
            <span :class="`${link.icon} size-5`" role="img" :aria-label="link.alt" />
          </NuxtLink>
        </li>
      </ul>
      <ToggleTheme />
    </nav>

  </header>
</template>
