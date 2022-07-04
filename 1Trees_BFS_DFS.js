class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true){
                if(value<current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else{
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value){
        // var newNode = new Node(value);
        if(!this.root){
            return null;
        } else {
            var cur = this.root;
            while(true){
                if(value<cur.value){
                    if(!cur.left){
                        return null;
                    }
                    else if(cur.left === value){
                        return cur.left;
                    } else {
                        cur = cur.left
                    }
                } else {
                    if(value>cur.value){
                        if(!cur.right){
                            return null;
                        } else if(cur.right === value){
                            return cur.right;
                        } else {
                            cur = cur.right;
                        }
                    }
                }
            }
        }
    }
    // Breath First Search
    BFS() {
        var cur = this.root;
        if(!cur) return null;
        var data = [];
        var queue = [];
        queue.push(this.root);
        while(queue.length) { // somelanguages will be falsy if directly say while(queue)
            cur = queue.shift();
            data.push(cur.value);
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
        }
        return data;
    }

    // Depth First Search (Recursive) - 3 types => In Order, PreOrder, PostOrder
    DFSPreOrder_Recr(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
    }
    DFSInOrder_Recr(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
    }
    DFSPostOrder_Recr(){
        var data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
    }
// DFS vs BFS
/*
 space complexity differs
 long tree use BFS
 large breadth tree then use DFS
 When we use DFS inorder vs preorder vs postorder
**** inorder - lowest to highest like sorted in ascending
**** preorder - populate left whole tree first then right whole tree say if u consider until middle you get left subtree
**** postorder - similar to pre but here first right

*/
 // Travel through the walls of the BST
 diameterOfBinaryTree(root) {
    let result = 1;
    dfs(root)
    
    function dfs(root) {
        if(!root) {
            return 0;
        }
        let l = dfs(root.left);
        let r = dfs(root.right);
        result = Math.max(result, l + r + 1);
        return Math.max(l, r) + 1;
    }
    
    return result - 1;
 }

 // Check if all nodes in BST are following BST rules?
 isValidBST(root) {
    function isValid(node, lo, up){
      if(node === null) return true;
      if(node.val <= lo) return false;
      if(node.val >= up) return false;
      return isValid(node.left, lo, node.val) && isValid(node.right, node.val, up);
    }
    return isValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

// Is left subtree same as right subtree    
isSymmetric(root) {
    if(root===null) return true;
    function isMirror(p, q){
      // console.log('--', p, q);
      if(p===null && q===null) return true;
      // after above line below case either p or q will be null but wont be both ever
      if(p===null || q===null) return false;
        // if p & q are not equal then it returns false right here
      return (p.val===q.val) && isMirror(p.left,q.right) && isMirror(p.right,q.left);
    }
    return isMirror(root.left,root.right);
}
// Print every level as a subarray in a result array
levelOrder(root) {
    if(!root) return [];
    let res = [];
    function levelHelper(node, res, height) {
      if(res.length<=height){
        res.push([]);
      }
      res[height].push(node.val);
      // console.log('***', res);
      (node.left) && levelHelper(node.left, res, height+1);
      (node.right) && levelHelper(node.right, res, height+1);
      return res;
    }
    return levelHelper(root, [], 0);
}

// Similar to level order print in zig zag fashion
zigzagLevelOrder(root) {
    if (!root) return []; // Sanity check
    
    var result = [], level = [], s1 = [root], s2 = [], flag = true;
    
    while (s1.length > 0) {
        var node = s1.pop(), left = node.left, right = node.right;

        // Handle the current node
        level.push(node.val);

        // Get ready for the next level
        // the key of zigzag traversal is to control the order of pushing
        // left and right sub children
        if (flag) {
            if (left)  s2.push(left);
            if (right) s2.push(right);
        } else {
            if (right) s2.push(right);
            if (left)  s2.push(left);
        }
        
        // We just finish traversing the current level
        if (s1.length === 0) {
            result.push(level);
            level = [];
            flag = !flag;
            // Continue to traverse the next level
            s1 = s2;
            s2 = [];
        }
    }
    
    return result;
};
  // Traverse every sub tree and find the maximum sum we can achieve in over all tree
maxPathSum(root) {
    let maxPathSumNum = -Infinity;
    
    const maxPathSumRec = function(node){
        if(!node){
            return 0;
        }
        
        let leftMax = Math.max(maxPathSumRec(node.left), 0);
        let rightMax = Math.max(maxPathSumRec(node.right), 0);
        maxPathSumNum = Math.max(maxPathSumNum, leftMax + rightMax + node.val);
        return Math.max(leftMax, rightMax) + node.val;
    };
    
    maxPathSumRec(root);
    return maxPathSumNum;
};
/*
    // Depth First Search (Iterative) - 3 types => In Order, PreOrder, PostOrder
    DFSInOrder() {  // L(P)R
        var cur = this.root;
        if(!cur) return null;
        var stack = [];
        stack.push(cur);
        while(stack.length){
            if(cur.left) {
                stack.push(cur.left);
                cur = cur.left;
            } else {
                cur = stack.pop();
                data.push(cur.value);
            }
            data.push(cur.value);
            
            if(cur.right) {
                stack.push(cur.right);
                cur = cur.right;
            }
        }
        return data;
    }
    DFSPostOrder(){
        // Iterative
        var cur = this.root;
        if(!cur) return null;
        var stack = [];
        stack.push(cur);
        while(stack.length){
            // if(cur.right) stack.push(cur.right);
            if(cur.left) stack.push(cur.left);
            cur = stack.pop();
            data.push(cur.value);
        }
        return data;
    }
    //wrong
    DFSInOrder(){
        // Iterative
        var cur = this.root;
        if(!cur) return null;
        var stack = [];
        stack.push(cur);
        while(stack.length){
            if(cur.left) {
                stack.push(cur.left);
                cur = cur.left;
            }
            cur = stack.pop();
            data.push(cur.value);

            if(cur.right) { 
                stack.push(cur.right);
                cur = cur.right;
            }
        }
        return data;
    }

}
*/
// Basic Tree declaration
/*
var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(15);
tree.root.right = new Node(20);
//sample BStree structre
              10
        7           15
    2       8    11     20 
*/
// Insert
/*
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.bfs()); // [10,5,13,2,7,11,16]
console.log('--tree--', tree);
*/
