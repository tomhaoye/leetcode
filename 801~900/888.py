class Solution:
    def uncommonFromSentences(self, A, B):
        """
        :type A: str
        :type B: str
        :rtype: List[str]
        """
        dic = {}
        result = []
        for i in A.split(' '):
            dic[i] = 1 if i not in dic else dic[i] + 1
        for j in B.split(' '):
            dic[j] = 1 if j not in dic else dic[j] + 1
        for r in dic:
            if dic[r] == 1:
                result.append(r)
        return result
