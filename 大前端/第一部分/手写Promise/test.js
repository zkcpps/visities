// promise测试
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("成功");
//   }, 1000);
//   //reject("失败");
// });

// p.then((data) => {
//   console.log(data);
// })
//   .catch((err) => {
//     console.log(err.message);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

const p1 = new Promise((resolve, rejected) => {
  resolve("成功");
  rejected("失败");
});

const p2 = new Promise((resolve, rejected) => {
  rejected("失败");
  resolve("成功");
});

const p3 = new Promise((resolve, reject) => {
  throw new Error("错误");
});

console.log("p1", p1);
console.log("p2", p2);
console.log("p3", p3);
