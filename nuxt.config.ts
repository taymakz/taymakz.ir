import { appDescription, appName } from "./constants";
import {pwa} from './config/pwa'
export default defineNuxtConfig({
	devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
	modules: [
		'@vueuse/nuxt',
		'@vite-pwa/nuxt',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxt/image',
		'@nuxtjs/seo',
		'nuxt-lucide-icons',
		'nuxt-marquee',
		'@nuxt/eslint',
		'nuxt-build-cache',
	],
	pwa ,
	experimental: {
		watcher: 'parcel', // 'chokidar' or 'parcel' are also options
		payloadExtraction: false,
		renderJsonPayloads: true,
		typedPages: true,
	},
	nitro: {
		esbuild: {
			options: {
				target: 'esnext',
			},
		},
		prerender: {
			routes: ['/'],
		},
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
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{ name: 'description', content: appDescription },
				{
					name: 'apple-mobile-web-app-status-bar-style',
					content: 'black-translucent',
				},
				{
					name: 'theme-color',
					media: '(prefers-color-scheme: light)',
					content: '#F4F4F5',
				},
				{
					name: 'theme-color',
					media: '(prefers-color-scheme: dark)',
					content: '#09090B',
				},
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
	eslint: {
		config: {
			standalone: false,
		},
	},
});
