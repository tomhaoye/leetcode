# 半成品
class Solution:
    map = {}
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
        if word in self.map:
            return False;
        self.map[word] = True;
        return True;