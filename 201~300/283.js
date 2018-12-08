/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zero = 0;
    len = nums.length;
    for(j=0;j<len-1;j++){
        if(nums[j]===0){
            nums.splice(j,1);
            j--;
            zero++;
        }
    }
    i=1;
    while(i<=zero){
        nums.push(0);
        i++;
    }
};