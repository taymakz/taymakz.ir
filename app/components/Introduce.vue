<template>
	<div class="container">
		<h1 class="text-3xl md:text-4xl  bg-clip-text bg-gradient-to-b text-transparent from-text/80 to-text/100 font-bold mb-8">
			Taymaz Akbari
			<p class="sr-only">
				تایماز اکبری				
			</p>
		</h1>

		<div class="space-y-2 leading-loose text-text/80 mb-8 ">
			<p>
        a Frontend Developer with 3 years of experience. From the start, my passion
        for coding and web development has driven me to become a dedicated, creative problem-solver who loves bringing
        ideas to life.
      </p>
      <p>
        My main goal is to design user-friendly interfaces that people enjoy interacting with. I care about the
        details and want every project to look good and work even better. </p>
		</div>
		<!-- Socials -->
		<div class="mb-16">
			<h2 class="mb-6 text-text/80 ">
				Most importantly, I look forward to working with you <span class="animate-pulse">!</span>
			</h2>
			<div class="flex flex-wrap gap-6 ">
				<NuxtLink aria-label="Taymakz Github" external target="_blank" to="https://github.com/Taymakz"
					class="flex items-center gap-x-2 pb-2 text-text/80 hover:text-text border-b border-border/50 hover:border-border/100 duration-200">
					<IconGithub :size="24" />

					Github
				</NuxtLink>
				<NuxtLink aria-label="Taymakz X" external target="_blank" to="https://x.com/Taymakz"
					class="flex items-center gap-x-2 pb-2 text-text/80 hover:text-text border-b border-border/50 hover:border-border/100 duration-200">
					<IconTwitter :size="24" />

					Twitter / X
				</NuxtLink>
				<NuxtLink aria-label="Taymakz Instagram" external target="_blank" to="https://instagram.com/Taymakz"
					class="flex items-center gap-x-2 pb-2 text-text/80 hover:text-text border-b border-border/50 hover:border-border/100 duration-200">
					<IconInstagram :size="24" />

					Instagram
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
