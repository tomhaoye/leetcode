/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n>1){
        if(n%3){
            return false;
        }else{
            while(n>3){
                y = n%3;
                if(y){
                    return false;
                }
                n/=3;
            }
            if(n==3)return true;
            else return false;
        }
    }else if(n===1){
        return true;
    }else{
        return false;
    }
    return true;
};