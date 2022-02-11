class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    return oldHead.val;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) this.tail = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return false;
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    const updatedNode = this.get(index);
    if (!updatedNode) return false;
    updatedNode.val = val;
    return updatedNode;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return this.pop() ?? false;
    if (index === 0) return this.shift() ?? false;
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = prevNode.next.next;
    this.length--;
    return removedNode.val;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const sLL = new SinglyLinkedList();
sLL.push('first');
sLL.push('second');
sLL.push('third')
console.log(sLL.reverse());
