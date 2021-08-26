class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }
  addVertex(vertex) {
    // we need to add the vertex to the adjacency list and set an empty array for the edges
    this._adjacencyList.set(vertex, []);
  }


  addDirectedEdge(startVertex, endVertex) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('Invalid vertex');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex));
  }


  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log(vertex);
      console.log(edge);
    }
  }

  getNode() {
    let collection = [];
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      if (edge.length) {
        if (edge.length > 1) {
          edge.forEach((e) => collection.push(`${vertex.value} with ${e.vertex.value}`));
        }
        else {
          collection.push(`${vertex.value} with ${edge[0].vertex.value}`);
        }
      }
    }
  }


  getNeighbour() {
let colelction=[];

  }

  defineSize() {
    let size = 0;
    for (const vertex of this._adjacencyList.keys()) {
      size++;
    }
    return size;
  }


}