export function useIntersectionObserver() {
  const observer = ref(null);

  const isIntersecting = ref(false);

  const elRef = ref(null);

  const intersectionObserver = (
    el,
    options = { root: null, threshold: "0" }
  ) => {
    elRef.value = el;
    observer.value = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // 第一次預設是 true 不會打 api，所以要先在一開始把預設的內容 render 出來
        isIntersecting.value = entry.isIntersecting;
      });
    }, options);
    observer.value.observe(el);
  };

  const unobserve = () => {
    observer.value.unobserve(elRef.value);
  };

  onUnmounted(() => {
    if (observer.value) unobserve();
  });

  return {
    intersectionObserver,
    isIntersecting,
    unobserve,
  };
}
