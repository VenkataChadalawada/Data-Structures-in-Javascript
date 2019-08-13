class Node{
  constructor(value){
    this.value = value;
    this.last = null;
    this.size = 0;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
      
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    return ++this.size;
  }
  
  dequeue(){
    if(!this.first){
      return null;
    }
    var temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  
}

var S = new Queue();

console.log(S.enqueue(1));
console.log(S.enqueue(2));
console.log(S.enqueue(3));
console.log(S.enqueue(4));
console.log(S.enqueue(5));
console.log(S.enqueue(6));

// console.log(S);
console.log(S.dequeue());
console.log(S.dequeue());
console.log(S.dequeue());
console.log(S.dequeue());
console.log(S.dequeue());
console.log(S.dequeue());
console.log(S.dequeue());
console.log(S.dequeue());

/*
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(N)


*/
