class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Node(value);
    this.children.push(child);
    return child;
  }
}

module.exports = Node;
