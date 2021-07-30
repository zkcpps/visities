const arr1 = [1, 4, 6, 8, 10, 11, 16, 20, 30];
const arr2 = [2, 4, 5, 7, 9, 15, 60, 70];


/**
 *  合并两个有序数组，合并的数据也要保持有序
 * @param arr1
 * @param arr2
 */
function combineDouble (arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) return  arr1.length === 0 ? arr2 : arr1;
    let result = [];
    // const newArr1 = arr1.filter(item => { return  arr2.indexOf(item) === -1 });
    // const newArr2 = arr2.filter(item => { return  newArr1.indexOf(item) === -1 });
    let x = 0, y = 0;  //记录两个数组当前的坐标的值
    const length = arr1.length + arr2.length;
    for (let i = 0; i < length; i++) {
        if( arr1[x] < arr2[y] || y === arr2.length) {
            result.push(arr1[x]);
            x++;
        } else {
            result.push(arr2[y]);
            y++;
        }
    }

    return result;
}

function combineDouble2 (arr1, arr2) {
    if(arr2.length === 0 ) return arr1;
    const i =arr2.length;
    let j = 0;
    let k = 0;
    while(j < i) {
        if(arr2[j] < arr1[arr1.length -1]) {
            for (; k < arr1.length; k++) {
                if(arr1[k] >= arr2[j]) {
                    arr1.splice(k, 0, arr2[j]);
                    break;
                }
            }
        } else {
            arr1.push(arr2[j]);
        }
        j++;
    }

    return arr1;

}

console.log(combineDouble(arr1, arr2));
console.log(combineDouble2(arr1, arr2));


