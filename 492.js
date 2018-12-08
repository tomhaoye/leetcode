/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    sqrt = parseInt(Math.sqrt(area));
    while(1){
        if(sqrt===0) return false;
        w = parseInt(area/sqrt);
        if(w*sqrt == area){
            if(sqrt > w){
                return [sqrt,w];
            }else{
                return [w,sqrt];
            }
        }
        sqrt--;
    }
};