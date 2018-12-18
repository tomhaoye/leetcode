class Solution:
    def possibleBipartition(self, N, dislikes):
        """
        :type N: int
        :type dislikes: List[List[int]]
        :rtype: bool
        """
        if not len(dislikes):
            return True
        count = 0
        _dict = {}
        sum_up = {}
        for x in range(1, N + 1):
            _dict[x] = []
            for dislike in dislikes:
                if x in dislike:
                    for y in dislike:
                        if y != x:
                            _dict[x].append(y)
        for each in _dict:
            for each_hostile in _dict[each]:
                sum_up[each_hostile] = 1 if each_hostile not in sum_up else sum_up[each_hostile] + 1
        for n in sum_up:
            if sum_up[n] < 2:
                count += 1
        return count >= 2
        