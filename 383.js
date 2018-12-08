/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    flag = 0;
    for(var i in ransomNote){
        if(magazine.indexOf(ransomNote[i]) != -1){
            flag++;
            magazine = magazine.replace(ransomNote[i],'');
        }
    }
    if(flag == ransomNote.length){
        return true;
    }else{
        return false;
    }
};