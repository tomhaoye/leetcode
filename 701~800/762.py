class Solution:
    def countPrimeSetBits(self, L, R):
        """
        :type L: int
        :type R: int
        :rtype: int
        """
        count = 0
        for i in range(L, R + 1):
            n_bin = bin(i)
            one_count = 0
            for c in n_bin:
                if c == '1':
                    one_count += 1
            if one_count in [1, 2, 3, 5, 7, 11, 13, 17, 19]:
                count += 1
        return count
