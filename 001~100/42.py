class Solution:
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        if not height:
            return 0
        l = len(height)
        i = 0
        filled = [0] * l
        while i < l:
            l_h = height[i]
            r_m,r_m_i = 0,0
            if not l_h:
                i += 1
                continue
            next_cur = i + 1
            for j in range(next_cur, l):
                change = False
                if height[j] >= l_h:
                    for k in range(next_cur, j + 1):
                        filled[k] = l_h if l_h > height[k] else height[k]
                    filled[i] = filled[i] if filled[i] > height[i] else height[i]
                    i = j - 1
                    break
                else:
                    (r_m_i,change) = (j,True) if height[j] >= r_m else (r_m_i,False)
                    r_m = height[r_m_i] if height[r_m_i] > filled[r_m_i] else filled[r_m_i]
                    if change:
                        for k in range(next_cur, r_m_i + 1):
                            filled[k] = r_m if r_m > height[k] else height[k]
                    filled[i] = filled[i] if filled[i] > height[i] else height[i]
                    i = r_m_i - 1
            i += 1
        filled[l-1] = height[l-1]
        return sum(filled) - sum(height)
