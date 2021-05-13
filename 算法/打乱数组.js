/**
 *  打乱数组
 * @param arr
 */
function upsetArr (arr) {
    let newArr = [null,null,null,null,null,null,null,null,null,null];
    for (let i = 0; i < arr.length; i++) {
        newArr.splice(((Math.random()*10).toFixed(0)), 0, arr[i]);
    }
    return newArr.filter(item => item != null);
}
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
console.log(upsetArr(arr));
console.log(arr);
console.log((Math.random() * 10).toFixed(0));