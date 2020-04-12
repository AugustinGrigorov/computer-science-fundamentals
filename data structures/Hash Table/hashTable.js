const LinkedList = require('../Linked List/linkedList');

function polynomialHashCode(value) {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = 31 * hash + value.charCodeAt(i);
  }
  return hash;
}

function hashCode(value) {
  switch (typeof value) {
    case 'number':
      return value;
    case 'string':
      return polynomialHashCode(value);
    default:
      return polynomialHashCode(value.toString());
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function generateCompressionValues(size) {
  let p = size;
  while (!isPrime(p)) p += 1;
  return {
    p,
    a: Math.floor(Math.random() * p) || 1,
    b: Math.floor(Math.random() * p),
  };
}

class HashTable {
  constructor() {
    this.data = [];
    this.size = 64;
    this.entries = 0;
    this.compressionValues = generateCompressionValues(this.size);
  }

  compress(value, size) {
    const { p, a, b } = this.compressionValues;
    return ((a * value + b) % p) % size;
  }

  expand() {
    this.size *= 2;
    this.compressionValues = generateCompressionValues(this.size);
    const oldData = this.data;
    this.data = [];
    this.entries = 0;
    oldData.forEach((entry) => {
      let currentEntry = entry.root;
      while (currentEntry.next) {
        const [k, v] = currentEntry.value;
        this.set(k, v);
        currentEntry = currentEntry.next;
      }
      const [k, v] = currentEntry.value;
      this.set(k, v);
    });
  }

  set(key, value) {
    if (this.entries === this.size) {
      this.expand();
    }
    const valuesAtHash = this.data[this.compress(hashCode(key), this.size)];
    if (valuesAtHash) {
      valuesAtHash.addEntry([key, value]);
    } else {
      this.data[this.compress(hashCode(key), this.size)] = new LinkedList([[key, value]]);
    }
    this.entries += 1;
  }

  get(key) {
    const valuesAtHash = this.data[this.compress(hashCode(key), this.size)];
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
}

module.exports = HashTable;
