/**
 * 利用Map来记录已经遍历过的数值以及下标，利用空间换时间
 * @param {*} nums 
 * @param {*} targetNum 
 * @returns 
 */
function twoSum (nums, targetNum) {
   let map = new Map();
   const len = nums.length;
  for( let i = 0; i < len; i++) {
    if(map.get(targetNum - nums[i]) !== undefined) {
      return [map.get(targetNum - nums[i]), i];
    }
     map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 19));