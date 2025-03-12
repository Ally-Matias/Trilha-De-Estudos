// --------------------- Fila Circular
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

function hotPotato(nameList, num) {
  var queue = new Queue();

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = "";

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + " foi eliminado do jogo da batata quente.");
  }

  return queue.dequeue();
}

var names = ["João", "Maria", "José", "Ana", "Carlos"];
var winner = hotPotato(names, 7);
console.log("O vencedor é: " + winner);
