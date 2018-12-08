/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length;
    for(i=0;i<len;i++){
        if(nums[i+1]==nums[i]){
            nums.splice(i+1,1);
            i--;
            len = nums.length;
        }
    }
    return len;
};