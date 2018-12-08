/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    arr = [];
    ob = {};
    for(j=0;j<nums2.length;j++){
        ob[nums2[j]]=j;
    }
    for(i=0;i<nums1.length;i++){
        if(ob[nums1[i]]!==undefined){
            arr.push(nums1[i]);
        }
    }
    return getArray(arr);
};


function getArray(a) {
    var hash = {},
        len = a.length,
        result = [];

    for (var i = 0; i < len; i++) {
        if (!hash[a[i]]) {
            hash[a[i]] = true;
            result.push(a[i]);
        }
    }
    return result;
}