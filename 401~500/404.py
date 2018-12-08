# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sumOfLeftLeaves(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        count = [0]
        self.helper(root, count)
        return count[0]

    def helper(self, root, count):
        if root:
            if not root.left and not root.right:
                return root.val
            else:
                left_leaf = self.helper(root.left, count)
                count[0] += left_leaf if left_leaf else 0
                self.helper(root.right, count)
