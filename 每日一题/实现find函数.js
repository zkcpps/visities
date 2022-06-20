// 约定：
// title数据类型为String
// userId为主键，数据类型为Number
var data = [
  { userId: 8, title: "title1" },
  { userId: 11, title: "other" },
  { userId: 15, title: null },
  { userId: 19, title: "title2" },
];
var find = function (origin) {
  // your code are here...
  this.data = origin;
  this.where = function (options) {
    for (var key in options) {
      this.data = this.data.filter((item) => options[key].test(item[key]));
    }
    return this;
  };
  this.orderBy = function (key, order) {
    if (order === "asc") {
      return this.data.sort((a, b) => a[key] - b[key]);
    } else {
      return this.data.sort((a, b) => b[key] - a[key]);
    }
  };

  return this;
};
// 查找 data 中，符合条件的数据，并进行排序
var result = find(data)
  .where({
    title: /\d$/,
  })
  .orderBy("userId", "desc");

console.log(result); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];
