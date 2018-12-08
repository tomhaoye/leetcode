# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def getMinimumDifference(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        diff = []
        self.helper(root, diff)
        return min(diff)

    def helper(self, root, diff=[], father_val=None, senior_val=None):
        if root:
            if senior_val is not None:
                diff.append(abs(senior_val - root.val))
            if father_val is not None:
                diff.append(abs(father_val - root.val))
            self.helper(root.left, diff, root.val,
                        senior_val if senior_val is not None and father_val > root.val else father_val)
            self.helper(root.right, diff, root.val,
                        senior_val if senior_val is not None and father_val < root.val else father_val)
