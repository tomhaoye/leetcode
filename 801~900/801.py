class Solution:
    def minSwap(self, A, B):
        """
        :type A: List[int]
        :type B: List[int]
        :rtype: int
        """
        N = len(A)
        not_swap, swap = [float('inf')] * N, [float('inf')] * N
        not_swap[0], swap[0] = 0, 1
        for i in range(1, N):
            if A[i - 1] < A[i] and B[i - 1] < B[i]:
                not_swap[i] = not_swap[i - 1]
                swap[i] = swap[i - 1] + 1
            if A[i - 1] < B[i] and B[i - 1] < A[i]:
                not_swap[i] = min(not_swap[i], swap[i - 1])
                swap[i] = min(swap[i], not_swap[i - 1] + 1)
        return min(swap[-1], not_swap[-1])


s = Solution
print(s.minSwap(s, [0, 4, 4, 5, 9], [0, 1, 6, 8, 10]))
print(s.minSwap(s, [3, 3, 8, 9, 10], [1, 7, 4, 6, 8]))
