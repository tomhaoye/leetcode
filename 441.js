/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    i=1;
    while(n>0){
        n-=i;
        i++;
    }
    if(n===0) return i-1;
    else return i-2;
};