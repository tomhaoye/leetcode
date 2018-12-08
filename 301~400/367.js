/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    lowest = Math.pow(10,Math.ceil(num.toString().length/2)-1);
    for(i=lowest;i<lowest*10-1;i++){
        if(num/i===i) return true;
    }
    return false;
};