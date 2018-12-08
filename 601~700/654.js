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
var constructMaximumBinaryTree = function(nums,tree = new TreeNode(null)) {
    len = nums.length;
    var max = -Infinity;
    var leftArr = [];
    var rightArr = [];
    for(var i=0;i<len;i++){
        max = Math.max(max,nums[i]);
    }
    tree.val = max;
    left = nums.indexOf(max);
    right = left+1;
    for(var k=0;k<left;k++){
        leftArr.push(nums[k]);
    }
    for(var j=right;j<len;j++){
        rightArr.push(nums[j]);
    }
    if(leftArr.length){
        tree.left = constructMaximumBinaryTree(leftArr);
    }
    if(rightArr.length){
        tree.right = constructMaximumBinaryTree(rightArr);
    }
    
// console.log(tree)
    return tree;
};


