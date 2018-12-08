/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    len = nums.length;
    for(i=0;i<len;i++){
        index = Math.abs(nums[i])-1;
        nums[index] = -Math.abs(nums[index]);
    }
    len = nums.length;
    a = [];
    for(j=0;j<len;j++){
        if(nums[j]>0){
            a.push(j+1);
        }
    }
    return a;
};