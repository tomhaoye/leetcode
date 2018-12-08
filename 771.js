/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    $arr = [];
    $flag = 0;
    for($k=0;$k<J.length;$k++){
        $arr[J[$k]]=1;
    }
    for($i=0;$i<S.length;$i++){
       if($arr[S[$i]]!==undefined){
           $flag++;
       }
    }
    return $flag;
}