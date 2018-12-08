/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    maxx = n/1;
    maxy = Math.floor(n/2);
    ways = 0;
    for(i=maxx;i>=0;i--){
        for(j=maxy;j>=0;j--){
            if(i+2*j==n){
                sumxy = i+j;
                ways += factorial(sumxy)/factorial(i)/factorial(Math.abs(sumxy-i));
            }
        }
    }
    return ways;
};

function factorial(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1); 
    }
}