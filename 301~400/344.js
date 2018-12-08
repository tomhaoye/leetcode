/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    len = s.length;
    ns = "";
    for(i=len-1;i>=0;i--){
        ns += s[i];
    }
    return ns;
};