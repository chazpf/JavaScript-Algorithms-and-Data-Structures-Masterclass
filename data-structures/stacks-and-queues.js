class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.first;
    this.first = newNode;
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const poppedNode = this.first;
    this.first = poppedNode.next;
    this.size--;
    return poppedNode.val;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
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
    return dequeuedNode.val;
  }
}

// const stack = new Stack();
// console.log(stack.push(1));
// console.log(stack.push(2));
// console.log(stack.push(3));
// console.log(stack);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack);

// const queue = new Queue();
// console.log(queue.enqueue(1));
// console.log(queue.enqueue(2));
// console.log(queue.enqueue(3));
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue);
