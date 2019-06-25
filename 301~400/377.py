# 递归超时解法，这题目一看就大概知道要用DP的
class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        ways = 0
        caTarget = target
        for num in nums:
            target = caTarget
            target -= num
            if target == 0:
                ways += 1
            if target > 0:
                ways += self.combinationSum4(nums, target)
        return ways
