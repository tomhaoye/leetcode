class Solution:
    # 最快的方案
    def coinChange(self, coins, amount):
        """
        :type coins: List[int]
        :type amount: int
        :rtype: int
        """

        def dfs(amount, count, start):
            if count - (-amount // coins[start]) >= result[0]: return
            if amount % coins[start] == 0:
                result[0] = min(result[0], count + amount // coins[start])
                return
            if start == n - 1: return
            for i in range(amount // coins[start], -1, -1):
                dfs(amount - i * coins[start], count + i, start + 1)

        if not coins: return -1
        n = len(coins)
        max_val = amount + 1
        result = [max_val]
        coins.sort(reverse=True)
        dfs(amount, 0, 0)
        return result[0] if result[0] < max_val else -1

    # 时间复杂度O(Amount*len(coins))，然而时间还是炸
    # def coinChange(self, coins, amount):
    #     """
    #     :type coins: List[int]
    #     :type amount: int
    #     :rtype: int
    #     """
    #     store = [0] * (amount + 1)
    #     for i in range(1, amount + 1):
    #         for coin in coins:
    #             if (i >= coin and store[i - coin]) or i % coin == 0:
    #                 store[i] = min(store[i - coin] + 1, store[i]) if store[i] else store[i - coin] + 1
    #     return store[amount] if store[amount] or len(store) == 1 else -1

    # 暴力计算时间又炸了
    # def coinChange(self, coins, amount):
    #     store = []
    #     self.helper(coins, amount, store)
    #     return min(store) if store else -1
    #
    # def helper(self, coins, amount, store, count=0):
    #     if not amount:
    #         store.append(count)
    #     if amount < 0:
    #         return
    #     for coin in coins:
    #         self.helper(coins, amount - coin, store, count + 1)

    # 贪心算法只能得到较优解
    # def coinChange(self, coins, amount):
    #     if not amount:
    #         return 0
    #     ret = False
    #     all_solve = []
    #     coins.sort(reverse=True)
    #     for i in range(len(coins)):
    #         if coins[i] <= amount:
    #             ans = []
    #             res = self.helper(coins[i:], amount, ans)
    #             if res:
    #                 all_solve.append(res)
    #     for each in all_solve:
    #         ret = min(ret, sum(each)) if ret else sum(each)
    #     return ret
    #
    # def helper(self, coins, left, arr):
    #     if coins and left:
    #         times = left // coins[0]
    #         for x in range(times, -1, -1):
    #             _left = left - coins[0] * x
    #             arr.append(x)
    #             if self.helper(coins[1:], _left, arr):
    #                 return arr
    #             else:
    #                 arr.pop()
    #     if not left:
    #         return True
    #     if left < 0:
    #         return False
