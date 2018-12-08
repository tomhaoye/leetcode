# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        pos = self.get_len(head) - n
        if not pos:
            return head.next
        return self.get_result(head, head, pos - 1, pos + 1)

    def get_result(self, head, o_head, pos, o_pos):
        if pos and head:
            head.next = self.get_result(head.next, o_head, pos - 1, o_pos)
        if not pos:
            head.next = self.get_left(o_head, o_pos)
        return head

    def get_left(self, head, pos):
        while pos and head:
            head = head.next
            pos -= 1
        return head

    def get_len(self, head):
        length = 0
        while head:
            length += 1
            head = head.next
        return length
