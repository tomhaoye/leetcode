/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    var len = S.length;
    var iLoop = 2**len;
    var result = [];
    for(var i=0;i<iLoop;i++){
        var iStr = i.toString(2);
        iStr = '00000000000'+iStr;
        var cut = iStr.length - len;
        iStr = iStr.substring(cut);
        var newStr = '';
        for(var k=0;k<len;k++){
            askii = S[k].charCodeAt()
            if((askii >= 65 && askii <=90) && iStr[k] == 1){
                newStr += String.fromCharCode(askii + 32);
            }else if((askii >= 97 && askii <=122) && iStr[k] == 1){
                newStr += String.fromCharCode(askii - 32);
            }else{
                newStr += S[k];
            }
        }
        if(result.indexOf(newStr) == -1){
            result.push(newStr);   
        }
    }
    return result;
};