const LinkedList = require('./linkedList');

test('creates correct Linked List', () => {
  const input = [28, 8, 3, 9, 32, 5, 6, 12, 18];
  const linkedList = new LinkedList(input);
  let currentNode = linkedList.root;
  let currentNodeIndex = 0;
  while (currentNode.next) {
    expect(currentNode.value).toBe(input[currentNodeIndex]);
    currentNode = currentNode.next;
    currentNodeIndex += 1;
  }
  expect(currentNode.value).toBe(input[currentNodeIndex]);
});
