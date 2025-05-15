// const a = 8;
// const b = 7;
// const c = 15;

// const soma = a + b;
// console.log("Soma de A e B: " + soma);

// if (soma < c) {
//     console.log("A soma é menor que C");
// } else {
//     console.log("A soma não é menor que C");
// }

// const a = 4;
// const b = 4;

// let c: number;

// if (a === b) {
//     c = a + b;
// } else {
//     c = a * b;
// }

// console.log(`resultado : ${c}`);

// const tempo = 3; // em horas
// const velocidade = 80; // em km/h

// const distancia = tempo * velocidade;
// const litrosUsados = distancia / 12;

// console.log("Tempo: " + tempo + " horas");
// console.log("Velocidade: " + velocidade + " km/h");
// console.log("Distancia: " + distancia + " km");
// console.log("Litros usados:" + litrosUsados.toFixed(2) + " litros");

// const sum = (a: number, b: number) => {
//     return a + b;
// }

// console.log("Soma: " + sum(5, 10));


// const getFullName = (firstName: string, lastName: string) => {
//     return `${firstName} ${lastName}`;
// }

// console.log(getFullName("Teste", "Da Silva"));

// INTERFACE

// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// const user: User = {
//     firstName: "Teste",
//     lastName: "da Silva",
//     age: 25,
// }

// for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

// console.log(user.firstName);

// TYPE

// type User = {
//     id: number;
//     name: string;
// }

// const users: User[] = [{
//     id: 1,
//     name: "Lucas"
// },
// {
//     id: 2,
//     name: "teste"
// }]

// for (const user of users) {
//     console.log(`${user.id}: ${user.name}`);
// }


function diagonalDifference(arr: number[][]): number {
    let primary = 0;
    let secondary = 0;

    for (let i = 0; i < arr.length; i++) {
        primary += arr[i][i];
        secondary += arr[i][arr.length - 1 - i];
    }

    return Math.abs(primary - secondary);
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(diagonalDifference(matrix));


