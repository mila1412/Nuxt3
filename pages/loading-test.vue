<template>
  <div>
    <!-- 1 -->
    <div>ssr: {{ count }}</div>

    <!-- 2 -->
    <div v-if="ssrPending">Loading ...</div>
    <div v-else>ssr: {{ ssr }}</div>

    <!-- 3 -->
    <div v-if="csrPending">Loading ...</div>
    <div v-else>csr: {{ csr }}</div>
  </div>

  <p>------</p>

  <!-- 4. 自動 fetch -->
  <div>
    <p>{{ userInfo }}</p>
    <button type="button" @click="nextUser()">next</button>
  </div>

  <p>------</p>

  <!-- 5. 自動 fetch (加上 not-immediate) -->
  <div>
    <input v-model="id2" type="number" />
    <!-- idle = when the fetch hasn't started -->
    <div v-if="status === 'idle'">Type an user ID</div>
    <div v-else-if="pending2">Loading ...</div>
    <div v-else>{{ userInfo2 }}</div>
  </div>
</template>

<script setup>
// 1. 等資料回來才跳轉頁面
const { data: count } = await useFetch("/api/hello");

// 2. 先跳轉頁面再等待資料，第一次還是由後端渲染
const { pending: ssrPending, data: ssr } = useFetch("/api/hello", {
  lazy: true,
});
// = const { pending, data } = useLazyFetch('/api/hello')

// 3. 先跳轉頁面再等待資料，沒有 ssr
const { pending: csrPending, data: csr } = useFetch("/api/hello", {
  lazy: true,
  server: false,
});

// 4. 自動 fetch (add query or computed url)
// const { data, pending } = useLazyFetch('/api/user', {
//   query: {
//     user_id: id
//   }
// })
const id = ref(1);
const url = computed(
  () => `https://jsonplaceholder.typicode.com/posts/${id.value}`
);
const { data: userInfo } = useFetch(url);

const nextUser = () => {
  id.value++;
};

// 5. 自動 fetch (加上 not-immediate，常與 execute, pending, status 一起用)
const id2 = ref(null);
const url2 = computed(
  () => `https://jsonplaceholder.typicode.com/posts/${id2.value}`
);
const {
  data: userInfo2,
  pending: pending2,
  status,
} = useLazyFetch(url2, {
  immediate: false,
});
</script>
