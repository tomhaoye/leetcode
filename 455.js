/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(function(i,j){return i-j});
    s.sort(function(i,j){return i-j});
    count=0;
    for(i=0;count<g.length && i<s.length;i++){
        if(s[i]>=g[count]) count++;
    }
    return count;
};