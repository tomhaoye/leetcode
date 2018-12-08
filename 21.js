/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2,nl=null) {
    if(!l1&&!l2) return [];
    if(l1&&l2) {
        nl=new ListNode(Math.min(l1.val,l2.val));
        nl.next = new ListNode(Math.max(l1.val,l2.val));
    }else if(l1){
        nl=new ListNode(l1.val);
    }else if(l2){
        nl=new ListNode(l2.val);
    }
    if(nl.next&&l1.next&&l2.next){
        nl.next.next = mergeTwoLists(l1.next,l2.next,nl);
    }else if(nl.next&&l1.next){
        nl.next.next = mergeTwoLists(l1.next,null,nl);
    }else if(nl.next&&l2.next){
        nl.next.next = mergeTwoLists(null,l2.next,nl);
    }else if(l1&&l1.next){
        nl.next = mergeTwoLists(l1.next,null,nl);
    }else if(l2&&l2.next){
        nl.next = mergeTwoLists(null,l2.next,nl);
    }
    a=nl;
    while(a&&a.next){
        if(a.val>a.next.val){
            temp = a.val;
            a.val = a.next.val;
            a.next.val = temp;
        }
        a=a.next;
    }
    return nl;
};