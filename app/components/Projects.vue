<script setup lang="ts">
export interface ProjectType {
    media: {
        url: string;
        type: 'image' | 'video';
    };
    link: string;
    title: string;
    date: string;
    stacks: string[];
		github?:{
			url:string,
			text:string
		}
}

const projects: ProjectType[] = [
    {
        media: { url: "/demos/unitter.jpg", type: "image" },
        link: "https://unitter.taymakz.ir",
        title: "Malard Computer Student Hub",
        date: "September 2024",
        stacks: ["Nuxt", "Pinia", "Tailwind"]
    },
    {
        media: { url: "/demos/blesser.png", type: "image" },
        link: "https://blesser-intro.taymakz.ir",
        title: "Blesser Ecommerce Template",
        date: "May 2024",
        stacks: ["Tailwind", "UnoCss", "Dark/Light Mode"]
    },
    {
        media: { url: "/demos/font-changer.mp4", type: "video" },
        github: { url: "https://github.com/taymakz/font-changer", text: "font-changer" },
        link: "https://fc.taymakz.ir/",
        title: "Simple Font Changer",
				date: "April 2024",
        stacks: ["Vue", "Nuxt", "Tailwind"]
    },
    {
        media: { url: "/demos/tipoosh.mp4", type: "video" },
        link: "https://shop.taymakz.ir/",
        title: "Tipoosh Full Ecommerce",
				date: "March 2024",
        stacks: ["Vue", "Nuxt","Django", "PostgreSQL"]
    },
    {
        media: { url: "/demos/rotikala.mp4", type: "video" },
        link: "https://rtlr.ir/266095",
				title: "Rotikala Ecommerce Template",
				date: "September 2023",
        stacks: ["Tailwind", "Dark/Light Mode"]
    }
];
</script>
<template>
	<div class="container">
		<h2
			class="text-2xl bg-clip-text bg-gradient-to-b text-transparent from-text/80 to-text/100 font-bold mb-10 upp"
		>
			PROJECTS
		</h2>
		<div class="space-y-10">
			<ProjectCard v-for="(item,index) in projects" :key="index" :item />
		</div>
	</div>
</template>

