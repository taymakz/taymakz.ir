import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taymakz.ir",
    short_name: "Taymakz",
    description: 'Portfolio of Taymaz Akbari, Software Engineer and Creator of Studenthub and Cafify.',
    start_url: '/',
    display: 'standalone',
    theme_color: "#0f0f0d",
    background_color: "#0f0f0d",
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        "purpose": "maskable"
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: "maskable"
      },
    ],
  }
}
