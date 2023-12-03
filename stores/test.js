import { defineStore } from "pinia";
export const useTestStore = defineStore("test", () => {
  const voteStore = useVoteStore();

  const voteTestData = computed(() => voteStore.voteList);

  return { voteTestData };
});
