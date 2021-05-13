/**
 *   let const var 的区别
 */
//  var是es6之前的，let，const 是es6之后的，var,let 是可变的，const是不可变的。let，const具有块级作用域，而var有变量提升。

// 变量提升

// console.log(a); // undefined
// var a = 1;

// console.log(b);  //ReferenceError: b is not defined (报错)
// let b = 1;

//块级作用域

if(true) {
    var i = 0;
    let x = 0;
}
console.log(i);   // 0 
console.log(x);   // ReferenceError: x is not defined (报错)

//typeof 能判断什么类型

// 强制类型转化和隐式类型转化
