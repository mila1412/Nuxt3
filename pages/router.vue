<script setup>
const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log(route);
  console.log(router);
});
</script>

<template>
  <div>about</div>
  <NuxtLink to="/router">index</NuxtLink>
  <NuxtLink to="/router/a">a</NuxtLink>
  <NuxtLink to="/router/b">b</NuxtLink>
  <main>
    <NuxtPage />
  </main>
</template>

<style lang="scss" scoped></style>
