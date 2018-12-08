/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    len = nums.length;
    nums.sort(function(i,j){return i>j?1:-1});
    for(var i in nums){
        if(i != nums[i]){
            return parseInt(i);
        }
    }
    return len;
};