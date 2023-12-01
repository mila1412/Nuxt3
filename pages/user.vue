<script setup>
// 1. 匿名 route middleware (直接寫在頁面)
definePageMeta({
  middleware: (to, from) => {
    console.log("user=>", { to, from });
  },
});

// 2. 具名 route middleware (統一寫在 auth)
definePageMeta({
  middleware: ["auth"],
});

// 3. 在 middleware 檔名後面加上 global 就會變成全域的 route middleware
</script>
<template>
  <div>
    <h1>user</h1>
  </div>
</template>
