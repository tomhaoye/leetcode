# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def convertBST(self, root, p_val=0):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if root:
            root.val += self.calculate_right_sum(root.right) + p_val
            self.convertBST(root.right, p_val)
            self.convertBST(root.left, root.val)
        return root

    def calculate_right_sum(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        sum = 0
        if root:
            sum += root.val + self.calculate_right_sum(root.right) + self.calculate_right_sum(root.left)
        return sum

