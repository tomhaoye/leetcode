# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def pathSum(self, root, summary):
        """
        :type root: TreeNode
        :type summary: int
        :rtype: int
        """
        arr = []
        self.recursion(root, arr)
        return arr.count(summary)

    def recursion(self, root, arr):
        self.addUpSeniorAndSelf(root, None, arr)
        if root:
            self.recursion(root.left, arr)
            self.recursion(root.right, arr)

    def addUpSeniorAndSelf(self, root, senior, arr):
        """
        :param root:
        :param senior:
        :param arr:
        :return:
        """
        if root:
            senior = root.val + (senior if senior else 0)
            arr.append(senior)
            self.addUpSeniorAndSelf(root.left, senior, arr)
            self.addUpSeniorAndSelf(root.right, senior, arr)
