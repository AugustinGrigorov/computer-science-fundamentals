function depthFirstSearch(currentNode, desiredValue) {
  const seen = {};

  if (currentNode.value === desiredValue) {
    return true;
  }
  return currentNode.children.some((childNode) => {
    if (seen[childNode.value]) return false;
    seen[childNode.value] = true;
    return depthFirstSearch(childNode, desiredValue);
  });
}

module.exports = depthFirstSearch;
