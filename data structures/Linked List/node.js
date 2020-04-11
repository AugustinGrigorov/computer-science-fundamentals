class Node {
  constructor(value) {
    this.value = value;
  }

  addNext(value) {
    const next = new Node(value);
    this.next = next;
    return next;
  }
}

module.exports = Node;
