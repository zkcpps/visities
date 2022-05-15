const EMAIL = /^\w/

var str="中国移动:10086,中国联通:10010,中国电信:10000";
//把里面所有的数字全部显示出来
var array=str.match(/\d{5}/g);
console.log(array);


var phones = "张三手机号码13265456163,大佛非答 124345663432的放大得分, 放的屁v13414826933".match(/([1][358][0-9][0-9]{8})|([1][4][37][0-9]{8})|([1][7][01367][0-9]{8})/g);
console.log(phones);


// var pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
// var rightEmail = '112@qq.com';
// var errEmail = '112@dcom';
// console.log(pattern.test(rightEmail));   //true
// console.log(pattern.test(errEmail));     //false

// var pattern =  /[0-9-()（）]{7,18}/;
// var right = '020-88208820';
// var err = '00000111110';
// console.log(pattern.test(right));   //true
// console.log(pattern.test(err));     //false

var pattern = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
var right = '110101199003078398';
var err = '4452211991123265554';
console.log(pattern.test(right));   //true
console.log(pattern.test(err));     //false
