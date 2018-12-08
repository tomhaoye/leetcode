/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var values = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    };
    
    len = s.length;
    sum = 0;
    for(i=0;i<len;i++){
        if(s[i]=="M"){
            sum+=values.M;
        }else if(s[i]=="D"){
            sum+=values.D;
        }else if(s[i]=="C"){
            if(i!=len-1 && (s[i+1]=="M"||s[i+1]=="D")){
                sum-=values.C;
            }else{
                sum+=values.C;
            } 
        }else if(s[i]=="L"){
            sum+=values.L;
        }else if(s[i]=="X"){
            if(i!=len-1 && s[i+1]!="I" && s[i+1]!="V" && s[i+1]!="X"){
                
                sum-=values.X;
            }else{
                sum+=values.X;
            } 
        }else if(s[i]=="V"){
            sum+=values.V;
        }else if(s[i]=="I"){
            if(i!=len-1 && s[i+1]!="I"){
                sum-=values.I;
            }else{
                sum+=values.I;
            }            
        }
    }
    if(sum>3999||sum<1){
        return false;
    }
    return sum;
};