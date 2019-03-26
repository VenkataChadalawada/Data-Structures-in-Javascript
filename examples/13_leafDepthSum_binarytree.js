class Node{
  constructor(value){
    this.val = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree{
  constructor(){
    this.root = null;
  }
  
  leafDepthSum(){
    var arr = [];
    var sum = 0;
    var tots = [];
    function traverse(node, sum=0){
      arr.push(node.val);
      sum = sum+node.val;
      if(node.left){
        traverse(node.left, sum);
      }
      if(node.right){
        traverse(node.right, sum);
      }
      if(!node.left && !node.right){
        tots.push(sum);
        arr.pop();
      }
    }
    traverse(this.root);
    
    return Math.max(...tots);
  }
  
}

var a = new Node(5);
console.log(a);

var t = new BinaryTree();
t.root = new Node(1);
t.root.left = new Node(2);
t.root.right = new Node(3);

t.root.left.left = new Node(4);
t.root.left.right = new Node(5);
t.root.right.left = new Node(6);
t.root.right.right = new Node(7);
console.log(t.root.right);
console.log(t.leafDepthSum());
