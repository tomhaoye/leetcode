class Solution:
    def pushDominoes(self, dominoes):
        """
        :type dominoes: str
        :rtype: str
        """
        i, t_d_a = 0, []
        for op in dominoes:
            if i < len(t_d_a):
                t_d_a[i].append(op)
            else:
                t_d_a.append([])
                t_d_a[i].append(op)
            if op == 'L':
                t_d_a.append([])
                i += 1
        idx = 0
        for s_a in t_d_a:
            if not s_a:
                t_d_a[idx] = ''
                break
            if s_a[len(s_a) - 1] == 'L':
                f_r = s_a.index('R') if 'R' in s_a else None
                l_r = len(s_a) - 1 - s_a[::-1].index('R') if f_r is not None else None
                if f_r is not None:
                    b_t_c = len(s_a) - 1 - l_r - 1
                    for ori in range(f_r, l_r + 1):
                        s_a[ori] = 'R'
                    for ori in range(l_r, l_r + int(b_t_c / 2) + 1):
                        s_a[ori] = 'R'
                    for oli in range(l_r + int((b_t_c + 1) / 2) + 1, len(s_a)):
                        s_a[oli] = 'L'
                else:
                    for oli in range(len(s_a)):
                        s_a[oli] = 'L'
            else:
                flag = False
                for ori in range(len(s_a)):
                    if s_a[ori] == 'R':
                        flag = True
                    if flag:
                        s_a[ori] = 'R'
            t_d_a[idx] = ''.join(s_a)
            idx += 1
        return ''.join(t_d_a)
