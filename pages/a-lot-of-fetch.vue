<script setup>
// const { data: orgsData } = await useFetch(`https://api.github.com/orgs/nuxt`);
// const { data: repoData } = await useFetch(
//   `https://api.github.com/orgs/nuxt/repos`
// );

// 不用管 api 執行順序時，可用 Promise.all 一起跑更快
const [{ data: orgsData }, { data: reposData }] = await Promise.all([
  useFetch(`https://api.github.com/orgs/nuxt`),
  useFetch(`https://api.github.com/orgs/nuxt/repos`),
]);
</script>

<template>
  <div>
    {{ orgsData }}
    <p>------</p>
    {{ reposData }}
  </div>
</template>

<style scoped></style>
