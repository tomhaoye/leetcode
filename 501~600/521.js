/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    la = a.length;
    lb = b.length;
    if(a!=b){
        return Math.max(la,lb);
    }else{
        return -1;
    }
};