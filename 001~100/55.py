# 呀超时了
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        length = len(nums)
        if length <= 1:
            return True
        index = 0
        for num in nums[:length-1]:
            if index < length - 1 and index + num >= length - 1:
                if index == 0:
                    return True
                else:
                    return self.canJump(nums[:index+1])
            index += 1
        return False

# 这次超内存了
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        length = len(nums)
        if length <= 1:
            return True
        index = length - 2
        for num in nums[:length-1][::-1]:
            if index < length - 1 and index + num >= length - 1:
                if index == 0:
                    return True
                else:
                    return self.canJump(nums[:index+1])
            index -= 1
        return False


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        at_least_step_need = 0
        nums = nums[:-1][::-1]
        for num in nums:
            at_least_step_need += 1
            if num >= at_least_step_need:
                at_least_step_need = 0
        return at_least_step_need == 0

