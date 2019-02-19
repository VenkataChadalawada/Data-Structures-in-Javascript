// Graphs
// Eg: - Social Networks, Maps, internet links, recommendations made out of graphs

// tree vs graph - In true you go to one point to other in only one path

// Types of Graphs - by directionality
// 1) Directed - Twitter
// 2) UnDirected - Facebook 
// Types of Graphs - by weights
// 1 weighted graph
// 2 unweighted graph

// Storing graphs:-
// 1 Adjacency Matrix -> a 2d array
// 2 Adjacency List - >  a hash table



// Big O between Adj List Vs Adj Matrix
/*
Operation       Adjacency List      Adjacency Matrix
Add vertex      O(1)                O(|V^2|) 
Add Edge        O(1)                O(1)
Remove Vertex   O(|V|+|E|)          O(|V^2|) // you need to remove from every other vertex values too other than just deleting that vertex values row
Remove Edge     O(|E|)              O(1)
Query           O(|V|+|E|)          O(1)
Storage         O(|V|+|E|)          O(|V^2|)

Adj List              vs         Adj Matrix 
can take less space              takes up more space
faster to iterate                slowe to iterate
Can be slower to look specific    Faster to Look up sepecific egde

What to pick?
Most of data in the real world tends to lend itself to be sparser / larger graphs
=> lot of nodes connections are not everyone connect to everyother
Hence Better choice is Adj List
*/

class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; // if already there we are not recreating it
    }
    addEdge(vertex1, vertex2){
        // we need add for both vertices the other one into its edge
        if(!this.adjacencyList[vertex1]) {
            addVertex(vertex1);
        } 
        if(!this.adjacencyList[vertex2]) {
            addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v!==vertex2 );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v!==vertex1 );
    }
    removeVertex(vertex){
        // deleting that vertex in adjacency list & that vertex presence in all other vertices
        this.adjacencyList[vertex].map( v => this.removeEdge(vertex, v));
        delete this.adjacencyList[vertex];
    }
    // Graph Traversal DFS & BFS

    // DFS Recursion
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList; // because context of this would change in recursion calls
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            adjacencyList[vertex].forEach( neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            })
        })(start);
        return result;
    }
    //DFS Iteration
    depthFirstIterative(start){
        const stack = [];
        stack.push(start);
        const visited = {};
        const result = [];
        visited[start] = true;
        while (stack.length){
            const vertex = stack.pop();
            result.push[vertex];
            visited[vertex] = true;
            this.adjacencyList[vertiex].forEach(v => {
                if(!visited[vertex]){
                    stack.push[v];
                }
            });
        }
        return result;
    }

    //BFS
    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let vertex;
        while(queue.length){
            vertex = queue.shift();
            result.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(v => {
                if(!visited[v]){
                    visited[v] = true;
                    queue.push(v);
                }
            });
        }
        return result;
    }

}

// g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("Mumbai");
// g.addVertex("NewYork");
// g.addEdge("Tokyo","Mumbai");
// g.addEdge("Tokyo", "NewYork");
// g.removeEdge("Tokyo", "Mumbai");
