/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    map = {};
    for(var i in nums){
        if(map[nums[i]] === undefined){
            map[nums[i]] = i;
        }else{
            if(Math.abs(map[nums[i]]-i)<=k){
                return true;
            }else{
                map[nums[i]] = i;
            }
        }
    }
    return false;
};
