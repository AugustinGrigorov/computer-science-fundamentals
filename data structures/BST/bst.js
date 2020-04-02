const Node = require('./node');

class BST {
  constructor(input) {
    this.root = new Node(input[0]);
    input.slice(1).forEach((num) => {
      this.root.insertInOrder(num);
    });
  }
}

module.exports = BST;
