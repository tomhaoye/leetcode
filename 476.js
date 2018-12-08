/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    num = num.toString(2);
    len = num.length;
    temp = "";
    for(i=0;i<len;i++){
        if(num[i]=="1"){
            temp += "0";
        }else{
            temp += "1";
        }
    }
    return parseInt(temp,2);
};