class Solution:
    def maxIncreaseKeepingSkyline(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        rm = list(map(max, grid))
        cm = list(map(max, zip(*grid)))      
        return sum(min(r,c) for r in rm for c in cm) - sum(ij for i in grid for ij in i)
