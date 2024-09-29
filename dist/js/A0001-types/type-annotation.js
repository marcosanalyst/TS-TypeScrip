"use strict";
// Tipos básicos (aqui ocorre inferência de tipos)
let nome = 'Marcos';
let idade = 32;
let adulto = true;
let simbolo = Symbol('qualquer-symbol');
// let big: bigint = 10n;
// Array, posso escrever de duas formas
let arrayDeNumeros = [1, 2, 3, 4, 5];
let arrayDeNumeros2 = [1, 2, 3, 4, 5];
let arrayDeStrings = ['a', 'b', 'computador', 'Flávio'];
let arrayDeStrings2 = ['a', 'b', 'computador', 'Flávio'];
// Objetos
let pessoa = { nome: 'Marcos', idade: 32, profissao: 'programador', brasileiro: true, }; // religiosa?: quer dizer que info é opcional ou undefined
// Funções, posso escrever de duas formas
function soma(x, y) {
    return x + y;
}
;
function potencia(num1, num2) {
    return num1 ** num2;
}
;
const soma2 = (x2, y2) => x2 + y2;
