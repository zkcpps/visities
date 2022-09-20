let regex = /\d{2,5}/g;
let string = "123 1234 12345 123456";
// 贪婪匹配
string.match(regex); // [ 123, 1234, 12345, 12345 ]
// 惰性匹配
let regex2 = /\d{2,5}?/g;
console.log(string.match(regex)); // [ '123', '1234', '12345', '12345' ]
// 1
let regex3 = /id=".*?"/; // 想想为什么要加? 不加的话 连后面的class都会匹配到
let string1 = '<div id="container" class="main"></div>';
console.log(string1.match(regex3));
// 2
let regex4 = /id="[^"]*"/;
let string2 = '<div id="container" class="main"></div>';
console.log(string2.match(regex4));
function text1() {
  /*
    写一个正则支持以下三种格式
  2016-06-12 
  2016/06/12
  2016.06-12
*/
  let regex = /(\d{4})([-/.])\d{2}\2\d{2}/;

  var string1 = "2017-06-12";
  var string2 = "2017/06/12";
  var string3 = "2017.06.12";
  var string4 = "2016-06/12";

  console.log(regex.test(string1)); // true
  console.log(regex.test(string2)); // true
  console.log(regex.test(string3)); // true
  console.log(regex.test(string4)); // false
}

text1();
