<script setup>
const route = useRoute();
const { data } = await useFetch(
  `https://vue-lessons-api.vercel.app/courses/${route.params.course}`
);
</script>

<template>
  <div>{{ data }}</div>
  <NuxtLink :to="`/course/${route.params.course}/`">內頁介紹</NuxtLink>
  <NuxtLink :to="`/course/${route.params.course}/A`">a</NuxtLink>
  <NuxtLink :to="`/course/${route.params.course}/B`">b</NuxtLink>
  <NuxtLink :to="`/course/${route.params.course}/C`">c</NuxtLink>
  <NuxtPage />
</template>

<style scoped></style>
