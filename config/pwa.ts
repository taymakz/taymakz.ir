import type { ModuleOptions } from '@vite-pwa/nuxt';

const scope = '/';

export const pwa: ModuleOptions = {
	registerType: 'autoUpdate',
	scope,
	base: scope,
	manifest: {
		"name": "Taymakz.ir",
		"short_name": "Taymakz",
		"icons": [
			{
				"src": "/maskable-icon.png",
				"sizes": "512x512",
				"type": "image/png",
				"purpose": "maskable"
			},
			{
				"src": "/icon-48x48.png",
				"sizes": "48x48",
				"type": "image/png"
			},
			{
				"src": "/icon-72x72.png",
				"sizes": "72x72",
				"type": "image/png"
			},
			{
				"src": "/icon-96x96.png",
				"sizes": "96x96",
				"type": "image/png"
			},
			{
				"src": "/icon-128x128.png",
				"sizes": "128x128",
				"type": "image/png"
			},
			{
				"src": "/icon-144x144.png",
				"sizes": "144x144",
				"type": "image/png"
			},
			{
				"src": "/icon-152x152.png",
				"sizes": "152x152",
				"type": "image/png"
			},
			{
				"src": "/icon-192x192.png",
				"sizes": "192x192",
				"type": "image/png"
			},
			{
				"src": "/icon-256x256.png",
				"sizes": "256x256",
				"type": "image/png"
			},
			{
				"src": "/icon-384x384.png",
				"sizes": "384x384",
				"type": "image/png"
			},
			{
				"src": "/icon-512x512.png",
				"sizes": "512x512",
				"type": "image/png"
			}
		],
		"theme_color": "#121212",
		"background_color": "#121212",
		"display": "standalone",

		id: scope,
		scope,
		description: 'Frontend Engineer and creator of Studenthub & Menofy',


	},
	workbox: {
		globPatterns: ['**/*.{js,css,html,txt,png,ico,svg}'],
		navigateFallbackDenylist: [/^\/api\//],
		navigateFallback: '/',
		cleanupOutdatedCaches: true,
	},
	registerWebManifestInRouteRules: true,
	writePlugin: true,
	devOptions: {
		enabled: true,
		navigateFallback: scope,
	},
};
