/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    as=[];
    at=[];
    for(var i in s){
        as.push(s[i].charCodeAt());
    }
    for(var j in t){
        at.push(t[j].charCodeAt());
    }
    as.sort(function(i,j){return i-j});
    at.sort(function(i,j){return i-j});
    for(k=0;k<as.length || k<at.length;k++){
        if(as[k]!=at[k] || as[k] === undefined || at[k] === undefined) return false;
    }
    return true;
};
