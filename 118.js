/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    a=[];
    for(i=0;i<numRows;i++){
        if(i===0) a[i]=[1];
        else{
            for(j=0;j<=i;j++){
                if(a[i]===undefined) a[i] = [];
                a[i].push((a[i-1][j-1]===undefined?0:a[i-1][j-1])+(a[i-1][j]===undefined?0:a[i-1][j]));
            }
        }
    }
    return a;
};
