<script setup>
const { locale, setLocaleCookie } = useI18n();
watch(locale, (newLocale) => {
  setLocaleCookie(newLocale);
});

// xss 處理
import { xssParse } from "@/lib/filterXss.js";
const { t } = useI18n();
const content = computed(() => xssParse(t("about_content")));
</script>

<template>
  <div>
    <select v-model="locale">
      <option value="zh-TW">zh-TW</option>
      <option value="en-US">en-US</option>
      <option value="ja-JP">ja-JP</option>
    </select>
    <div class="lang">
      <div class="menu">
        <NuxtLink to="/">{{ $t("front_page") }}</NuxtLink>
        <NuxtLink to="/about">{{ $t("about_us") }}</NuxtLink>
        <a>{{ $t("contact_us") }}</a>
        <a>{{ $t("product_description") }}</a>
        <a>{{ $t("latest_news") }} </a>
        <a>{{ $t("history") }}</a>
      </div>
      <div v-html="content"></div>
    </div>
    <NuxtPage />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  background-color: #ecc9a0;
}
#__nuxt {
  display: flex;
  justify-content: center;
  align-items: center;
}

select {
  width: 100%;
  height: 30px;
  margin: 0 auto;
  border-radius: 20px;
  text-align: center;
  border: 1px solid #d4613e;
  margin: 0 auto 20px auto;
}
select:active,
select:focus {
  outline: none;
}

.menu {
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
a {
  cursor: pointer;
  color: #84551c;
  font-size: 25px;
  margin-bottom: 20px;
}
</style>
