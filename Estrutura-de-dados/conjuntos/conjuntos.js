function Set() {
  var items = {};

  this.add = function (value) {
    // verifica se o valor já existe no conjunto
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.delete = function (value) {
    // remove um valor do conjunto
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.has = function (value) {
    // verifica se o valor existe no conjunto
    return items.hasOwnProperty(value);
  };

  this.clear = function () {
    // remove todos os itens do conjunto
    items = {};
  };

  this.size = function () {
    // retorna o tamanho do conjunto
    return Object.keys(items).length;
  };

  this.values = function () {
    // retorna todos os valores do conjunto
    var values = [];
    keys = Object.keys(items);
    for (var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };

  this.union = function (otherSet) {
    // união de dois conjuntos
    var unionSet = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  };

  this.intersection = function (otherSet) {
    // interseção de dois conjuntos
    var intersectionSet = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  };

  this.difference = function (otherSet) {
    // diferença de dois conjuntos
    var differenceSet = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  };
}

var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(4);
set.add(4);
console.log(set.values()); // [1,2,3,4]
console.log(set.has(1)); // true
console.log(set.size()); // 4
set.delete(4); // remove 4
console.log(set.values()); // [1,2,3]

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(5);

var union = set.union(setA);
console.log(union.values()); // [1,2,3,5]

var intersection = set.intersection(setA);
console.log(intersection.values()); // [1,2,3]

var difference = set.difference(setA);
console.log(difference.values()); // [4]
