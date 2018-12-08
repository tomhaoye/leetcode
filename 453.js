/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort(function(i,j){return i-j});
    len = nums.length;
    sum=0;
    for(i=len-1;i>=0;i--){
        sum+=nums[i]-nums[0];
    }
    return sum;
};