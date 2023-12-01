<script setup>
// const { count, addCount } = useAddCount();
const store = useHomeStore();
</script>

<template>
  <div>Page: Index</div>
  <Box />
  <BoxBtn />
  <!-- <p>{{ count }}</p>
  <button @click="addCount">add</button> -->
  <p>{{ store.count }}</p>
  <button @click="store.addCount">add</button>
</template>

<style scoped></style>
