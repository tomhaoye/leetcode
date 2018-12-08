class Solution:
    def countBinarySubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        one = []
        zero = []
        o_count, z_count, result = 0, 0, 0
        step_equal = 1 if s[0] == '0' else -1
        for i in range(len(s)):
            if s[i] == '0':
                z_count += 1
                if o_count:
                    one.append(o_count)
                o_count = 0
            else:
                o_count += 1
                if z_count:
                    zero.append(z_count)
                z_count = 0
        zero.append(z_count) if z_count else one.append(o_count)
        if not len(one) or not len(zero):
            return result
        for j in range(len(zero)):
            if len(zero) == len(one):
                if step_equal == 1:
                    result += min(zero[j], one[j]) + min(zero[j], one[j - step_equal] if j - step_equal >= 0 else 0)
                else:
                    result += min(zero[j], one[j]) + min(zero[j], one[j - step_equal] if j - step_equal < len(one) else 0)
            elif len(zero) > len(one):
                result += min(zero[j], one[j] if j < len(one) else 0) + min(zero[j], one[j - 1] if j - 1 >= 0 else 0)
            else:
                result += min(zero[j], one[j]) + min(zero[j], one[j + 1])
        print(one, zero)
        return result
