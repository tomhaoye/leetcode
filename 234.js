/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head===null) return true;
    len = 1;
    a=head;
    while(a.next){
        len++;
        a = a.next;
    }
    if(len==1) return true;
    b=head;
    blen=1;
    stack=[];
    while(b){
        if(len%2==1&&blen==Math.ceil(len/2)) {
            b = b.next;
            blen++;
            continue;
        }
        if(blen<=len/2){
            stack.push(b.val);
        }else{
            if(stack.pop()!==b.val) return false;
        }
        b = b.next;
        blen++;
    }
    return stack.length===0;
};
