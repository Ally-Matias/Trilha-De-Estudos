function Stack() {
  var items = [];

  this.push = function (element) {
    // adiciona um novo item à pilha
    items.push(element);
  };

  this.pop = function () {
    // remove o item do topo da pilha
    return items.pop();
  };

  this.peek = function () {
    // devolve o elemento que está no topo da pilha
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    // informa se a pilha está vazia ou não
    return items.length === 0;
  };

  this.size = function () {
    // informa o tamanho da pilha
    return items.length;
  };

  this.clear = function () {
    // limpa a pilha
    items = [];
  };

  this.print = function () {
    // imprime a pilha no console
    console.log(items.toString());
  };
}

var pilha = new Stack();

pilha.push(5);
pilha.print();
pilha.push(8);
pilha.print();
pilha.push(10);
pilha.print();
pilha.push(15);
pilha.print();

pilha.pop();
pilha.print();

console.log(pilha.isEmpty());
console.log(pilha.peek());
console.log(pilha.size());
