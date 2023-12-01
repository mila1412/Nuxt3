// client 的 middleware 攔截 Router 的變化
// server 的 middleware 攔截 Request 的請求
export default defineEventHandler((event) => {
  console.log(event.node.req.url);
});
