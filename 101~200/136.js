/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    len = nums.length;
    for(i=1;i<len;i++){
        nums[0] ^= nums[i];
    }
    return nums[0];
};
