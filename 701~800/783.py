# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def minDiffInBST(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        arr = []
        self.treeToList(root, arr)
        arr = sorted(arr)
        min_v = float('inf')
        for i in range(len(arr) - 1):
            min_v = min(min_v, abs(arr[i + 1] - arr[i]))
        return min_v

    def treeToList(self, root, arr=[]):
        if root:
            arr.append(root.val)
            self.treeToList(root.left, arr)
            self.treeToList(root.right, arr)
