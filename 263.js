/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num%2 === 0){
        num /= 2;
    }else if(num%3 === 0){
        num /= 3;
    }else if(num%5 === 0){
        num /= 5;
    }else if(num == 1){
        return true;
    }else{
        return false;
    }
    
    if(num >= 2){
        return isUgly(num);
    }
    
    if(num == 1){
        return true;
    }
    return false;
};
