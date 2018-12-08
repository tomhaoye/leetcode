/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var arr = [];
    for(var i=left;i<=right;i++){
        i = i.toString();
        len = i.length;
        var flag = 0;
        for(var j = 0;j<len;j++){
            if(i[j] == 0 || i%i[j] !== 0){
                flag++;
            }
        }
        if(flag == 0){
            arr.push(parseInt(i));
        }
    }
    return arr;
};