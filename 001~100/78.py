class Solution:
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        init = []
        length = len(nums)
        indicator1, indicator2 = 0, 0
        while True:
            if indicator1 == length and indicator2 == length:
                break
            elif indicator2 == length:
                indicator1 += 1
                indicator2 = indicator1
            else:
                indicator2 += 1
        return init
