/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */


var rotateString = function(A, B) {
    aLen = A.length;
    bLen = B.length;
    if(aLen != bLen){
        return false;
    }
    if(aLen == 0){
        return true;
    }
    var flag = false;
    top = aLen + bLen;
    for(var i = j = 0;i < aLen;j++){
        
// console.log(A[i]);
        
console.log(j);
        if(!top){
            break;
        }
        if(B[j] == A[i]){
            topMark = top;
            jMark = j;
            flag = true;
        }
        if(flag && B[j] != A[i]){
            if(top > aLen){
                flag=false;
                i = 0;
                j = jMark;
                top = topMark - 1;
                continue;
            }
            return false;
        }
        if(j >= aLen-1){
            j = -1;
        }
        if(flag){
            i++;
        }
        top--;
    }
    if(!flag){
        return false;
    }else{
        return true;
    }
};