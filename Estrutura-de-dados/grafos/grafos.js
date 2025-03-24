function Queue() {
  var items = [];

  this.enqueue = function (element) {
    // adiciona um novo item à fila
    items.push(element);
  };

  this.dequeue = function () {
    // remove o item da fila
    return items.shift();
  };

  this.front = function () {
    // retorna o primeiro elemento da fila
    return items[0];
  };

  this.isEmpty = function () {
    // retorna se a fila está vazia
    items.length === 0;
  };

  this.size = function () {
    // retorna o tamanho da fila
    items.length;
  };

  this.print = function () {
    // imprime a fila
    console.log(items.toString());
  };
}

function Dictionary() {
  var items = {};

  this.set = function (key, value) {
    // Adiciona um novo item ao dicionário
    items[key] = value;
  };

  this.delete = function (key) {
    // Remove o valor do dicionário usando a chave
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.has = function (key) {
    // Verifica se a chave existe no dicionário e retorna um booleano
    return items.hasOwnProperty(key);
  };

  this.get = function (key) {
    // Retorna um valor específico a partir da chave
    return this.has(key) ? items[key] : undefined;
  };

  this.clear = function () {
    // Remove todos os itens do dicionário
    items = {};
  };

  this.size = function () {
    // Retorna quantos elementos o dicionário contém
    return Object.keys(items).length;
  };

  this.keys = function () {
    // Retorna um array com todas as chaves do dicionário
    return Object.keys(items);
  };

  this.values = function () {
    // Retorna um array com todos os valores do dicionário
    var values = [];
    keys = Object.keys(items);
    for (var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };

  this.getItems = function () {
    // Retorna todos os itens do dicionário
    return items;
  };
}

function Graph() {
  var vertices = [];
  var adjList = new Dictionary();

  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.toString = function () {
    var s = "";
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + " -> ";
      var neighbors = adjList.get(vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  };

  var initializeColor = function () {
    var color = [];
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = "white";
    }
    return color;
  };

  this.bfs = function (v, callback) {
    var color = initializeColor(),
      queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = "grey";
      for (var i = 0; i, neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          queue.enqueue(w);
        }
      }
      color[u] = "black";
      callback(u);
    }
  };

  this.dfs = function (callback) {
    var color = initializeColor();
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        dfsVisit(vertices[i], color, callback);
      }
    }
  };

  this.dfsVisit = function (u, color, callback) {
    color[u] = "grey";
    callback(u);

    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === "white") {
        this.dfsVisit(w, color, callback);
      }
    }
    color[u] = "black";
  };
}

function printNode(value) {
  console.log("Visited vertex: " + value);
}

var graph = new Graph();
var myVertices = ["A", "B", "C", "D", "E", "F"];

for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("B", "F");

//console.log(graph.toString());
//graph.bfs(myVertices[0], printNode);

graph.dfs(printNode);
