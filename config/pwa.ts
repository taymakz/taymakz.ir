import process from 'node:process';
import type { ModuleOptions } from '@vite-pwa/nuxt';

const scope = '/';

export const pwa: ModuleOptions = {
	registerType: 'autoUpdate',
	scope,
	base: scope,
	manifest: {
		id: scope,
		scope,
		name: 'Taymaz Akbari Portfolio',
		short_name: 'Taymaz Akbari',
		description: 'Frontend Engineer and creator of Studenthub & Menofy',
		theme_color: '#F5F5F5',
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
	workbox: {
		globPatterns: ['**/*.{js,css,html,txt,xml,png,ico,svg,woff2,mp4}'],
		navigateFallbackDenylist: [/^\/.*/], // add pages regex or will redirect to root on Direct load
		navigateFallback: '/',
		cleanupOutdatedCaches: true,
	},
	registerWebManifestInRouteRules: true,
	writePlugin: true,
	devOptions: {
		enabled: process.env.VITE_PLUGIN_PWA === 'true',
		navigateFallback: scope,
	},
};
