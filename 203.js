/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head===null) return [];
    a=head;
    while(a.next){
        if(a.next.val == val) a.next = a.next.next;
        else a = a.next;
    }
    return head.val==val?head.next:head;
};
