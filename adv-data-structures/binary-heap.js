class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    const values = this.values;
    values.push(val);
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1)/2);
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1)/2);
      let parent = values[parentIndex];
      let current = values[currentIndex]
      if (current <= parent) break;
      values[currentIndex] = parent;
      values[parentIndex] = current;
      currentIndex = parentIndex;
    }
    return this.values;
  }
  extractMax() {
    if (this.values.length === 0) return null;
    const values = this.values;
    [values[0], values[values.length - 1]] = [values[values.length - 1], values[0]]
    const extracted = values.pop();
    (function sinkDown(index) {
      if (!values[index]) return;
      let element = values[index];
      let indexLeftChild = 2 * index + 1;
      let leftChild = values[indexLeftChild] ?? -Infinity;
      let indexRightChild = 2 * index + 2;
      let rightChild = values[indexRightChild] ?? -Infinity;
      let newIndex = null;
      if (element < leftChild & element < rightChild) {
        newIndex = leftChild > rightChild ? indexLeftChild : indexRightChild;
      } else if (element < leftChild) {
        newIndex = indexLeftChild;
      } else if (element < rightChild) {
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

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    const values = this.values;
    values.push(val);
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1)/2);
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1)/2);
      let parent = values[parentIndex];
      let current = values[currentIndex]
      if (current >= parent) break;
      values[currentIndex] = parent;
      values[parentIndex] = current;
      currentIndex = parentIndex;
    }
    return this.values;
  }
  extractMin() {
    if (this.values.length === 0) return null;
    const values = this.values;
    [values[0], values[values.length - 1]] = [values[values.length - 1], values[0]]
    const extracted = values.pop();
    (function sinkDown(index) {
      if (!values[index]) return;
      let element = values[index];
      let indexLeftChild = 2 * index + 1;
      let leftChild = values[indexLeftChild] ?? Infinity;
      let indexRightChild = 2 * index + 2;
      let rightChild = values[indexRightChild] ?? Infinity;
      let newIndex = null;
      if (element > leftChild & element > rightChild) {
        newIndex = leftChild < rightChild ? indexLeftChild : indexRightChild;
      } else if (element > leftChild) {
        newIndex = indexLeftChild;
      } else if (element > rightChild) {
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

// const maxBH = new MaxBinaryHeap();
// console.log(maxBH.insert(10));
// console.log(maxBH.insert(20));
// console.log(maxBH.insert(15));
// console.log(maxBH.insert(40));
// console.log(maxBH.insert(24));
// console.log(maxBH.insert(8));
// console.log(maxBH.insert(88));
// console.log(maxBH.insert(30));
// console.log(maxBH.extractMax());
// console.log(maxBH.values);

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.nodes = [];
  }
  enqueue(val, p) {
    const nodes = this.nodes;
    const newNode = new Node(val, p);
    nodes.push(newNode);
    let currentIndex = nodes.length - 1;
    let parentIndex = Math.floor((currentIndex - 1)/2);
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1)/2);
      let parent = nodes[parentIndex];
      let parentPriority = parent.priority;
      let current = nodes[currentIndex];
      let currentPriority = current.priority;
      if (currentPriority >= parentPriority) break;
      nodes[currentIndex] = parent;
      nodes[parentIndex] = current;
      currentIndex = parentIndex;
    }
    return this.nodes;
  }
  dequeue() {
    if (this.nodes.length === 0) return null;
    const nodes = this.nodes;
    [nodes[0], nodes[nodes.length - 1]] = [nodes[nodes.length - 1], nodes[0]]
    const extracted = nodes.pop();
    (function sinkDown(index) {
      if (nodes[index] === undefined) return;
      let element = nodes[index];
      let elementPriority = element.priority;
      let indexLeftChild = 2 * index + 1;
      let leftChildPriority = nodes[indexLeftChild]?.priority ?? Infinity;
      let indexRightChild = 2 * index + 2;
      let rightChildPriorirty= nodes[indexRightChild]?.priority ?? Infinity;
      let newIndex = null;
      if (elementPriority > leftChildPriority & elementPriority > rightChildPriorirty) {
        newIndex = leftChildPriority <= rightChildPriorirty ? indexLeftChild : indexRightChild;
      } else if (elementPriority > leftChildPriority) {
        newIndex = indexLeftChild;
      } else if (elementPriority > rightChildPriorirty) {
        newIndex = indexRightChild
      }
      if (newIndex !== null) {
        nodes[index] = nodes[newIndex];
        nodes[newIndex] = element;
        sinkDown(newIndex);
      }
    })(0)
    return extracted;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("first one", 1);
priorityQueue.enqueue("first three", 3);
priorityQueue.enqueue("first two", 2);
priorityQueue.enqueue("second one", 1);
priorityQueue.enqueue("second two", 2);
priorityQueue.enqueue("third one", 1);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.nodes);
