class Solution:
    def printTree(self, root):
        arr, arr2 = [], []
        self.helper(root, arr)
        depth = len(arr) - 1
        self.one_more(root, arr2, 0, depth)
        total_count = 2 ** depth - 1
        result = [[""] * total_count] * depth
        for i in range(len(result)):
            result[i] = result[i][:]
            index = 0
            current = 2 ** (depth - i - 1) - 1
            while current < len(result[i]):
                result[i][current] = str(arr2[i][index]) if index < len(arr2[i]) else ""
                current += 2 ** (depth - i)
                index += 1
        return result

    def one_more(self, root, arr=[], count=0, depth=0):
        count += 1
        if len(arr) < count:
            arr.append([])
        if count <= depth:
            self.one_more(root.left if root else None, arr, count, depth)
            self.one_more(root.right if root else None, arr, count, depth)
            arr[count - 1].append(root.val if root else "")

    def helper(self, root, arr=[], count=0):
        count += 1
        if len(arr) < count:
            arr.append([])
        if root:
            self.helper(root.left, arr, count)
            self.helper(root.right, arr, count)
            arr[count - 1].append(root.val)
        else:
            arr[count - 1].append("")
