// Dijkstra's Algorithm => shortest path algorithm

// It needs two DataStructures
// 1.Graphs 2 Priority Queue


// This algorithm helps to find the shortest path between two vertices

// Weighted Graph
/*
{
    "A" : [{node: "B", weight: 4}, {node:"C", weight: 2}],
    "B" : [{node: "E", weight: 3}, {node: "A", weight: 4}],
    "C" : [{node: "A", weight: 2}, {node: "D", weight: 2}, {node: "F", weight: 4}],
    "D" : [{node: "C", weight: 2}, {node: "E", weight: 3}, {node: "F", weight: 1}],
    "E" : [{node: "F", weight: 1}, {node: "D", weight: 3}, {node: "B", weight: 3}],
    "F" : [{node: "E", weight: 1}, {node: "D", weight: 1}, {node: "C", weight: 4}]
}

lets say for above weighted graph - we are asked to find shortest path between two points say A & E

vertex          shortest dist from "A"
A                       0
B                   Infinity 4
C                   Infinity 2
D                   Infinity 2(A to C)+2(via C)=4
E                   Infinity 7(B) 6(F)
F                   Infinity 6(C) 5(D)
visited [A, C, B, D]
previous {A:null, B:A, C:A, D:C, E:Bx F, F:Cx D}

//Approach
1.every time we look to visit a new nie, we pick the node wtih smallest distance to visit first
2.once we have moved to the node we arde going to visit, we look at each of its neighbors
3.for each neighboring node we calculate the distance by summing the total edges that lead to the node we're checking from start
4.if the new total distance to a node is less than the previous total we store the new shorter distance for that node
*/
class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; // if already there we are not recreating it
    }
    addEdge(vertex1, vertex2, weight){
        // we need add for both vertices the other one into its edge
        if(!this.adjacencyList[vertex1]) {
            addVertex(vertex1);
        } 
        if(!this.adjacencyList[vertex2]) {
            addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push({node: vertex2},{weight: weight});
        this.adjacencyList[vertex2].push({node: vertex1}, {weight: weight});
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];
        // Step 1 - build up initial state by filling distances, previous, nodes
        for(let vertex in this.adjacencyList){
            if(vertex = start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // console.log(distances, previous, nodes);
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                // we are done - we need to build the path to return
                console.log(distances);
                console.log(previous);
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // console.log(neighbor);
                    // console.log(this.adjacencyList[smallest]);
                    // find the neighbir node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    console.log(nextNode);
                    // calculate the new distance to neighboring node
                    let candidate = distyances[smallest]+nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous  - how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in Priority Queue
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        console.log(path.concat(smallest).reverse());
    }
}
// shorter verison of priority queue O(nlogn) not O(logn) which original has
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    };
    dequeue(){
        return this.values.shift();
    };
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    };

}

// Diji
// Distances = {} // object to keep track of distances between vertices






// g = new WeightedGraph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");

// g.addEdge("A","B", 4);
// g.addEdge("A","C", 2);
// g.addEdge("B","E", 3);
// g.addEdge("C","D", 2);
// g.addEdge("C","F", 4);
// g.addEdge("D","E", 3);
// g.addEdge("D","F", 1);
// g.addEdge("E","F", 1);

//graph.Dijikstra("A", "E") // say it returns array of nodes in order to reach end
