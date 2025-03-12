function dec2Bin(decNumber) {
  var restStack = [],
    rest,
    binaryString = "";

  while (decNumber > 0) {
    rest = Math.floor(decNumber % 2); // "%" módulo, que devolve o resto da divisão
    restStack.push(rest);
    decNumber = Math.floor(decNumber / 2); // "/" divisão normal, e o "Math.floor" arredonda o resultado para baixo
  }

  while (restStack.length > 0) {
    binaryString += restStack.pop().toString(); // transforma o número em string
  }

  return binaryString;
}

console.log(dec2Bin(23)); // 10111
