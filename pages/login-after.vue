<script setup>
import { useLoggingStore } from "@/stores/login";
const store = useLoggingStore();

const auth = useCookie("auth");

const token = auth.value?.token;

onMounted(() => {
  store.checkAuth();
  const timer = setInterval(() => {
    const auth2 = useCookie("auth");
    if (token !== auth2.value?.token) {
      window.location.reload();
      clearInterval(timer);
    }
  }, 100);
});
</script>

<template>
  <div id="home">
    <h1>登入中</h1>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  background-color: #f1e4db;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
