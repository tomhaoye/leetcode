/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    ns = num.toString(4);
    if(ns.lastIndexOf(1) !== 0 || ns.lastIndexOf(2) != -1 || ns.lastIndexOf(3) != -1){
        return false;
    }
    return true;
};