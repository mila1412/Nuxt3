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

// SEO Meta Components
const res = await useFetch("https://vue-lessons-api.vercel.app/seo/user");
const title = computed(() => res.data.value.title);
const description = computed(() => res.data.value.description);
</script>
<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
    <Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </Head>
  <div>
    <h1>USER</h1>
  </div>
</template>
