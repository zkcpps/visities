/**
 * 双链路实现数组合并，不新增额外数组的情况下
 * @param {*} nums1 
 * @param {*} nums2 
 */
function combineTwoNums(nums1, nums2) {
  let k = nums1.length - 1, j = nums2.length - 1, m = k + j + 1;  // m为合并的数组长度
  while(k >= 0 && j >= 0) {
    if(nums1[k] >= nums2[j]) {
       nums1[m] = nums1[k];
       k--;
       m--;
    } else {
      nums1[m] = nums2[j];
      j--;
      m--;
    }
  }

  while(j >= 0) {
    nums1[m] = nums2[j];
    j--;
    m--;
  }
  return nums1;
}

console.log(combineTwoNums([1,3,5,7], [2,4,6,8]));