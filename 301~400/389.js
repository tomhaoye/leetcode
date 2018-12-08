/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    sn = 0;
    st = 0;
    for(var i in s){
        sn += s[i].charCodeAt();
    }
    for(var j in t){
        st += t[j].charCodeAt();
    }
    diff = st - sn;
    return String.fromCharCode(diff);
};