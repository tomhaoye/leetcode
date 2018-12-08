/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var bits = n.toString(2);
    len = bits.length;
    for(var i=0;i<len-1;i++){
        if(bits[i] == bits[i+1]){
            return false;
        }
    }
    return true;
};