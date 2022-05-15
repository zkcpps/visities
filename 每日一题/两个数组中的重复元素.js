const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 3, 5, 6, 7, 8, 9];

const repeat = arr1.reduce((pre, item) => {
  if (arr2.includes(item)) {
    return [...pre, item];
  }
  return pre;
}, []);

console.log(repeat);

const sum = arr1.reduce((pre, item) => {
  return pre + item;
}, 0);

console.log(sum);
