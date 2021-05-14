//斐波那契
// function feibo(num) {
//     var a = 1, b = 1;
//     if(num == 1 || num == 2)
//         return a;
//     for (var i = 2; i < num; i++) {
//         [a, b] = [b, a + b];
//     }
//     return b;
// }
//
// console.log(feibo(1));
//
// var i = 0 ;
// console.log( i++ === true )
//
// for (var i =0, i=i+ 1; i < 100; i++) {
//     console.log(i);
// }
//
// const promise = new Promise(function (resolve, reject) {
//     resolve("成功");
//     //reject("失败");
// })
// promise.then(function (value) {
//     console.log("resolve", value)  // resolve 成功
// }, function (error) {
//     console.log("reject", error);
// })
//
// const promise1 = new Promise(function (resolve, reject) {
//     resolve("成功");
//     reject("失败");
// })
// promise1.then(function (value) {
//     console.log("resolve", value)  // resolve 成功
// }, function (error) {
//     console.log("reject", error);  // 不执行
// })
//
// const promise2 = new Promise(function (resolve, reject) {
//     //resolve("成功");
//     reject("失败");
// })
// promise2.then(function (value) {
//     console.log("resolve", value)    // 不执行
// }, function (error) {
//     console.log("reject", error);  // reject 失败
// })
//
//
// function ajax (url) {
//     return new Promise(function (resolve,reject ) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.responseType = 'json';
//         xhr.onload = function () {
//            if(this.status === 200) {
//                resolve(this.response);
//            } else {
//                reject(new Error(this.statusText));
//            }
//         }
//         xhr.send();
//     })
// }
//
// ajax("XXXX").then(function (res) {
//     console.log(res);
// }, function (error) {
//     console.log(error);
// })
//
// ajax('api/users').then(function (user1) {
//     ajax(user1).then(function (user2) {
//         ajax(user2).then(function (user3) {
//             ajax(user3).then(function () {
//
//             })
//         })
//     })
// })
//
//
// ajax('api/users').then(function (value) {
//    console.log('resolve',value);
//    return ajax('/error-url');
// }).catch(function (error) {
//     console.log("error",error);
// })
//
//
// var promiseAll = Promise.all([
//     ajax('请求1'),
//     ajax('请求2')
// ])
//
// promiseAll.then(function (values) {
//     console.log(values);       //返回的结果是一个数组,两个请求都成功才返回,其中一个失败则不返回
//     console.log(values[0]);   //请求1结果
//     console.log(values[1]);   //请求2结果
// }).catch( function (error) {
//     console.log(error);
// })
//
//
// function testArg(data) {
//     console.log(data);
// }
//
// testArg({a:1});
// testArg();
// console.log(undefined);
// if(undefined) {
//     console.log(111)
// }
//
// // 动态规划方程：dp[n] = num + Max(dp[n-1])
// // 由于不可以在相邻的房屋闯入，所以在当前位置 n 房屋可盗窃的最大值，要么就是 n-1 房屋可盗窃的最大值，要么就是 n-2 房屋可盗窃的最大值加上当前房屋的值，二者之间取最大值
// // 举例来说：1 号房间可盗窃最大值为 33 即为 dp[1]=3，2 号房间可盗窃最大值为 44 即为 dp[2]=4，3 号房间自身的值为 22 即为 num=2，那么 dp[3] = MAX( dp[2], dp[1] + num ) = MAX(4, 3+2) = 5，3 号房间可盗窃最大值为 55
//
// var rob = function(nums) {
//     if(nums.length === 0) return 0;
//     if(nums.length === 1) return nums[0];
//     if(nums.length === 2) return Math.max(nums[0],nums[1]);
//     let dp = [nums[0],Math.max(nums[0],nums[1])];
//     for(let i = 2;i < nums.length;i++){
//         dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i]);
//     }
//     return Math.max(dp[nums.length-1],dp[nums.length-2]);
// };


// var a = {a: 1, b: 2, c: "", d: 'ferfde'};
//
// for(let item in a) {
//     if(a[item] ==='') {
//         delete a[item]
//     }
// }
//
// console.log(a)
