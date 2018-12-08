/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    len = s.length;
    ls = '';
    if(k >= len){
        for(i=len-1;i>=0;i--){
            ls += s[i];
        }
    }else{
        for(i=0;i<len;i++){
            o = Math.ceil((i+1)/k);
            if(o%2!==0){
                for(j=o*k-1;j>=(o-1)*k;j--){
                    if(s[j]!==undefined){
                        ls += s[j];
                    }
                }
                i += (k-1);
                
            }else{
                ls += s[i];
            }
        }
    }
    return ls;
};