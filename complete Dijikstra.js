// ADJACENCY MATRIX



// ADJACENCY LIST
class PriorityQueue{
  constructor(){
    this.values = [];
  }
  enqueue(val, pri){
    this.values.push({val, pri});
    this.sortify();
  }
  dequeue(){
    return this.values.shift();
  }
  sortify(){
    this.values.sort((a,b) => a.pri-b.pri);
  }
}
class Graph{
  constructor(){
    this.adjacencyList = { 
     A: [ 'B', 'C', 'D' ],
     B: [ 'A', 'C', 'G' ],
     C: [ 'A', 'E', 'B' ],
     D: [ 'A', 'E' ],
     E: [ 'D', 'K', 'C', 'F' ],
     F: [ 'E', 'I', 'G' ],
     G: [ 'B', 'F', 'H' ],
     H: [ 'J', 'G' ],
     I: [ 'K', 'F', 'J' ],
     J: [ 'I', 'H' ],
     K: [ 'E', 'I' ] 
    }; 
  }
  Dijkstra(start, finish){
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];
    
    // preparation
    for(let vertex in this.adjacencyList){
      if(vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    
    //looping over priority queue
    while(nodes.values.length){
      
      smallest = nodes.dequeue().val;
      
      if(smallest === finish){
        // build path
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      
      if(smallest || distances[smallest]!==Infinity){
        console.log('===smallest====', smallest);
        for(let neighbor in this.adjacencyList[smallest]){
          let nextNode = this.adjacencyList[smallest][neighbor]; // A-[B,C,D]
          let candidate = distances[smallest]+1;
          console.log('-----nextNode & candidate--',nextNode, candidate); 
          if(candidate<distances[nextNode]){
            console.log('----****--', nextNode);
            distances[nextNode]=candidate;
            nodes.enqueue(nextNode, candidate);
            previous[nextNode]=smallest;
          }
        }
      }
    }
    console.log(path.concat(smallest).reverse());
  }
}


var G = new Graph();
console.log(G);
console.log(G.Dijkstra('A', 'I'));

// [ 'A', 'D', 'E', 'F', 'I' ]




// Graph creation Adjacency List
class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    this.adjacencyList[vertex]=[];
  }
  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
  }
  removeEdge(v1,v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v!==v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v!==v1);
  }
}


var G = new Graph();
G.addVertex('A');
G.addVertex('B');
G.addVertex('C');
G.addVertex('D');
G.addVertex('E');
G.addVertex('F');
G.addVertex('G');
G.addVertex('H');
G.addVertex('I');
G.addVertex('J');
G.addVertex('K');
//Adding edges
G.addEdge('A','B');
G.addEdge('A','C');
G.addEdge('A','D');
G.addEdge('D','E');
G.addEdge('E','K');
G.addEdge('K','I');
G.addEdge('E','C');
G.addEdge('B','C');
G.addEdge('E','F');
G.addEdge('B','G');
G.addEdge('I','F');
G.addEdge('G','F');
G.addEdge('I','J');
G.addEdge('H','J');
G.addEdge('G','H');
console.log(G);

/* O/P
Graph {
  adjacencyList:
   { A: [ 'B', 'C', 'D' ],
     B: [ 'A', 'C', 'G' ],
     C: [ 'A', 'E', 'B' ],
     D: [ 'A', 'E' ],
     E: [ 'D', 'K', 'C', 'F' ],
     F: [ 'E', 'I', 'G' ],
     G: [ 'B', 'F', 'H' ],
     H: [ 'J', 'G' ],
     I: [ 'K', 'F', 'J' ],
     J: [ 'I', 'H' ],
     K: [ 'E', 'I' ] } }

*/
// Simple Priority Queue
class PriorityQueue{
  constructor(){
    this.nodes = [];
  }
  enqueue(val, pri){
    this.values.push({val, pri});
    this.sortify();
  }
  dequeue(){
    return this.values.shift();
  }
  sortify(){
    this.values.sort((a,b) => a.pri-b.pri);
  }
}
