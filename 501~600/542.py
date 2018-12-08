class Solution:
    def updateMatrix(self, matrix):
        ro, rt, rs = [], [], []
        matrix_t = list(zip(*matrix))
        for j in range(len(matrix)):
            acc = 100
            ro.append([])
            for i in matrix[j]:
                if i == 0:
                    acc = 0
                else:
                    acc += 1
                ro[j].append(acc)

        m = len(matrix) - 1
        while m >= 0:
            acc = 100
            mi = len(matrix[0]) - 1
            while mi >= 0:
                if matrix[m][mi] == 0:
                    acc = 0
                else:
                    acc += 1
                ro[m][mi] = min(ro[m][mi], acc)
                mi -= 1
            m -= 1

        for j in range(len(matrix_t)):
            acc = 100
            rt.append([])
            for i in matrix_t[j]:
                if i == 0:
                    acc = 0
                else:
                    acc += 1
                rt[j].append(acc)

        m = len(matrix_t) - 1
        while m >= 0:
            acc = 100
            mi = len(matrix_t[0]) - 1
            while mi >= 0:
                if matrix_t[m][mi] == 0:
                    acc = 0
                else:
                    acc += 1
                rt[m][mi] = min(rt[m][mi], acc)
                mi -= 1
            m -= 1

        for k in range(len(matrix)):
            rs.append([])
            for l in range(len(matrix[k])):
                rs[k].append(ro[k][l] if ro[k][l] < rt[l][k] else rt[l][k])
        for rs_i in range(len(rs)):
            for rs_o in range(len(rs[rs_i])):
                ar_min = min(rs[rs_i][rs_o], rs[rs_i + 1][rs_o] if (rs_i + 1) in range(len(rs)) else 100,
                             rs[rs_i - 1][rs_o] if (rs_i - 1) in range(len(rs)) else 100,
                             rs[rs_i][rs_o + 1] if (rs_o + 1) in range(len(rs[rs_i])) else 100,
                             rs[rs_i][rs_o - 1] if (rs_o - 1) in range(len(rs[rs_i])) else 100)
                rs[rs_i][rs_o] = (ar_min + 1) if (rs[rs_i][rs_o] - ar_min) > 1 else rs[rs_i][rs_o]
        return rs
