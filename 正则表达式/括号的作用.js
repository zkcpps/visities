// 提取首字母
function getFirstWord() {
  const reg = /(?:^|\s)\w/g;
  const test = "i love you too";
  console.log(test.match(reg));
}
getFirstWord();

// 单词首字母大写
function handleFirstWordToUpperCase(test) {
  const reg = /(?:^|\s)\w/g;
  return test.toLowerCase().replace(reg, function (c) {
    return c.toUpperCase();
  });
}
console.log(handleFirstWordToUpperCase("i lOve you too"));

// 文本句子首字母大写
function handleTextFirstWordToUpperCase(test) {
  const reg = /(?:^|,.)\w/g;
  return test.toLowerCase().replace(reg, function (c) {
    return c.toUpperCase();
  });
}
console.log(handleTextFirstWordToUpperCase("i lOve you too, you love me"));

// 去驼峰化
function dasherize(str) {
  return str
    .replace(/([A-Z])/g, "-$1")
    .replace(/[-_\s]+/g, "-")
    .replace(/^[-_\s]+|[-_\s]+$/g, "")
    .toLowerCase();
}
console.log(dasherize("Moz Transform "));
