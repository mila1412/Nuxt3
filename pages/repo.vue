<script setup>
definePageMeta({
  layout: "custom",
  // layout: false,
});

const { searchData } = useRepoSearch();

useAsyncData("repo", async () => await searchData("mila1412"));
</script>

<template>
  <UserTitle />
  <ReposList />
</template>

<style scoped></style>
