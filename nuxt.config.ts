import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

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
    "token": '',
    "public": {
      "apiUrl": ''
    }
  }, 
  "vite": {
    // 環境變數
    "define": {
      "process.env": process.env,
    },
    // svg
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: '[dir]/[name]',
        customDomId: '__svg__icons__dom__',
      }),
    ], 
    // CORS
    "server": {
      "proxy": {
        '/VsWeb/api': {
          "target": 'https://www.vscinemas.com.tw/',
          "changeOrigin": true,
        },
      },
    }, 
  }, 
});
