import { appDescription, appName } from './constants/index'

const sw = import.meta.env.SW === 'true'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/seo',
    'nuxt-lucide-icons',
    'nuxt-marquee',
  ],
  pwa: {
    strategies: sw ? 'injectManifest' : 'generateSW',
    srcDir: sw ? 'service-worker' : undefined,
    filename: sw ? 'sw.ts' : undefined,
    registerType: 'autoUpdate',
    manifest: {
      name: 'Taymaz Akbari',
      short_name: 'Taymaz',
      theme_color: '#F4F4F5',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'maskable-icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa-IR',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#F4F4F5' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#09090B' },
      ],
    },

  },
  site: {
    url: 'https://taymakz.ir',
    name: appName,
    description: appDescription,
    defaultLocale: 'fa', // not needed if you have @nuxtjs/i18n installed
  },
  robots: {
    // provide simple disallow rules for all robots `user-agent: *`
    disallow: [],
    allow: '*',
  },
  ogImage: {
    defaults: {
      component: 'NuxtSeo',
      props: {
        colorMode: 'dark',
      },
    },

  },
  lucide: {
    namePrefix: 'Icon',
  },
  runtimeConfig: {
    public: {
      baseApi: '', // Base Api environment variable
      baseStorage: '', // Base Media environment variable
      domain: '', // Domain environment variable
    },
  },
  colorMode: {
    classSuffix: '',
  },
  tailwindcss: {
    viewer: false,
  },
})
