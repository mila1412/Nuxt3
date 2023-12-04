import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
const config = {
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
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  "i18n": {
    "strategy": 'no_prefix',
    "locales": [
      {
        "code": 'zh-TW',
        "file": 'zh-TW.json'
      },
      {
        "code": 'en-US',
        "file": 'en-US.json'
      },
      {
        "code": 'ja-JP',
        "file": 'ja-JP.json'
      },
    ],
    "langDir": 'language',
    "defaultLocale": 'zh-TW',
    "detectBrowserLanguage": {
      "useCookie": true,
    }
  },
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
      "proxy": {},
    }, 
  }, 
 }
 
 if(process.env.NODE_ENV === 'development') {
  config.vite.server.proxy = {
    '/VsWeb/api': {
      "target": 'https://www.vscinemas.com.tw/',
      "changeOrigin": true,
    },
  }
 }
 
 export default defineNuxtConfig(config)
