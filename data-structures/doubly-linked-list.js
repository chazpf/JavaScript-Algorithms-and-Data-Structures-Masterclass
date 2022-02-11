class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode.val;
  }
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead.val;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) this.tail = newNode;
    else this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    const indexIsInFirstHalf = index <= this.length / 2;
    let counter =  indexIsInFirstHalf ? 0 : this.length - 1;
    let current = indexIsInFirstHalf ? this.head : this.tail;
    while (counter !== index) {
      current = indexIsInFirstHalf ? current.next : current.prev;
      indexIsInFirstHalf ? counter++ : counter--;
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
    const nextNode = prevNode.next;
    prevNode.next = newNode, newNode.prev = prevNode;
    newNode.next = nextNode, nextNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return this.pop() ?? false;
    if (index === 0) return this.shift() ?? false;
    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;
    prevNode.next = nextNode, nextNode.prev = prevNode;
    removedNode.next = null, remobedNode.prev = null;
    this.length--;
    return removedNode.val;
  }
}

const dLL = new DoublyLinkedList();
console.log(dLL);
dLL.push(1);
dLL.push(2);
dLL.push(3);
console.log(dLL.shift());
dLL.unshift('1');
console.log(dLL.remove(0));
console.log(dLL);
