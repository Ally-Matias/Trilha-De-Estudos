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

// diferente das pilhas, as filas são estruturas de dados que seguem o padrão FIFO (First In First Out)

var fila = new Queue();
fila.enqueue("ana");
fila.enqueue("joão");
fila.enqueue("maria");
fila.enqueue("josé");

fila.print();

fila.dequeue();
fila.print();

fila.dequeue();
fila.print();

function PriorityQueue() {
  var items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority);

    var added = false;
    for (var i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      items.push(queueElement);
    }
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.print = function () {
    for (var i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  };
}

var pqueue = new PriorityQueue();

pqueue.enqueue("ana", 2);
pqueue.enqueue("joão", 1);
pqueue.enqueue("maria", 1);
pqueue.print();
