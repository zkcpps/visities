// const _ = require("lodash");

// const getSum = (a, b, c) => {
//   return a + b + c;
// };

// const curried = _.curry(getSum);

// console.log(curried(1)(2, 3));
// console.log(curried(1, 2)(3));
// console.log(curried(1, 2, 3));

// // 柯里化案例
// const match = (reg, str) => {
//   return str.match(reg);
// };

// const curryMath = _.curry(match);

// const hasSpace = curryMath(/\s+/g);
// const hasNumber = curryMath(/\d+/g);

// console.log(hasSpace("hello world"));
// console.log(hasNumber("ab123"));

// // filter方法柯里化
// const filter = _.curry((func, arr) => {
//   return arr.filter(func);
// });

// const findNumber = filter(hasNumber);
// console.log(findNumber(["cba", "nba123", "abc"]));

// 自定义柯里化方法
function myCurried(func) {
  return function carriedFunc(...args) {
    if (args.length < func.length) {
      return function (...arg1) {
        return carriedFunc(...[...args, ...arg1]);
      };
    }
    return func(...args);
  };
}

const getSum = (a, b, c) => {
  return a + b + c;
};

const curried = myCurried(getSum);

console.log(curried(1)(2, 3));
console.log(curried(1, 2)(3));
console.log(curried(1, 2, 3));

// 柯里化案例
const match = (reg, str) => {
  return str.match(reg);
};

const curryMath = myCurried(match);

const hasSpace = curryMath(/\s+/g);
const hasNumber = curryMath(/\d+/g);

console.log(hasSpace("hello world"));
console.log(hasNumber("ab123"));

// filter方法柯里化
const filter = myCurried((func, arr) => {
  return arr.filter(func);
});

const findNumber = filter(hasNumber);
console.log(findNumber(["cba", "nba123", "abc"]));
