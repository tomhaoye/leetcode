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
        :rtype: List[List[int]]
        """
        arr, path = [], ''
        self.recursion(root, path, arr)
        return [col for col in arr if sum(col) == summary]

    def recursion(self, root, path, arr):
        """
        :param root:
        :param path:
        :param arr:
        :return:
        """
        if root:
            path += str(root.val) + ','
            if not root.left and not root.right:
                arr.append([int(node) for node in path.split(',') if node != ''])
                path = ''
            self.recursion(root.left, path, arr)
            self.recursion(root.right, path, arr)
