/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(b===0){
        return a;
    }
    x = a^b;
    c = (a&b)<<1;
    return getSum(x, c);
};