/*
LinkedLists
Do not have indexes
connected via nodes with a next pointer
random access is not allowed

Arrays
Indexed in order!
Insertion and deletion can be expensive
can quickly be accessed at a specifix index
*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let current = this.head;
        let pre = this.head;
        if(this.head && this.head.next === null){
            this.head =null;
            this.length=0;
            return pre;
        } else if (this.head === null) {
            return null;
        } else {
            while (current.next != null) {
            console.log('----', current);
            pre = current;
            current = current.next;
        }
        console.log('---pre--', pre,'----curr--',current);
        pre.next = null;
        this.length--;
        this.tail = pre;
        return current;
        }
    }
    shift() {
        let current;
        if(!this.head) {
            return null;
        } else if(!this.head.next) {
            current = this.head;
            this.head = null;
            this.tail = null;
        } else{
            current = this.head;
            this.head = current.next;
        }
        this.length--;
        return current;
    }
    unshift(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            this.length++;
            return this;
        }
        let current = this.head;
        this.head = newNode;
        this.head.next = current;
        this.length++;
        return this;
    }
    get(pos) {
        if(!this.head || !(Number.isInteger(pos))){ //what if they give non number pos
            return null;
        }
        let counter=0;
        let current = this.head;
        while(counter<pos ){
            if(!current.next){
                return null;
            }
            current = current.next;
            counter++;
        }
        return current;
    }
    set(pos, data){
        let newNode = new Node(data);
        if(!this.head || !(Number.isInteger(pos))){ //what if they give non number pos
            return null;
        }
        let counter=0;
        let current = this.head;
        while(counter<pos ){
            if(!current.next){
                return null; //there ain't that position
            }
            current = current.next;
            counter++;
        }
        current.val = data;
        return current;
    }
    insert(pos, data){
        if(this.length<pos){
            return false;
        } else if(pos === 0) {
            this.unshift(data);
            return true;
        } else if(this.length === pos){
            this.push(data);
            return true;
        } else {
            let counter = 0;
            let current = this.head;
            let pre = current;
            let newNode = new Node(data);
            while(counter < pos){
                pre = current;
                current = current.next;
                counter++;
            }
            console.log('----pre----', pre);
            console.log('-----curr---', current);
            pre.next=newNode;
            newNode.next = current;
            this.length++;
            return true;
        }

    }
    remove(pos) {
        if(!this.head) return null;
        let cur = this.head;
        if(pos>length-1 || pos<0 || !Number.isInteger(pos)) 
            return null; // some big number or low number
        
    }
    reverse() {
        var begin = this.head;
        //no node case
        if(!this.head) return null;
        
        //only one node case
        if(this.head.next === null) return this;

        //multinode case
        var prev = null;
        var curNode = this.head;
        var temp = this.head;
        while(temp.next !== null){
            curNode = temp;
            temp = curNode.next;
            curNode.next = prev;
            prev = curNode;
            console.log('hi----', curNode.val);
        }
        //do tail manually
        curNode = temp;
        curNode.next = prev;
        this.head = this.tail;
        this.tail = begin;
        
        return this;
    }
    //find duplicates exist or not in an unordered linkedlist
    findDuplicatesWithObj(){
        var curNode = this.head;
        var dup = {};
        while(curNode !== null){
            // console.log('--------===',dup[curNode.val],'======',)
            if(!dup[curNode.val]) {
                dup[curNode.val] = 1;
            } else {
                 dup[curNode.val]++;
            }
            curNode = curNode.next;
        }
        for(let i in dup){
           // console.log('-----', dup[i]);
           if(dup[i]>1) return false;
        }
        return true;
    }
    findDuplicatesWithOutAnyTemp(){
         var curNode = this.head;
         var second;
        for(let i=0;curNode !== null;i++){
           second = this.head;
           for(let j=0;second!==null;j++){
               if(i===j) {
                   second = second.next;
                   continue;
               }
               console.log('---',i,j);
               if(curNode.val === second.val) return false;
               second = second.next;
           }
          curNode = curNode.next;
        }
        return true;
    }
    findKthToLast(k){
        if(k>this.length) return null;
        let kth = this.head;
        let cur = this.head;
        let c =0;

        while(cur!==null){
            if(c >= k){
                kth = kth.next;
            }
            c++;
            cur = cur.next;
        }
        return kth;
    }
    //delete middle node in one pass
    deleteMiddleNode(){
        let slow = this.head;
        let fast = this.head;
        let prev;
        while(fast!==null && fast.next!==null){
            console.log('-----',fast.next!==null,'====', fast.next);
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        // at this point slow is middle node
        console.log('----slow', slow, '--fast---', fast, '----prev', prev);
        prev.next = slow.next;
        slow.next  = null;
        this.length--;
        return slow;
    }
}

// how to run
/*
let list = new SinglyLinkedList();
list.push('first');
list.push('second');
list.push('third');
list.push('fourth');

list.push('fifth');
list.push('sixth');
list.push('seventh');
list.head.next.next.next.next;
*/
