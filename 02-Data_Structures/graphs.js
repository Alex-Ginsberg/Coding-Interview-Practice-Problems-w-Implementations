/*
    Graph: a data structure that has a set of vertices connected by a set of edges 
    Directed graphs only allow traversal between nodes in a certain direction

    THE PROBLEM:
    Write a function that determines if a path exists betweem two vertices of a directed graph.
    The function takes a graph, a starting point, and a target.
    Should return a boolean.

    Caveat: graphs can be cyclic!

    Graphs can be represented an an object.
        Each key is a vertex.
        Each value is an array of vertices that can be directly reached from that vertex.
*/

const graph = {
    a: ['b'],
    b: ['c', 'd'],
    c: ['d'],
    d: []
}

var doesPathExist = function(graph, start, target, visited = {}) {
    visited[start] = true
    return graph[start].some(function(vertex){
      if (start === target) {
        return true
      } else if (!visited[vertex]) {
        return doesPathExist(graph, vertex, target, visited)
      } else {
        return false
      }
    })
}