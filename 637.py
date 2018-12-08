# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def averageOfLevels(self, root):
        """
        :type root: TreeNode
        :rtype: List[float]
        """
        arr = []
        self.helper(root, 0, arr)
        return [(sum(x)/len(x)) for x in (col for col in arr)]

    def helper(self, root, level, arr):
        if root:
            try:
                arr[level].append(root.val)
            except Exception as e:
                arr.append([root.val])
            self.helper(root.left, level + 1, arr)
            self.helper(root.right, level + 1, arr)
