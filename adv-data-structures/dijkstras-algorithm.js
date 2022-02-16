class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, p) {
    const values = this.values;
    const newNode = new Node(val, p);
    values.push(newNode);
    let currentIndex = values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1)/2);
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1)/2);
      let parent = values[parentIndex];
      let parentPriority = parent.priority;
      let current = values[currentIndex];
      let currentPriority = current.priority;
      if (currentPriority >= parentPriority) break;
      values[currentIndex] = parent;
      values[parentIndex] = current;
      currentIndex = parentIndex;
    }
    return this.values;
  }
  dequeue() {
    if (this.values.length === 0) return null;
    const values = this.values;
    [values[0], values[values.length - 1]] = [values[values.length - 1], values[0]]
    const extracted = values.pop();
    (function sinkDown(index) {
      if (values[index] === undefined) return;
      let element = values[index];
      let elementPriority = element.priority;
      let indexLeftChild = 2 * index + 1;
      let leftChildPriority = values[indexLeftChild]?.priority ?? Infinity;
      let indexRightChild = 2 * index + 2;
      let rightChildPriorirty= values[indexRightChild]?.priority ?? Infinity;
      let newIndex = null;
      if (elementPriority > leftChildPriority & elementPriority > rightChildPriorirty) {
        newIndex = leftChildPriority <= rightChildPriorirty ? indexLeftChild : indexRightChild;
      } else if (elementPriority > leftChildPriority) {
        newIndex = indexLeftChild;
      } else if (elementPriority > rightChildPriorirty) {
        newIndex = indexRightChild
      }
      if (newIndex !== null) {
        values[index] = values[newIndex];
        values[newIndex] = element;
        sinkDown(newIndex);
      }
    })(0)
    return extracted;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }
  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({node: v2, weight});
      this.adjacencyList[v2].push({node: v1, weight});
    }
    return this.adjacencyList;
  }
  findShortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    for (let vertex in this.adjacencyList) {
      if (vertex !== start) {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      } else {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length > 0) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
console.log(graph.findShortestPath('A', 'E'));
