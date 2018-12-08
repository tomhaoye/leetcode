/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    originNums = nums.slice(0);
    nums.sort(function(i,j){return j-i;});
    ob = {};
    for(var i in nums){
        if(i=='0'){
            ob[nums[i]]="Gold Medal";
        }else if(i=='1'){
            ob[nums[i]]="Silver Medal";
        }else if(i=='2'){
            ob[nums[i]]="Bronze Medal";
        }else{
            ob[nums[i]]=parseInt(i)+1;
        }
    }
    arr=[];
    for(var j in originNums){
        arr[j] = ''+ob[originNums[j]];
    }
    return arr;
};