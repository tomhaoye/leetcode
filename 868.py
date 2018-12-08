class Solution:
    def binaryGap(self, N):
        """
        :type N: int
        :rtype: int
        """
        count = 0
        N_bin = bin(N)
        for i in range(len(N_bin)):
            if N_bin[i] == '1':
                for step in range(i + 1, len(N_bin)):
                    if N_bin[step] == N_bin[i]:
                        count = max(count, step - i)
                        break
        return count
