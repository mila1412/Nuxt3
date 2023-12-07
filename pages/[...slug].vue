<script setup>
// 不要在 page 底下建立動態路由，不然會搶走[...slug].vue 的優先權
const route = useRoute();
const event = useRequestEvent();
setResponseStatus(event, 404);
</script>

<template>
  <h1>404 Not Found</h1>
  <p>{{ route.params.slug }}</p>
</template>
