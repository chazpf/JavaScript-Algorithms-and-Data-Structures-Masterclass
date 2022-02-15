class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class QNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    if (val === null) return null;
    const newNode = new QNode(val);
    if (!this.first) this.first = newNode;
    else this.last.next = newNode;
    this.last = newNode;
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    const dequeuedNode = this.first;
    if (dequeuedNode === this.last) this.last = null;
    this.first = dequeuedNode.next;
    this.size--;
    return dequeuedNode.value;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (this.root) {
      (function traverse(parent) {
        if (newNode.value < parent.value) {
          parent.left ? traverse(parent.left) : parent.left = newNode;
        } else {
          parent.right ? traverse(parent.right) : parent.right = newNode;
        }
      })(this.root)
    } else {
      this.root = newNode;
    }
    return this;
  }
  find(val) {
    return (function traverse(parent) {
      if (parent === null) return undefined;
      if (val === parent.value) return parent;
      if (val < parent.value) return traverse(parent.left);
      else return traverse(parent.right);
    })(this.root)
  }
  bfs() {
    const visited = [];
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size > 0) {
      const dequeued = queue.dequeue();
      visited.push(dequeued.value);
      if (dequeued.left) queue.enqueue(dequeued.left);
      if (dequeued.right) queue.enqueue(dequeued.right);
    }
    return visited;
  }
  dfsPreOrder() {
    const visited = [];
    (function traverse(node) {
      if (node === null) return;
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    })(this.root)
    return visited;
  }
  dfsPostOrder() {
    const visited = [];
    (function traverse(node) {
      if (node === null) return;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    })(this.root)
    return visited;
  }
  dfsInOrder() {
    const visited = [];
    (function traverse(node) {
      if (node === null) return;
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    })(this.root)
    return visited;
  }
}

const test = new Bst();
test.insert(10);
test.insert(20);
test.insert(5);
test.insert(13);
test.insert(18);
test.insert(2);
test.insert(400);
console.log(test.dfsInOrder());
