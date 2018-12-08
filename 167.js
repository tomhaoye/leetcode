/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    len = numbers.length;
    s = 0;
    e = len - 1;
    while(numbers[s]+numbers[e] != target){
        if(numbers[s]+numbers[e] < target){
            s++;
        }else{
            e--;
        }
    }
    return [s+1,e+1];
};
