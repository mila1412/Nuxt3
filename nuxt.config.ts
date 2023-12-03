// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 每一頁 meta 設定
  app: {
    head: {
      viewport: "width=500, initial-scale=1",
      title: "Nuxt3 高效入門全攻略",
      meta: [
        {
          name: "description",
          content: "這是 Mike 的 Nuxt3 高效入門全攻略課程",
        },
        { property: "og:title", content: "Nuxt3 高效入門全攻略" },
        { property: "og:url", content: "http://localhost:3000/" },
        {
          property: "og:description",
          content: "這是 Mike 的 Nuxt3 高效入門全攻略課程",
        },
      ],
    },
  },
  // components: {
  //   dirs: [
  //     {
  //       path: "~/components/global",
  //       global: true,
  //     },
  //   ],
  // },
  imports: {
    dirs: ["stores"],
  },
  modules: ["@pinia/nuxt"],
  "runtimeConfig": {
    // token 只能在 server 階段取得
    "token": '1234567890',
    "public": {
      "apiUrl": 'https://jsonplaceholder.typicode.com',
    }
  }, 
});
