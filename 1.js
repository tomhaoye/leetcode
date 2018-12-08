/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    len = nums.length
    for(i=0;i<len;i++){
        temp = target - nums[i];
        index = nums.indexOf(temp);
        if(index!=-1 && index != i){
            return [i,index]
        }
    }
    throw 'no two sum match';
};