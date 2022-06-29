function countingSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;

  let max = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let sArr = new Array(max + 1).fill(0);

  for (let i = 0; i < len; i++) {
    sArr[arr[i]]++;
  }

  for (let i = 1; i < sArr.length; i++) {
    sArr[i] += sArr[i - 1];
  }

  let tempArr = new Array(len).fill(0);
  for (let i = len - 1; i >= 0; i--) {
    tempArr[sArr[arr[i]] - 1] = arr[i];
    --sArr[arr[i]];
  }

  return tempArr;
}

console.log(countingSort([2, 0, 5, 8, 4, 1, 9, 3]));
