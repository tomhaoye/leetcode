/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    len = s.length;
    if(len === 0) return 0;
    arr = s.split(' ');
    if(arr[arr.length-1][0]==' ') return 0;
    al = arr.length;
    for(i=al-1;i>=0;i--){
        if(arr[i].length !== 0){
            return arr[i].length;
        }
    }
    return 0;
};