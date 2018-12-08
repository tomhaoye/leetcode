class Solution:
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        if not x:
            return x
        more_than = self.half(x)
        low = 2 ** int((more_than - 1) / 2)
        top = 2 * low
        return self.helper(x, low, top)

    def helper(self, target, v_l, v_t):
        i = int((v_l + v_t) / 2)
        if i == v_l or i == v_t:
            return i
        compare = i ** 2
        if compare < target:
            return self.helper(target, i, v_t)
        elif compare > target:
            return self.helper(target, v_l, i)
        else:
            return i

    def half(self, x, count=0):
        count += 1
        xs = x ** 2
        if xs == x:
            return count
        elif xs > x:
            count += self.half(int(x / 2))
            return count
        else:
            count += self.half(int(x * 2))
            return count
