let counter = 0;

export default defineEventHandler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  counter += 1;

  return JSON.stringify(counter);
});
