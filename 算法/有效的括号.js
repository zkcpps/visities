function isValid(s) {
  const left = {
    "(": 1,
    "{": 2,
    "[": 3,
  };
  const right = {
    ")": 1,
    "}": 2,
    "]": 3,
  };
  const sArr = s.split("");
  // if (sArr.length === 2 && right[sArr[1]] !== left[sArr[0]]) return false;
  const stack = [];
  for (let i = 0; i < sArr.length; i++) {
    if (stack.length === 0 || left[sArr[i]]) {
      stack.push(sArr[i]);
      continue;
    }
    if (right[sArr[i]]) {
      const item = stack.pop();
      if (right[sArr[i]] !== left[item]) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }

  return true;
}

console.log(isValid("{[]}"));
