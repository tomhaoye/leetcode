/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    lf = findNums.length;
    ln = nums.length;
    arr = [];
    for(i=0;i<=lf-1;i++){
        for(j=nums.indexOf(findNums[i])+1;j<=ln-1;j++){
            if(nums[j]>findNums[i]){
                arr[i]=nums[j];
                break;
            }else{
                arr[i]=-1;
            }
        }
        if(arr[i]===undefined)arr[i]=-1;
    }
    return arr;
};