class Node{
    constructor(val, priotity){
        this.val = val;
        this.priority = priotity; 
    }
}
// maxpriority queue
class PriotityQueue {
    constructor(){
        this.values = [];
    }
    bubbleUp(){
        // element position - that inserted element in the end
        let idx = this.values.length-1; //length-1 is last index
        // element value - that inserted in the end
        const element = this.values[idx];
        while(idx > 0) {
            // parent position & parent value
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element.priority <= parent.priority){
                break;
            } else {
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                // now change idx to its parent
                idx = parentIdx;
            }
        }
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    sinkDown(){
        const parentPos = 0;
        const parent = this.values[0];
        while(true){
            const leftPos = 2*parentPos+1;
            const left = this.values[leftPos];
            const rightPos = 2*parentPos+2;
            const right = this.values[rightPos];
            if(parent.priority>left.priority || parent.priority>right.priority || !left || !right){
                break;
            }
            if(left.priority>right.priority){
                this.values[leftPos] = parent;
                parent = this.values[leftPos];
                parentPos = leftPos;
            } else {
                this.values[rightPos] = parent;
                parent = this.values[rightPos];
                parentPos = rightPos;
            }
        }


    }
    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();
         // edge case - if 1 element we just return no insertion at end again
        if(this.values.length>0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
}

// let ER  =  new PriotityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high feaver', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

// Binary heaps are good for Sorting , Insertion & Removal
// BigO for both heap & PQ
/* 
Insertion = Log(n) - because 1 time per level comparison
Removal = Log(n) - same as above
     =>  WorstCase for both - O(n) - same like Binary Search Tree a deeper 1 node per level tree would end up with n
Search = O(n)


*/
