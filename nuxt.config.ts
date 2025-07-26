import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: [
    '~/assets/styles/app.css'
  ]
})
