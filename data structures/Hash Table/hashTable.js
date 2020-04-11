const LinkedList = require('../Linked List/linkedList');

class HashTable {
  constructor(size = 2069) {
    this.data = [];
    this.size = size;
  }

  set(key, value) {
    const valuesAtHash = this.data[this.hash(key)];
    if (valuesAtHash) {
      valuesAtHash.addEntry([key, value]);
    } else {
      this.data[this.hash(key)] = new LinkedList([[key, value]]);
    }
  }

  get(key) {
    const valuesAtHash = this.data[this.hash(key)];
    if (!valuesAtHash) {
      return undefined;
    }

    let currentNode = valuesAtHash.root;
    while (currentNode.value[0] !== key && currentNode.next) {
      currentNode = currentNode.next;
    }
    if (currentNode.value[0] === key) {
      return currentNode.value[1];
    }

    return undefined;
  }

  hash(value) {
    let sum = 0;
    const stringValue = value.toString();

    for (let i = 0; i < stringValue.length; i += 1) {
      sum += stringValue.charCodeAt(i) * (i + 1);
    }

    return sum % this.size;
  }
}

module.exports = HashTable;
