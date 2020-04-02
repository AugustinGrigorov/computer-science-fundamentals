function breadthFirstSearch(startNode, desiredValue) {
  const queue = [startNode];
  const seen = {};

  while (queue.length) {
    const currentNode = queue.shift();
    if (currentNode.value === desiredValue) {
      return true;
    }
    currentNode.children.forEach((childNode) => {
      if (!seen[childNode.value]) {
        queue.push(childNode);
        seen[childNode.value] = true;
      }
    });
  }
  return false;
}

module.exports = breadthFirstSearch;
