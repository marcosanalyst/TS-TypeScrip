"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = createPerson;
exports.squareOf = squareOf;
let x;
if (typeof x === 'undefined')
    x = 20;
console.log(x * 2);
function createPerson(firstName, lastName, nickName) {
    return { firstName, lastName };
}
// se o x for do tipo number faça a multiplicação, caso não, retorne nulo
function squareOf(x) {
    if (typeof x === 'number')
        return x * x;
    return null;
}
const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');
if (squareOfTwoNumber === null) {
    console.log('Conta inválida');
}
else {
    console.log(squareOfTwoNumber);
}
