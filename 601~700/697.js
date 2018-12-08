/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var nt = {};
    len = nums.length;
    for(var i=0;i<len;i++){
        if(nt[nums[i]] == undefined){
            nt[nums[i]] = 1;
        }else{
            nt[nums[i]]++;
        }
    }
    var max = 0;
    var hint = [];
    for(num in nt){
        max = Math.max(max,nt[num]);
    }
    for(num in nt){
        if(nt[num] == max){
            hint.push(num);
        }
    }


    var result = 50001;
    hlen = hint.length
    for(var j =0;j<hlen;j++){
        result = Math.min(result,nums.lastIndexOf(parseInt(hint[j]))-nums.indexOf(parseInt(hint[j]))+1);
    }
    return result;
};