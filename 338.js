/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var arr = [0];
    for(i=1;i<=num;i++){
        arr.push((arr[i>>1])+(i&1));
    }
    return arr;
};