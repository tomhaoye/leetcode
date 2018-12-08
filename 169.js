/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    ob={};
    for(var i in nums){
        if(ob[nums[i]]===undefined){
            ob[nums[i]] = 1;
        }else{
            ob[nums[i]]+=1;
        }
    }
    for(var j in ob){
        if(ob[j]>nums.length/2){
            return parseInt(j);
        }
    }
};
