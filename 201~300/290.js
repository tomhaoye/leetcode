/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    plen = pattern.length;
    str = str.split(' ');
    slen = str.length;
    if(plen != slen) return false;
    b={};
    parr = [];
    for(var i in pattern){
        parr.push(pattern[i]);
        if(b[pattern[i]] !== undefined){
            if(b[pattern[i]] != str[i]){
                return false;
            }
        }else{
            b[pattern[i]] = str[i];
        }
    }
    if(getArray(parr).length != getArray(str).length) return false;
    return true;
};


function getArray(a) {
    var hash = {},
        len = a.length,
        result = [];

    for (var i = 0; i < len; i++) {
        if (!hash[a[i]]) {
            hash[a[i]] = true;
            result.push(a[i]);
        }
    }
    return result;
}