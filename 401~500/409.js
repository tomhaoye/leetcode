/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    ob={};
    for(var i in s){
        if(ob[s[i]]===undefined){
            ob[s[i]]=1;
        }else{
            ob[s[i]]+=1;
        }
    }
    single=true;
    sum=0;
    for(var j in ob){
        if(ob[j]!=1&&ob[j]%2===0){
            sum+=ob[j];
        }else if(single&&ob[j]%2==1){
            sum+=ob[j];
            single=!single;
        }else if(!single&&ob[j]%2==1){
            sum+=ob[j]-1;
        }
    }
    return sum;
};