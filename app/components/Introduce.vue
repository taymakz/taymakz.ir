<template>
	<div class="container">
		<h1 class="text-3xl bg-clip-text bg-gradient-to-b text-transparent from-text/80 to-text/100 font-bold mb-8">
			تایماز اکبری
			<p class="sr-only">Taymaz akbari</p>
		</h1>

		<div class="space-y-6 leading-loose text-text/60 mb-8">

			<p>

				توسعه‌دهنده وب Front-End با تجربه بیش از 3 سال,

				از همان ابتدا، علاقه‌ام به برنامه‌نویسی و توسعه
				وب باعث شده تا به یک حل‌کننده خلاق مشکلات تبدیل شوم و از جان بخشیدن به ایده‌هام لذت ببرم.
			 هدف اصلی من طراحی رابط‌های کاربری است که کاربران از کار با آن‌ها لذت ببرند. به جزئیات اهمیت می‌دهم و دوست دارم
				هر پروژه نه تنها زیبا باشد بلکه بهترین عملکرد را نیز داشته باشد.
			</p>
		</div>
		<!-- Socials -->
		<div class="mb-16">
			<h2 class="mb-6 text-text/80">
				مهمتر از همه، من مشتاق همکاری با شما هستم!
			</h2>
			<div class="flex flex-wrap gap-x-4">
				<NuxtLink aria-label="Taymakz Github" external target="_blank" to="https://github.com/Taymakz"
					class="flex items-center gap-x-2 pb-2 text-text/60 hover:text-text/80 border-b border-border/50 hover:border-border/100 duration-200">
					<IconGithub :size="24" />

					گیت هاب
				</NuxtLink>
				<NuxtLink aria-label="Taymakz X" external target="_blank" to="https://x.com/Taymakz"
					class="flex items-center gap-x-2 pb-2 text-text/60 hover:text-text/80 border-b border-border/50 hover:border-border/100 duration-200">
					<IconTwitter :size="24" />

					تویتر
				</NuxtLink>
				<NuxtLink aria-label="Taymakz Instagram" external target="_blank" to="https://instagram.com/Taymakz"
					class="flex items-center gap-x-2 pb-2 text-text/60 hover:text-text/80 border-b border-border/50 hover:border-border/100 duration-200">
					<IconInstagram :size="24" />

					اینستاگرام
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
