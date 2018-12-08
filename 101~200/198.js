/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    len = nums.length;
    mrob = 0;
    norob = 0;
    for(i=0;i<len;i++){
        nrob = norob + nums[i];
        norob = Math.max(norob,mrob);
        mrob = nrob;
    }
    return Math.max(norob,mrob);
};
