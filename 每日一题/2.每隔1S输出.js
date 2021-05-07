const a = [{a:1},{a:2},1];
const b = a;
const c = [...a];
const d = Object.assign([], a);
const e = JSON.parse(JSON.stringify(a))

b[0].a = 2;
b[2] = 3;
b[3] = { a: 2};

console.log("a----",a);
console.log("b----",b);
console.log("c----",c);
console.log("d----",d);
console.log("e----",e);

function deepClone() {

}


var _ = require('lodash');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f);// false
obj1.c[0] = 2;
console.log("obj1----",obj1);
console.log("obj2----",obj2);