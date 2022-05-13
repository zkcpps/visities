const path = require("path");

// console.log(path);
console.log(__dirname);

console.log(path.resolve(__dirname, __filename));

// const myPath = __filename;

// const dirname = path.dirname(myPath);
// const basename = path.basename(myPath);
// const extname = path.extname(myPath);

// console.log(dirname); // /Users/coderwhy/Desktop/Node/课堂/PPT
// console.log(basename); // 01_邂逅Node.pdf
// console.log(extname); // .pdf

console.log(path.join("/user", "why", "abc.txt"));

const resolve = (dir) => path.resolve(__dirname, dir);
console.log(resolve("src"));
