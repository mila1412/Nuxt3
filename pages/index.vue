<script setup>
// const { count, addCount } = useAddCount();
const store = useHomeStore();
// const { $hello } = useNuxtApp();
const selectedDate = ref(new Date());
</script>

<template>
  <div>Page: Index</div>
  <Box />
  <BoxBtn />
  <!-- <p>{{ count }}</p>
  <button @click="addCount">add</button> -->
  <p>{{ store.count }}</p>
  <button @click="store.addCount">add</button>
  <ClientOnly>
    <h1>{{ $hello("Mila") }}</h1>
  </ClientOnly>
  <!-- new Date().getTime() -->
  <h2 v-timeformat="1701444592298"></h2>
  <VDatePicker v-model="selectedDate" />
</template>

<style scoped></style>
