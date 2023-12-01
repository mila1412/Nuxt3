// 一般 composable 不能儲存資料，store 可以跨組件儲存資料
// 為了區隔一般 composable，stores 裡面 js 的命名不會加 use
import { defineStore } from "pinia";
export const useHomeStore = defineStore("home", () => {
  const count = ref(0);
  const addCount = () => {
    count.value++;
    console.log(count.value);
  };
  return {
    count,
    addCount,
  };
});
