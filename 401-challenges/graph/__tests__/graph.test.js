const Graph = require('../graph').Graph;
const Vertex = require('../graph').Vertex;


describe('Graph', () => {
  test('should create a new graph', () => {
    const graph = new Graph();
    expect(graph).toBeDefined();
  });

  test('should add a vertex', () => {
    const graph = new Graph();
    const one = new Vertex(1);
    graph.addVertex(one);
    expect(graph.getNodes()).toEqual([{ 'value': 1 }]);
  });

  test('should add edge between two given vertices', () => {
    const graph = new Graph();
    const two = new Vertex(2);
    const three = new Vertex(3);
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addDirectedEdge(two, three);

    expect(graph.getNeighbours()).toEqual(['2 is linked to 3']);
  });

  test('should give me the size of the graph', () => {
    const graph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);

    graph.addVertex(one);
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addVertex(four);
    graph.addVertex(five);

    graph.addDirectedEdge(one, two);
    graph.addDirectedEdge(one, three);
    graph.addDirectedEdge(two, three);
    graph.addDirectedEdge(three, four);
    graph.addDirectedEdge(two, four);

    expect(graph.defineSize()).toBe(5);
  });
});