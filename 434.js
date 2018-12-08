/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    arr = s.split(' ');
    len = arr.length;
    for(i=0;i<len;i++){
        if(arr[i]===""){
            arr.splice(i,1);
            i--;
            len = arr.length;
        }
    }
    return arr.length;
};