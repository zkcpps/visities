// 大小： 4KB
// document.cookie = "..."

const { hash, origin, pathname } = new URL(
  "https://blue.planplus.cn/chat-tool-bar/main-app/calender?kind=userId\u0026userId=13242093640"
);

const query = {
  kind: "userId",
  userId: 13242093640,
};
const search = Object.keys(query).reduce((result, queryKey) => {
  if (!["userId", "kind"].includes(queryKey)) {
    result += `&${queryKey}=${query[queryKey]}`;
  }
  return result;
}, "?");

const redirectUrl = origin + pathname + search + hash;
console.log(redirectUrl);
