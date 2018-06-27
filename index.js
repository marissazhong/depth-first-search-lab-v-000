
function depthFirstSearch(rootNode, vertices, edges) {
  let visited = [];
  let queue = [rootNode];
  while (queue.length != 0) {
    let currentNode = queue.pop();
    if (!currentNode.discovered) {
      rootNode.discovered = "yes";
    }
  }

  return visited;
}
