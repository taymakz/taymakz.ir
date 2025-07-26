<script lang="ts" setup>
import type { ProjectType } from '~/types';

const projects: ProjectType[] = [
    {
        media: {
            url: "/projects/menofy.avif",
            alt: "Menofy – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari"
        },
        link: "https://menofy.ir",
        title: "Menofy | منوفای",
        date: "July 2025",
        stacks: [
            "Vue",
            "Nuxt",
            "Tailwind",
            "Django",
            "PostgreSQL"
        ],
        seo: {
            ariaLabel: "Menofy – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari",
            title: "Menofy – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari"
        }
    },

    {
        media: {
            url: "/projects/studenthub.avif",
            alt: "Studenthub – Modern Student Community Web Application by Taymaz Akbari"
        },
        link: "https://student-hub.ir",
        title: "Student Hub | دانشجویار",
        date: "March 2025",
        stacks: [
            "Vue",
            "Nuxt",
            "Tailwind",
            "Django",
            "Go",
            "PostgreSQL"
        ],
        seo: {
            ariaLabel: "Studenthub – Modern Student Community Web Application by Taymaz Akbari",
            title: "Studenthub – Modern Student Community Web Application by Taymaz Akbari"
        }
    },

    {
        media: { url: "/projects/unitter.avif" },
        link: "https://unitter.taymakz.ir",
        title: "Malard Computer Student Hub",
        date: "September 2024",
        stacks: ["Nuxt", "Pinia", "Tailwind"]
    },
    {
        media: { url: "/projects/blesser.avif" },
        link: "https://blesser-intro.taymakz.ir",
        title: "Blesser Ecommerce Template",
        date: "May 2024",
        stacks: ["Tailwind", "UnoCss", "Dark/Light Mode"]
    },
    {
        media: { url: "/projects/font-changer.avif" },
        github: { url: "https://github.com/taymakz/font-changer", text: "font-changer" },
        link: "https://fc.taymakz.ir/",
        title: "Simple Font Changer",
        date: "April 2024",
        stacks: ["Vue", "Nuxt", "Tailwind"]
    },
    {
        media: { url: "/projects/tipoosh.avif" },
        link: "https://shop.taymakz.ir/",
        title: "Tipoosh Full Ecommerce",
        date: "March 2024",
        stacks: ["Vue", "Nuxt", "Django", "PostgreSQL"]
    },
    {
        media: { url: "/projects/rotikala.avif" },
        link: "https://rtlr.ir/266095",
        title: "Rotikala Ecommerce Template",
        date: "September 2023",
        stacks: ["Tailwind", "Dark/Light Mode"]
    }
];
</script>

<template>
    <div class="container max-w-screen-md pb-10 pt-20 space-y-10">
        <ProjectCard v-for="(item, index) in projects" :key="index" :item />
    </div>
</template>
