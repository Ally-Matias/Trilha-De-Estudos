// ------------------- Days Of Week

var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (var i = 0; i < daysOfWeek.length; i++) {
  // console.log(daysOfWeek[i]);
}

// ------------------- Fibonacci

var fibonacci = [0, 1, 2];

for (var i = 3; i < 30; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// console.log(fibonacci);

for (var i = 0; i < fibonacci.length; i++) {
  // console.log(fibonacci[i]);
}

// ------------------- push, pop, shift, unshift, splice

var arr = [1, 2, 3, 4, 5];

arr.unshift(0); // Adiciona um elemento no início do array
arr.push(6); // Adiciona um elemento no final do array
arr.pop(); // Remove o último elemento do array
arr.shift(); // Remove o primeiro elemento do array
arr.splice(2, 0, 2.5); // Adiciona um elemento na posição

for (i = 0; i < arr.length; i++) {
  // console.log(arr, arr[i]);
}

// ------------------- Arrays Bidimensionais

var avgTempWeek = [];

var avgTempWeek1 = [33.5, 25, 27, 40, 50.1];
var avgTempWeek2 = [31.7, 24, 26, 38, 48.2];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

for (var i = 0; i < avgTempWeek.length; i++) {
  for (var x = 0; x < avgTempWeek[i].length; x++) {
    // console.log(avgTempWeek[i][x]);
  }
}

// ------------------- Arrays Tridimensionais

var month = [];

var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek1 = [33.5, 25, 27, 40, 50.1];
var avgTempWeek2 = [31.7, 24, 26, 38, 48.2];

var avgTempWeek3 = [41.5, 35, 37, 45, 60.1];
var avgTempWeek4 = [41.7, 34, 36, 48, 58.2];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

for (var i = 0; i < month.length; i++) {
  for (var x = 0; x < month[i].length; x++) {
    for (var j = 0; j < month[i][x].length; j++) {
      console.log(month[i][x][j]);
    }
  }
}
