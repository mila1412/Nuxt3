<script setup>
// const { count, addCount } = useAddCount();
const store = useHomeStore();
// const { $hello } = useNuxtApp();
const selectedDate = ref(new Date());

const fetchData = async () => {
  const res = await fetch("api/hello").then((res) => res.json());
  console.log(res);
};

const colorMode = useColorMode();
</script>

<template>
  <h1>Color mode: {{ $colorMode.value }}</h1>
  <select v-model="$colorMode.preference">
    <option value="light">light</option>
    <option value="dark">Dark</option>
    <option value="sepia">Sepia</option>
  </select>

  <NuxtLink to="/async-data">useAsyncData</NuxtLink>
  <span> / </span>
  <NuxtLink to="/a-lot-of-fetch">a-lot-of-fetch</NuxtLink>
  <span> / </span>
  <NuxtLink to="/loading-test">loading-test</NuxtLink>
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

<style>
body {
  background-color: #d61919;
  color: rgba(0, 0, 0, 0.8);
}
.light-mode body {
  background-color: #fff;
  color: #000;
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
