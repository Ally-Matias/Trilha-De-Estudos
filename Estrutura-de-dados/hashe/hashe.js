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

function HashTable() {
  var table = [];

  this.valuePair = function (key, value) {
    // Classe auxiliar para armazenar a chave e o valor
    this.key = key;
    this.value = value;

    this.toString = function () {
      return "[" + this.key + " - " + this.value + "]";
    };
  };

  this.put = function (key, value) {
    // Adiciona um novo item à tabela hash
    var position = loseloseHashCode(key);

    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }

    table[position].append(new this.valuePair(key, value));
  };

  // this.put = function (key, value) {
  //   // Adiciona um novo item à tabela hash
  //   var position = loseloseHashCode(key);
  //   console.log(position + " - " + key);
  //   table[position] = value;
  // };

  this.remove = function (key) {
    // Remove o valor da tabela hash usando a chave
    var position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      var current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }

      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
  };

  // this.remove = function (key) {
  //   // Remove o valor da tabela hash usando a chave
  //   table[loseloseHashCode(key)] = undefined;
  // };

  this.get = function (key) {
    // Retorna um valor específico a partir da chave
    var position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      var current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }

      if (current.element.key === key) {
        return current.element.value;
      }
    }
  };

  var loseloseHashCode = function (key) {
    // Função hash (valor numérico) para chaves
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.print = function () {
    // Exibe a tabela hash
    for (var i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(i + ": " + table[i]);
      }
    }
  };
}

var hash = new HashTable();

hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "john@mail.com");
hash.put("Tyrion", "tyrion@mail.com");
hash.put("Aaron", "aaron@mail.com");
hash.put("Don", "don@mail.com");
hash.put("Ana", "ana@mail.com");
hash.put("Jonathan", "jhonatan@mail.com");
hash.put("Amanda", "amanda@mail.com");
hash.put("Diana", "diana@mail.com");

hash.print();

console.log(hash.remove("Marcos"));
console.log(hash.remove("John"));

hash.print();
