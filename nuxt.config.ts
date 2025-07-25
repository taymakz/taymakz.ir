import tailwindcss from "@tailwindcss/vite";
import { pwa } from './config/pwa'


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    'nuxt-og-image',
    '@nuxtjs/robots'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: [
    '~/assets/styles/app.css'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },
  site: {
    url: 'https://taymakz.ir',
    name: 'تایماز اکبری | Taymaz Akbari',
    description: 'Taymaz Akbari Portfolio | تایماز اکبری سایت شخصی ',
  },
  pwa,
  ogImage: {
    fonts: [
      // will load the Noto Sans font from Google fonts
      'Comfortaa:400',
      'Comfortaa:500',
      'Comfortaa:600',
    ],
  },
  nitro: {
    prerender: {
      routes: ['/'],
    }
  }
})
