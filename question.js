// let a = 0, b = 0;
// function fn(a) {
//     console.log("start---", a);
//     fn = function fn2(b) {
//         console.log("b---", b);
//         console.log("b--a---", a);
//         console.log(++a+b);
//     }
//     console.log('end---',a++);
// }
// fn(1);
// fn(2);

// async function async1() {
//     console.log('async1 start')
//     await new Promise(resolve => {
//         console.log('promise1')
//     })
//     console.log('async1 success')
//     return 'async1 end'
// }
// console.log('srcipt start')
// async1().then(res => console.log(res))
// console.log('srcipt end')

function ischina(str) {
    var reg=/^([\u4E00-\u9FA5]+·?)*[\u4E00-\u9FA5]+$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

console.log(ischina("张三张三里··斯"));  //false
console.log(ischina("张·三张·三里·斯"));  //true
console.log(ischina("张三张三里斯"));  //true