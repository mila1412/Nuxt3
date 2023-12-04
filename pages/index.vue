<script setup>
// const { count, addCount } = useAddCount();
const store = useHomeStore();
// const { $hello } = useNuxtApp();
const selectedDate = ref(new Date());

const fetchData = async () => {
  const res = await fetch("api/hello").then((res) => res.json());
  console.log(res);
};
</script>

<template>
  <NuxtLink to="/async-data">useAsyncData</NuxtLink>
  <span> / </span>
  <NuxtLink to="/a-lot-of-fetch">a-lot-of-fetch</NuxtLink>
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

  <button @click="fetchData">get api</button>
</template>

<style scoped></style>
