# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        count = 0
        arr = []
        c_head = head
        while head:
            arr.append(head.val)
            head = head.next
            count += 1
        count = int(count / 2)
        i = 0
        while i < count:
            c_head = c_head.next
            i += 1
        return c_head
