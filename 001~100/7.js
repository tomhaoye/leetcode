/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(Math.abs(x)>Math.pow(2,31)){
        return 0;
    }
    x = x+'';
    s = [];
    x.replace(/(.)(?=[^$])/g,"$1,").split(",");
    len = x.length;
    for(i=len-1;i>=0;i--){
            s.push(x[i]);
    }
    if(parseInt(s.join(""))>Math.pow(2,31)){
        return 0;
    }
    if(x[0]=="-"){
        return parseInt("-"+s.join(""));
    }else{
        return parseInt(s.join(""));
    }
};