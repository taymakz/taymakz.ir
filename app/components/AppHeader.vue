<template>
	<header class="p-5 flex items-center justify-between mb-16">
		<NuxtLink to="/">
			<NuxtImg
				src="/logo.png"
				alt="Taymaz Akbari"
				class="w-10 xs:w-12 aspect-[1/1]"
				loading="lazy"
			/>
		</NuxtLink>
		<div class="flex gap-4 flex-row-reverse">
			<ToggleTheme />
			<div class="hidden xs:block">
				<NuxtLink
					aria-label="Taymakz Github"
					external
					target="_blank"
					to="https://github.com/Taymakz"
					class="text-text/60 hover:text-text/80 duration-200"
				>
					<IconGithub :size="24" />
				</NuxtLink>
			</div>
			<div class="hidden xs:block">
				<NuxtLink
					aria-label="Taymakz X"
					external
					target="_blank"
					to="https://x.com/Taymakz"
					class="text-text/60 hover:text-text/80 duration-200"
				>
					<IconTwitter :size="24" />
				</NuxtLink>
			</div>
			<div class="hidden xs:block">
				<NuxtLink
					aria-label="Taymakz Instagram"
					external
					target="_blank"
					to="https://instagram.com/Taymakz"
					class="text-text/60 hover:text-text/80 duration-200"
				>
					<IconInstagram :size="24" />
				</NuxtLink>
			</div>
		</div>
	
	
	</header>
</template>
