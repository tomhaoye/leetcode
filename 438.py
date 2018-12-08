def main(s, p):
    lp = [0] * 26
    for c in p:
        lp[ord(c) - 97] += 1
    step = st_sym = 0
    answer = []
    s_len = len(s)
    p_len = len(p)
    while step <= s_len and s_len >= p_len:
        if step - st_sym == p_len:
            if lp == [0] * 26:
                answer.append(st_sym)
            lp[ord(s[st_sym]) - 97] += 1
            st_sym += 1
        if step == s_len:
            break
        lp[ord(s[step]) - 97] -= 1
        step += 1
    print(answer)


if __name__ == '__main__':
    s = 'abcabbcabcbabcsbcebaeyuabcebc'
    p = 'ab'
    main(s, p)
