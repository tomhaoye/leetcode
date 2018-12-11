class Solution:
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) != len(t):
            return False
        length = len(s)
        i_s,i_t = 0,0
        dict_s,dict_t = {},{}
        seat_s,seat_t = [],[]
        for i in range(length):
            if s[i] not in dict_s:
                dict_s[s[i]] = i_s
                seat_s.append([])
                i_s += 1
            seat_s[dict_s[s[i]]].append(i)
            if t[i] not in dict_t:
                dict_t[t[i]] = i_t
                seat_t.append([])
                i_t += 1
            seat_t[dict_t[t[i]]].append(i)
        return seat_s == seat_t

	# 最坏情况下O(2n)的时间复杂度
    # def isIsomorphic(self, s, t):
    #     """
    #     :type s: str
    #     :type t: str
    #     :rtype: bool
    #     """
    #     if len(s) != len(t):
    #         return False
    #     length = len(s)
    #     dict_s,dict_t = {},{}
    #     uniq_s,uniq_t = [],[]
    #     for i in range(length):
    #         if s[i] not in dict_s:
    #             dict_s[s[i]] = []
    #             uniq_s.append(s[i])
    #         dict_s[s[i]].append(i)
    #         if t[i] not in dict_t:
    #             dict_t[t[i]] = []
    #             uniq_t.append(t[i])
    #         dict_t[t[i]].append(i)
    #     length = len(uniq_s)
    #     if length != len(uniq_t):
    #         return False
    #     for j in range(length):
    #         if dict_t[uniq_t[j]] != dict_s[uniq_s[j]]:
    #             return False
    #     return True
