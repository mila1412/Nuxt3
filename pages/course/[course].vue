<script setup>
const route = useRoute();
const { data } = await useFetch(
  `https://vue-lessons-api.vercel.app/courses/${route.params.course}`
);
</script>

<template>
  <div>{{ data }}</div>
</template>

<style scoped></style>
