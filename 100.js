/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===null && q===null) return true;
    else if(p===null || q===null) return false;
    if(p.val!==q.val) return false;
    if(isSameTree(p.left,q.left)===false) return false;
    if(isSameTree(p.right,q.right)===false) return false;
    return true;
};