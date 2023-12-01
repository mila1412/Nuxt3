<script setup>
// const { count, addCount } = useAddCount();
const store = useHomeStore();
const { $hello } = useNuxtApp();
</script>

<template>
  <div>Page: Index</div>
  <Box />
  <BoxBtn />
  <!-- <p>{{ count }}</p>
  <button @click="addCount">add</button> -->
  <p>{{ store.count }}</p>
  <button @click="store.addCount">add</button>
  <h1>{{ $hello("Mila") }}</h1>
</template>

<style scoped></style>
