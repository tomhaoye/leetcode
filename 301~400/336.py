# 超时解法
class Solution:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
        result = []
        list_len = len(words)
        for x in range(0,list_len):
            for y in range(0,list_len):
                if x == y:
                    continue;
                if self.helper(words[x]+words[y]):
                    result.append([x,y])
        return result

    def helper(self, word):
        for i in range(0,(1+int(len(word)/2))):
            if word[i] != word[0-i-1]:
                return False;
        return True;