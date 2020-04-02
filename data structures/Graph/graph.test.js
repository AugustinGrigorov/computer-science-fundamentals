const Graph = require('./graph');

function getChildrenValues(node) {
  return node.children.map((n) => n.value);
}

test('create correct Graph', () => {
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
  expect(getChildrenValues(nodes[0])).toStrictEqual([1, 5, 4]);
  expect(getChildrenValues(nodes[1])).toStrictEqual([4, 3]);
  expect(getChildrenValues(nodes[4])).toStrictEqual([]);
});
