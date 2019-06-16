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

# 稍微好一点的超时解法
class Solution:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
        result = []
        list_len = len(words)
        for x in range(0,list_len):
            for y in range(x+1,list_len):
                if self.helper(words[x]+words[y]):
                    result.append([x,y])
                if self.helper(words[y]+words[x]):
                    result.append([y,x])
        return result

    def helper(self, word):
        return word == word[::-1]

# 能通过的方案，但代码冗余，空间复杂度相对较高
class Solution:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
        i = 0;
        result = []
        wordsMap = {}
        checkedCombine = {}
        for word in words:
            wordsMap[word] = i
            i += 1
        for x in range(0,len(words)):
            for y in range(len(words[x])+1):
                toBeWord = words[x][y:][::-1]
                newWord = toBeWord+words[x]
                if toBeWord in wordsMap and toBeWord != words[x] and newWord == newWord[::-1]:
                    if (str(wordsMap[toBeWord])+','+str(x)) not in checkedCombine:
                        result.append([wordsMap[toBeWord],x])
                        checkedCombine[str(wordsMap[toBeWord])+','+str(x)] = 1
                toBeWord = words[x][:y][::-1]
                newWord = words[x]+toBeWord
                if toBeWord in wordsMap and toBeWord != words[x] and newWord == newWord[::-1]:
                    if (str(x)+','+str(wordsMap[toBeWord])) not in checkedCombine:
                        result.append([x,wordsMap[toBeWord]])
                        checkedCombine[str(x)+','+str(wordsMap[toBeWord])] = 1
        return result
