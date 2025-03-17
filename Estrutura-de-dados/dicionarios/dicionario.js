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

var dic = new Dictionary();

dic.set("Gandalf", "gandalf@email.com");
dic.set("John", "john@mail.com");
dic.set("Tyrion", "tyrion@mail.com");

console.log(dic.has("Gandalf")); // true
console.log(dic.size()); // 3
console.log(dic.keys()); // [ 'Gandalf', 'John', 'Tyrion' ]
console.log(dic.values());
console.log(dic.get("Tyrion")); // tyron
console.log(dic.getItems());
dic.delete("John");
console.log(dic.getItems());
