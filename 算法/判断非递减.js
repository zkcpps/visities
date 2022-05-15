function isNotDecrease(arr) {
    const len = arr.length;
    if(len < 3) return true;
    let num = 0;
    for (let i = 0; i < len-1; i++){
        if(arr[i] > arr[i+1]) {
            num++;
        }
    }
    return num > 1 ? false : true;
}

console.log(isNotDecrease([1,2,3,6]));
console.log(isNotDecrease([6,3,2,1]));
console.log(isNotDecrease([1,3,2,6]));
console.log(isNotDecrease([1,3]));