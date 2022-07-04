/**说出以下题目的运行结果  */
var a = 100;
var obj = {
  a: 10,
  fun() {
    setTimeout(() => {
      console.log(this.a);
    });
  },
};
obj.fun();

/** 找出最小值 */
var arr = [12, 34, 32, 89, 4];

console.log(Math.min(...arr));

/** 运行结果 */

var iArr = [];
for (var i = 0; i < 6; i++) {
  iArr[i] = function () {
    console.log(i);
  };
}
iArr[0]();
