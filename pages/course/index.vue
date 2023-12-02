<script setup>
const { data } = await useFetch(
  "https://vue-lessons-api.vercel.app/courses/list"
);
</script>

<template>
  <!-- /course 會出現 course list，/course/...會出現動態路由的內容 -->
  <div>course list</div>
  <CardList :courses="data" />
</template>

<style scoped></style>
