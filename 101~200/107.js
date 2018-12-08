/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root,arr=[],level=1) {
    if(root===null) return [];
    if(root&&level==1) arr[0]=[root.val];
    if(root&&root.left) {
        if(arr[level]===undefined) arr[level] = [root.left.val];
        else arr[level].push(root.left.val);
    }
    if(root&&root.right) {
        if(arr[level]===undefined) arr[level] = [root.right.val];
        else arr[level].push(root.right.val);
    }
    level++;
    if(root.left) levelOrderBottom(root.left,arr,level);
    if(root.right) levelOrderBottom(root.right,arr,level);
    
    arr2=[];
    for(i=arr.length-1;i>=0;i--){
        arr2.push(arr[i]);
    }
    return arr2;
};