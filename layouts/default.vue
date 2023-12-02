<script setup>
const nuxtApp = useNuxtApp();
const isLoading = ref(false);
nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});
nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});
</script>

<template>
  <div>
    <p>Layout: default</p>
    <!-- 方法一 (只能放在 layout or app.vue) -->
    <!-- <NuxtLoadingIndicator color="#f00" :height="10" :throttle="0" /> -->

    <!-- 方法二 -->
    <div v-show="isLoading" class="loading">Loading...</div>
    <slot />
  </div>
</template>

<style scoped>
.loading {
  color: aqua;
}
</style>
