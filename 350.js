/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    ob={};
    for(var i in nums2){
        if(ob[nums2[i]]===undefined){
            ob[nums2[i]]=1;
        }else{
            ob[nums2[i]]+=1;
        }
    }
    arr=[];
    for(var j in nums1){
        if(ob[nums1[j]]!==undefined&&ob[nums1[j]]){
           arr.push(nums1[j]);
           ob[nums1[j]]-=1;
        }
    }
    return arr;
};