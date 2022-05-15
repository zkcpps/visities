var x = 1;

switch (x++) {
  case 0:
    ++x;
  case 1:
    ++x;
  case 2:
    ++x;
  case 3:
    ++x;
  case 5:
    ++x;
  case 5:
    ++x;
}

console.log(x);

console.log(Object.assign([3, 5, 4, 6], [2, 5, 6]));

const count = 1;

console.log(typeof count === "number");
console.log(!!(typeof count === "number"));
