/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    nums.push(target);
    nums.sort(function(i,j){return i-j;});
    return nums.indexOf(target);
};