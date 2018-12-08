# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def hasPathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: bool
        """
        arr = []
        self.recursion(root, None, arr)
        return sum in arr

    def recursion(self, root, senior, arr):
        """
        :param root:
        :param senior:
        :param arr:
        :return:
        """
        if root:
            senior = root.val + (senior if senior else 0)
            self.recursion(root.left, senior, arr)
            self.recursion(root.right, senior, arr)
            if not root.left and not root.right:
                arr.append(senior)
