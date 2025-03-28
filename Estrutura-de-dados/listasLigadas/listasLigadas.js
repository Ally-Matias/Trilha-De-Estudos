function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    //adiciona um elemento no final da lista
    var node = new Node(element),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    length++;
  };

  this.insert = function (position, element) {
    //adiciona um elemento em uma posição específica
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }

      length++;

      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    //remove o elemento de uma posição específica
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      length--;

      return current.element;
    }
  };

  this.remove = function (element) {
    //remove o elemento element
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function (element) {
    //retorna a posição do elemento
    var current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }

      index++;
      current = current.next;
    }
  };

  this.isEmpty = function () {
    //retorna se está vazia
    return length === 0;
  };

  this.size = function () {
    //retorna o tamanho da lista
    return length;
  };

  this.toString = function () {
    //converte em string
    var current = head;
    string = "";

    while (current) {
      string += current.element + " ";
      current = current.next;
    }

    return string;
  };

  this.print = function () {
    console.log(this.toString());
  };
}

var list = new LinkedList();
list.append("João");
list.append("José");
list.append("Maria");
list.print();
list.removeAt(1);
list.print();
list.insert(1, "Antonio");
list.print();
console.log(list.indexOf("Antonio"));
console.log(list.indexOf("Maria"));
console.log(list.size());
console.log(list.isEmpty());
list.remove("Antonio");
list.print();
