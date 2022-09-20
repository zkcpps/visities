const obj1 = { a: 1, b: 2, c: 3, gg: [2, 3] };
const obj2 = { a: 1, b: 2, c: 4, d: 5, e: 0, f: { a: 1 }, gg: [1, 2, 4] };

// 目标 {a: 1, c: 3, d: 5}

const obj21 = { ...obj2, ...obj1 }; // 如果相同属性以第一个为准

let result = { ...obj21 };

Object.keys(obj2).forEach((element) => {
  if (
    !(
      (obj1.hasOwnProperty(element) || obj2.hasOwnProperty(element)) &&
      JSON.stringify(obj1[element]) !== JSON.stringify(obj2[element])
    )
  ) {
    delete result[`${element}`];
  }
});

console.log(result);
