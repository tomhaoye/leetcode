/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    hnum = 0;
    vnum = 0;
    sq = 0;
    for(var i in grid){
        for(var j in grid[i]){
            if(grid[i][j]==1){
                sq++;
                j = parseInt(j);
                if(grid[i][j+1]!==undefined && grid[i][j+1]==1){
                    vnum++;
                }
                if(i>0){
                    if(grid[i-1][j]!==undefined && grid[i-1][j]==1){
                        hnum++;
                    }
                }
            }
        }
    }
    
    return 4*sq-2*(hnum+vnum);
};