class WordDictionary:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.dic = {}

    def addWord(self, word):
        """
        Adds a word into the data structure.
        :type word: str
        :rtype: void
        """
        chr_s = 0
        for c in word:
            chr_s += ord(c)
        if chr_s in self.dic:
            self.dic[chr_s].append(word)
        else:
            self.dic[chr_s] = [word]

    def search(self, word):
        """
        Returns if the word is in the data structure.
        A word could contain the dot character '.' to represent any one letter.
        :type word: str
        :rtype: bool
        """
        chr_s = 0
        poi_c = 0
        word_l = len(word)
        for c in word:
            if c != '.':
                chr_s += ord(c)
            else:
                poi_c += 1
        if not poi_c:
            return word in self.dic[chr_s] if chr_s in self.dic else False
        else:
            word_range_l, word_range_h = chr_s + poi_c * 97, chr_s + poi_c * 121 + 1
            for r_s in self.dic:
                if r_s in range(word_range_l, word_range_h):
                    for each_dic_w in self.dic[r_s]:
                        if word_l == len(each_dic_w):
                            match = 0
                            for i in range(word_l):
                                if word[i] == '.' or word[i] == each_dic_w[i]:
                                    match += 1
                                else:
                                    break
                            if match == word_l:
                                return True
        return False


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
