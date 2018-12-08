# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def leafSimilar(self, root1, root2):
        """
        :type root1: TreeNode
        :type root2: TreeNode
        :rtype: bool
        """
        result1 = []
        self.getLeaf(root1, result1)
        result2 = []
        self.getLeaf(root2, result2)
        return result2 == result1

    def getLeaf(self, root, result=[]):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root:
            son = self.getLeaf(root.left, result) + self.getLeaf(root.right, result)
            if not son:
                result.append(root.val)
            return root.val
        else:
            return 0
