class Solution:
    def peakIndexInMountainArray(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        maxnum = -1
        index = 0
        for num in A:
            if num > maxnum:
                maxnum = num
        return A.index(maxnum)
