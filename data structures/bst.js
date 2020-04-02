class Node {
  constructor(value) {
    this.value = value;
  }

  insertInOrder(number) {
    if (number < this.value) {
      if (!this.left) {
        this.left = new Node(number);
      } else {
        this.left.insertInOrder(number);
      }
    } else {
      if (!this.right) {
        this.right = new Node(number);
      } else {
        this.right.insertInOrder(number);
      }
    }
  }

  inOrderTraversal() {
    const result = [];
    if (this.left) {
      Array.prototype.push.apply(result, this.left.inOrderTraversal());
    }
    result.push(this.value);
    if (this.right) {
      Array.prototype.push.apply(result, this.right.inOrderTraversal());
    }

    return result;
  }

  preOrderTraversal() {
    const result = [];
    result.push(this.value);
    if (this.left) {
      Array.prototype.push.apply(result, this.left.preOrderTraversal());
    }
    if (this.right) {
      Array.prototype.push.apply(result, this.right.preOrderTraversal());
    }

    return result;
  }

  postOrderTraversal() {
    const result = [];
    if (this.left) {
      Array.prototype.push.apply(result, this.left.postOrderTraversal());
    }
    if (this.right) {
      Array.prototype.push.apply(result, this.right.postOrderTraversal());
    }
    result.push(this.value);

    return result;
  }
}

exports.Node = Node;
