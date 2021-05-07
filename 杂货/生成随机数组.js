/**
 *  生成在随机区间的随机数组
 * @param start  开始的数
 * @param end   结束的数
 * @param num   数组个数
 */
function createRandom (start, end, num) {
     var arr = [];
     while (num > 0) {
         arr.push((Math.random()*(end - start)).toFixed(0));
         num--;
     }
     return arr;
}

// console.log(createRandom(2,32,10));


function creatArr(min, max) {
    var arr = [];
    for (var i = min; i < max; i++) {
        arr.push(i)
    }
    return arr;
}
// 调用上边的函数 生成一个数组 并且传入下边的函数中
var arr = creatArr(2, 32)
function RandomArr(arr) {
    var numArr = [];
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i++) {
        var Rand = arr.length;
        var number = Math.floor(Math.random() * arr.length);
        numArr.push(arr[number]);
        arr.splice(number, 1);
        if (arr.length <= arrLength - arrLength) {
            return numArr;
        }
    }
}
//生成一个随机数组
var newArr = RandomArr(arr)
console.log(newArr)


console.log(Math.floor(11.99))