class Solution:
    def widthOfBinaryTree(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        # depth = self.get_depth(root)
        root_a, max_len = [], []
        # for i in range(depth):
        #     root_a.append([])
        self.build_a(root, root_a)
        diff = [1]
        for floor in range(len(root_a)):
            if len(root_a[floor]) <= 1:
                continue
            else:
                if_all = pow(2, floor)
                root_a[floor][0] = root_a[floor][0][1:]
                root_a[floor][0] = root_a[floor][0].replace('1', '2').replace('0', '1').replace('2', '0')
                diff.append(if_all - int(root_a[floor][0], 2) - int(root_a[floor][-1], 2))
        return max(diff)

    def build_a(self, root, arr, idx=0, symbol='0'):
        if root is not None:
            while len(arr) - 1 < idx:
                arr.append([])
            arr[idx].append(symbol)
            idx += 1
            self.build_a(root.left, arr, idx, symbol + '1')
            self.build_a(root.right, arr, idx,symbol + '0')

    # def get_depth(self, root, depth=0):
    #     if root:
    #         depth += 1
    #         return max(self.get_depth(root.left, depth), self.get_depth(root.right, depth))
    #     return depth

