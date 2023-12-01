export default defineEventHandler((event) => {
  const data = {
    name: "mike",
    age: 100,
  };
  return { data };
});
