/**
 * 数组累加
 * @type {number[]}
 */
const arr = [1,2,3,4,5];
const sum =arr.reduce((pre, cur) =>{
    return pre + cur;
},0)
console.log(sum);

let arr1 = [1, [2, 3], {a: 1}, [4, [5]]]

function flatByReduce(arr) {
    return arr.reduce((pre, cur)=> {
        return pre.concat(Array.isArray(cur) ? flatByReduce(cur) : cur);
    },[])
}

function flatByRecursive(arr) {
    let res = [];
    arr.map(item => {
        if(item instanceof Array) {
            res = res.concat(flatByRecursive(item));
        } else {
            res.push(item);
        }
    });
    return res;
}

function flatByRegx(arr) {
    arr = '[' + JSON.stringify(arr).replace(/\[|\]/g, "") +']';
    return JSON.parse(arr);
}

function typeCheck(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

console.log(flatByReduce(arr1));
console.log(flatByRecursive(arr1));
console.log(flatByRegx(arr1));

console.log(typeCheck(arr1));
console.log(typeCheck(1));
console.log(typeCheck('1'));
console.log(typeCheck({}));
console.log(typeCheck(undefined));
console.log(typeCheck(null));


