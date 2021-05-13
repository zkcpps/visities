//斐波那契数字
function feibo(num) {
    var a = 1, b = 1;
    if(num == 1 || num == 2)
        return a;
    for (var i = 2; i < num; i++) {
        [a, b] = [b, a + b];
    }
    return b;
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

console.log(feibo(20));
console.log(feibos(20));