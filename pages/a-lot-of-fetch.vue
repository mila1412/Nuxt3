<script setup>
// const { data: orgsData } = await useFetch(`https://api.github.com/orgs/nuxt`);
// const { data: repoData } = await useFetch(
//   `https://api.github.com/orgs/nuxt/repos`
// );

// 不用管 api 執行順序時，可用 Promise.all 一起跑更快
const [{ data: orgsData }, { data: reposData }] = await Promise.all([
  useFetch(`https://jsonplaceholder.typicode.com/posts/1`),
  useFetch(`https://jsonplaceholder.typicode.com/posts/2`),
]);

const { data: discounts, pending } = await useAsyncData(
  "cart-discount",
  async () => {
    const [coupons, offers] = await Promise.all([
      $fetch("https://jsonplaceholder.typicode.com/posts/3"),
      $fetch("https://jsonplaceholder.typicode.com/posts/4"),
    ]);
    return {
      coupons,
      offers,
    };
  }
);
</script>

<template>
  <div>
    <p>{{ orgsData }}</p>
    <p>{{ reposData }}</p>
    <p>------</p>
    <p>{{ discounts.coupons }}</p>
    <p>{{ discounts.offers }}</p>
  </div>
</template>

<style scoped></style>
