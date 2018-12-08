/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(!num) return false;
    sqr = Math.sqrt(num);
    arr = [];
    for(i=1;i<sqr;i++){
        if(parseInt(num/i)*i==num){
            if(num/i!=num){
                arr.push(num/i);
            }
            arr.push(i);
        }
    }
    sum = 0;
    for(var j in arr){
        sum += arr[j];
    }
    return sum==num;
};