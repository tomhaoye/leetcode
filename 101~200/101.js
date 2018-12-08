/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root,root2=0) {
    if(root===null) return true;
    if(root2===0) root2=root;
    if(root===null&&root2===null) return;
    else if(root===null||root2===null) return false;
    if(root.left&&root2.right){
        if(root.left.val != root2.right.val) return false;
    }else if(root.left||root2.right){
        return false;
    }
    if(root.right&&root2.left){
        if(root.right.val != root2.left.val) return false;
    }else if(root.right||root2.left){
        return false;
    }
    flag = isSymmetric(root.left,root2.right);
    if(flag===false) return false;
    flag2 = isSymmetric(root.right,root2.left);
    if(flag2===false) return false;
    return true;
};