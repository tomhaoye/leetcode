class Solution:
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        
    # 递归方案一，超时
    # def subsets(self, nums):
    #     res,_dict = [[],nums[:]],{}
    #     for key in self.rec(nums, _dict):
    #         res.append([int(i) for i in key.split(' ')])
    #     return res
    # def rec(self, nums, _dict):
    #     length = len(nums)
    #     imitate = nums[:]
    #     for i in range(length):
    #         nums = imitate[:]
    #         nums.pop(i)
    #         if not nums:
    #             break
    #         _dict[' '.join(str(x) for x in nums)] = 1
    #         self.rec(nums, _dict)
    #     return _dict
