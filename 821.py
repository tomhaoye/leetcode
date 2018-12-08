class Solution:
    def shortestToChar(self, S, C):
        """
        :type S: str
        :type C: str
        :rtype: List[int]
        """
        tmp = 0
        dis = []
        result = [10001 for i in range(len(S))]
        for iOfC in range(len(S)):
            if S[iOfC] == C:
                dis.append(iOfC)
        for iOfiOfC in range(len(dis)):
            for i in range(tmp, len(S)):
                result[i] = min(result[i], dis[iOfiOfC] - i if dis[iOfiOfC] >i else i - dis[iOfiOfC])
                if dis[iOfiOfC] == i:
                    tmp = dis[iOfiOfC] + 1
                if iOfiOfC+1 < len(dis) and dis[iOfiOfC+1] == i:
                    break
        return result
