
function depthFirstSearch(rootNode, vertices, edges) {
  let visited = [];
  let queue = [rootNode];
  while (queue.length != 0) {
    let currentNode = queue.pop();
    let adjacentNodes = findAdjacent(currentNode.name, vertices,edges);
    if (!currentNode.discovered) {
      currentNode.discovered = "yes";
      visited.push(currentNode);
      queue.concat(adjacentNodes);
    }
  }
  return visited;
}

function findAdjacent(nodeName,  vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
    return node.distance == null;
  })
