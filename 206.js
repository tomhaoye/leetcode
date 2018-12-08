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
var reverseList = function(head) {
    while(head){
        a = head.next;
        if(head.pre === undefined) head.next = null;
        else {head.next = head.pre;head.pre = null;}
        if(a) a.pre = head;
        else break;
        head = a;
    }
    return head;
};
