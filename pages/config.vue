<script setup>
const config = useRuntimeConfig();
// client 跟 server 都看得到
console.log(config.public);
// 只有 server 看得到
if (process.server) {
  console.log("server token:", config.token);
}

// const { data, refresh } = await useFetch(`${config.public.apiUrl}/posts/1`, {
//   headers: {
//     Authorization: `Bearer ${config.token}`,
//   },
// });

// 使用 process.env
console.log("ENV=>", process.env.ENV);
console.log("WEB_URL=>", process.env.WEB_URL);
</script>

<template>
  <!-- <div @click="refresh">{{ data }}</div> -->
</template>

<style scoped></style>
