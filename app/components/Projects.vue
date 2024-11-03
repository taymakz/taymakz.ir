<template>
	<div class="container">
		<h2
			class="text-2xl bg-clip-text bg-gradient-to-b text-transparent from-text/80 to-text/100 font-bold mb-10"
		>
			پروژه ها
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
				<!-- Unitter -->
				<Demo
				link="https://unitter.taymakz.ir"
				media="/demos/unitter.jpg"
				media-type="image"
				title="وبسایت کمکی برای دانشجویان"
				date="1403 آبان"
			>
			<ul class="px-2 space-y-2 mb-4 text-text/60 text-sm">
					<li class="flex items-center gap-x-2">
						<IconsNuxt class="w-6 h-6" />
						Nuxt - Pinia
					</li>
					<li class="flex items-center gap-x-2">
						<IconsTailwind class="w-6 h-6 text-primary" />
						Tailwind
					</li>
				</ul>
			</Demo>
			<!-- Blesser -->
			<Demo
				link="https://blesser-intro.taymakz.ir"
				media="/demos/blesser.png"
				media-type="image"
				title="قالب HTML فروشگاهی بلسر"
				date="1403 خرداد"
			>
				<ul class="px-2 space-y-2 mb-4 text-text/60 text-sm">
					<li class="flex items-center gap-x-2">
						<IconsTailwind class="w-6 h-6 text-primary" />

						Tailwind
					</li>
					<li class="flex items-center gap-x-2">
						<IconsUno class="w-6 h-6" />
						UnoCss
					</li>
					<li class="flex items-center gap-x-2">
						<IconsDarkLight class="w-6 h-6 text-primary" />

						حالت تیره و روشن
					</li>
				</ul>
			</Demo>
			<!-- Font Changer -->
			<Demo
				link="https://fc.taymakz.ir/"
				media="/demos/font-changer.mp4"
				media-type="video"
				title="اپلیکیشن تغییر فونت"
				date="1403 فروردین"
				github="https://github.com/taymakz/font-changer"
				github-text="Font Changer"
			>
				<ul class="px-2 space-y-2 mb-4 text-text/60 text-sm">
					<li class="flex items-center gap-x-2">
						<IconsNuxt class="w-6 h-6" />
						Nuxt 
					</li>
					<li class="flex items-center gap-x-2">
						<IconsTailwind class="w-6 h-6 text-primary" />
						Tailwind
					</li>
				</ul>
			</Demo>
			<!-- Tipoosh -->
			<Demo
				link="https://shop.taymakz.ir/"
				media="/demos/tipoosh.mp4"
				media-type="video"
				title="وبسایت فروشگاهی تیپوش Vue/Nuxt 3 - Django"
				date="1402 اسفند"
			>
				<ul class="px-2 space-y-2 mb-4 text-text/60 text-sm">
					<li class="flex items-center gap-x-2">
						<IconsNuxt class="w-6 h-6" />
						فرانت Nuxt/Vue 3
					</li>
					<li class="flex items-center gap-x-2">
						<IconsDjango class="w-6 h-6" />

						بک اند Django
					</li>
				</ul>
			</Demo>
			<!-- Rotikala -->
			<Demo
				link="https://rtlr.ir/266095"
				media="/demos/rotikala.mp4"
				media-type="video"
				title="قالب HTML فروشگاهی روتی کالا"
				date="1402 شهریور"
			>
				<ul class="px-2 space-y-2 mb-4 text-text/60 text-sm">
					<li class="flex items-center gap-x-2">
						<IconsTailwind class="w-6 h-6 text-primary" />
						طراحی شده با Tailwind CSS
					</li>
					<li class="flex items-center gap-x-2">
						<IconsDarkLight class="w-6 h-6 text-primary" />

						حالت تیره و روشن
					</li>
				</ul>
			</Demo>
			<!-- Advie -->
			<Demo
				github="https://github.com/taymakz/advie-frontend"
				github-text="ادویه"
				link="https://www.taymaz-project.ir/"
				media="/demos/advie.mp4"
				media-type="video"
				title="وبسایت فروشگاهی Vue/Nuxt 3 - Django"
				date="1402 فروردین"
			>
				<ul class="px-2 space-y-2 mb-4 text-text/60 text-sm">
					<li class="flex items-center gap-x-2">
						<IconsNuxt class="w-6 h-6" />
						فرانت Nuxt/Vue 3
					</li>
					<li class="flex items-center gap-x-2">
						<IconsDjango class="w-6 h-6" />

						بک اند Django
					</li>
				</ul>
			</Demo>
		</div>
	</div>
</template>
