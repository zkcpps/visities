console.log(typeof 1);
console.log(typeof '1');
console.log(typeof false);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});

//总结，typeof能分辨基本的数据类型，但是数组和对象分不清楚


console.log({} instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Array);

//instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
