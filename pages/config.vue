<script setup>
const config = useRuntimeConfig();
console.log(config.public);
if (process.server) {
  console.log("server token:", config.token);
}

const { data, refresh } = await useFetch(`${config.public.apiUrl}/posts/1`, {
  headers: {
    Authorization: `Bearer ${config.token}`,
  },
});
</script>

<template>
  <div @click="refresh">{{ data }}</div>
</template>

<style scoped></style>
