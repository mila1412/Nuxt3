<script setup>
// $fetch
// 重新整理頁面時用 $fetch 會同時在 server 跟 client 去拿資料，所以才要用 useFetch 跟 useAsyncData
const data = await $fetch("https://jsonplaceholder.typicode.com/posts/1");

// useFetch
// const fetchData = await useFetch("https://jsonplaceholder.typicode.com/posts/2");
const fetchData = await useFetch(
  "https://jsonplaceholder.typicode.com/posts/2",
  {
    onRequest({ request, options }) {
      // 設置 request headers
      options.headers = options.headers || {};
      options.headers.authorization = `Bearer token`;
      console.log(options.headers.authorization);
    },
    onResponse({ request, response, options }) {
      // 處理回傳資料
      return response._data;
    },
  }
);

// useAsyncData
// useFetch = useAsyncData + $fetch，單純拿資料用 useFetch (key 自動生成)，針對 key 與非同步處理用 useAsyncData
const asyncData = await useAsyncData("userInfo", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts/3")
);

// 在 client 重新獲取資料的兩種方法
// 1. 透過 useFetch/useAsyncData 回傳的 refresh
// const { data, pending, error, refresh } = await useAsyncData(
//   "userInfo",
//   () => $fetch("https://jsonplaceholder.typicode.com/posts/3")
// );
// 2. const refresh = () => refreshNuxtData("userInfo"); (使用 key，可在其他組件調用)

// axios 搭配 useAsyncData
import axios from "axios";
const axiosData = await useAsyncData("banner", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/4");
  // 最後要回傳的是只有 response data 的資料
  return res.data;
});
</script>

<template>
  {{ data }}
  <p>------</p>
  {{ fetchData }}
  <p>------</p>
  {{ asyncData }}

  <button @click="refresh">refresh</button>

  <p>------</p>
  {{ axiosData }}
</template>

<style scoped></style>
