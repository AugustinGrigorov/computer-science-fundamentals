const Node = require('./node');

class Graph {
  constructor(edges) {
    this.nodes = {};

    edges.forEach((edge) => {
      const parent = this.nodes[edge[0]] || new Node(edge[0]);
      const child = parent.addChild(edge[1]);

      if (!this.nodes[edge[0]]) {
        this.nodes[edge[0]] = parent;
      }
      if (!this.nodes[edge[1]]) {
        this.nodes[edge[1]] = child;
      }
    });
  }
}

module.exports = Graph;
