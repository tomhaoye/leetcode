/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    len = matrix.length;
    for(var i=0;i<len - 1;i++){
        llen = matrix[i].length;
        for(var j=0;j<llen - 1;j++){
            if(matrix[i][j] != matrix[i+1][j+1]){
                return false;
            }
        }
    }
    return true;
};