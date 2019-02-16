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
console.log('--tree--', tree);
*/
