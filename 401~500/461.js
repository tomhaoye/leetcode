/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    if(x<0 || y>Math.pow(2,31)){
        return false;
    }
    x=x.toString(2);
    y=y.toString(2);
    
    lenx=x.length;
    leny=y.length;
    if(lenx>leny){
        for(j=0;j<lenx-leny;j++){
            y='0'+y;
        }
        len = lenx;
    }else{
        for(j=0;j<leny-lenx;j++){
            x='0'+x;
        }
        len = leny;
    }
    flag=0;
    for(i=0;i<len;i++){
        if(x[i]!=y[i]){
            flag+=1;
        }
    }
    return flag;
};