function quikeSort(array) {
    if (array.length < 2) return array
    const pivot = array[array.length - 1];
    const left = array.filter((v,i)=> v <= pivot && i != array.length -1);
    const right = array.filter(v=> v > pivot);
    return [...quikeSort(left), pivot, ...quikeSort(right)];
}

function quikeSort1(array) {
    var n = array.length;
    if (n <= 1) return array;

    var midIndex = Math.floor(n / 2);
    var midVal = array[midIndex]; // 取中间的数
    var left = [];
    var right = [];
    for (var i = 0; i < n; i++) {
        if (i === midIndex) continue;
        if (array[i] < midVal) {
            left.push(array[i]);
          } else {
            right.push(array[i]);
          }
    }
    return  [...quikeSort1(left), midVal, ...quikeSort1(right)];
}

function quickSort1(list) {
    var n = list.length;
    if (n <= 1) return list;
  
    var midIndex = Math.floor(n / 2);
    var midVal = list[midIndex]; // 取中间的数
    var left = [];
    var right = [];
  
    for (var i = 0; i < n; i++) {
      if (i === midIndex) continue;
      if (list[i] < midVal) {
        left.push(list[i]);
      } else {
        right.push(list[i]);
      }
    }
  
    // 递归
    return quickSort1(left).concat(quickSort1(right));
  }

console.log(quikeSort1([2,4,6,7,1,10,8,5]));
