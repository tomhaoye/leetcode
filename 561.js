/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort(function(a, b){
        return a - b;
    });
    len = nums.length;
    answer = 0;
    for(var i = 0;i<len;i+=2){
        answer += nums[i];
    }
    return answer;
};