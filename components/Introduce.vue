<script lang="ts" setup>

</script>

<template>
  <div class="container">
    <h1 class="text-3xl bg-clip-text bg-gradient-to-b text-transparent from-text/80 to-text/100 font-bold mb-8">
      تـایـمـاز اکـبـری
    </h1>

    <div class="space-y-6 leading-loose text-text/60 mb-8">
      <p>
        توسعه‌دهنده وب Front-End با تجربه بیش از 2 سال و مهارت در فریم‌ورک‌های معروف مانند Tailwind، Vue، و Nuxt .
        از آغاز تاکنون، عشق و علاقه اصلی من به کدنویسی و توسعه وب، مرا به یک فرد پیگیر و خلاق تبدیل کرده است.
      </p>
      <p>
        مهم‌ترین هدف من در دنیای توسعه وب، ایجاد تجربه‌های کاربری بهینه و جذاب است. اعتقاد دارم که یک وبسایت یا برنامه وب
        باید نه تنها زیبا و آراسته باشد، بلکه همچنین با کیفیت و کارآمدی بالا عرضه شود. این به معنای ایجاد وبسایت‌ها و
        برنامه‌هایی است که سریع بارگذاری می‌شوند، کاربران را با طراحی بصری شگفت‌انگیز جذب می‌کنند و تجربه بی‌نقصی را به
        آنها ارائه می‌دهند.
      </p>
    </div>
    <!-- Socials -->
    <div class="mb-16">
      <h2 class="mb-6 text-text/80">
        مهمتر از همه، من مشتاق همکاری با شما هستم!
      </h2>
      <div class="flex flex-wrap gap-x-4">
        <NuxtLink
          aria-label="Taymakz Github"
          external target="_blank" to="https://github.com/Taymakz"
          class="flex items-center gap-x-2 pb-2 text-text/60 hover:text-text/80 border-b border-border/50 hover:border-border/100 duration-200"
        >
          <IconGithub :size="24" />

          گیت هاب
        </NuxtLink>
        <NuxtLink
          aria-label="Taymakz X"
          external target="_blank" to="https://x.com/Taymakz"
          class="flex items-center gap-x-2 pb-2 text-text/60 hover:text-text/80 border-b border-border/50 hover:border-border/100 duration-200"
        >
          <IconTwitter :size="24" />

          تویتر
        </NuxtLink>
        <NuxtLink
          aria-label="Taymakz Instagram"
          external target="_blank" to="https://instagram.com/Taymakz"
          class="flex items-center gap-x-2 pb-2 text-text/60 hover:text-text/80 border-b border-border/50 hover:border-border/100 duration-200"
        >
          <IconInstagram :size="24" />

          اینستاگرام
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>

</style>
