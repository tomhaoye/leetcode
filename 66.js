/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(i=digits.length-1;i>=0;i--){
        digits[i]+=1;
        if(digits[i]!=10) break;
        else digits[i]=0;
    }
    arr=[];
    if(parseInt(digits.join(''))===0) {
        digits.push(1);
        for(j=digits.length-1;j>=0;j--){
            arr.push(digits[j]);
        }
        return arr;
    }
    return digits;
};