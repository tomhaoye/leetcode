/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    return ((n===0) ? 0 : (parseInt(n/5)+trailingZeroes(parseInt(n/5))));
};
