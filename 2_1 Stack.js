class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    var newNode = new Node(val);
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
     var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  
  
  pop(){
    if(!this.first){
      return null;
    }
    if(this.size === 1){
      var temp = this.first;
      this.first = null;
      this.last = null;
      return temp.value;
    }
    var temp = this.first; // recently added
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  
}

var S = new Stack();
S.push(1);
S.push(2);
S.push(3);
S.push(4);
S.push(5);
S.push(6);

console.log(S);

console.log(S.pop());
console.log(S.pop());
console.log(S.pop());
console.log(S.pop());
console.log(S.pop());
console.log(S.pop());
console.log(S.pop());
console.log(S.pop());

/* OUTPUT

Stack {
  first:
   Node {
     value: 6,
     last: null,
     size: 0,
     next: Node { value: 5, last: null, size: 0, next: [Node] } },
  last: Node { value: 1, last: null, size: 0 },
  size: 6 }
6
5
4
3
2
1
null
null

// BIG O 
Insertion  - O(1)
Removal - O(1)
Searching - O(N)
Access - O(N)
*/
