/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var i = 0,j = 1;
    len = s.length;
    if(len == 0){
        return -1;
    }
    if(len == 1){
        return 0;
    }
    for(i;i<len;i++){
        if(s[i] == s[j] && i != j){
            j = 0;
        }else if(j<len-1){
            i--;
            j++;
        }else if(j == len-1){
            return i;
        }
    }
    return -1;
};