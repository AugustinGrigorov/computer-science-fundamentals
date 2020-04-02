const BST = require('./bst');

test('creates correct BST', () => {
  const input = [28, 8, 3, 9, 32, 5, 6, 12, 18];
  const want = '{"value":28,"left":{"value":8,"left":{"value":3,"right":{"value":5,"right":{"value":6}}},"right":{"value":9,"right":{"value":12,"right":{"value":18}}}},"right":{"value":32}}';
  const got = new BST(input).root;

  expect(JSON.stringify(got)).toBe(want);
});

test('does correct In-Order Traversal', () => {
  const input = [28, 8, 3, 9, 32, 5, 6, 12, 18];
  const want = [3, 5, 6, 8, 9, 12, 18, 28, 32];
  const got = new BST(input).root.inOrderTraversal();

  expect(got).toStrictEqual(want);
});

test('does correct Pre-Order Traversal', () => {
  const input = [28, 8, 3, 9, 32, 5, 6, 12, 18];
  const want = [28, 8, 3, 5, 6, 9, 12, 18, 32];
  const got = new BST(input).root.preOrderTraversal();

  expect(got).toStrictEqual(want);
});

test('does correct Post-Order Traversal', () => {
  const input = [28, 8, 3, 9, 32, 5, 6, 12, 18];
  const want = [6, 5, 3, 18, 12, 9, 8, 32, 28];

  const got = new BST(input).root.postOrderTraversal();

  expect(got).toStrictEqual(want);
});
