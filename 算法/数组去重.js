/**
 * 传统方式
 * @param {*} arr 
 */
function unique (arr) {
   const res = [];
   arr.forEach(item=>{
       if (res.indexOf(item) < 0) {
           res.push(item);
       }
   })
   return res;
}

function uniqueSet (arr) {
    const set = new Set(arr);
    return [...set];
}

const arr = [1,2,2,3,4,6,6,7];

console.log(unique(arr));
console.log(uniqueSet(arr));
