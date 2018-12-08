class Solution:
    def toLowerCase(self, str):
        """
        :type str: str
        :rtype: str
        """
        ntr = ''
        for e in str:
            if(64<ord(e)<91):
                ntr += chr(ord(e)+32)
            else:
                ntr += e
        return ntr
        