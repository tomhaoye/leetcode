# 很意外一次性搞定了，还比99.9%的方案快-.-
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        digitsMap = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z'],
        }
        ret = []
        sequence = []
        for digit in digits:
            sequence.append(digitsMap[digit])
        for letters in sequence:
            preLen = len(ret)
            if preLen:
                for i in range(preLen):
                    for letter in letters:
                        ret.append(ret[i] + letter)
                for j in range(preLen):
                    ret.pop(0)
            else:
                for letter in letters:
                    ret.append(letter)
        return ret
