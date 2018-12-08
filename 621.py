class Solution:
    def leastInterval(self, tasks, n):
        """
        :type tasks: List[str]
        :type n: int
        :rtype: int
        """
        dic = {task: tasks.count(task) for task in set(tasks)}
        max_t = max(dic.values())
        return len(tasks) if (max_t * (n + 1)) < len(tasks) else (max_t * (n + 1)) - (n + 1 - list(dic.values()).count(max_t))
