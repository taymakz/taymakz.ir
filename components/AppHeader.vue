<template>
  <header class="p-5 flex items-center justify-between mb-16">
    <div class="flex gap-x-4 ">
      <ToggleTheme />
      <div class="hidden xs:block">
        <NuxtLink
          aria-label="Taymakz Github"
          external target="_blank" to="https://github.com/Taymakz"
          class="text-text/60 hover:text-text/80  duration-200 "
        >
          <IconGithub :size="24" />
        </NuxtLink>
      </div>
      <div class="hidden xs:block">
        <NuxtLink
          aria-label="Taymakz X"
          external target="_blank" to="https://x.com/Taymakz"
          class=" text-text/60 hover:text-text/80  duration-200 "
        >
          <IconTwitter :size="24" />
        </NuxtLink>
      </div>
      <div class="hidden xs:block">
        <NuxtLink
          aria-label="Taymakz Instagram"
          external target="_blank" to="https://instagram.com/Taymakz"
          class=" text-text/60 hover:text-text/80  duration-200 "
        >
          <IconInstagram :size="24" />
        </NuxtLink>
      </div>
    </div>
    <div />

    <NuxtLink to="/">
      <NuxtImg src="/logo.png" alt="Taymaz Akbari" class="w-10 xs:w-12 aspect-[1/1]" placeholder loading="lazy" />
    </NuxtLink>
  </header>
</template>
