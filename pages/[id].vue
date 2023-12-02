<script setup>
// 動態 router 會先比對目前 pages 裡面有沒有符合的網址，沒有的話才會進到 [id].vue
const route = useRoute();
</script>

<template>
  <div>{{ route.fullPath }}</div>
</template>

<style scoped></style>
