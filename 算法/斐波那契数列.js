//斐波那契数字

//普通方式，性能可以
function feibo(num) {
    var a = 1, b = 1;
    if(num == 1 || num == 2)
        return a;
    for (var i = 2; i < num; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// 递归方式（性能最差）
function feibo1 (num) {
    if (num < 2 && num >= 0) return num
    return feibo1(num - 1) + feibo1(num - 2)
}

// 动态规划，性能强劲
function feibo2 (num) {
   const array = new Array(num + 1).fill(null);
   array[0] = 0;
   array[1] = 1;

   for (let i = 2; i <= num; i++) 
     array[i] = array[i - 1] + array[i - 2];

   return array[num];
}



//斐波那契数列
function feibos(num) {
    let result = [];
    for (let i = 1; i <= num ; i++) {
        if( i === 1 || i === 2) {
            result.push(1);
        } else {
            const sum = result[i-2] + result[i-3];
            result.push(sum);
        }
    }
    return result;
}
let preTime = new Date();
console.log(feibo(500));
let afterTime = new Date();
console.log((afterTime - preTime));
// let preTime1 = new Date();
// console.log(feibo1(30));
// let afterTime1 = new Date();
// console.log((afterTime1 - preTime1));
let preTime2 = new Date();
console.log(feibo2(1000));
let afterTime2 = new Date();
console.log((afterTime2 - preTime2))
//console.log(feibos(20));