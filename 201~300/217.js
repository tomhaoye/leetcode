/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    len = nums.length;
    var i = 0, j = 1;
    nums.sort();
    for(i;i<len;i++){
        if(nums[i] == nums[j]){
            return true;
        }else{
            j++;
        }
    }
    return false;
};
