/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    len = nums.length;
    llen = nums[0].length;
    if(r*c != len*llen){
        return nums;
    }
    var yiwei = [];
    for(var i=0;i<len;i++){
        for(var j=0;j<llen;j++){
            yiwei.push(nums[i][j]);
        }
    }
    var na = [];
    for(var k=0;k<r;k++){
        var sub = [];
        for(var g=0;g<c;g++){
            sub.push(yiwei[k*c+g]);
        }
        na.push(sub);
    }
    return na;
};