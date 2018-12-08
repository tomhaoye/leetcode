/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    len = word.length;
    flag = 0;
    for(i=0;i<len;i++){
        if(i!=0){
            if(word[0].charCodeAt() < 97){
                if(word[i].charCodeAt() >= 97){
                    flag++;
                }
            }else{
                if(word[i].charCodeAt() < 97){
                    return false;
                }
            }
        }
    }
    if(flag!=0 && flag != len-1){
        return false;
    }else{
        return true;
    }
};