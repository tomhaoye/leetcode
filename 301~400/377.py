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


# 想简单的优化一下，发现更加慢了=。=
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
                newNums = []
                for iNum in nums:
                    iNum <= target and newNums.append(iNum)
                if len(newNums) == 0:
                    continue
                ways += self.combinationSum4(newNums, target)
        return ways


# 没事咱们再接再厉，其实真的很简单
class Solution:
    globalTarget = {}

    def combinationSum4(self, nums: List[int], target: int) -> int:
        ways = 0
        caTarget = target
        if caTarget in self.globalTarget:
            return self.globalTarget[caTarget]
        for num in nums:
            target = caTarget
            target -= num
            if target == 0:
                ways += 1
            if target > 0:
                ways += self.combinationSum4(nums, target)
        self.globalTarget[caTarget] = ways
        return ways
