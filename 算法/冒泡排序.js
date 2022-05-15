function bubbleSort(arr) {
   const len = arr.length;
   if(!len) return [];
   for (let i = 0; i < len; i++) {
       for(let j = 0; j < len-i-1; j++){
           if(arr[j] > arr[j+1]) {
              [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
           }
       }
   }
   return arr;
}

console.log(bubbleSort([2,4,6,7,1,10,8,5]));