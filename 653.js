/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var treeTrans  = function(tree,a=[]){
    if(tree){
        a.push(tree.val==null?0:tree.val);
        treeTrans(tree.left,a);
        treeTrans(tree.right,a);
    }
    return a;
}

var findTarget = function(root, k) {
    arr = treeTrans(root);
    len = arr.length;
    for(var i=0,j=1;i<len;j++){
        if(arr[i]+arr[j]==k){
            return true;
        }else{
            if(j>=len-1){
                i++;
                j=i;
            }
        }
    }
    return false;
};