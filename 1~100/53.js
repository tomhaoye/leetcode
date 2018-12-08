/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    len = nums.length;
    sum = 0;
    max = Math.max();
    for (i = 0; i < len; i++) {
        if (sum < 0) 
            sum = nums[i];
        else 
            sum += nums[i];
        if (sum > max)
            max = sum;
    }
    return max;
};