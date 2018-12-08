class Solution:
    def subdomainVisits(self, cpdomains):
        """
        :type cpdomains: List[str]
        :rtype: List[str]
        """
        dict = {}
        result = []
        for times_domain in cpdomains:
            i = 0
            begin = 0
            [times, domain] = times_domain.split(' ')
            try:
                dict[domain] = int(times) + int(dict[domain])
            except Exception as e:
                dict[domain] = times
            p_count = domain.count('.')
            while i < p_count:
                begin = domain.index('.', begin)
                begin += 1
                try:
                    dict[domain[begin:]] = int(times) + int(dict[domain[begin:]])
                except Exception as e:
                    dict[domain[begin:]] = times
                i += 1
        for domain in dict:
            result.append(str(dict[domain]) + ' ' + str(domain))

        return result
