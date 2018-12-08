/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums,tree = new TreeNode()) {
    if(!nums.length) return null;
    
    index = Math.ceil(nums.length/2)-1;
    tree = new TreeNode(nums[index]);
    tree.left = sortedArrayToBST(nums.slice(0,index),tree.left);
    index = Math.ceil(nums.length/2)-1;
    tree.right = sortedArrayToBST(nums.slice(index+1),tree.right);
    
    return tree;
};