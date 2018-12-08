/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    sum=0;
    if(n<0) sum+=1;
    sn = n.toString(2);
    for(var i in sn) if(sn[i]==1) sum+=1;
    return sum;
};
