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
  setTimeout(() => {
    resolve("成功");
  }, 2000);
  // rejected("失败");
});

// const p2 = new Promise((resolve, rejected) => {
//   rejected("失败");
//   resolve("成功");
// });

p1.then(
  (res) => {
    console.log("res", res);
    return 1;
  },
  (err) => {
    console.log("err", err);
  }
).then((res) => {
  console.log("res1", res);
});

// Promise.resolve()
//   .then(() => {
//     console.log(0);
//     return Promise.resolve(4);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Promise.resolve()
//   .then(() => {
//     console.log(1);
//   })
//   .then(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(5);
//   })
//   .then(() => {
//     console.log(6);
//   });
