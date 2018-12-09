class Solution:
    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        result = []
        i, cum = 1, 1
        for s in range(1, n + 1):
            result.append(str(s))
        while k > cum:
            cum = 1
            for j in range(1, i + 1):
                cum *= j
            i += 1
        cursor, left_k = i, k - 1
        while cursor > 1:
            index = n - cursor + 1
            cursor -= 1
            cum = int(cum / cursor)
            distance = int(left_k // cum)
            for move in range(1, distance + 1):
                tmp = result[index]
                result[index] = result[index + move]
                result[index + move] = tmp
            left_k = left_k - cum * distance
        return ''.join(result)
