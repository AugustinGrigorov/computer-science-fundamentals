const depthFirstSearch = require('./dfs');
const Graph = require('../data structures/Graph/graph');

test('finds element in the graph', () => {
  const input = [
    [0, 1],
    [0, 5],
    [0, 4],
    [1, 4],
    [1, 3],
    [3, 4],
    [3, 2],
    [2, 1],
  ];
  const { nodes } = new Graph(input);
  expect(depthFirstSearch(nodes[0], 2)).toBe(true);
  expect(depthFirstSearch(nodes[0], 8)).toBe(false);
});


test('handles cycles', () => {
  const input = [
    [0, 1],
    [0, 5],
    [0, 4],
    [1, 4],
    [1, 3],
    [3, 4],
    [3, 2],
    [4, 5],
    [2, 1],
  ];
  const { nodes } = new Graph(input);
  expect(depthFirstSearch(nodes[0], 2)).toBe(true);
  expect(depthFirstSearch(nodes[0], 8)).toBe(false);
});
