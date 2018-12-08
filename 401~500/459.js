/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    arr=[];
    len=s.length;
    if(len===1) return false;
    for(i=1;i<len;i++){
        if(len%i===0){
            arr.push(i);
        }
    }
    for(var j in arr){
        flag=0;
        for(m=arr[j],n=arr[j];m<len;m+=arr[j]){
            if(s.substr(0,n)!==s.substr(m,n)){
                break;
            }else{
                flag++;
            }
        }
        if(flag==len/arr[j]-1) return true;
    }
    return false;
};