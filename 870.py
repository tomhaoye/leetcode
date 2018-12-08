import bisect

class Solution:
    def advantageCount(self, A, B):
        """
        :type A: List[int]
        :type B: List[int]
        :rtype: List[int]
        """
        resl = []
        A = sorted(A)
        for i in range(len(B)):
            wi = self.find_best(A, B[i])
            resl.append(A[wi])
            A.pop(wi)
        return resl

    def find_best(self, A, fit):
        if A[len(A) - 1] <= fit:
            return 0
        f = bisect.bisect(A, fit)
        return f
