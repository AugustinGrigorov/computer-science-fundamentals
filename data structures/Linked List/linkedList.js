const Node = require('./node');

class LinkedList {
  constructor(entries) {
    entries.forEach((entry) => this.addEntry(entry));
  }

  addEntry(entry) {
    if (!this.root) {
      this.root = new Node(entry);
      this.lastChild = this.root;
    } else {
      this.lastChild = this.lastChild.addNext(entry);
    }
  }
}

module.exports = LinkedList;
