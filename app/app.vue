<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';

const appDescription = 'Taymaz Akbari, a Frontend Engineer and creator of Studenthub & Menofy';

useHead({
  title: 'Taymaz Akbari | تایماز اکبری',
  htmlAttrs: {
    lang: 'en-US',
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: appDescription },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#F5F5F5' },
    { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#121212' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  ]
})

useSeoMeta({
  twitterTitle: 'Taymaz Akbari',
  twitterDescription: appDescription,
  twitterImage: '/logo.png',
  twitterCard: 'summary',
});
defineOgImageComponent('Main', {
  title: 'Taymaz Akbari',
  description: 'Frontend Engineer and creator of Studenthub & Menofy',
  headline: 'Taymakz.ir',
})
</script>

<template>
  <div>
    <AppHeader />
    <Introduce />
    <LazyProjects hydrate-on-visible />
  </div>
</template>
