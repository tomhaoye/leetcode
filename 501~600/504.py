class Solution:
    def convertToBase7(self, num):
        """
        :type num: int
        :rtype: str
        """
        ret,minous = '',False
        if num < 0:
            minous = True
            num = -num
        while num >= 7:
            yu = num % 7
            ret += str(yu)
            num = num // 7
        ret += str(num)
        ret += '-' if minous else ''
        return ret[::-1]
