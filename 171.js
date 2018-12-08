/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    sum = 0;
    len = s.length;
    for(var i in s){
        if(i != len - 1){
            sum += (s[i].charCodeAt() - 64)*Math.pow(26,len - 1 - i);
        }else{
            sum += s[i].charCodeAt() - 64
        }
    }
    return sum;
};
