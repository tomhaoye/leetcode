/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var map = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var morseCode = [];
    var amount = words.length;
    for(var i=0;i<amount;i++){
        var morse = '';
        word = words[i];
        wordLen = word.length;        
        for(var k=0;k<wordLen;k++){
            morse = morse + map[word[k].charCodeAt()-97];
        }
        morseCode.push(morse);
    }
    var resultMap = [];
    var flag = amount;
    for(var m=0;m<amount;m++){
        if(resultMap[morseCode[m]] == undefined){
            resultMap[morseCode[m]] = 1;
        }else{
            flag -= 1;
            resultMap[morseCode[m]] += 1;   
        }
    }
    return flag;
};