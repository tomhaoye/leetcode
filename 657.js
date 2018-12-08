/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var m = {"U":0,"D":0,"R":0,"L":0};
    for(i=0;i<moves.length;i++){
        m[moves[i]]+=1;
    }
    if(m["U"]==m["D"]&&m["R"]==m["L"]){
        return true;
    }else{
        return false;
    }
};