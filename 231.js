/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n>1){
        if(n%2){
            return false;
        }else{
            while(n>2){
                y = n%2;
                if(y){
                    return false;
                }
                n/=2;
            }
            if(n==2)return true;
            else return false;
        }
    }else if(n===1){
        return true;
    }else{
        return false;
    }
    return true;
};
