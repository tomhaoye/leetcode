/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    arr=[];
    arr[0] = [1];
    for(i=1;i<=rowIndex;i++){
        for(j=0;j<=i;j++){
            if(arr[i]===undefined) arr[i]=[];
            arr[i].push((arr[i-1][j-1]===undefined?0:arr[i-1][j-1])+(arr[i-1][j]===undefined?0:arr[i-1][j]));
        }
    }
    return arr[rowIndex];
};
