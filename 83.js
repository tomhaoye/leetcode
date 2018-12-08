/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    a = new ListNode();
    a = head;
    while(a&&a.next){
        if(a.next.val === a.val){
            a.next = a.next.next;
        }else{
            a = a.next;
        }
    }
    return head;
};