/**
 * concat() 连接两个或更多的数组，并返回结果。
 */
function concatTest() {
    const a = [1,2,3,4,5];
    const b = [1,2,3,4,5];
    return a.concat(b);
}

console.log(concatTest());

/**
 * keys() 返回数组的可迭代对象，包含原始数组的键(key)。
 */
function keysTest() {
    const a = [1,2,3,4,5];
    return a.keys();
}

console.log(keysTest().next().value);

/**
 * sort() 对数组的元素进行排序。
 */
function sortTest() {
    const a = [1,2,3,4,5].reverse();
    return a.sort();
}

console.log(sortTest());

/**
 * splice() 从数组中添加或删除元素。。
 */
function spliceTest() {
    const a = [1,2,3,4,5];
    console.log(a.splice(1,1));
    console.log(a.splice(1,0,2));
    return a;
}

console.log(spliceTest());

for (const i = 0; i < 10; i++) {
    console.log(i)
}




