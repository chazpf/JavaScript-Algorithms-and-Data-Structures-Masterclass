class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
    return this.adjacencyList;
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
    return this.adjacencyList;
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length > 0) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
    return this.adjacencyList;
  }
  dfs(start) {
    const visited = {};
    const results = [];
    const adjacencyList = this.adjacencyList;
    (function dfsHelper(v1) {
      if (!adjacencyList[v1]) return null;
      visited[v1] = true;
      results.push(v1)
      adjacencyList[v1].forEach(v2 => {
        if (visited[v2] !== true) return dfsHelper(v2);
      });
    })(start)
    return results;
  }
  bfs(start) {
    const queue = [start];
    const visited = {};
    visited[start] = true;
    const results = [];
    while (queue.length > 0) {
      const shifted = queue.shift();
      results.push(shifted);
      for (const vertex of this.adjacencyList[shifted]) {
        if (!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
        }
      }
    }
    return results;
  }
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Dallas');
graph.addVertex('Aspen');
graph.addVertex('HongKong');
graph.addVertex('London');
graph.addVertex('Paris');
graph.addVertex('Boston');
graph.addVertex('LA');
graph.addEdge('Tokyo', 'Aspen');
graph.addEdge('Dallas', 'Aspen');
graph.addEdge('Dallas', 'Boston');
graph.addEdge('HongKong', 'London');
graph.addEdge('HongKong', 'Paris');
graph.addEdge('HongKong', 'London');
graph.addEdge('London', 'Paris');
graph.addEdge('London', 'Boston');
graph.addEdge('London', 'Tokyo');
graph.addEdge('Paris', 'Boston');
graph.addEdge('Paris', 'LA');
graph.addEdge('Boston', 'LA');

console.log(graph.bfs('Aspen'));
