/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num>=0) return num.toString(16);
    else return (Math.pow(2,32)+num).toString(16);
};