class Solution:
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        c, su, maps, n_l = 0, 0, {0: 1}, len(nums)
        for i in range(n_l):
            su += nums[i]
            if su - k in maps:
                c += maps[su - k]
            maps[su] = maps[su] + 1 if su in maps else 1
        return c
