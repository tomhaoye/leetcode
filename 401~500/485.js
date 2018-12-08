/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    a = 0,b = 0;
    for(var i in nums){
        if(nums[i] == 1){
            a++;
            b = a>b?a:b;
        }else{
            a = 0;
        }
    }
    return b;
};