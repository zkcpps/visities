// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 7 最小

function getIndex(arr){
    var index = null;

    if(arr.length == 0) return index;
    if(arr.length == 1) return 0;
    var min = arr[0];
    index = 0;
    for(var i = 1; i < arr.length; i++) {
        if(min > arr[i] && arr[i] > 0) {
            min = arr[i];
            index = i;
        }

    }
    return [index, arr[index]];
}

console.log(getIndex([10,21,0,-7,35,7,9,23,18,6]));
console.log(getIndex([10,21,0]));
console.log(getIndex([10,21,0,-7,2]));