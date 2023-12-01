<script setup>
import AboutHeader from "@/components/About/Header.vue";
// 個別頁面 meta 設定
// useHead({
//   title: "關於我們 About - Nuxt3 高效入門全攻略",
//   meta: [
//     { property: "og:title", content: "關於我們 About - Nuxt3 高效入門全攻略" },
//     { property: "og:url", content: "http://localhost:3000/about" },
//     { property: "og:image", content: "http://localhost:3000/share.jpg" },
//     { name: "description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
//     {
//       property: "og:description",
//       content: "關於我們 About - 最棒的Nuxt3的線上課程",
//     },
//   ],
// });

// 更精簡的寫法，缺少的會從全域的 meta 拿
// useSeoMeta({
//   title: "About - Nuxt3 高效入門全攻略",
//   description: "關於我們 - 最棒的Nuxt3的線上課程",
//   ogDescription: "關於我們 - 最棒的Nuxt3的線上課程",
//   ogTitle: "About - Nuxt3 高效入門全攻略",
// });

// 只會餵給爬蟲 res 的資料，client 不會改變 title
const res = await useFetch("https://vue-lessons-api.vercel.app/seo/about");
useServerSeoMeta({
  title: () => `${res.data.value.title} - Nuxt3`,
  ogTitle: () => `${res.data.value.title} - Nuxt3`,
  description: () => `${res.data.value.description} - Nuxt3`,
  ogDescription: () => `${res.data.value.description} - Nuxt3`,
});
</script>

<template>
  <AboutHeader />
  <div>Page: About</div>
</template>

<style scoped></style>
