/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumOfLeftLeaves = function(root,t=0) {
    sum=0;
    if(root===null) return 0;
    console.log(root.val);
    if(root.left===null && root.right===null && t!==0) {
        return root.val;
    }else if(root.left===null){
        sum+=sumOfLeftLeaves(root.right);
    }else if(root.right===null){
        sum+=sumOfLeftLeaves(root.left,1);
    }else{
        sum+=sumOfLeftLeaves(root.right);
        sum+=sumOfLeftLeaves(root.left,1);
    }
    return sum;
};