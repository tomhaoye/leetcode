class Solution:
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        result = ''
        incr = '0'
        m_len = max(len(a), len(b))
        i = m_len - 1
        a = a.zfill(m_len)
        b = b.zfill(m_len)
        while i >= 0:
            [incr, s_val] = self.handle(a[i], b[i], incr)
            result += s_val
            result += incr if i == 0 and incr == '1' else ''
            i -= 1
        return result[::-1]

    def handle(self, v1, v2, incr):
        """
        :type v1: str
        :type v2: str
        :type incr: str
        :rtype: str
        """
        sum = int(v1) + int(v2) + int(incr)
        if sum == 0:
            return ['0', '0']
        elif sum == 1:
            return ['0', '1']
        elif sum == 2:
            return ['1', '0']
        else:
            return ['1', '1']
