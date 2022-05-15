const fs = require("fs");
const path = require("path");

const filePath = (arr) => path.resolve(__dirname, arr);

// fs.readFile(filePath, (err, data) => {
//   console.log(data);
// });

// const data = "你好，我说zkc。";

// fs.writeFile(
//   filePath("test.txt"),
//   data,
//   { encoding: "utf-8", flag: "a" },
//   (err) => {
//     console.log(err);
//   }
// );

// fs.readFile(filePath("test.txt"), { encoding: "utf-8" }, (err, data) => {
//   console.log(data);
// });
